import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { CardProps } from './types';
import { createCardStyles } from './styles';

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  onPress,
  variant = 'default',
  padding = 'medium',
  margin = 'small',
  style,
  titleStyle,
  subtitleStyle,
  contentStyle,
  headerStyle,
  footer,
  footerStyle,
  shadow = true,
  rounded = true,
  ...rest
}) => {
  const styles = createCardStyles(
    variant,
    padding,
    margin,
    shadow,
    rounded
  );

  const handlePress = () => {
    if (onPress) {
      onPress();
    }
  };

  const CardContainer = onPress ? TouchableOpacity : View;

  return (
    <View style={[styles.container, style]}>
      <CardContainer
        style={styles.card}
        onPress={handlePress}
        activeOpacity={onPress ? 0.8 : 1}
        {...rest}
      >
        {(title || subtitle) && (
          <View style={[styles.header, headerStyle]}>
            {title && (
              <Text style={[styles.title, titleStyle]}>
                {title}
              </Text>
            )}
            {subtitle && (
              <Text style={[styles.subtitle, subtitleStyle]}>
                {subtitle}
              </Text>
            )}
          </View>
        )}
        
        <View style={[styles.content, contentStyle]}>
          {children}
        </View>
        
        {footer && (
          <View style={[styles.footer, footerStyle]}>
            {footer}
          </View>
        )}
      </CardContainer>
    </View>
  );
};

export default Card;
