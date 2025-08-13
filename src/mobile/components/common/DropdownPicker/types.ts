import { ViewStyle, TextStyle } from 'react-native';

export interface DropdownOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface DropdownPickerProps {
  options: DropdownOption[];
  value?: string | number;
  placeholder?: string;
  onValueChange?: (value: string | number) => void;
  disabled?: boolean;
  searchable?: boolean;
  multiple?: boolean;
  maxHeight?: number;
  style?: ViewStyle;
  containerStyle?: ViewStyle;
  dropdownStyle?: ViewStyle;
  optionStyle?: ViewStyle;
  placeholderStyle?: TextStyle;
  selectedOptionStyle?: ViewStyle;
  selectedOptionTextStyle?: TextStyle;
  optionTextStyle?: TextStyle;
  searchInputStyle?: TextStyle;
  searchPlaceholder?: string;
  noDataText?: string;
  loading?: boolean;
  loadingText?: string;
  error?: string;
  errorStyle?: TextStyle;
  onDropdownOpen?: () => void;
  onDropdownClose?: () => void;
}

export interface DropdownPickerStyles {
  container: ViewStyle;
  dropdown: ViewStyle;
  selectedOption: ViewStyle;
  selectedOptionText: TextStyle;
  placeholder: TextStyle;
  dropdownList: ViewStyle;
  option: ViewStyle;
  optionText: TextStyle;
  searchContainer: ViewStyle;
  searchInput: TextStyle;
  noData: TextStyle;
  loading: TextStyle;
  error: TextStyle;
  disabled: ViewStyle;
}
