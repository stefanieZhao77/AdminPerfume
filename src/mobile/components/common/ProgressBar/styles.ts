import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { brandColors } from '../../../styles/colors';
import { typography } from '../../../styles/typography';
import { spacing, borderRadius } from '../../../styles/spacing';
import { ProgressBarStyles } from './types';

export const createProgressBarStyles = (
  color: string = brandColors.primary,
  backgroundColor: string = brandColors.gray[200],
  height: number = 8,
  width: number | string = '100%'
): ProgressBarStyles => {
  return StyleSheet.create<ProgressBarStyles>({
    container: {
      width: width as any,
      marginVertical: spacing.xs,
    },
    track: {
      height,
      backgroundColor,
      borderRadius: borderRadius.full,
      overflow: 'hidden',
    },
    fill: {
      height: '100%',
      backgroundColor: color,
      borderRadius: borderRadius.full,
    },
    label: {
      fontSize: typography.fontSize.sm,
      fontWeight: '500',
      color: brandColors.dark,
      marginBottom: spacing.xs,
    },
    percentage: {
      fontSize: typography.fontSize.xs,
      fontWeight: '400',
      color: brandColors.gray[600],
      textAlign: 'right',
      marginTop: spacing.xs,
    },
    labelContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: spacing.xs,
    },
  });
};

// 默认样式
export const defaultStyles = StyleSheet.create<ProgressBarStyles>({
  container: {
    width: '100%',
    marginVertical: spacing.xs,
  },
  track: {
    height: 8,
    backgroundColor: brandColors.gray[200],
    borderRadius: borderRadius.full,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    backgroundColor: brandColors.primary,
    borderRadius: borderRadius.full,
  },
  label: {
    fontSize: typography.fontSize.sm,
    fontWeight: '500',
    color: brandColors.dark,
    marginBottom: spacing.xs,
  },
  percentage: {
    fontSize: typography.fontSize.xs,
    fontWeight: '400',
    color: brandColors.gray[600],
    textAlign: 'right',
    marginTop: spacing.xs,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
});
