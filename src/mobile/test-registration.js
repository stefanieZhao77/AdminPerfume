#!/usr/bin/env node

const { AppRegistry } = require('react-native');

console.log('🧪 测试应用注册...');

// 检查已注册的组件
const registeredComponents = AppRegistry.getAppKeys();
console.log('📋 已注册的组件:', registeredComponents);

// 检查 Expo 应用是否注册为 'main'
const targetComponent = 'main';
if (registeredComponents.includes(targetComponent)) {
  console.log('✅ Expo 应用已正确注册:', targetComponent);
} else {
  console.log('❌ Expo 应用未注册:', targetComponent);
  console.log('💡 请确保使用 Expo 启动服务器');
}

console.log('🔍 检查完成');
