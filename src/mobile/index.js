/**
 * @format
 */

import { registerRootComponent } from 'expo';
import App from './App';

// 使用 Expo 的 registerRootComponent 函数
// 这会自动调用 AppRegistry.registerComponent('main', () => App)
registerRootComponent(App);

// 确保在开发模式下也能正常工作
if (__DEV__) {
  console.log('🚀 AdminPerfume Mobile 应用已注册: main');
}
