/**
 * 品牌颜色系统 - 现代浅色系设计
 * 参考用户提供的设计风格，采用白色背景、柔和深灰色文字、橙色强调色
 */

export const brandColors = {
  // 主色调 - 橙色系强调色
  primary: '#FF6B35',        // 主要橙色
  primaryLight: '#FF8A65',   // 浅橙色
  primaryDark: '#E55A2B',    // 深橙色
  
  // 辅助色
  secondary: '#4A90E2',      // 蓝色辅助
  accent: '#FF6B6B',         // 红色强调
  
  // 功能色
  success: '#4CAF50',        // 绿色成功
  warning: '#FF9800',        // 橙色警告
  danger: '#F44336',         // 红色危险
  info: '#2196F3',           // 蓝色信息
  
  // 中性色 - 浅色主题
  white: '#FFFFFF',
  dark: '#2C3E50',           // 柔和的深色，不是纯黑
  
  gray: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#2C3E50',          // 更柔和的深灰色
  },
  
  // 背景色系 - 浅色系
  background: {
    primary: '#FFFFFF',      // 主背景 - 白色
    secondary: '#F8F9FA',    // 次要背景 - 浅灰
    card: '#FFFFFF',         // 卡片背景 - 白色
    elevated: '#FFFFFF',     // 悬浮卡片背景 - 白色
  },
  
  // 文字色系 - 柔和的深色
  text: {
    primary: '#2C3E50',      // 主要文字 - 柔和深灰
    secondary: '#6C757D',    // 次要文字 - 中灰
    disabled: '#ADB5BD',     // 禁用文字 - 浅灰
    inverse: '#FFFFFF',      // 反色文字 - 白色
  },
  
  // 边框和分割线
  border: {
    light: '#E9ECEF',        // 浅边框
    medium: '#DEE2E6',       // 中边框
    dark: '#CED4DA',         // 深边框
  },
  
  // 阴影色 - 更柔和的阴影
  shadow: {
    light: 'rgba(0, 0, 0, 0.05)',
    medium: 'rgba(0, 0, 0, 0.1)',
    dark: 'rgba(0, 0, 0, 0.15)',
  },
  
  // 渐变色
  gradient: {
    primary: ['#FF6B35', '#E55A2B'],
    secondary: ['#4A90E2', '#357ABD'],
    success: ['#4CAF50', '#388E3C'],
    warning: ['#FF9800', '#F57C00'],
    danger: ['#F44336', '#D32F2F'],
  },
};

// 移动端专用颜色
export const mobileColors = {
  ...brandColors,
  // 移动端优化
  text: {
    primary: '#2C3E50',      // 柔和深灰
    secondary: '#6C757D',    // 中灰
    disabled: '#ADB5BD',     // 浅灰
    inverse: '#FFFFFF',      // 白色
  },
  background: {
    primary: '#FFFFFF',      // 白色主背景
    secondary: '#F8F9FA',    // 浅灰次要背景
    tertiary: '#E9ECEF',     // 更浅的灰
  }
};

// 主题色彩映射
export const themeColors = {
  light: {
    background: '#FFFFFF',
    surface: '#F8F9FA',
    text: '#2C3E50',
    border: '#E9ECEF',
  },
  dark: {
    background: '#212529',
    surface: '#343A40',
    text: '#FFFFFF',
    border: '#495057',
  }
};

export default brandColors;
