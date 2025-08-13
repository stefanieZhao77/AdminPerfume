# 📱 AdminPerfume 移动端项目

## 🎯 项目概述

这是 AdminPerfume 香水管理系统的移动端界面展示项目，基于 React Native 开发，包含三个核心功能界面：

1. **需求定义表单界面** - 香水需求参数配置
2. **反馈表界面** - 项目进度跟踪和样本反馈
3. **香气评分界面** - 香气标签评分系统

## 🏗️ 项目结构

```
src/mobile/
├── App.tsx                      # 应用入口
├── index.js                     # 注册入口
├── components/                  # 组件库
│   ├── common/                  # 通用组件
│   │   ├── Button/             # 按钮组件
│   │   ├── Card/               # 卡片组件
│   │   ├── ProgressBar/        # 进度条组件
│   │   └── Slider/             # 滑块组件
│   ├── forms/                  # 表单组件
│   │   ├── DropdownPicker/     # 下拉选择器
│   │   ├── CheckboxGroup/      # 复选框组
│   │   └── DateRangePicker/    # 日期范围选择器
│   └── feedback/               # 反馈组件
│       ├── SampleBatchCard/    # 样本批次卡片
│       └── ProjectProgress/    # 项目进度组件
├── screens/                    # 页面组件
│   ├── RequirementForm/        # 需求表单页面
│   ├── Feedback/               # 反馈表页面
│   └── FragranceRating/        # 香气评分页面
├── navigation/                 # 导航配置
├── store/                      # 状态管理
├── utils/                      # 工具函数
├── types/                      # 类型定义
└── assets/                     # 静态资源
```

## 🎨 设计系统

项目使用统一的设计系统，与现有Web系统保持视觉一致性：

### 颜色系统
- **主色调**: `#0d6efd` (蓝色)
- **成功色**: `#198754` (绿色)
- **警告色**: `#ffc107` (黄色)
- **危险色**: `#dc3545` (红色)
- **信息色**: `#0dcaf0` (青色)

### 组件规范
- **Button**: 支持多种变体和尺寸，触摸友好的44px最小高度
- **Card**: 圆角设计，支持阴影和边框变体
- **ProgressBar**: 动画进度条，支持百分比显示
- **Slider**: 自定义范围滑块，-10到10分评分

## 🚀 快速开始

### 环境要求
- Node.js >= 16
- React Native CLI
- Android Studio (Android开发)
- Xcode (iOS开发)

### 安装依赖
```bash
# 安装移动端依赖
cd src/mobile
npm install

# 或者从根目录安装
npm install
```

### 启动开发服务器
```bash
# 启动移动端开发服务器
npm run dev:mobile

# 或者同时启动Web和移动端
npm run dev:all
```

### 运行应用
```bash
# Android
npm run android

# iOS
npm run ios
```

## 📱 核心功能

### 1. 需求定义表单界面
- 产品类别选择
- 应用场景配置
- 香型选择（多选）
- 香气特点（前中后）
- 原料要求（复选框组）
- 目标价格范围
- 法规要求选择
- 仿香/创香模式选择
- 样品规格配置
- 项目时间设置

### 2. 反馈表界面
- 项目进度条显示
- 快递运单号关联
- 样本批次列表
- 验收/反馈操作
- 下拉刷新功能

### 3. 香气评分界面
- 仿香/创香模式切换
- 香气标签评分（-10到10分）
- 实时评分显示
- 反馈意见补充
- 评分历史记录

## 🔧 技术栈

- **框架**: React Native 0.72.0
- **导航**: React Navigation 6
- **状态管理**: Redux Toolkit
- **UI组件**: React Native Elements
- **样式**: 自定义设计系统
- **类型检查**: TypeScript

## 📦 组件库

### 通用组件
- `Button` - 按钮组件，支持多种变体和尺寸
- `Card` - 卡片组件，支持标题、内容和操作区域
- `ProgressBar` - 进度条组件，支持动画和百分比显示
- `Slider` - 滑块组件，支持自定义范围和步长

### 表单组件
- `DropdownPicker` - 下拉选择器，支持单选和多选
- `CheckboxGroup` - 复选框组，支持全选功能
- `DateRangePicker` - 日期范围选择器

### 反馈组件
- `SampleBatchCard` - 样本批次卡片
- `ProjectProgress` - 项目进度组件

## 🎯 开发规范

### 代码风格
- 使用 TypeScript 进行类型检查
- 遵循 ESLint 和 Prettier 规范
- 组件采用函数式编程风格
- 使用 React Hooks 管理状态

### 组件设计原则
- **一致性**: 与现有Web系统保持设计一致性
- **可复用性**: 高度模块化的组件设计
- **可访问性**: 支持屏幕阅读器和辅助功能
- **性能**: 使用React Native最佳实践

### 移动端优化
- **触摸友好**: 最小44px触摸目标
- **性能优化**: 列表虚拟化，图片懒加载
- **用户体验**: 流畅动画，加载状态提示
- **响应式**: 适配不同屏幕尺寸

## 🔄 后期分离

项目设计支持后期独立部署：

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

### 配置分离
- 环境变量独立配置
- API端点可配置化
- 构建配置独立

## 📋 开发计划

### ✅ 已完成
- [x] 项目结构搭建
- [x] 设计系统建立
- [x] 基础组件开发
- [x] 主应用框架

### 🚧 进行中
- [ ] 表单组件开发
- [ ] 页面组件实现
- [ ] 导航系统配置

### 📅 待完成
- [ ] 状态管理集成
- [ ] API接口对接
- [ ] 数据持久化
- [ ] 错误处理
- [ ] 性能优化
- [ ] 测试用例
- [ ] 文档完善

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系方式

如有问题或建议，请通过以下方式联系：

- 项目 Issues: [GitHub Issues](https://github.com/your-repo/issues)
- 邮箱: your-email@example.com

---

*本文档将随着项目发展持续更新*
