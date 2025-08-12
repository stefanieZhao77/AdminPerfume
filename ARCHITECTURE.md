## Perfume AI 管理系统 - 前后端分离架构设计（Mock 数据版）

本设计文档描述当前采用的“前后端分离 + Mock 数据”的工程方案，并给出目录结构、接口契约、开发流程与未来接 PostgreSQL/Prisma 的演进路径。

### 1. 架构概览

- 前端：Astro 静态站点 + React 组件（TypeScript）。
- 后端：Fastify（Node.js）提供 REST API，当前所有数据来自内存（Mock）。
- 通信：前端通过 Vite 代理 `/api` 到后端（开发期同源，不需要额外 CORS 配置）。

```mermaid
flowchart LR
  subgraph Browser
    UI[React Components]
  end
  subgraph Frontend
    Astro[Astro Pages]
  end
  subgraph Backend
    API[Fastify /api/*]\n(Mock in-memory)
  end

  UI -->|fetch /api| API
  Astro --> UI
```

### 2. 目录结构

```text
.
├─ backend/
│  ├─ src/
│  │  └─ server.ts            # Fastify Mock API（/api/materials）
│  └─ tsconfig.json
├─ src/
│  ├─ config/
│  │  └─ astro.config.mjs     # 集成 React & /api 代理
│  ├─ html/
│  │  └─ pages/materials/index.astro  # 引入 React 组件演示
│  └─ react/
│     └─ MaterialsTable.tsx   # React 组件（调用 /api/materials）
├─ package.json                # 增加 api:dev + 并行启动
└─ ARCHITECTURE.md            # 本文档
```

### 3. 关键配置

1) `src/config/astro.config.mjs`

```js
integrations: [mdx(), react()],
vite: {
  server: {
    proxy: { '/api': 'http://localhost:4000' }
  }
}
```

2) `package.json` 脚本（摘录）

```json
{
  "scripts": {
    "dev": "npm-run-all --parallel api:dev watch docs-serve",
    "api:dev": "ts-node-dev --respawn --transpile-only backend/src/server.ts"
  },
  "devDependencies": {
    "@astrojs/react": "^4.3.0",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "ts-node-dev": "^2.0.0",
    "fastify": "^5.4.0"
  }
}
```

### 4. 接口设计（Mock）

- 资源：Materials（原料）
- 类型：

```ts
type Material = {
  id: string
  name: string
  stock: number
}
```

- 路由与契约：

| Method | Path               | Body                      | Response                | 备注 |
|--------|--------------------|---------------------------|-------------------------|------|
| GET    | /api/materials     | -                         | Material[]              | 列表 |
| POST   | /api/materials     | { name: string, stock? }  | Material                | 新增 |
| PUT    | /api/materials/:id | { name?, stock? }         | Material / 404          | 更新 |
| DELETE | /api/materials/:id | -                         | { ok: true } / 404      | 删除 |

示例（POST）：

```http
POST /api/materials
Content-Type: application/json

{ "name": "玫瑰醇", "stock": 50 }
```

### 5. 前端使用方式

- React 组件：`src/react/MaterialsTable.tsx` 通过 `fetch('/api/materials')` 获取/新增数据。
- 组件在 `src/html/pages/materials/index.astro` 挂载：

```astro
---
import MaterialsTable from "../../../react/MaterialsTable.tsx"
---
<MaterialsTable client:load />
```

保留了原有的 QueryTable 静态示例，React 卡片单独演示“实时绑定 + Mock API”。

### 6. 开发与运行

1) 安装依赖（已完成）

```bash
npm i
```

2) 启动

```bash
npm run dev   # 并行启动后端(4000)与前端(3000)
```

3) 访问

```
http://localhost:3000/materials.html
```

### 7. 代码规范与类型

- 全链路 TypeScript：后端路由入参/出参定义、前端组件 `Material` 类型保持一致。
- 建议后续接入 Zod 做请求体验证（服务端），TanStack Query 做请求缓存（前端）。

### 8. 未来接入 PostgreSQL/Prisma 的演进

计划保留所有前端代码不变，仅替换后端数据层：

1) 初始化 Prisma 与连接串

```bash
npx prisma init
# .env: DATABASE_URL=postgresql://USER:PASSWORD@HOST:5432/DB?schema=public
```

2) 定义模型（示例）

```prisma
model Material {
  id        String   @id @default(cuid())
  name      String
  stock     Int      @default(0)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

3) 迁移并生成 Client

```bash
npx prisma migrate dev --name init
```

4) 替换 `server.ts` 内存实现为 Prisma 调用（接口保持不变）。

### 9. 安全与部署建议

- 开发期：使用 Vite 代理 `/api`，避免 CORS 与跨端口 Cookie 问题。
- 生产：
  - 前端静态资源：构建产物在 `dist/html`，可托管在任意静态服务器（Nginx/Netlify 等）。
  - 后端服务：独立 Node 进程（4000），Nginx 反代 `/api` 到后端。
- 环境变量：后续接数据库时需使用 `.env` 管理敏感信息，不应提交到仓库。

### 10. 扩展到其他业务域的指引

按同样模式复制：

1) 后端：新增 `routes` 或继续在 `server.ts` 中添加 `/api/{domain}` Mock 路由。
2) 前端：在对应页面下新建 React 组件（如 `OrdersTable.tsx`），用 `client:load` 挂载。
3) 接口契约写在本文件或 `/docs/api/*.md`，保持类型统一（可提取到 `src/types/`）。

---

如需将 `orders`、`customers` 也接入 React 演示，我可以按本设计快速补齐对应 Mock API 与组件骨架。


