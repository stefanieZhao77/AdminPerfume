import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DateRangePickerProps, DateRange } from './types';
import { createDateRangePickerStyles } from './styles';

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  value = { startDate: null, endDate: null },
  onValueChange,
  placeholder = '选择日期范围',
  startDatePlaceholder = '开始日期',
  endDatePlaceholder = '结束日期',
  disabled = false,
  minDate,
  maxDate,
  format = 'YYYY-MM-DD',
  style,
  containerStyle,
  inputStyle,
  placeholderStyle,
  dateStyle,
  error,
  errorStyle,
}) => {
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  const styles = createDateRangePickerStyles(disabled);

  // 格式化日期
  const formatDate = (date: Date | null): string => {
    if (!date) return '';
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  };

  // 处理开始日期选择
  const handleStartDateChange = (event: any, selectedDate?: Date) => {
    setShowStartPicker(false);
    if (selectedDate) {
      const newRange = {
        startDate: selectedDate,
        endDate: value.endDate,
      };
      onValueChange?.(newRange);
    }
  };

  // 处理结束日期选择
  const handleEndDateChange = (event: any, selectedDate?: Date) => {
    setShowEndPicker(false);
    if (selectedDate) {
      const newRange = {
        startDate: value.startDate,
        endDate: selectedDate,
      };
      onValueChange?.(newRange);
    }
  };

  // 渲染日期选择器
  const renderDatePicker = (show: boolean, onChange: any, currentDate?: Date) => {
    if (Platform.OS === 'ios') {
      return (
        <Modal
          visible={show}
          transparent
          animationType="slide"
          onRequestClose={() => {
            setShowStartPicker(false);
            setShowEndPicker(false);
          }}
        >
          <View style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            justifyContent: 'flex-end',
          }}>
            <View style={{
              backgroundColor: 'white',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              padding: 20,
            }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                <TouchableOpacity onPress={() => { setShowStartPicker(false); setShowEndPicker(false); }}>
                  <Text style={{ color: '#007AFF', fontSize: 16 }}>取消</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setShowStartPicker(false); setShowEndPicker(false); }}>
                  <Text style={{ color: '#007AFF', fontSize: 16 }}>确定</Text>
                </TouchableOpacity>
              </View>
              <DateTimePicker
                value={currentDate || new Date()}
                mode="date"
                display="spinner"
                onChange={onChange}
                minimumDate={minDate}
                maximumDate={maxDate}
              />
            </View>
          </View>
        </Modal>
      );
    }

    return show ? (
      <DateTimePicker
        value={currentDate || new Date()}
        mode="date"
        display="default"
        onChange={onChange}
        minimumDate={minDate}
        maximumDate={maxDate}
      />
    ) : null;
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.inputsContainer, style]}>
        <TouchableOpacity
          style={[styles.input, inputStyle, disabled && styles.disabled]}
          onPress={() => !disabled && setShowStartPicker(true)}
          disabled={disabled}
          activeOpacity={0.8}
        >
          <Text
            style={[
              value.startDate ? styles.dateText : styles.placeholder,
              dateStyle,
              placeholderStyle,
            ]}
          >
            {value.startDate ? formatDate(value.startDate) : startDatePlaceholder}
          </Text>
        </TouchableOpacity>

        <Text style={styles.separator}>至</Text>

        <TouchableOpacity
          style={[styles.input, inputStyle, disabled && styles.disabled]}
          onPress={() => !disabled && setShowEndPicker(true)}
          disabled={disabled}
          activeOpacity={0.8}
        >
          <Text
            style={[
              value.endDate ? styles.dateText : styles.placeholder,
              dateStyle,
              placeholderStyle,
            ]}
          >
            {value.endDate ? formatDate(value.endDate) : endDatePlaceholder}
          </Text>
        </TouchableOpacity>
      </View>

      {error && (
        <Text style={[styles.error, errorStyle]}>{error}</Text>
      )}

      {renderDatePicker(showStartPicker, handleStartDateChange, value.startDate || undefined)}
      {renderDatePicker(showEndPicker, handleEndDateChange, value.endDate || undefined)}
    </View>
  );
};

export default DateRangePicker;
