import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { brandColors } from '../../styles/colors';
import { container, card, typography, spacing, shadows, input } from '../../styles/design';
import { Button, DropdownPicker, CheckboxGroup, DateRangePicker, RadioButton } from '../../components/common';
import {
  productCategoryOptions,
  productSubCategoryOptions,
  applicationScenarioOptions,
  fragranceTypeOptions,
  colorRequirementOptions,
  rawMaterialRequirementOptions,
  regulatoryRequirementOptions,
  fragranceTypeOptions2,
  sampleSpecificationOptions,
} from '../../config/formOptions';

interface RequirementFormData {
  theme: string;
  productCategory: string;
  productSubCategory: string;
  applicationScenario: string;
  fragranceType: string;
  topNotes: string;
  middleNotes: string;
  baseNotes: string;
  colorRequirement: string;
  rawMaterialRequirements: string[];
  targetPriceMin: string;
  targetPriceMax: string;
  regulatoryRequirements: string[];
  fragranceType2: string;
  sampleQuantity: string;
  sampleSpecifications: string[];
  projectTimeline: { startDate: Date | null; endDate: Date | null };
  targetAgeRange: string;
  targetGender: string;
  targetIncome: string;
  targetOther: string;
  productConcept: string;
}

const RequirementForm: React.FC = () => {
  const [formData, setFormData] = useState<RequirementFormData>({
    theme: '',
    productCategory: '',
    productSubCategory: '',
    applicationScenario: '',
    fragranceType: '',
    topNotes: '',
    middleNotes: '',
    baseNotes: '',
    colorRequirement: '',
    rawMaterialRequirements: [],
    targetPriceMin: '',
    targetPriceMax: '',
    regulatoryRequirements: [],
    fragranceType2: '',
    sampleQuantity: '',
    sampleSpecifications: [],
    projectTimeline: { startDate: null, endDate: null },
    targetAgeRange: '',
    targetGender: '',
    targetIncome: '',
    targetOther: '',
    productConcept: '',
  });

  const [generatedReport, setGeneratedReport] = useState<string>('');
  const [isReportGenerated, setIsReportGenerated] = useState<boolean>(false);

  // 处理下拉栏打开/关闭
  const handleDropdownOpen = () => {
    // 这里可以添加关闭其他下拉栏的逻辑
  };

  const handleDropdownClose = () => {
    // 这里可以添加清理逻辑
  };

  const handleSubmit = () => {
    if (!formData.theme || !formData.productCategory || !formData.fragranceType) {
      Alert.alert('错误', '请填写必填字段');
      return;
    }

    // 模拟AI生成报告
    const mockReport = generateMockReport(formData);
    setGeneratedReport(mockReport);
    setIsReportGenerated(true);

    Alert.alert('成功', '需求报告已生成', [
      { text: '确定', onPress: () => console.log('Form submitted:', formData) }
    ]);
  };

  const generateMockReport = (data: RequirementFormData): string => {
    return `# 香水需求报告

## 项目概述
**主题**: ${data.theme || '未填写'}
**产品类别**: ${getProductCategoryLabel(data.productCategory)}
**产品子类**: ${getProductSubCategoryLabel(data.productCategory, data.productSubCategory)}
**应用场景**: ${getApplicationScenarioLabel(data.productSubCategory, data.applicationScenario)}

## 香调设计
**香型**: ${getFragranceTypeLabel(data.fragranceType)}
**前调要求**: ${data.topNotes || '无特殊要求'}
**中调要求**: ${data.middleNotes || '无特殊要求'}
**后调要求**: ${data.baseNotes || '无特殊要求'}

## 产品要求
**颜色需求**: ${getColorRequirementLabel(data.colorRequirement)}
**原料要求**: ${data.rawMaterialRequirements.map(req => getRawMaterialRequirementLabel(req)).join(', ') || '无特殊要求'}
**目标价格**: ${data.targetPriceMin && data.targetPriceMax ? `${data.targetPriceMin} - ${data.targetPriceMax}` : '未设定'}
**法规要求**: ${data.regulatoryRequirements.map(req => getRegulatoryRequirementLabel(req)).join(', ') || '无特殊要求'}
**香型类型**: ${getFragranceType2Label(data.fragranceType2)}

## 样品信息
**小样数量**: ${data.sampleQuantity || '未设定'}
**小样规格**: ${data.sampleSpecifications.map(spec => getSampleSpecificationLabel(spec)).join(', ') || '未选择'}
**项目时间**: ${data.projectTimeline.startDate && data.projectTimeline.endDate ? 
  `${data.projectTimeline.startDate.toLocaleDateString()} - ${data.projectTimeline.endDate.toLocaleDateString()}` : '未设定'}

## 客户信息
**目标年龄段**: ${data.targetAgeRange || '未填写'}
**目标性别**: ${data.targetGender || '未填写'}
**目标收入**: ${data.targetIncome || '未填写'}
**其他要求**: ${data.targetOther || '无'}
**产品理念**: ${data.productConcept || '未填写'}

---
*本报告由AI自动生成，可根据实际需求进行调整。*`;
  };

  const getProductCategoryLabel = (value: string): string => {
    const option = productCategoryOptions.find((opt: any) => opt.value === value);
    return option ? option.label : '未选择';
  };

  const getProductSubCategoryLabel = (category: string, value: string): string => {
    const options = productSubCategoryOptions[category as keyof typeof productSubCategoryOptions] || [];
    const option = options.find((opt: any) => opt.value === value);
    return option ? option.label : '未选择';
  };

  const getApplicationScenarioLabel = (subCategory: string, value: string): string => {
    const options = applicationScenarioOptions[subCategory as keyof typeof applicationScenarioOptions] || [];
    const option = options.find((opt: any) => opt.value === value);
    return option ? option.label : '未选择';
  };

  const getFragranceTypeLabel = (value: string): string => {
    const option = fragranceTypeOptions.find((opt: any) => opt.value === value);
    return option ? option.label : '未选择';
  };

  const getColorRequirementLabel = (value: string): string => {
    const option = colorRequirementOptions.find((opt: any) => opt.value === value);
    return option ? option.label : '未选择';
  };

  const getRawMaterialRequirementLabel = (value: string): string => {
    const option = rawMaterialRequirementOptions.find((opt: any) => opt.value === value);
    return option ? option.label : '未选择';
  };

  const getRegulatoryRequirementLabel = (value: string): string => {
    const option = regulatoryRequirementOptions.find((opt: any) => opt.value === value);
    return option ? option.label : '未选择';
  };

  const getFragranceType2Label = (value: string): string => {
    const option = fragranceTypeOptions2.find((opt: any) => opt.value === value);
    return option ? option.label : '未选择';
  };

  const getSampleSpecificationLabel = (value: string): string => {
    const option = sampleSpecificationOptions.find((opt: any) => opt.value === value);
    return option ? option.label : '未选择';
  };

  const handleReset = () => {
    setFormData({
      theme: '',
      productCategory: '',
      productSubCategory: '',
      applicationScenario: '',
      fragranceType: '',
      topNotes: '',
      middleNotes: '',
      baseNotes: '',
      colorRequirement: '',
      rawMaterialRequirements: [],
      targetPriceMin: '',
      targetPriceMax: '',
      regulatoryRequirements: [],
      fragranceType2: '',
      sampleQuantity: '',
      sampleSpecifications: [],
      projectTimeline: { startDate: null, endDate: null },
      targetAgeRange: '',
      targetGender: '',
      targetIncome: '',
      targetOther: '',
      productConcept: '',
    });
    setGeneratedReport('');
    setIsReportGenerated(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={brandColors.background.primary} />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 头部区域 */}
        <View style={styles.header}>
          <Text style={styles.title}>需求报告</Text>
          <Text style={styles.subtitle}>定义香水项目需求</Text>
        </View>

        {/* 基本信息 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>基本信息</Text>
          
          <View style={styles.formCard}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>主题 *</Text>
              <TextInput
                style={styles.textInput}
                value={formData.theme}
                onChangeText={(text) => setFormData({...formData, theme: text})}
                placeholder="请输入想定义的香水主题"
                placeholderTextColor={brandColors.text.secondary}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>产品类别 *</Text>
              <DropdownPicker
                options={productCategoryOptions}
                value={formData.productCategory}
                onValueChange={(value) => {
                  setFormData({
                    ...formData, 
                    productCategory: String(value),
                    productSubCategory: '', // 重置子类别
                    applicationScenario: '' // 重置应用场景
                  });
                }}
                placeholder="请选择产品类别"
                onDropdownOpen={handleDropdownOpen}
                onDropdownClose={handleDropdownClose}
              />
            </View>

            {/* 三级联动：子类别 */}
            {formData.productCategory && (
              <View style={styles.inputGroup}>
                <Text style={styles.label}>产品子类别</Text>
                <DropdownPicker
                  options={productSubCategoryOptions[formData.productCategory as keyof typeof productSubCategoryOptions] || []}
                  value={formData.productSubCategory}
                  onValueChange={(value) => {
                    setFormData({
                      ...formData, 
                      productSubCategory: String(value),
                      applicationScenario: '' // 重置应用场景
                    });
                  }}
                  placeholder="请选择产品子类别"
                  onDropdownOpen={handleDropdownOpen}
                  onDropdownClose={handleDropdownClose}
                />
              </View>
            )}

            {/* 三级联动：应用场景 */}
            {formData.productSubCategory && (
              <View style={styles.inputGroup}>
                <Text style={styles.label}>应用场景</Text>
                <DropdownPicker
                  options={applicationScenarioOptions[formData.productSubCategory as keyof typeof applicationScenarioOptions] || []}
                  value={formData.applicationScenario}
                  onValueChange={(value) => setFormData({...formData, applicationScenario: String(value)})}
                  placeholder="请选择应用场景"
                  onDropdownOpen={handleDropdownOpen}
                  onDropdownClose={handleDropdownClose}
                />
              </View>
            )}

            <View style={styles.inputGroup}>
              <Text style={styles.label}>香型 *</Text>
                             <DropdownPicker
                 options={fragranceTypeOptions}
                 value={formData.fragranceType}
                 onValueChange={(value) => setFormData({...formData, fragranceType: String(value)})}
                placeholder="请选择香型"
                onDropdownOpen={handleDropdownOpen}
                onDropdownClose={handleDropdownClose}
              />
            </View>

            {/* 香气特点 - 改为自由输入 */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>香气特点（可选）</Text>
              <View style={styles.notesContainer}>
                <View style={styles.noteInput}>
                  <Text style={styles.noteLabel}>前调</Text>
                  <TextInput
                    style={styles.noteTextInput}
                    value={formData.topNotes}
                    onChangeText={(text) => setFormData({...formData, topNotes: text})}
                    placeholder="如：柑橘、柠檬等"
                    placeholderTextColor={brandColors.text.secondary}
                  />
                </View>
                <View style={styles.noteInput}>
                  <Text style={styles.noteLabel}>中调</Text>
                  <TextInput
                    style={styles.noteTextInput}
                    value={formData.middleNotes}
                    onChangeText={(text) => setFormData({...formData, middleNotes: text})}
                    placeholder="如：玫瑰、茉莉等"
                    placeholderTextColor={brandColors.text.secondary}
                  />
                </View>
                <View style={styles.noteInput}>
                  <Text style={styles.noteLabel}>后调</Text>
                  <TextInput
                    style={styles.noteTextInput}
                    value={formData.baseNotes}
                    onChangeText={(text) => setFormData({...formData, baseNotes: text})}
                    placeholder="如：麝香、檀香等"
                    placeholderTextColor={brandColors.text.secondary}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* 产品要求 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>产品要求</Text>
          
          <View style={styles.formCard}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>颜色需求</Text>
              <RadioButton
                options={colorRequirementOptions}
                value={formData.colorRequirement}
                onChange={(value) => setFormData({...formData, colorRequirement: String(value)})}
                direction="horizontal"
                style={styles.colorRadioContainer}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>原料要求</Text>
              <CheckboxGroup
                options={rawMaterialRequirementOptions}
                value={formData.rawMaterialRequirements}
                onChange={(value) => setFormData({...formData, rawMaterialRequirements: value.map(String)})}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>目标价格</Text>
              <View style={styles.priceInputContainer}>
                <TextInput
                  style={[styles.textInput, styles.priceInput]}
                  value={formData.targetPriceMin}
                  onChangeText={(text) => setFormData({...formData, targetPriceMin: text})}
                  placeholder="最低价"
                  placeholderTextColor={brandColors.text.secondary}
                  keyboardType="numeric"
                />
                <Text style={styles.priceSeparator}>-</Text>
                <TextInput
                  style={[styles.textInput, styles.priceInput]}
                  value={formData.targetPriceMax}
                  onChangeText={(text) => setFormData({...formData, targetPriceMax: text})}
                  placeholder="最高价"
                  placeholderTextColor={brandColors.text.secondary}
                  keyboardType="numeric"
                />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>法规要求</Text>
                             <CheckboxGroup
                options={regulatoryRequirementOptions}
                value={formData.regulatoryRequirements}
                onChange={(value) => setFormData({...formData, regulatoryRequirements: value.map(String)})}
               />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>仿香or创香</Text>
              <DropdownPicker
                options={fragranceTypeOptions2}
                value={formData.fragranceType2}
                onValueChange={(value) => setFormData({...formData, fragranceType2: String(value)})}
                placeholder="请选择仿香或创香"
                onDropdownOpen={handleDropdownOpen}
                onDropdownClose={handleDropdownClose}
              />
            </View>
          </View>
        </View>

        {/* 样品信息 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>样品信息</Text>
          
          <View style={styles.formCard}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>小样数量</Text>
              <TextInput
                style={styles.textInput}
                value={formData.sampleQuantity}
                onChangeText={(text) => setFormData({...formData, sampleQuantity: text})}
                placeholder="请输入小样数量"
                placeholderTextColor={brandColors.text.secondary}
                keyboardType="numeric"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>小样规格(g)</Text>
              <CheckboxGroup
                options={sampleSpecificationOptions}
                value={formData.sampleSpecifications}
                onChange={(value) => setFormData({...formData, sampleSpecifications: value.map(String)})}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>项目起止时间</Text>
              <DateRangePicker
                value={formData.projectTimeline}
                onValueChange={(value) => setFormData({...formData, projectTimeline: value})}
              />
            </View>
          </View>
        </View>

        {/* 客户信息 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>客户信息</Text>
          
          <View style={styles.formCard}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>目标客户侧写</Text>
              <View style={styles.customerProfileContainer}>
                <View style={styles.customerInput}>
                  <Text style={styles.customerLabel}>年龄段</Text>
                  <TextInput
                    style={styles.customerTextInput}
                    value={formData.targetAgeRange}
                    onChangeText={(text) => setFormData({...formData, targetAgeRange: text})}
                    placeholder="如：25-35岁"
                    placeholderTextColor={brandColors.text.secondary}
                  />
                </View>
                <View style={styles.customerInput}>
                  <Text style={styles.customerLabel}>性别</Text>
                  <TextInput
                    style={styles.customerTextInput}
                    value={formData.targetGender}
                    onChangeText={(text) => setFormData({...formData, targetGender: text})}
                    placeholder="如：女性"
                    placeholderTextColor={brandColors.text.secondary}
                  />
                </View>
                <View style={styles.customerInput}>
                  <Text style={styles.customerLabel}>收入水平</Text>
                  <TextInput
                    style={styles.customerTextInput}
                    value={formData.targetIncome}
                    onChangeText={(text) => setFormData({...formData, targetIncome: text})}
                    placeholder="如：中高收入"
                    placeholderTextColor={brandColors.text.secondary}
                  />
                </View>
                <View style={styles.customerInput}>
                  <Text style={styles.customerLabel}>其他要求</Text>
                  <TextInput
                    style={styles.customerTextInput}
                    value={formData.targetOther}
                    onChangeText={(text) => setFormData({...formData, targetOther: text})}
                    placeholder="其他特殊要求"
                    placeholderTextColor={brandColors.text.secondary}
                  />
                </View>
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>产品理念补充</Text>
              <TextInput
                style={[styles.textInput, styles.textArea]}
                value={formData.productConcept}
                onChangeText={(text) => setFormData({...formData, productConcept: text})}
                placeholder="请补充产品理念和设计思路..."
                placeholderTextColor={brandColors.text.secondary}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
               />
            </View>
          </View>
        </View>

        {/* 操作按钮 */}
        <View style={styles.buttonSection}>
          <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
            <Text style={styles.resetButtonText}>重置</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>生成报告</Text>
          </TouchableOpacity>
        </View>

        {/* AI生成报告内容展示 */}
        {isReportGenerated && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>AI生成报告</Text>
            <View style={styles.formCard}>
              <TextInput
                style={[styles.textInput, styles.reportTextArea]}
                value={generatedReport}
                onChangeText={setGeneratedReport}
                placeholder="AI生成的报告内容..."
                placeholderTextColor={brandColors.text.secondary}
                multiline
                numberOfLines={20}
                textAlignVertical="top"
              />
              <View style={styles.reportActions}>
                <TouchableOpacity style={styles.actionButton}>
                  <Text style={styles.actionButtonText}>保存报告</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <Text style={styles.actionButtonText}>导出PDF</Text>
          </TouchableOpacity>
        </View>
            </View>
          </View>
        )}
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
    backgroundColor: brandColors.white,
    shadowColor: brandColors.dark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
    borderWidth: 1,
    borderColor: brandColors.gray[100],
  },
  inputGroup: {
    marginBottom: spacing.lg,
  },
  label: {
    ...typography.bodyMedium,
    marginBottom: spacing.sm,
    color: brandColors.text.primary,
  },
  textInput: {
    ...input.base,
    color: brandColors.text.primary,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    paddingTop: spacing.md,
  },
  // 香气特点输入框样式
  notesContainer: {
    gap: spacing.md,
  },
  noteInput: {
    marginBottom: spacing.sm,
  },
  noteLabel: {
    ...typography.bodyMedium,
    color: brandColors.text.secondary,
    marginBottom: spacing.xs,
    fontSize: 14,
  },
  noteTextInput: {
    ...input.base,
    color: brandColors.text.primary,
    fontSize: 14,
    paddingVertical: spacing.sm,
  },
  // 客户侧写输入框样式
  customerProfileContainer: {
    gap: spacing.md,
  },
  customerInput: {
    marginBottom: spacing.sm,
  },
  customerLabel: {
    ...typography.bodyMedium,
    color: brandColors.text.secondary,
    marginBottom: spacing.xs,
    fontSize: 14,
  },
  customerTextInput: {
    ...input.base,
    color: brandColors.text.primary,
    fontSize: 14,
    paddingVertical: spacing.sm,
  },
  // 颜色需求单选按钮样式
  colorRadioContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  priceInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceInput: {
    flex: 1,
  },
  priceSeparator: {
    ...typography.bodyMedium,
    color: brandColors.text.secondary,
    marginHorizontal: spacing.md,
  },
  reportTextArea: {
    height: 300,
    paddingTop: spacing.md,
    fontFamily: 'monospace',
    fontSize: 14,
  },
  reportActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: spacing.lg,
  },
  actionButton: {
    backgroundColor: brandColors.gray[200],
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: 8,
    minWidth: 100,
    alignItems: 'center',
  },
  actionButtonText: {
    ...typography.bodyMedium,
    color: brandColors.text.primary,
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.xl,
    marginBottom: spacing.lg,
  },
  resetButton: {
    ...card.base,
    flex: 1,
    marginRight: spacing.sm,
    paddingVertical: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: brandColors.white,
    shadowColor: brandColors.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    borderWidth: 1,
    borderColor: brandColors.gray[200],
  },
  resetButtonText: {
    ...typography.bodyMedium,
    color: brandColors.text.secondary,
  },
  submitButton: {
    backgroundColor: brandColors.primary,
    flex: 2,
    marginLeft: spacing.sm,
    paddingVertical: spacing.lg,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: brandColors.shadow.light,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  submitButtonText: {
    ...typography.button,
  },
});

export default RequirementForm;
