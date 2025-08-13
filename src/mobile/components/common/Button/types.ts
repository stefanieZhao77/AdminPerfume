import { TouchableOpacityProps, TextStyle, ViewStyle } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  rounded?: boolean;
  outline?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  style?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: () => void;
}

export interface ButtonStyles {
  container: ViewStyle;
  button: ViewStyle;
  text: TextStyle;
  icon: ViewStyle;
  loadingContainer: ViewStyle;
}

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
export type ButtonSize = 'small' | 'medium' | 'large';
