import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { brandColors } from '../../../styles/colors';
import { typography } from '../../../styles/typography';
import { spacing, borderRadius } from '../../../styles/spacing';
import { ButtonVariant, ButtonSize, ButtonStyles } from './types';

// 颜色映射
const variantColors = {
  primary: brandColors.primary,
  secondary: brandColors.secondary,
  success: brandColors.success,
  danger: brandColors.danger,
  warning: brandColors.warning,
  info: brandColors.info,
};

// 尺寸映射
const sizeStyles = {
  small: {
    height: 32,
    paddingHorizontal: spacing.sm,
    fontSize: typography.fontSize.sm,
  },
  medium: {
    height: 44,
    paddingHorizontal: spacing.md,
    fontSize: typography.fontSize.base,
  },
  large: {
    height: 56,
    paddingHorizontal: spacing.lg,
    fontSize: typography.fontSize.lg,
  },
};

export const createButtonStyles = (
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'medium',
  disabled: boolean = false,
  outline: boolean = false,
  rounded: boolean = false,
  fullWidth: boolean = false
): ButtonStyles => {
  const baseColor = variantColors[variant];
  const sizeStyle = sizeStyles[size];
  
  const backgroundColor = disabled 
    ? brandColors.gray[300] 
    : outline 
      ? 'transparent' 
      : baseColor;
  
  const borderColor = disabled 
    ? brandColors.gray[300] 
    : outline 
      ? baseColor 
      : 'transparent';
  
  const textColor = disabled 
    ? brandColors.gray[500] 
    : outline 
      ? baseColor 
      : brandColors.white;

  return StyleSheet.create({
    container: {
      width: fullWidth ? '100%' : 'auto',
      marginVertical: spacing.xs,
    },
    button: {
      height: sizeStyle.height,
      paddingHorizontal: sizeStyle.paddingHorizontal,
      backgroundColor,
      borderWidth: outline ? 1 : 0,
      borderColor,
      borderRadius: rounded ? borderRadius.full : borderRadius.lg,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      shadowColor: brandColors.shadow.light,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 6,
      elevation: 6,
    },
    text: {
      fontSize: sizeStyle.fontSize as number,
      fontWeight: '500',
      color: textColor,
      textAlign: 'center',
      marginHorizontal: spacing.xs,
    },
    icon: {
      marginHorizontal: spacing.xs,
    },
    loadingContainer: {
      marginRight: spacing.xs,
    },
  });
};

// 默认样式
export const defaultStyles = StyleSheet.create({
  container: {
    marginVertical: spacing.xs,
  },
  button: {
    height: 44,
    paddingHorizontal: spacing.md,
    backgroundColor: brandColors.primary,
    borderRadius: borderRadius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: brandColors.shadow.light,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  text: {
    fontSize: typography.fontSize.base,
    fontWeight: '500',
    color: brandColors.white,
    textAlign: 'center',
    marginHorizontal: spacing.xs,
  },
  icon: {
    marginHorizontal: spacing.xs,
  },
  loadingContainer: {
    marginRight: spacing.xs,
  },
});
