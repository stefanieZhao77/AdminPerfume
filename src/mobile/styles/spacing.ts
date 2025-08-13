/**
 * 间距系统 - 匹配现有AdminLTE系统
 * 用于Web和移动端的一致性设计
 */

export const spacing = {
  // 基础间距单位
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
  '4xl': 96,
  '5xl': 128,
  '6xl': 192,

  // 特殊间距
  none: 0,
  auto: 'auto',
  full: '100%',
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content',
};

// 移动端专用间距（可能需要更大的触摸目标）
export const mobileSpacing = {
  ...spacing,
  // 移动端触摸友好的间距
  touch: 44,    // 最小触摸目标
  button: 48,   // 按钮高度
  input: 48,    // 输入框高度
  card: 16,     // 卡片内边距
  section: 24,  // 区块间距
};

// 布局间距
export const layoutSpacing = {
  // 容器间距
  container: {
    xs: spacing.sm,    // 8px
    sm: spacing.md,    // 16px
    md: spacing.lg,    // 24px
    lg: spacing.xl,    // 32px
    xl: spacing['2xl'], // 48px
  },

  // 页面间距
  page: {
    xs: spacing.md,    // 16px
    sm: spacing.lg,    // 24px
    md: spacing.xl,    // 32px
    lg: spacing['2xl'], // 48px
    xl: spacing['3xl'], // 64px
  },

  // 组件间距
  component: {
    xs: spacing.xs,    // 4px
    sm: spacing.sm,    // 8px
    md: spacing.md,    // 16px
    lg: spacing.lg,    // 24px
    xl: spacing.xl,    // 32px
  },

  // 表单间距
  form: {
    field: spacing.md,     // 字段间距 16px
    group: spacing.lg,     // 字段组间距 24px
    section: spacing.xl,   // 表单区块间距 32px
    button: spacing.md,    // 按钮间距 16px
  },

  // 列表间距
  list: {
    item: spacing.sm,      // 列表项间距 8px
    group: spacing.md,     // 列表组间距 16px
    section: spacing.lg,   // 列表区块间距 24px
  },

  // 卡片间距
  card: {
    padding: spacing.md,   // 卡片内边距 16px
    margin: spacing.sm,    // 卡片外边距 8px
    gap: spacing.md,       // 卡片间距 16px
  },

  // 导航间距
  navigation: {
    item: spacing.sm,      // 导航项间距 8px
    group: spacing.md,     // 导航组间距 16px
    section: spacing.lg,   // 导航区块间距 24px
  },
};

// 响应式间距
export const responsiveSpacing = {
  // 小屏幕 (手机)
  sm: {
    container: spacing.sm,
    page: spacing.md,
    component: spacing.sm,
  },
  // 中等屏幕 (平板)
  md: {
    container: spacing.md,
    page: spacing.lg,
    component: spacing.md,
  },
  // 大屏幕 (桌面)
  lg: {
    container: spacing.lg,
    page: spacing.xl,
    component: spacing.lg,
  },
  // 超大屏幕
  xl: {
    container: spacing.xl,
    page: spacing['2xl'],
    component: spacing.xl,
  },
};

// 阴影间距（用于阴影效果）
export const shadowSpacing = {
  sm: '0 1px 2px 0',
  md: '0 4px 6px -1px',
  lg: '0 10px 15px -3px',
  xl: '0 20px 25px -5px',
  '2xl': '0 25px 50px -12px',
};

// 边框半径
export const borderRadius = {
  none: 0,
  sm: 2,
  md: 6,
  lg: 8,
  xl: 12,
  '2xl': 16,
  '3xl': 24,
  full: 9999,
};

// 边框宽度
export const borderWidth = {
  none: 0,
  sm: 1,
  md: 2,
  lg: 4,
  xl: 8,
};

export default spacing;
