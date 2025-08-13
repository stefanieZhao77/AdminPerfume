import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { brandColors } from '../../../styles/colors';
import { typography } from '../../../styles/typography';
import { spacing, borderRadius } from '../../../styles/spacing';
import { CardVariant, CardPadding, CardMargin, CardStyles } from './types';

// 变体样式映射
const variantStyles = {
  default: {
    backgroundColor: brandColors.white,
    borderWidth: 0,
    borderColor: 'transparent',
    shadowColor: brandColors.dark,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  elevated: {
    backgroundColor: brandColors.white,
    borderWidth: 0,
    borderColor: 'transparent',
    shadowColor: brandColors.dark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  outlined: {
    backgroundColor: brandColors.white,
    borderWidth: 1,
    borderColor: brandColors.gray[300],
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
};

// 内边距映射
const paddingStyles = {
  none: 0,
  small: spacing.sm,
  medium: spacing.md,
  large: spacing.lg,
};

// 外边距映射
const marginStyles = {
  none: 0,
  small: spacing.sm,
  medium: spacing.md,
  large: spacing.lg,
};

export const createCardStyles = (
  variant: CardVariant = 'default',
  padding: CardPadding = 'medium',
  margin: CardMargin = 'small',
  shadow: boolean = true,
  rounded: boolean = true
): CardStyles => {
  const variantStyle = variantStyles[variant];
  const paddingValue = paddingStyles[padding] as number;
  const marginValue = marginStyles[margin] as number;

  return StyleSheet.create({
    container: {
      margin: marginValue,
    },
    card: {
      backgroundColor: variantStyle.backgroundColor,
      borderWidth: variantStyle.borderWidth,
      borderColor: variantStyle.borderColor,
      borderRadius: rounded ? borderRadius.lg : borderRadius.none,
      ...(shadow && {
        shadowColor: variantStyle.shadowColor,
        shadowOffset: variantStyle.shadowOffset,
        shadowOpacity: variantStyle.shadowOpacity,
        shadowRadius: variantStyle.shadowRadius,
        elevation: variantStyle.elevation,
      }),
    },
    header: {
      paddingHorizontal: paddingValue,
      paddingTop: paddingValue,
      paddingBottom: (paddingValue as number) * 0.5,
      borderBottomWidth: 1,
      borderBottomColor: brandColors.gray[200],
    },
    title: {
      fontSize: typography.fontSize.lg,
      fontWeight: '600',
      color: brandColors.dark,
      marginBottom: spacing.xs,
    },
    subtitle: {
      fontSize: typography.fontSize.sm,
      fontWeight: '400',
      color: brandColors.gray[600],
      lineHeight: typography.lineHeight.normal,
    },
    content: {
      padding: paddingValue,
    },
    footer: {
      paddingHorizontal: paddingValue,
      paddingTop: (paddingValue as number) * 0.5,
      paddingBottom: paddingValue,
      borderTopWidth: 1,
      borderTopColor: brandColors.gray[200],
    },
  });
};

// 默认样式
export const defaultStyles = StyleSheet.create({
  container: {
    margin: spacing.sm,
  },
  card: {
    backgroundColor: brandColors.white,
    borderRadius: borderRadius.lg,
    shadowColor: brandColors.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    padding: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: brandColors.gray[200],
  },
  title: {
    fontSize: typography.fontSize.lg,
    fontWeight: '600',
    color: brandColors.dark,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: typography.fontSize.sm,
    fontWeight: '400',
    color: brandColors.gray[600],
    lineHeight: typography.lineHeight.normal,
  },
  content: {
    padding: spacing.md,
  },
  footer: {
    padding: spacing.md,
    borderTopWidth: 1,
    borderTopColor: brandColors.gray[200],
  },
});
