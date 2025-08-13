import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  Animated,
  StyleSheet,
} from 'react-native';
import { ProgressBarProps } from './types';
import { createProgressBarStyles } from './styles';

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  color,
  backgroundColor,
  height = 8,
  width = '100%',
  showPercentage = false,
  showLabel = false,
  label,
  animated = true,
  style,
  trackStyle,
  fillStyle,
  labelStyle,
  percentageStyle,
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const styles = createProgressBarStyles(color, backgroundColor, height, width);

  useEffect(() => {
    if (animated) {
      Animated.timing(animatedValue, {
        toValue: Math.min(Math.max(progress, 0), 100),
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      animatedValue.setValue(Math.min(Math.max(progress, 0), 100));
    }
  }, [progress, animated, animatedValue]);

  const fillWidth = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={[styles.container, style]}>
      {showLabel && (
        <View style={styles.labelContainer}>
          {label && (
            <Text style={[styles.label, labelStyle]}>
              {label}
            </Text>
          )}
          {showPercentage && (
            <Text style={[styles.percentage, percentageStyle]}>
              {Math.round(progress)}%
            </Text>
          )}
        </View>
      )}
      
      <View style={[styles.track, trackStyle]}>
        <Animated.View
          style={[
            styles.fill,
            fillStyle,
            { width: fillWidth },
          ]}
        />
      </View>
      
      {!showLabel && showPercentage && (
        <Text style={[styles.percentage, percentageStyle]}>
          {Math.round(progress)}%
        </Text>
      )}
    </View>
  );
};

export default ProgressBar;
