import React, { useState, useEffect, useCallback, memo, useMemo } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';
import { brandColors } from '../../styles/colors';
import { container, card, typography, spacing, input } from '../../styles/design';
import Slider from '../../components/common/Slider';

export interface FragranceRatingProps {
  visibleInModal?: boolean;
  initialType?: 'imitation' | 'original';
  sampleId?: string;
  onClose?: () => void;
}

interface FragranceRatingData {
  sampleId: string;
  fragranceType: 'imitation' | 'original';
  rose: number;
  ocean: number;
  moist: number;
  vanilla: number;
  citrus: number;
  woody: number;
  floral: number;
  spicy: number;
  fresh: number;
  warm: number;
  comments: string;
}

const FragranceRating: React.FC<FragranceRatingProps> = ({
  visibleInModal,
  initialType = 'imitation',
  sampleId = 'SAMPLE-001',
  onClose,
}) => {
  const [ratingData, setRatingData] = useState<FragranceRatingData>({
    sampleId,
    fragranceType: initialType,
    rose: 0,
    ocean: 0,
    moist: 0,
    vanilla: 0,
    citrus: 0,
    woody: 0,
    floral: 0,
    spicy: 0,
    fresh: 0,
    warm: 0,
    comments: '',
  });

  const [generatedReport, setGeneratedReport] = useState<string>('');
  const [isReportGenerated, setIsReportGenerated] = useState<boolean>(false);

  // 使用 ref 存储各项评分，避免父组件在每次滑动/输入时触发重渲染
  const ratingValuesRef = React.useRef({
    rose: 0,
    ocean: 0,
    moist: 0,
    vanilla: 0,
    citrus: 0,
    woody: 0,
    floral: 0,
    spicy: 0,
    fresh: 0,
    warm: 0,
  });

  // 初始化 ref 值
  useEffect(() => {
    ratingValuesRef.current = {
      rose: ratingData.rose,
      ocean: ratingData.ocean,
      moist: ratingData.moist,
      vanilla: ratingData.vanilla,
      citrus: ratingData.citrus,
      woody: ratingData.woody,
      floral: ratingData.floral,
      spicy: ratingData.spicy,
      fresh: ratingData.fresh,
      warm: ratingData.warm,
    };
  }, []);

  const generateReport = useCallback(() => {
    const v = ratingValuesRef.current;
    const avg = (
      v.rose + v.ocean + v.moist + v.vanilla + v.citrus + v.woody + v.floral + v.spicy + v.fresh + v.warm
    ) / 10;
    const typeLabel = ratingData.fragranceType === 'imitation' ? '仿香' : '创香';
    const report = `# 香气细化评分报告\n\n- 样本: ${ratingData.sampleId}\n- 类型: ${typeLabel}\n- 平均分: ${avg.toFixed(1)}/10\n\n## 细化标签分值（-10 ~ 10）\n- 玫瑰: ${v.rose}\n- 海洋: ${v.ocean}\n- 水润: ${v.moist}\n- 香草: ${v.vanilla}\n- 柑橘: ${v.citrus}\n- 木质: ${v.woody}\n- 花香: ${v.floral}\n- 辛辣: ${v.spicy}\n- 清新: ${v.fresh}\n- 温暖: ${v.warm}\n\n## 反馈意见\n${ratingData.comments || '（无）'}\n\n— 本报告由AI自动生成，可在此基础上编辑修改。`;
    setGeneratedReport(report);
    setIsReportGenerated(true);
    Alert.alert('已生成报告', 'AI已根据当前分值生成初稿，可在下方继续编辑。');
  }, [ratingData.comments, ratingData.fragranceType, ratingData.sampleId]);

  const submitFeedback = useCallback(() => {
    Alert.alert(
      '提交确认',
      '是否提交本次反馈？',
      [
        { text: '取消', style: 'cancel' },
        { text: '提交', onPress: () => {
            Alert.alert('提交成功', '我们已收到您的反馈');
            if (onClose) onClose();
          } 
        },
      ]
    );
  }, [onClose]);

  const handleReset = () => {
    const reset = {
      sampleId,
      fragranceType: initialType,
      rose: 0,
      ocean: 0,
      moist: 0,
      vanilla: 0,
      citrus: 0,
      woody: 0,
      floral: 0,
      spicy: 0,
      fresh: 0,
      warm: 0,
      comments: '',
    } as const;
    setRatingData(reset as unknown as FragranceRatingData);
    ratingValuesRef.current = {
      rose: 0,
      ocean: 0,
      moist: 0,
      vanilla: 0,
      citrus: 0,
      woody: 0,
      floral: 0,
      spicy: 0,
      fresh: 0,
      warm: 0,
    };
    // 清空报告
    setGeneratedReport('');
    setIsReportGenerated(false);
  };

  const clamp10 = (n: number) => Math.max(-10, Math.min(10, n));

  type CommitFn = (val: number) => void;

  const RatingRow: React.FC<{ label: string; value: number; field: keyof FragranceRatingData; onCommit: (field: keyof FragranceRatingData, value: number) => void }> = memo(({ label, value, field, onCommit }) => {
    const [localValue, setLocalValue] = useState<number>(value);
    const [text, setText] = useState<string>(String(value));

    useEffect(() => {
      setLocalValue(value);
      setText(String(value));
    }, [value]);

    const onSliderChange = useCallback((v: number) => {
      // 为避免高频重渲染，这里不更新本地状态
      // 拇指位置由 Slider 内部 Animated 驱动，结束时统一提交
    }, []);

    const onSliderComplete = useCallback((v: number) => {
      const nv = clamp10(v);
      setLocalValue(nv);
      setText(String(nv));
      onCommit(field, nv);
    }, [field, onCommit]);

    const onTextChange = useCallback((t: string) => {
      // 允许临时状态：空字符串或单独的 '-'
      // 仅保留数字与负号，且负号只能在最前面且最多一个
      const filtered = t.replace(/[^0-9-]/g, '');
      const normalized = filtered.startsWith('-')
        ? '-' + filtered.slice(1).replace(/-/g, '')
        : filtered.replace(/-/g, '');
      setText(normalized);
    }, []);

    const onTextCommit = useCallback(() => {
      if (text === '' || text === '-') {
        // 不强制回填，保持用户清空的体验，但提交为0
        const fallback = 0;
        setLocalValue(fallback);
        setText(String(fallback));
        onCommit(field, fallback);
        return;
      }
      const parsed = Number(text);
      const nv = Number.isFinite(parsed) ? clamp10(parsed) : localValue;
      setLocalValue(nv);
      setText(String(nv));
      onCommit(field, nv);
    }, [text, localValue, field, onCommit]);

    return (
      <View style={styles.ratingRow}>
        <Text style={styles.ratingLabel}>{label}</Text>
        <View style={styles.ratingSliderContainer}>
          <Slider
            value={localValue}
            onValueChange={onSliderChange}
            onSlidingComplete={onSliderComplete}
            minimumValue={-10}
            maximumValue={10}
            step={1}
            style={styles.ratingSlider}
          />
        </View>
        <View style={styles.ratingValueContainer}>
          <TextInput
            style={styles.ratingValueInput}
            value={text}
            onChangeText={onTextChange}
            onEndEditing={onTextCommit}
            keyboardType="numeric"
            textAlign="center"
          />
        </View>
      </View>
    );
  }, (prev, next) => {
    // 深度比较，确保只有当真正需要时才重新渲染
    return prev.value === next.value && 
           prev.label === next.label && 
           prev.field === next.field;
  });

  const handleRatingCommit = useCallback((field: keyof FragranceRatingData, value: number) => {
    // 只更新 ref，不触发父组件重渲染
    if (field in ratingValuesRef.current) {
      // @ts-expect-error narrowing handled above
      ratingValuesRef.current[field] = value as any;
    }
  }, []);

  return (
    <SafeAreaView style={[styles.container, visibleInModal && { paddingTop: spacing.md, height: '90%' } ]}>
      <StatusBar barStyle="dark-content" backgroundColor={brandColors.background.primary} />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <TouchableOpacity
              style={styles.fragranceTypeButton}
              onPress={() =>
                setRatingData({
                  ...ratingData,
                  fragranceType: ratingData.fragranceType === 'imitation' ? 'original' : 'imitation',
                })
              }
            >
              <Text style={styles.fragranceTypeText}>
                {ratingData.fragranceType === 'imitation' ? '仿香' : '创香'}
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>香气细化标签打分</Text>
          <Text style={styles.rangeHint}>评分范围：-10 ~ 10（支持负值）</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.formCard}>
            <Text style={styles.rangeInlineHint}>范围：-10 ~ 10</Text>
            <RatingRow label="玫瑰" value={ratingData.rose} field="rose" onCommit={handleRatingCommit} />
            <RatingRow label="海洋" value={ratingData.ocean} field="ocean" onCommit={handleRatingCommit} />
            <RatingRow label="水润" value={ratingData.moist} field="moist" onCommit={handleRatingCommit} />
            <RatingRow label="香草" value={ratingData.vanilla} field="vanilla" onCommit={handleRatingCommit} />
            <RatingRow label="柑橘" value={ratingData.citrus} field="citrus" onCommit={handleRatingCommit} />
            <RatingRow label="木质" value={ratingData.woody} field="woody" onCommit={handleRatingCommit} />
            <RatingRow label="花香" value={ratingData.floral} field="floral" onCommit={handleRatingCommit} />
            <RatingRow label="辛辣" value={ratingData.spicy} field="spicy" onCommit={handleRatingCommit} />
            <RatingRow label="清新" value={ratingData.fresh} field="fresh" onCommit={handleRatingCommit} />
            <RatingRow label="温暖" value={ratingData.warm} field="warm" onCommit={handleRatingCommit} />

          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>反馈意见补充</Text>
          <View style={styles.formCard}>
            <TextInput
              style={[styles.textInput, styles.textArea]}
              value={ratingData.comments}
              onChangeText={(text) => setRatingData({ ...ratingData, comments: text })}
              placeholder="请详细描述您的反馈意见..."
              placeholderTextColor={brandColors.text.secondary}
              multiline
              numberOfLines={6}
              textAlignVertical="top"
            />
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.reportCard}>
            <View style={styles.reportHeader}>
              <Text style={styles.reportTitle}>需求报告</Text>
              <TouchableOpacity style={styles.completeButton} onPress={generateReport}>
                <Text style={styles.completeButtonText}>生成</Text>
              </TouchableOpacity>
            </View>
            {isReportGenerated && (
              <TextInput
                style={[styles.textInput, styles.reportTextArea]}
                value={generatedReport}
                onChangeText={setGeneratedReport}
                multiline
                numberOfLines={12}
                textAlignVertical="top"
                placeholder="AI生成的报告内容会显示在这里，您可以继续修改..."
                placeholderTextColor={brandColors.text.secondary}
              />
            )}
          </View>
        </View>

        <View style={styles.buttonSection}>
          <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
            <Text style={styles.resetButtonText}>重置</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submitButton} onPress={submitFeedback}>
            <Text style={styles.submitButtonText}>提交</Text>
          </TouchableOpacity>
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
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  fragranceTypeButton: {
    backgroundColor: brandColors.gray[300],
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 6,
  },
  fragranceTypeText: {
    ...typography.bodyMedium,
    color: brandColors.text.primary,
    fontWeight: '500',
  },
  headerTitle: {
    ...typography.bodyMedium,
    color: brandColors.text.primary,
  },
  title: {
    ...typography.h2,
    color: brandColors.text.primary,
    textAlign: 'center',
  },
  rangeHint: {
    ...typography.caption,
    color: brandColors.text.secondary,
    textAlign: 'center',
    marginTop: spacing.xs,
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
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    borderWidth: 1,
    borderColor: brandColors.gray[100],
  },
  rangeInlineHint: {
    ...typography.caption,
    color: brandColors.text.secondary,
    marginBottom: spacing.sm,
  },
  ratingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: brandColors.gray[100],
  },
  ratingLabel: {
    ...typography.bodyMedium,
    color: brandColors.text.primary,
    width: 60,
  },
  ratingSliderContainer: {
    flex: 1,
    marginHorizontal: spacing.md,
  },
  ratingSlider: {
    width: '100%',
  },
  ratingValueContainer: {
    width: 60,
  },
  ratingValueInput: {
    ...input.base,
    color: brandColors.text.primary,
    fontSize: 14,
    textAlign: 'center',
    backgroundColor: brandColors.gray[200],
    borderWidth: 1,
    borderColor: brandColors.gray[300],
    paddingVertical: spacing.xs,
  },
  textInput: {
    ...input.base,
    color: brandColors.text.primary,
    fontSize: 16,
  },
  textArea: {
    height: 120,
    paddingTop: spacing.md,
  },
  reportCard: {
    ...card.elevated,
    padding: spacing.lg,
    backgroundColor: brandColors.white,
    shadowColor: brandColors.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    borderWidth: 1,
    borderColor: brandColors.gray[100],
  },
  reportHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reportTitle: {
    ...typography.bodyMedium,
    color: brandColors.text.primary,
  },
  completeButton: {
    backgroundColor: brandColors.gray[300],
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 6,
  },
  completeButtonText: {
    ...typography.bodyMedium,
    color: brandColors.text.primary,
    fontWeight: '500',
  },
  reportTextArea: {
    height: 200,
    paddingTop: spacing.md,
    fontSize: 14,
    marginTop: spacing.md,
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.xl,
    marginBottom: spacing.xl,
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

export default FragranceRating;
