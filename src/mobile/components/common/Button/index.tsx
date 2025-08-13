import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  View,
  StyleSheet,
} from 'react-native';
import { brandColors } from '../../../styles/colors';
import { createButtonStyles } from './styles';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  fullWidth = false,
  rounded = false,
  outline = false,
  icon,
  iconPosition = 'left',
  style,
  textStyle,
  onPress,
  ...rest
}) => {
  const styles = createButtonStyles(
    variant,
    size,
    disabled,
    outline,
    rounded,
    fullWidth
  );

  const handlePress = () => {
    if (!disabled && !loading && onPress) {
      onPress();
    }
  };

  const renderContent = () => {
    const content = [
      loading && (
        <View key="loading" style={styles.loadingContainer}>
          <ActivityIndicator 
            size="small" 
            color={outline ? brandColors[variant] : brandColors.white} 
          />
        </View>
      ),
      icon && iconPosition === 'left' && (
        <View key="icon-left" style={styles.icon}>
          {icon}
        </View>
      ),
      <Text key="text" style={[styles.text, textStyle]}>
        {title}
      </Text>,
      icon && iconPosition === 'right' && (
        <View key="icon-right" style={styles.icon}>
          {icon}
        </View>
      ),
    ].filter(Boolean);

    return content;
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={[
          styles.button,
          disabled && { opacity: 0.6 },
        ]}
        onPress={handlePress}
        disabled={disabled || loading}
        activeOpacity={0.8}
        {...rest}
      >
        {renderContent()}
      </TouchableOpacity>
    </View>
  );
};

export default Button;
