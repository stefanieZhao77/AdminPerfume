import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { brandColors } from '../../../styles/colors';
import { spacing, borderRadius } from '../../../styles/spacing';

export interface RadioOption {
  label: string;
  value: string | number;
  disabled?: boolean;
  description?: string;
}

export interface RadioButtonProps {
  options: RadioOption[];
  value?: string | number;
  onChange?: (value: string | number) => void;
  disabled?: boolean;
  direction?: 'vertical' | 'horizontal';
  style?: any;
  optionStyle?: any;
  radioStyle?: any;
  labelStyle?: any;
  descriptionStyle?: any;
  error?: string;
  errorStyle?: any;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  options,
  value,
  onChange,
  disabled = false,
  direction = 'vertical',
  style,
  optionStyle,
  radioStyle,
  labelStyle,
  descriptionStyle,
  error,
  errorStyle,
}) => {
  const handleOptionSelect = (optionValue: string | number) => {
    if (disabled) return;
    onChange?.(optionValue);
  };

  const renderOption = (option: RadioOption) => {
    const selected = value === option.value;
    const optionDisabled = disabled || option.disabled;

    return (
      <TouchableOpacity
        key={option.value}
        style={[
          styles.option,
          direction === 'horizontal' && styles.optionHorizontal,
          optionStyle,
          optionDisabled && styles.disabled,
        ]}
        onPress={() => handleOptionSelect(option.value)}
        disabled={optionDisabled}
        activeOpacity={0.8}
      >
        <View
          style={[
            styles.radio,
            radioStyle,
            selected && {
              borderColor: brandColors.primary,
            },
          ]}
        >
          {selected && <View style={styles.radioInner} />}
        </View>

        <View style={styles.labelContainer}>
          <Text
            style={[
              styles.label,
              labelStyle,
              optionDisabled && { color: brandColors.gray[500] },
            ]}
          >
            {option.label}
          </Text>
          {option.description && (
            <Text
              style={[
                styles.description,
                descriptionStyle,
                optionDisabled && { color: brandColors.gray[400] },
              ]}
            >
              {option.description}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, direction === 'horizontal' && styles.containerHorizontal, style]}>
      <View style={styles.optionsContainer}>
        {options.map(renderOption)}
      </View>

      {error && (
        <Text style={[styles.error, errorStyle]}>{error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  containerHorizontal: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  optionsContainer: {
    width: '100%',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.xs,
  },
  optionHorizontal: {
    marginRight: spacing.md,
    minWidth: 120,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: brandColors.gray[400],
    backgroundColor: brandColors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.sm,
    marginTop: 2,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: brandColors.primary,
  },
  labelContainer: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    color: brandColors.gray[700],
    fontWeight: '400',
  },
  description: {
    fontSize: 14,
    color: brandColors.gray[500],
    marginTop: spacing.xs,
  },
  error: {
    fontSize: 12,
    color: brandColors.danger,
    marginTop: spacing.xs,
  },
  disabled: {
    opacity: 0.6,
  },
});

export default RadioButton;
