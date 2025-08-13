import React, { useEffect, useMemo, useRef, useState } from 'react';
import { View, Text, Animated, PanResponder, LayoutChangeEvent, GestureResponderEvent } from 'react-native';
import { SliderProps } from './types';
import { createSliderStyles } from './styles';

const Slider: React.FC<SliderProps> = ({
  value,
  minimumValue,
  maximumValue,
  step = 1,
  onValueChange,
  onSlidingComplete,
  disabled = false,
  color,
  trackColor,
  thumbColor,
  thumbSize = 24,
  trackHeight = 4,
  showValue = false,
  showLabels = false,
  minLabel,
  maxLabel,
  style,
  trackStyle,
  thumbStyle,
  labelStyle,
  valueStyle,
}) => {
  const [layoutWidth, setLayoutWidth] = useState<number>(0);
  const translateX = useRef(new Animated.Value(0)).current;
  const isDraggingRef = useRef<boolean>(false);
  const currentValueRef = useRef<number>(value);
  const styles = useMemo(
    () => createSliderStyles(color, trackColor, thumbColor, thumbSize, trackHeight, disabled),
    [color, trackColor, thumbColor, thumbSize, trackHeight, disabled]
  );

  const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

  const getBounds = () => {
    const leftBound = thumbSize / 2;
    const rightBound = Math.max(leftBound, layoutWidth - thumbSize / 2);
    const effectiveWidth = Math.max(1, rightBound - leftBound);
    return { leftBound, rightBound, effectiveWidth };
  };

  const valueToPosition = (val: number) => {
    const { leftBound, effectiveWidth } = getBounds();
    const range = maximumValue - minimumValue;
    const pct = range === 0 ? 0 : (val - minimumValue) / range;
    return clamp(leftBound + pct * effectiveWidth, leftBound, leftBound + effectiveWidth);
  };

  const positionToValue = (pos: number) => {
    const { leftBound, effectiveWidth } = getBounds();
    const pct = effectiveWidth === 0 ? 0 : (pos - leftBound) / effectiveWidth;
    const raw = minimumValue + pct * (maximumValue - minimumValue);
    const stepped = Math.round(raw / step) * step;
    return clamp(stepped, minimumValue, maximumValue);
  };

  // Sync from external value when not dragging
  useEffect(() => {
    if (!isDraggingRef.current) {
      currentValueRef.current = value;
      const pos = valueToPosition(value);
      translateX.setValue(pos);
    }
  }, [value, layoutWidth, thumbSize, translateX]);

  const handleTrackLayout = (e: LayoutChangeEvent) => {
    const w = e.nativeEvent.layout.width;
    setLayoutWidth(w);
    const pos = valueToPosition(currentValueRef.current);
    translateX.setValue(pos);
  };

  const startPosRef = useRef<number>(0);

  const handleGrant = (evt: GestureResponderEvent) => {
    if (disabled) return;
    isDraggingRef.current = true;

    const currentPos = valueToPosition(currentValueRef.current);
    startPosRef.current = currentPos;

    if (evt.nativeEvent && typeof evt.nativeEvent.locationX === 'number') {
      // 将点击位置转换为百分比 (0-1)
      const clickPercentage = Math.max(0, Math.min(1, evt.nativeEvent.locationX / layoutWidth));
      
      // 用百分比计算对应的数值
      const range = maximumValue - minimumValue;
      const targetValue = minimumValue + (clickPercentage * range);
      const steppedValue = Math.round(targetValue / step) * step;
      const clampedValue = clamp(steppedValue, minimumValue, maximumValue);
      
      // 计算拇指应该的位置
      const targetPos = valueToPosition(clampedValue);
      
      // 检查是否点击在拇指范围内
      const withinThumb = Math.abs(evt.nativeEvent.locationX - currentPos) <= thumbSize / 2;
      
      if (!withinThumb) {
        startPosRef.current = targetPos;
        translateX.setValue(targetPos);
        currentValueRef.current = clampedValue;
        onValueChange?.(clampedValue);
      }
    }
  };

  const handleMove = (_evt: GestureResponderEvent, gestureState: any) => {
    if (disabled) return;
    const { leftBound, rightBound } = getBounds();
    const nextPos = clamp(startPosRef.current + gestureState.dx, leftBound, rightBound);
    translateX.setValue(nextPos);
    const nextVal = positionToValue(nextPos);
    if (nextVal !== currentValueRef.current) {
      currentValueRef.current = nextVal;
      onValueChange?.(nextVal);
    }
  };

  const handleRelease = () => {
    isDraggingRef.current = false;
    onSlidingComplete?.(currentValueRef.current);
  };

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => !disabled,
        onStartShouldSetPanResponderCapture: () => !disabled,
        onMoveShouldSetPanResponder: () => !disabled,
        onMoveShouldSetPanResponderCapture: () => !disabled,
        onPanResponderGrant: handleGrant,
        onPanResponderMove: handleMove,
        onPanResponderRelease: handleRelease,
        onPanResponderTerminationRequest: () => true,
        onPanResponderTerminate: handleRelease,
        onShouldBlockNativeResponder: () => true,
      }),
    [disabled, layoutWidth, thumbSize, minimumValue, maximumValue, step]
  );

  return (
    <View style={[styles.container, style]}>
      <View style={[styles.track, trackStyle]} onLayout={handleTrackLayout} {...panResponder.panHandlers}>
        <Animated.View style={[styles.fill, { width: translateX }]} />
        <Animated.View style={[styles.thumb, thumbStyle, { transform: [{ translateX }] }]} />
      </View>

      {showLabels && (
        <View style={styles.labels}>
          <Text style={[styles.label, labelStyle]}>{minLabel || minimumValue.toString()}</Text>
          <Text style={[styles.label, labelStyle]}>{maxLabel || maximumValue.toString()}</Text>
        </View>
      )}

      {showValue && <Text style={[styles.value, valueStyle]}>{currentValueRef.current.toString()}</Text>}
    </View>
  );
};

export default Slider;
