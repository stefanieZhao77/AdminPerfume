import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';
import { brandColors } from '../../styles/colors';
import { container, card, typography, spacing } from '../../styles/design';
import { Button, DropdownPicker, CheckboxGroup, DateRangePicker, ProgressBar, Slider } from '../../components/common';

const ComponentShowcase: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [sliderValue, setSliderValue] = useState<number>(50);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<(string | number)[]>([]);
  const [dateRange, setDateRange] = useState<{ startDate: Date | null; endDate: Date | null }>({
    startDate: null,
    endDate: null,
  });

  // 测试选项
  const testOptions = [
    { label: '选项1', value: 'option1' },
    { label: '选项2', value: 'option2' },
    { label: '选项3', value: 'option3' },
  ];

  const checkboxOptions = [
    { label: '复选框1', value: 'checkbox1' },
    { label: '复选框2', value: 'checkbox2' },
    { label: '复选框3', value: 'checkbox3' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={brandColors.background.primary} />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
        <Text style={styles.title}>组件展示</Text>
          <Text style={styles.subtitle}>测试各种UI组件</Text>
        </View>

        {/* DropdownPicker 测试 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>下拉选择器测试</Text>
          <View style={styles.formCard}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>测试下拉选择器</Text>
              <DropdownPicker
                options={testOptions}
                value={selectedValue}
                onValueChange={(value) => setSelectedValue(String(value))}
                placeholder="请选择选项"
              />
            </View>
            <Text style={styles.selectedValue}>选中值: {selectedValue || '未选择'}</Text>
          </View>
        </View>

        {/* 其他组件 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>其他组件</Text>
          
          <View style={styles.formCard}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>滑块</Text>
            <Slider
              value={sliderValue}
                onValueChange={setSliderValue}
              minimumValue={0}
              maximumValue={100}
              />
              <Text style={styles.sliderValue}>值: {sliderValue}</Text>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>复选框组</Text>
            <CheckboxGroup
              options={checkboxOptions}
              value={selectedCheckboxes}
              onChange={setSelectedCheckboxes}
            />
            <Text style={styles.selectedValue}>选中: {selectedCheckboxes.join(', ') || '无'}</Text>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>进度条</Text>
              <ProgressBar progress={sliderValue / 100} />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>日期范围选择器</Text>
            <DateRangePicker
              value={dateRange}
              onValueChange={setDateRange}
            />
            </View>
          </View>
        </View>

        {/* 按钮测试 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>按钮</Text>
          <View style={styles.buttonContainer}>
            <Button
              title="主要按钮"
              onPress={() => console.log('主要按钮点击')}
              variant="primary"
            />
            <Button
              title="次要按钮"
              onPress={() => console.log('次要按钮点击')}
              variant="secondary"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...container.base,
  },
  content: {
    ...container.content,
  },
  header: {
    marginBottom: spacing.xl,
    alignItems: 'center',
  },
  title: {
    ...typography.h1,
    marginBottom: spacing.sm,
    textAlign: 'center',
    color: brandColors.text.primary,
  },
  subtitle: {
    ...typography.caption,
    textAlign: 'center',
    color: brandColors.text.secondary,
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    ...typography.h3,
    marginBottom: spacing.md,
    color: brandColors.text.primary,
  },
  formCard: {
    ...card.elevated,
    padding: spacing.lg,
  },
  inputGroup: {
    marginBottom: spacing.lg,
  },
  label: {
    ...typography.bodyMedium,
    marginBottom: spacing.sm,
    color: brandColors.text.primary,
  },
  selectedValue: {
    ...typography.caption,
    color: brandColors.text.secondary,
    marginTop: spacing.sm,
  },
  sliderValue: {
    ...typography.caption,
    color: brandColors.text.secondary,
    marginTop: spacing.sm,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: spacing.md,
  },
});

export default ComponentShowcase;
