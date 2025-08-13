import { StyleSheet } from 'react-native';
import { SliderStyles } from './types';
import { brandColors } from '../../../styles/colors';
import { spacing } from '../../../styles/spacing';

export const createSliderStyles = (
  color: string = brandColors.primary,
  trackColor: string = brandColors.gray[200],
  thumbColor: string = brandColors.white,
  thumbSize: number = 24,
  trackHeight: number = 4,
  disabled: boolean = false
): SliderStyles => {
  return StyleSheet.create({
    container: {
      width: '100%',
      paddingVertical: spacing.sm,
    },
    track: {
      height: trackHeight,
      backgroundColor: disabled ? brandColors.gray[300] : trackColor,
      borderRadius: trackHeight / 2,
      position: 'relative',
    },
    fill: {
      height: trackHeight,
      backgroundColor: disabled ? brandColors.gray[400] : color,
      borderRadius: trackHeight / 2,
      position: 'absolute',
      left: 0,
      top: 0,
    },
    thumb: {
      width: thumbSize,
      height: thumbSize,
      borderRadius: thumbSize / 2,
      backgroundColor: disabled ? brandColors.gray[400] : thumbColor,
      borderWidth: 2,
      borderColor: disabled ? brandColors.gray[500] : color,
      position: 'absolute',
      top: (trackHeight - thumbSize) / 2,
      left: -thumbSize / 2,
      shadowColor: brandColors.dark,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    labels: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: spacing.xs,
    },
    label: {
      fontSize: 12,
      color: brandColors.gray[600],
      fontWeight: '400',
    },
    value: {
      fontSize: 14,
      color: brandColors.gray[700],
      fontWeight: '500',
      textAlign: 'center',
      marginTop: spacing.xs,
    },
  });
};
