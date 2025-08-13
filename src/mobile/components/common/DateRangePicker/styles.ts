import { StyleSheet } from 'react-native';
import { DateRangePickerStyles } from './types';
import { brandColors } from '../../../styles/colors';
import { spacing, borderRadius } from '../../../styles/spacing';

export const createDateRangePickerStyles = (
  disabled: boolean = false
): DateRangePickerStyles => {
  return StyleSheet.create({
    container: {
      width: '100%',
    },
    inputsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: disabled ? brandColors.gray[300] : brandColors.gray[400],
      borderRadius: borderRadius.md,
      backgroundColor: disabled ? brandColors.gray[100] : brandColors.white,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      minHeight: 44,
      justifyContent: 'center',
    },
    placeholder: {
      fontSize: 16,
      color: brandColors.gray[500],
      fontWeight: '400',
    },
    dateText: {
      fontSize: 16,
      color: disabled ? brandColors.gray[500] : brandColors.gray[700],
      fontWeight: '400',
    },
    separator: {
      fontSize: 16,
      color: brandColors.gray[500],
      fontWeight: '400',
      marginHorizontal: spacing.sm,
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
