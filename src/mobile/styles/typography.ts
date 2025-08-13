/**
 * 字体系统 - 匹配现有AdminLTE系统
 * 用于Web和移动端的一致性设计
 */

export const typography = {
  // 字体族
  fontFamily: {
    // Web端字体
    primary: 'Source Sans 3, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif',
    secondary: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    
    // 移动端字体
    mobile: {
      primary: 'System, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      secondary: 'SF Mono, Monaco, Inconsolata, "Roboto Mono", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace',
    }
  },

  // 字体大小
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
    '6xl': 60,
  },

  // 行高
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },

  // 字体粗细
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },

  // 字母间距
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  }
};

// 移动端专用字体配置
export const mobileTypography = {
  ...typography,
  fontSize: {
    ...typography.fontSize,
    // 移动端可能需要更大的字体以确保可读性
    xs: 14,      // 14px
    sm: 16,      // 16px
    base: 18,    // 18px
    lg: 20,      // 20px
    xl: 22,      // 22px
    '2xl': 26,   // 26px
    '3xl': 32,   // 32px
  },
  lineHeight: {
    ...typography.lineHeight,
    // 移动端可能需要更大的行高
    normal: 1.6,
    relaxed: 1.7,
  }
};

// 文本样式预设
export const textStyles = {
  // 标题样式
  h1: {
    fontSize: typography.fontSize['4xl'],
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.tight,
  },
  h2: {
    fontSize: typography.fontSize['3xl'],
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.tight,
  },
  h3: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.snug,
  },
  h4: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.snug,
  },
  h5: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.normal,
  },
  h6: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.normal,
  },

  // 正文样式
  body: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.normal,
    lineHeight: typography.lineHeight.normal,
  },
  bodySmall: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.normal,
    lineHeight: typography.lineHeight.normal,
  },
  bodyLarge: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.normal,
    lineHeight: typography.lineHeight.relaxed,
  },

  // 标签样式
  label: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.normal,
  },
  caption: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.normal,
    lineHeight: typography.lineHeight.normal,
  },
};

export default typography;
