import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { brandColors } from '../../../styles/colors';
import { createCheckboxGroupStyles } from './styles';
import { CheckboxGroupProps, CheckboxOption } from './types';

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  options,
  value = [],
  onChange,
  disabled = false,
  maxSelection,
  minSelection,
  direction = 'vertical',
  style,
  optionStyle,
  checkboxStyle,
  labelStyle,
  descriptionStyle,
  error,
  errorStyle,
}) => {
  const styles = createCheckboxGroupStyles(direction, disabled);

  // 处理选项选择
  const handleOptionToggle = (optionValue: string | number) => {
    if (disabled) return;

    const newValue = [...value];
    const index = newValue.indexOf(optionValue);

    if (index > -1) {
      // 取消选择
      if (!minSelection || newValue.length > minSelection) {
        newValue.splice(index, 1);
      }
    } else {
      // 选择
      if (!maxSelection || newValue.length < maxSelection) {
        newValue.push(optionValue);
      }
    }

    onChange?.(newValue);
  };

  // 检查选项是否被选中
  const isOptionSelected = (optionValue: string | number) => {
    return value.includes(optionValue);
  };

  // 渲染单个选项
  const renderOption = (option: CheckboxOption) => {
    const selected = isOptionSelected(option.value);
    const optionDisabled = disabled || option.disabled;

    return (
      <TouchableOpacity
        key={option.value}
        style={[
          styles.option,
          optionStyle,
          optionDisabled && styles.disabled,
        ]}
        onPress={() => handleOptionToggle(option.value)}
        disabled={optionDisabled}
        activeOpacity={0.8}
      >
        <View
          style={[
            styles.checkbox,
            checkboxStyle,
            selected && {
              borderColor: brandColors.primary,
              backgroundColor: brandColors.primary,
            },
          ]}
        >
          {selected && <View style={styles.checkboxInner} />}
        </View>

        <View style={{ flex: 1 }}>
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
    <View style={[styles.container, style]}>
      <View style={styles.optionsContainer}>
        {options.map(renderOption)}
      </View>

      {error && (
        <Text style={[styles.error, errorStyle]}>{error}</Text>
      )}
    </View>
  );
};

export default CheckboxGroup;
