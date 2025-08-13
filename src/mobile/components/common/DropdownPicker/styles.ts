import { StyleSheet } from 'react-native';
import { DropdownPickerStyles } from './types';
import { brandColors } from '../../../styles/colors';
import { spacing, borderRadius } from '../../../styles/spacing';

export const createDropdownPickerStyles = (
  disabled: boolean = false,
  maxHeight: number = 200,
  isOpen: boolean = false
): DropdownPickerStyles => {
  return StyleSheet.create({
    container: {
      width: '100%',
      position: 'relative',
      zIndex: isOpen ? 1000 : 1,
    },
    dropdown: {
      borderWidth: 1,
      borderColor: disabled ? brandColors.gray[300] : brandColors.gray[400],
      borderRadius: borderRadius.md,
      backgroundColor: disabled ? brandColors.gray[100] : brandColors.white,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      minHeight: 44,
      justifyContent: 'center',
    },
    selectedOption: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    selectedOptionText: {
      fontSize: 16,
      color: disabled ? brandColors.gray[500] : brandColors.gray[700],
      fontWeight: '400',
      flex: 1,
    },
    placeholder: {
      fontSize: 16,
      color: brandColors.gray[500],
      fontWeight: '400',
    },
    dropdownList: {
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      backgroundColor: brandColors.white,
      borderWidth: 1,
      borderColor: brandColors.gray[300],
      borderRadius: borderRadius.md,
      maxHeight,
      zIndex: isOpen ? 1001 : 1,
      shadowColor: brandColors.dark,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 5,
      marginTop: 2,
    },
    option: {
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      borderBottomWidth: 1,
      borderBottomColor: brandColors.gray[100],
      backgroundColor: brandColors.white,
    },
    optionText: {
      fontSize: 16,
      color: brandColors.gray[700],
      fontWeight: '400',
    },
    searchContainer: {
      padding: spacing.sm,
      borderBottomWidth: 1,
      borderBottomColor: brandColors.gray[200],
      backgroundColor: brandColors.white,
    },
    searchInput: {
      fontSize: 16,
      color: brandColors.gray[700],
      padding: spacing.sm,
      borderWidth: 1,
      borderColor: brandColors.gray[300],
      borderRadius: borderRadius.sm,
      backgroundColor: brandColors.white,
    },
    noData: {
      fontSize: 14,
      color: brandColors.gray[500],
      textAlign: 'center',
      padding: spacing.md,
    },
    loading: {
      fontSize: 14,
      color: brandColors.gray[500],
      textAlign: 'center',
      padding: spacing.md,
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
