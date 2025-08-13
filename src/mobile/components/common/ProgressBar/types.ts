import { ViewStyle, TextStyle } from 'react-native';

export interface ProgressBarProps {
  progress: number; // 0-100
  color?: string;
  backgroundColor?: string;
  height?: number;
  width?: number | string;
  showPercentage?: boolean;
  showLabel?: boolean;
  label?: string;
  animated?: boolean;
  style?: ViewStyle;
  trackStyle?: ViewStyle;
  fillStyle?: ViewStyle;
  labelStyle?: TextStyle;
  percentageStyle?: TextStyle;
}

export interface ProgressBarStyles {
  container: ViewStyle;
  track: ViewStyle;
  fill: ViewStyle;
  label: TextStyle;
  percentage: TextStyle;
  labelContainer: ViewStyle;
}

export interface ProgressBarState {
  animatedProgress: number;
}
