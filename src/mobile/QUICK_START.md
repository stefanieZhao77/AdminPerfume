# 快速启动指南

## 方法1：使用 React Native CLI（推荐）

### 1. 启动 Metro 开发服务器
```bash
cd src/mobile
npm start
```

### 2. 在另一个终端运行应用
```bash
# Android
npm run android

# iOS (仅 macOS)
npm run ios
```

## 方法2：使用 Expo（需要额外配置）

### 1. 安装 Expo CLI
```bash
npm install -g @expo/cli
```

### 2. 启动 Expo
```bash
npx expo start
```

### 3. 在手机上安装 Expo Go 应用并扫描二维码

## 方法3：从根目录启动

```bash
# 启动移动端 Metro 服务器
npm run dev:mobile

# 启动 Expo（如果配置正确）
npm run dev:expo
```

## 当前状态

- ✅ React Native 0.73.6 已配置
- ✅ 所有依赖已安装
- ✅ Metro 配置已完成
- 🔄 Expo 配置需要进一步调整

## 建议

1. **开发阶段**: 使用 React Native CLI (`npm start`)
2. **测试阶段**: 配置 Expo 用于真机测试
3. **生产阶段**: 使用 React Native CLI 构建原生应用

## 故障排除

如果遇到问题：
1. 清除缓存: `npx react-native start --reset-cache`
2. 重新安装依赖: `rm -rf node_modules && npm install`
3. 检查端口占用: `netstat -ano | findstr :8081`

