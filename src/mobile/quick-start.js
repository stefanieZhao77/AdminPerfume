#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 快速启动 AdminPerfume Mobile...');
console.log('📱 使用 Expo 开发服务器 (离线模式, LAN)');

// 直接启动 Expo
const expoProcess = spawn('npx', ['expo', 'start', '--clear', '--lan'], {
  stdio: 'inherit',
  shell: true,
  cwd: __dirname,
  env: { ...process.env, EXPO_OFFLINE: '1', EXPO_NO_TELEMETRY: '1' }
});

expoProcess.on('error', (error) => {
  console.error('❌ 启动失败:', error.message);
  process.exit(1);
});

expoProcess.on('close', (code) => {
  console.log(`\n📱 Expo 服务器已停止 (退出码: ${code})`);
  process.exit(code);
});

// 处理进程退出
process.on('SIGINT', () => {
  console.log('\n🛑 正在停止 Expo 服务器...');
  expoProcess.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('\n🛑 正在停止 Expo 服务器...');
  expoProcess.kill('SIGTERM');
});
