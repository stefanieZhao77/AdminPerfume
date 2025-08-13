import { TouchableOpacityProps, TextStyle, ViewStyle } from 'react-native';

export interface CardProps extends TouchableOpacityProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  onPress?: () => void;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'small' | 'medium' | 'large';
  margin?: 'none' | 'small' | 'medium' | 'large';
  style?: ViewStyle;
  titleStyle?: TextStyle;
  subtitleStyle?: TextStyle;
  contentStyle?: ViewStyle;
  headerStyle?: ViewStyle;
  footer?: React.ReactNode;
  footerStyle?: ViewStyle;
  shadow?: boolean;
  rounded?: boolean;
}

export interface CardStyles {
  container: ViewStyle;
  card: ViewStyle;
  header: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  content: ViewStyle;
  footer: ViewStyle;
}

export type CardVariant = 'default' | 'elevated' | 'outlined';
export type CardPadding = 'none' | 'small' | 'medium' | 'large';
export type CardMargin = 'none' | 'small' | 'medium' | 'large';
