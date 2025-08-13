# Expo 应用设置说明

## 重要：应用注册方式

### 问题原因
之前的错误 "main has not been registered" 是因为使用了错误的注册方式。

### 正确的注册方式

#### ❌ 错误方式（React Native CLI）
```javascript
import { AppRegistry } from 'react-native';

AppRegistry.registerComponent('admin-perfume-mobile', () => App);
```

#### ✅ 正确方式（Expo）
```javascript
import { registerRootComponent } from 'expo';

registerRootComponent(App);
```

### 为什么使用 Expo 的注册方式？

1. **自动处理**：`registerRootComponent` 会自动调用 `AppRegistry.registerComponent('main', () => App)`
2. **Expo 兼容性**：确保与 Expo 开发工具链完全兼容
3. **简化配置**：不需要手动指定应用名称

### 启动方式

现在应该使用以下方式启动应用：

```bash
# 推荐方式
npm start

# 或者
npm run start:expo

# 或者
npm run start:quick
```

### 验证修复

启动后，你应该看到：
- Expo 开发服务器界面
- 没有 "main has not been registered" 错误
- 应用正常加载

### 注意事项

- 不要使用 `npm run start:metro`，因为这是为 React Native CLI 设计的
- 确保使用 Expo 相关的启动命令
- 如果之前有缓存问题，使用 `--clear` 参数清理缓存
