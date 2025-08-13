import { ViewStyle, TextStyle } from 'react-native';

export interface SliderProps {
  value: number;
  minimumValue: number;
  maximumValue: number;
  step?: number;
  onValueChange?: (value: number) => void;
  onSlidingComplete?: (value: number) => void;
  disabled?: boolean;
  color?: string;
  trackColor?: string;
  thumbColor?: string;
  thumbSize?: number;
  trackHeight?: number;
  showValue?: boolean;
  showLabels?: boolean;
  minLabel?: string;
  maxLabel?: string;
  style?: ViewStyle;
  trackStyle?: ViewStyle;
  thumbStyle?: ViewStyle;
  labelStyle?: TextStyle;
  valueStyle?: TextStyle;
}

export interface SliderStyles {
  container: ViewStyle;
  track: ViewStyle;
  fill: ViewStyle;
  thumb: ViewStyle;
  labels: ViewStyle;
  label: TextStyle;
  value: TextStyle;
}

export interface SliderState {
  value: number;
  isDragging: boolean;
}
