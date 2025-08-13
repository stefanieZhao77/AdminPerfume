# 📱 AdminPerfume 移动端设计文档

## 🎯 项目概述

为 AdminPerfume 香水管理系统创建移动端界面展示，包含三个核心功能界面：
1. 需求定义表单界面
2. 反馈表界面  
3. 香气评分界面

### 设计目标
- 与现有Web系统保持设计一致性
- 针对移动端进行专门优化
- 支持后期独立部署
- 为React Native开发做准备

## 🏗️ 项目架构

### 集成项目结构
```
AdminPerfume/
├── src/
│   ├── html/                    # 现有Web系统
│   ├── mobile/                  # 新增移动端React Native
│   │   ├── components/
│   │   ├── screens/
│   │   ├── navigation/
│   │   ├── store/
│   │   ├── utils/
│   │   └── types/
│   └── shared/                  # 共享资源
│       ├── styles/
│       ├── constants/
│       └── utils/
├── package.json                 # 主包配置
├── mobile-package.json          # 移动端独立配置
└── README.md
```

### 移动端项目结构
```
src/mobile/
├── App.tsx                      # 应用入口
├── index.js                     # 注册入口
├── metro.config.js              # Metro配置
├── react-native.config.js       # React Native配置
├── components/
│   ├── common/
│   │   ├── Button/
│   │   │   ├── index.tsx
│   │   │   ├── styles.ts
│   │   │   └── types.ts
│   │   ├── Card/
│   │   ├── ProgressBar/
│   │   └── Slider/
│   ├── forms/
│   │   ├── DropdownPicker/
│   │   ├── CheckboxGroup/
│   │   └── DateRangePicker/
│   └── feedback/
│       ├── SampleBatchCard/
│       └── ProjectProgress/
├── screens/
│   ├── RequirementForm/
│   │   ├── index.tsx
│   │   ├── styles.ts
│   │   └── types.ts
│   ├── Feedback/
│   └── FragranceRating/
├── navigation/
│   ├── AppNavigator.tsx
│   ├── types.ts
│   └── screens.ts
├── store/
│   ├── slices/
│   │   ├── requirementSlice.ts
│   │   ├── feedbackSlice.ts
│   │   └── ratingSlice.ts
│   ├── store.ts
│   └── types.ts
├── utils/
│   ├── api.ts
│   ├── storage.ts
│   └── validation.ts
├── types/
│   └── index.ts
└── assets/
    ├── icons/
    └── images/
```

## 🎨 设计系统

### 颜色系统（匹配现有AdminLTE）
```typescript
export const brandColors = {
  primary: '#0d6efd',      // 主色调
  secondary: '#6c757d',    // 次要色
  success: '#198754',      // 成功色
  warning: '#ffc107',      // 警告色
  danger: '#dc3545',       // 危险色
  info: '#0dcaf0',         // 信息色
  light: '#f8f9fa',        // 浅色
  dark: '#212529',         // 深色
  white: '#ffffff',        // 白色
  gray: {
    100: '#f8f9fa',
    200: '#e9ecef',
    300: '#dee2e6',
    400: '#ced4da',
    500: '#adb5bd',
    600: '#6c757d',
    700: '#495057',
    800: '#343a40',
    900: '#212529',
  }
};
```

### 字体系统
```typescript
export const typography = {
  fontFamily: {
    primary: 'Source Sans 3, system-ui, sans-serif',
    mobile: 'System, -apple-system, sans-serif'
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem'
  }
};
```

### 间距系统
```typescript
export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem'
};
```

## 📱 三个核心界面设计

### 1. 需求定义表单界面 (RequirementForm)

**功能定位：** 香水需求参数配置表单

**界面元素：**
- 产品类别选择（下拉选择器）
- 应用场景选择（下拉选择器）
- 香型选择（多选下拉或标签选择）
- 香气特点选择（分段选择器：前中后）
- 颜色需求（开关组件）
- 原料要求（大尺寸复选框组）
  - 是否要求纯天然
  - 是否要求有机
  - 是否vegan
  - 是否Hala
- 目标价格（数字输入框，带单位显示）
- 法规要求（多选标签）
  - 中/欧盟+CMR/美国/澳/新西兰/菲律宾
- 仿香/创香选择（分段控制器）
- 样品规格和数量
  - 数量选择器
  - 规格选择（5g/10g/30g/100g）
- 项目起止时间（日期范围选择器）
- 目标客户侧写（按钮触发弹窗）

**交互优化：**
- 底部固定操作按钮（生成报告、完成）
- 表单验证提示
- 保存草稿功能
- 大尺寸触摸友好的输入控件

### 2. 反馈表界面 (Feedback)

**功能定位：** 项目进度跟踪和样本反馈

**界面元素：**
- 顶部项目进度条
  - 水平进度条显示
  - 关联快递运单号显示
- 样本批次卡片列表
  - 批次编号显示
  - 状态指示器
  - 验收/反馈按钮（大尺寸、高对比度）

**交互优化：**
- 下拉刷新功能
- 卡片点击展开详情
- 按钮触摸反馈
- 进度条动画效果

### 3. 香气评分界面 (FragranceRating)

**功能定位：** 香气标签评分系统

**界面元素：**
- 顶部标签页切换（仿香/创香）
- 香气标签网格布局
- 评分滑块组件（-10到10分）
  - 玫瑰、海洋、水润等标签
- 反馈意见补充（文本输入框）
- 底部操作按钮

**交互优化：**
- 标签页滑动切换
- 滑块触摸优化
- 实时评分显示
- 评分历史记录

## 🔧 技术实现方案

### 技术栈
- **框架：** React Native
- **导航：** React Navigation 6
- **状态管理：** Redux Toolkit 或 Zustand
- **UI组件库：** React Native Elements 或 NativeBase
- **样式：** 自定义组件库（匹配现有系统设计）

### 核心依赖包
```json
{
  "dependencies": {
    "react-native": "^0.72.0",
    "@react-navigation/native": "^6.1.0",
    "@react-navigation/stack": "^6.3.0",
    "@react-navigation/bottom-tabs": "^6.5.0",
    "react-native-elements": "^3.4.3",
    "@reduxjs/toolkit": "^1.9.0",
    "react-redux": "^8.1.0",
    "react-native-vector-icons": "^10.0.0",
    "react-native-slider": "^0.11.0",
    "react-native-picker-select": "^8.1.0",
    "react-native-date-picker": "^4.3.0"
  }
}
```

### 配置策略

**主package.json（集成配置）**
```json
{
  "name": "admin-perfume",
  "scripts": {
    "dev": "npm run dev:web",
    "dev:web": "cd src/html && npm run dev",
    "dev:mobile": "cd src/mobile && npm start",
    "build:web": "cd src/html && npm run build",
    "build:mobile": "cd src/mobile && npm run build",
    "test": "npm run test:web && npm run test:mobile"
  },
  "workspaces": [
    "src/html",
    "src/mobile"
  ]
}
```

**移动端独立配置（mobile-package.json）**
```json
{
  "name": "admin-perfume-mobile",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "start": "react-native start",
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "build": "react-native build",
    "test": "jest"
  }
}
```

## 🎯 组件设计规范

### 通用组件

**Button组件**
- 支持多种样式：primary、secondary、success、danger
- 支持不同尺寸：small、medium、large
- 触摸友好的最小尺寸：44px
- 加载状态和禁用状态

**Card组件**
- 圆角设计：8px
- 阴影效果
- 支持标题、内容、操作区域
- 可点击和不可点击状态

**ProgressBar组件**
- 支持线性进度条
- 自定义颜色和高度
- 动画效果
- 百分比显示

**Slider组件**
- 自定义范围（-10到10）
- 触摸优化
- 实时值显示
- 步长设置

### 表单组件

**DropdownPicker组件**
- 大尺寸触摸友好
- 搜索功能
- 多选支持
- 自定义样式

**CheckboxGroup组件**
- 大尺寸复选框
- 全选/取消全选
- 自定义标签
- 验证状态

**DateRangePicker组件**
- 日期范围选择
- 日历界面
- 预设范围
- 格式化显示

## 📱 移动端优化要点

### 触摸优化
- 最小触摸目标：44px
- 充足的点击间距
- 触摸反馈效果
- 防止误触设计

### 性能优化
- 列表虚拟化
- 图片懒加载
- 组件懒加载
- 内存管理

### 用户体验
- 流畅的动画效果
- 加载状态提示
- 错误处理
- 离线支持

## 🔄 后期分离策略

### 独立项目创建
```bash
# 创建新的独立项目
npx react-native init AdminPerfumeMobile

# 复制移动端代码
cp -r src/mobile/* AdminPerfumeMobile/src/
cp -r src/shared/* AdminPerfumeMobile/src/shared/

# 更新package.json
cp mobile-package.json AdminPerfumeMobile/package.json
```

### 依赖管理
- 移动端使用独立的`package.json`
- 共享依赖通过workspace管理
- 分离时只需复制依赖列表

### 配置分离
- 环境变量独立配置
- API端点可配置化
- 构建配置独立

## 🚀 开发工作流

### 集成开发
```bash
# 启动Web端
npm run dev:web

# 启动移动端
npm run dev:mobile

# 同时启动
npm run dev:all
```

### 独立开发（后期）
```bash
cd AdminPerfumeMobile
npm start
```

## 📋 开发计划

### 第一阶段：基础架构
1. 创建项目结构
2. 设置开发环境
3. 配置基础组件
4. 建立设计系统

### 第二阶段：核心界面
1. 需求定义表单界面
2. 反馈表界面
3. 香气评分界面

### 第三阶段：功能完善
1. 状态管理
2. 数据持久化
3. 网络请求
4. 错误处理

### 第四阶段：优化测试
1. 性能优化
2. 用户体验优化
3. 测试用例
4. 文档完善

## 🎯 成功标准

1. **设计一致性：** 与现有Web系统保持视觉一致性
2. **功能完整性：** 三个核心界面功能完整
3. **用户体验：** 移动端友好的交互体验
4. **性能表现：** 流畅的动画和响应
5. **代码质量：** 可维护、可扩展的代码结构
6. **部署就绪：** 支持独立部署和集成部署

---

*本文档将随着开发进展持续更新*
