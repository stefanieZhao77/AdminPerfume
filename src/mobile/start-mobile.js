#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 启动 AdminPerfume Mobile 应用...');
console.log('📱 React Native 0.73.6');
console.log('🔧 Metro 开发服务器将在端口 8081 启动');
console.log('');

// 检查是否在正确的目录
const currentDir = process.cwd();
const packageJsonPath = path.join(currentDir, 'package.json');

try {
  require(packageJsonPath);
} catch (error) {
  console.error('❌ 错误：请在 src/mobile 目录下运行此脚本');
  process.exit(1);
}

// 启动 Metro 开发服务器
const metroProcess = spawn('npx', ['react-native', 'start', '--port', '8081'], {
  stdio: 'inherit',
  shell: true,
  cwd: currentDir
});

metroProcess.on('error', (error) => {
  console.error('❌ 启动失败:', error.message);
  process.exit(1);
});

metroProcess.on('close', (code) => {
  console.log(`\n📱 Metro 服务器已停止 (退出码: ${code})`);
  process.exit(code);
});

// 处理进程退出
process.on('SIGINT', () => {
  console.log('\n🛑 正在停止 Metro 服务器...');
  metroProcess.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('\n🛑 正在停止 Metro 服务器...');
  metroProcess.kill('SIGTERM');
});
