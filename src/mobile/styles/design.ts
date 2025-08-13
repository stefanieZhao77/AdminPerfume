import { brandColors } from './colors';

// 设计系统规范 - 现代浅色系设计
export const designSystem = {
  // 圆角规范
  borderRadius: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
    full: 9999,
  },
  
  // 间距规范
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  
  // 阴影规范 - 增强的阴影效果
  shadows: {
    sm: {
      shadowColor: brandColors.shadow.light,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.15,
      shadowRadius: 3,
      elevation: 3,
    },
    md: {
      shadowColor: brandColors.shadow.medium,
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.2,
      shadowRadius: 6,
      elevation: 6,
    },
    lg: {
      shadowColor: brandColors.shadow.dark,
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.25,
      shadowRadius: 12,
      elevation: 12,
    },
    xl: {
      shadowColor: brandColors.shadow.dark,
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.3,
      shadowRadius: 16,
      elevation: 16,
    },
  },
  
  // 边框规范
  borders: {
    light: {
      borderWidth: 1,
      borderColor: brandColors.border.light,
    },
    medium: {
      borderWidth: 1,
      borderColor: brandColors.border.medium,
    },
    dark: {
      borderWidth: 1,
      borderColor: brandColors.border.dark,
    },
  },
  
  // 卡片样式 - 白色卡片 + 增强阴影
  card: {
    base: {
      backgroundColor: brandColors.background.card,
      borderRadius: 16,
      padding: 20,
      shadowColor: brandColors.shadow.light,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.15,
      shadowRadius: 3,
      elevation: 3,
    },
    elevated: {
      backgroundColor: brandColors.background.elevated,
      borderRadius: 16,
      padding: 20,
      shadowColor: brandColors.shadow.medium,
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.2,
      shadowRadius: 6,
      elevation: 6,
    },
    interactive: {
      backgroundColor: brandColors.background.card,
      borderRadius: 16,
      padding: 20,
      shadowColor: brandColors.shadow.light,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.15,
      shadowRadius: 3,
      elevation: 3,
    },
  },
  
  // 按钮样式
  button: {
    base: {
      borderRadius: 12,
      paddingVertical: 12,
      paddingHorizontal: 24,
      alignItems: 'center',
      justifyContent: 'center',
    },
    primary: {
      backgroundColor: brandColors.primary,
      borderRadius: 12,
      paddingVertical: 14,
      paddingHorizontal: 28,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: brandColors.shadow.light,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 4,
    },
    secondary: {
      backgroundColor: brandColors.background.elevated,
      borderRadius: 12,
      paddingVertical: 14,
      paddingHorizontal: 28,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: brandColors.border.light,
    },
  },
  
  // 输入框样式
  input: {
    base: {
      backgroundColor: brandColors.background.elevated,
      borderRadius: 12,
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderWidth: 1,
      borderColor: brandColors.border.light,
    },
    focused: {
      backgroundColor: brandColors.background.elevated,
      borderRadius: 12,
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderWidth: 2,
      borderColor: brandColors.primary,
    },
  },
  
  // 布局容器
  container: {
    base: {
      flex: 1,
      backgroundColor: brandColors.background.primary,
    },
    content: {
      flex: 1,
      paddingHorizontal: 16,
      paddingVertical: 20,
    },
    section: {
      marginBottom: 24,
    },
  },
  
  // 文字样式 - 优化的字体设计
  typography: {
    h1: {
      fontSize: 32,
      fontWeight: '700' as const,
      color: brandColors.text.primary,
      lineHeight: 40,
      letterSpacing: -0.5,
    },
    h2: {
      fontSize: 28,
      fontWeight: '600' as const,
      color: brandColors.text.primary,
      lineHeight: 36,
      letterSpacing: -0.3,
    },
    h3: {
      fontSize: 24,
      fontWeight: '600' as const,
      color: brandColors.text.primary,
      lineHeight: 32,
      letterSpacing: -0.2,
    },
    h4: {
      fontSize: 20,
      fontWeight: '600' as const,
      color: brandColors.text.primary,
      lineHeight: 28,
      letterSpacing: -0.1,
    },
    body: {
      fontSize: 16,
      fontWeight: '400' as const,
      color: brandColors.text.primary,
      lineHeight: 24,
      letterSpacing: 0,
    },
    bodyMedium: {
      fontSize: 16,
      fontWeight: '500' as const,
      color: brandColors.text.primary,
      lineHeight: 24,
      letterSpacing: 0,
    },
    caption: {
      fontSize: 14,
      fontWeight: '400' as const,
      color: brandColors.text.secondary,
      lineHeight: 20,
      letterSpacing: 0.1,
    },
    captionMedium: {
      fontSize: 14,
      fontWeight: '500' as const,
      color: brandColors.text.secondary,
      lineHeight: 20,
      letterSpacing: 0.1,
    },
    small: {
      fontSize: 12,
      fontWeight: '400' as const,
      color: brandColors.text.secondary,
      lineHeight: 16,
      letterSpacing: 0.2,
    },
    button: {
      fontSize: 16,
      fontWeight: '600' as const,
      color: brandColors.white,
      lineHeight: 20,
      letterSpacing: 0.1,
    },
  },
};

// 导出常用的设计元素
export const { borderRadius, spacing, shadows, borders, card, button, input, container, typography } = designSystem;
