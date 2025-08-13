# AdminPerfume Mobile

React Native 移动端应用

## 快速开始

### 启动方式

#### 方式1: 使用 Expo (推荐)
```bash
npm start
# 或者
npm run start:expo
```

#### 方式2: 快速启动
```bash
npm run start:quick
```

#### 方式3: 开发模式
```bash
npm run start:dev
```

### 问题解决

如果遇到 "main has not been registered" 错误：

1. **确保在正确目录**：
   ```bash
   cd src/mobile
   ```

2. **清理缓存**：
   ```bash
   npm start -- --clear
   ```

3. **重新安装依赖**：
   ```bash
   npm install
   ```

### 开发环境

- Node.js >= 18
- Expo CLI
- React Native 0.79.5

### 项目结构

```
src/mobile/
├── App.tsx              # 主应用组件
├── index.js             # 应用入口
├── package.json         # 项目配置
├── app.json            # Expo配置
├── components/         # 通用组件
├── screens/           # 页面组件
└── styles/            # 样式文件
```

### 可用脚本

- `npm start` - 启动Expo开发服务器
- `npm run start:quick` - 快速启动
- `npm run start:dev` - 开发模式启动
- `npm run android` - 启动Android模拟器
- `npm run ios` - 启动iOS模拟器
- `npm run web` - 启动Web版本
