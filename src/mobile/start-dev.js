#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('🚀 启动 AdminPerfume Mobile 开发服务器...');
console.log('📱 当前目录:', process.cwd());

// 确保在正确的目录
const mobileDir = path.resolve(__dirname);
const packageJsonPath = path.join(mobileDir, 'package.json');

if (!fs.existsSync(packageJsonPath)) {
  console.error('❌ 错误：找不到 package.json 文件');
  console.error('请确保在 src/mobile 目录下运行此脚本');
  process.exit(1);
}

console.log('✅ 找到 package.json:', packageJsonPath);

// 启动 Expo 开发服务器
console.log('🚀 启动 Expo 开发服务器...');
const cleanProcess = spawn('npx', ['expo', 'start', '--clear'], {
  stdio: 'inherit',
  shell: true,
  cwd: mobileDir
});

cleanProcess.on('error', (error) => {
  console.error('❌ 清理缓存失败:', error.message);
  process.exit(1);
});

cleanProcess.on('close', (code) => {
  console.log(`\n📱 Metro 服务器已停止 (退出码: ${code})`);
  process.exit(code);
});

// 处理进程退出
process.on('SIGINT', () => {
  console.log('\n🛑 正在停止 Metro 服务器...');
  cleanProcess.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('\n🛑 正在停止 Metro 服务器...');
  cleanProcess.kill('SIGTERM');
});
