import { ViewStyle, TextStyle } from 'react-native';

export interface CheckboxOption {
  label: string;
  value: string | number;
  disabled?: boolean;
  description?: string;
}

export interface CheckboxGroupProps {
  options: CheckboxOption[];
  value?: (string | number)[];
  onChange?: (value: (string | number)[]) => void;
  disabled?: boolean;
  maxSelection?: number;
  minSelection?: number;
  direction?: 'vertical' | 'horizontal';
  style?: ViewStyle;
  optionStyle?: ViewStyle;
  checkboxStyle?: ViewStyle;
  labelStyle?: TextStyle;
  descriptionStyle?: TextStyle;
  error?: string;
  errorStyle?: TextStyle;
}

export interface CheckboxGroupStyles {
  container: ViewStyle;
  optionsContainer: ViewStyle;
  option: ViewStyle;
  checkbox: ViewStyle;
  checkboxInner: ViewStyle;
  label: TextStyle;
  description: TextStyle;
  error: TextStyle;
  disabled: ViewStyle;
}
