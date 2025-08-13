import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native';
import { DropdownPickerProps, DropdownOption } from './types';
import { createDropdownPickerStyles } from './styles';

const DropdownPicker: React.FC<DropdownPickerProps> = ({
  options,
  value,
  placeholder = '请选择...',
  onValueChange,
  disabled = false,
  searchable = false,
  multiple = false,
  maxHeight = 200,
  style,
  containerStyle,
  dropdownStyle,
  optionStyle,
  placeholderStyle,
  selectedOptionStyle,
  selectedOptionTextStyle,
  optionTextStyle,
  searchInputStyle,
  searchPlaceholder = '搜索...',
  noDataText = '暂无数据',
  loading = false,
  loadingText = '加载中...',
  error,
  errorStyle,
  onDropdownOpen,
  onDropdownClose,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const styles = createDropdownPickerStyles(disabled, maxHeight, isOpen);

  // 获取选中的选项
  const selectedOption = options.find(option => option.value === value);

  // 过滤选项
  const filteredOptions = searchable
    ? options.filter(option =>
        option.label.toLowerCase().includes(searchText.toLowerCase())
      )
    : options;

  // 处理选项选择
  const handleOptionSelect = (option: DropdownOption) => {
    if (option.disabled) return;
    
    onValueChange?.(option.value);
    setIsOpen(false);
    setSearchText('');
    onDropdownClose?.();
  };

  // 处理下拉框点击
  const handleDropdownPress = () => {
    if (disabled) return;
    
    if (isOpen) {
      setIsOpen(false);
      setSearchText('');
      onDropdownClose?.();
    } else {
      // 通知父组件关闭其他下拉栏
      onDropdownOpen?.();
      setIsOpen(true);
    }
  };

  // 处理外部点击
  const handleOutsidePress = () => {
    if (isOpen) {
      setIsOpen(false);
      setSearchText('');
      onDropdownClose?.();
    }
  };

  // 渲染选项
  const renderOption = (option: DropdownOption, index: number) => (
    <TouchableOpacity
      key={option.value}
      style={[
        styles.option,
        optionStyle,
        option.disabled && { opacity: 0.5 },
      ]}
      onPress={() => handleOptionSelect(option)}
      disabled={option.disabled}
    >
      <Text
        style={[
          styles.optionText,
          optionTextStyle,
          option.disabled && { color: '#999' },
        ]}
      >
        {option.label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <View style={[styles.container, containerStyle]}>
        <TouchableOpacity
          style={[
            styles.dropdown,
            dropdownStyle,
            style,
            disabled && styles.disabled,
          ]}
          onPress={handleDropdownPress}
          disabled={disabled}
          activeOpacity={0.8}
        >
          <View style={[styles.selectedOption, selectedOptionStyle]}>
            <Text
              style={[
                selectedOption
                  ? styles.selectedOptionText
                  : styles.placeholder,
                selectedOptionTextStyle,
                placeholderStyle,
              ]}
            >
              {selectedOption ? selectedOption.label : placeholder}
            </Text>
            <Text style={{ color: '#666', transform: [{ rotate: isOpen ? '180deg' : '0deg' }] }}>▼</Text>
          </View>
        </TouchableOpacity>

        {error && (
          <Text style={[styles.error, errorStyle]}>{error}</Text>
        )}

        {isOpen && (
          <View style={styles.dropdownList}>
            {searchable && (
              <View style={styles.searchContainer}>
                <TextInput
                  style={[styles.searchInput, searchInputStyle]}
                  placeholder={searchPlaceholder}
                  value={searchText}
                  onChangeText={setSearchText}
                  autoFocus
                />
              </View>
            )}

            <ScrollView style={{ maxHeight }} showsVerticalScrollIndicator={false}>
              {loading ? (
                <View style={{ padding: 20, alignItems: 'center' }}>
                  <ActivityIndicator size="small" color="#007AFF" />
                  <Text style={styles.loading}>{loadingText}</Text>
                </View>
              ) : filteredOptions.length > 0 ? (
                filteredOptions.map(renderOption)
              ) : (
                <Text style={styles.noData}>{noDataText}</Text>
              )}
            </ScrollView>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DropdownPicker;
