import { StyleSheet } from 'react-native';
import { CheckboxGroupStyles } from './types';
import { brandColors } from '../../../styles/colors';
import { spacing, borderRadius } from '../../../styles/spacing';

export const createCheckboxGroupStyles = (
  direction: 'vertical' | 'horizontal' = 'vertical',
  disabled: boolean = false
): CheckboxGroupStyles => {
  return StyleSheet.create({
    container: {
      width: '100%',
    },
    optionsContainer: {
      flexDirection: direction === 'horizontal' ? 'row' : 'column',
      flexWrap: direction === 'horizontal' ? 'wrap' : 'nowrap',
    },
    option: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginBottom: direction === 'vertical' ? spacing.sm : 0,
      marginRight: direction === 'horizontal' ? spacing.md : 0,
      minHeight: 44,
    },
    checkbox: {
      width: 20,
      height: 20,
      borderRadius: borderRadius.sm,
      borderWidth: 2,
      borderColor: disabled ? brandColors.gray[300] : brandColors.gray[400],
      backgroundColor: brandColors.white,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: spacing.sm,
      marginTop: 2,
    },
    checkboxInner: {
      width: 10,
      height: 10,
      borderRadius: borderRadius.sm,
      backgroundColor: brandColors.primary,
    },
    label: {
      fontSize: 16,
      color: disabled ? brandColors.gray[500] : brandColors.gray[700],
      fontWeight: '400',
      flex: 1,
      lineHeight: 20,
    },
    description: {
      fontSize: 14,
      color: brandColors.gray[600],
      fontWeight: '400',
      marginTop: spacing.xs,
      lineHeight: 18,
    },
    error: {
      fontSize: 12,
      color: brandColors.danger,
      marginTop: spacing.xs,
    },
    disabled: {
      opacity: 0.6,
    },
  });
};
