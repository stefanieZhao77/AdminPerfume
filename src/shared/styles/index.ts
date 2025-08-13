/**
 * 设计系统索引文件
 * 导出所有样式配置，供Web和移动端使用
 */

// 颜色系统
export { brandColors, mobileColors, themeColors } from './colors';
export { default as colors } from './colors';

// 字体系统
export { typography, mobileTypography, textStyles } from './typography';
export { default as fonts } from './typography';

// 间距系统
export { 
  spacing, 
  mobileSpacing, 
  layoutSpacing, 
  responsiveSpacing, 
  shadowSpacing, 
  borderRadius, 
  borderWidth 
} from './spacing';
export { default as spacing } from './spacing';

// 设计系统主题
export const designSystem = {
  colors: {
    ...require('./colors').brandColors,
  },
  typography: {
    ...require('./typography').typography,
  },
  spacing: {
    ...require('./spacing').spacing,
  },
  borderRadius: require('./spacing').borderRadius,
  borderWidth: require('./spacing').borderWidth,
  shadowSpacing: require('./spacing').shadowSpacing,
};

// 移动端设计系统
export const mobileDesignSystem = {
  colors: {
    ...require('./colors').mobileColors,
  },
  typography: {
    ...require('./typography').mobileTypography,
  },
  spacing: {
    ...require('./spacing').mobileSpacing,
  },
  borderRadius: require('./spacing').borderRadius,
  borderWidth: require('./spacing').borderWidth,
  shadowSpacing: require('./spacing').shadowSpacing,
};

export default designSystem;
