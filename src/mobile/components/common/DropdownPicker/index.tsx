import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';
import { DropdownPickerProps, DropdownOption } from './types';
import { createDropdownPickerStyles } from './styles';

// 扩展全局类型
declare global {
  var setParentScrollEnabled: ((enabled: boolean) => void) | undefined;
}

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
  id,
  activeId,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [dropdownLayout, setDropdownLayout] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const dropdownRef = useRef<View>(null);
  const styles = createDropdownPickerStyles(disabled, maxHeight, isOpen);

  // 监听 activeId 变化来关闭下拉框
  useEffect(() => {
    if (activeId !== id && isOpen) {
      setIsOpen(false);
      setSearchText('');
      onDropdownClose?.();
    }
  }, [activeId, id, isOpen, onDropdownClose]);

  // 获取选中的选项
  const selectedOption = options.find(option => option.value === value);

  // 过滤选项 - 支持中文搜索
  const filteredOptions = searchable
    ? options.filter(option => {
        if (!searchText.trim()) return true;
        
        const label = option.label;
        const search = searchText.trim();
        
        // 直接包含匹配
        if (label.includes(search)) return true;
        
        // 忽略大小写匹配（仅对英文有效）
        if (/[a-zA-Z]/.test(search) && label.toLowerCase().includes(search.toLowerCase())) {
          return true;
        }
        
        return false;
      })
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
      // 测量下拉框位置
      if (dropdownRef.current) {
        dropdownRef.current.measureInWindow((x, y, width, height) => {
          setDropdownLayout({ x, y, width, height });
          onDropdownOpen?.();
          setIsOpen(true);
        });
      }
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
    <>
      <View style={[styles.container, containerStyle]}>
        <TouchableOpacity
          ref={dropdownRef}
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
      </View>

      <Modal
        visible={isOpen}
        transparent={true}
        animationType="none"
        onRequestClose={() => {
          setIsOpen(false);
          setSearchText('');
          onDropdownClose?.();
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            setIsOpen(false);
            setSearchText('');
            onDropdownClose?.();
          }}
        >
          <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback>
              <View
                style={[
                  {
                    backgroundColor: '#fff',
                    borderWidth: 1,
                    borderColor: '#ddd',
                    borderRadius: 8,
                    maxHeight: maxHeight,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.15,
                    shadowRadius: 8,
                    elevation: 10,
                    overflow: 'hidden',
                  },
                  {
                    position: 'absolute',
                    top: dropdownLayout.y + dropdownLayout.height + 2,
                    left: dropdownLayout.x,
                    width: dropdownLayout.width,
                  }
                ]}
              >
                {searchable && (
                  <View style={styles.searchContainer}>
                    <TextInput
                      style={[styles.searchInput, searchInputStyle]}
                      placeholder={searchPlaceholder}
                      value={searchText}
                      onChangeText={setSearchText}
                      autoCorrect={false}
                      autoCapitalize="none"
                      returnKeyType="search"
                      clearButtonMode="while-editing"
                      keyboardType="default"
                    />
                  </View>
                )}

                {loading ? (
                  <View style={{ padding: 20, alignItems: 'center' }}>
                    <ActivityIndicator size="small" color="#007AFF" />
                    <Text style={styles.loading}>{loadingText}</Text>
                  </View>
                ) : filteredOptions.length > 0 ? (
                  <ScrollView 
                    style={{ maxHeight }}
                    showsVerticalScrollIndicator={true}
                    keyboardShouldPersistTaps="handled"
                    nestedScrollEnabled={true}
                    bounces={false}
                    scrollEnabled={true}
                  >
                    {filteredOptions.map(renderOption)}
                  </ScrollView>
                ) : (
                  <Text style={styles.noData}>{noDataText}</Text>
                )}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default DropdownPicker;
