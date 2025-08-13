import { ViewStyle, TextStyle } from 'react-native';

export interface DateRange {
  startDate: Date | null;
  endDate: Date | null;
}

export interface DateRangePickerProps {
  value?: DateRange;
  onValueChange?: (range: DateRange) => void;
  placeholder?: string;
  startDatePlaceholder?: string;
  endDatePlaceholder?: string;
  disabled?: boolean;
  minDate?: Date;
  maxDate?: Date;
  format?: string;
  style?: ViewStyle;
  containerStyle?: ViewStyle;
  inputStyle?: ViewStyle;
  placeholderStyle?: TextStyle;
  dateStyle?: TextStyle;
  error?: string;
  errorStyle?: TextStyle;
}

export interface DateRangePickerStyles {
  container: ViewStyle;
  inputsContainer: ViewStyle;
  input: ViewStyle;
  placeholder: TextStyle;
  dateText: TextStyle;
  separator: TextStyle;
  error: TextStyle;
  disabled: ViewStyle;
}
