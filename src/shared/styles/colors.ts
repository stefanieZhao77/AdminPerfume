/**
 * 品牌颜色系统 - 匹配现有AdminLTE系统
 * 用于Web和移动端的一致性设计
 */

export const brandColors = {
  // 主色调
  primary: '#0d6efd',      // 主色调 - 蓝色
  secondary: '#6c757d',    // 次要色 - 灰色
  success: '#198754',      // 成功色 - 绿色
  warning: '#ffc107',      // 警告色 - 黄色
  danger: '#dc3545',       // 危险色 - 红色
  info: '#0dcaf0',         // 信息色 - 青色
  light: '#f8f9fa',        // 浅色 - 浅灰
  dark: '#212529',         // 深色 - 深灰
  white: '#ffffff',        // 白色
  black: '#000000',        // 黑色

  // 灰度系统
  gray: {
    50: '#f8f9fa',
    100: '#f8f9fa',
    200: '#e9ecef',
    300: '#dee2e6',
    400: '#ced4da',
    500: '#adb5bd',
    600: '#6c757d',
    700: '#495057',
    800: '#343a40',
    900: '#212529',
  },

  // 渐变色彩
  gradients: {
    primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    success: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    warning: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    danger: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
  },

  // 透明度变体
  alpha: {
    primary: 'rgba(13, 110, 253, 0.1)',
    success: 'rgba(25, 135, 84, 0.1)',
    warning: 'rgba(255, 193, 7, 0.1)',
    danger: 'rgba(220, 53, 69, 0.1)',
    info: 'rgba(13, 202, 240, 0.1)',
  }
};

// 移动端专用颜色（如果需要调整）
export const mobileColors = {
  ...brandColors,
  // 移动端可能需要更深的对比度
  text: {
    primary: '#212529',
    secondary: '#6c757d',
    disabled: '#adb5bd',
    inverse: '#ffffff',
  },
  background: {
    primary: '#ffffff',
    secondary: '#f8f9fa',
    tertiary: '#e9ecef',
  }
};

// 主题色彩映射
export const themeColors = {
  light: {
    background: '#ffffff',
    surface: '#f8f9fa',
    text: '#212529',
    border: '#dee2e6',
  },
  dark: {
    background: '#212529',
    surface: '#343a40',
    text: '#ffffff',
    border: '#495057',
  }
};

export default brandColors;
