import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Alert,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { brandColors } from '../../styles/colors';
import { container, card, typography, spacing, shadows } from '../../styles/design';
import { ProgressBar } from '../../components/common';
import FragranceRating from '../FragranceRating';

interface SampleBatch {
  id: string;
  batchNumber: string;
  trackingNumber: string;
  status: 'pending' | 'accepted' | 'rejected';
  canAccept: boolean;
  canFeedback: boolean;
}

interface ProjectInfo {
  projectId: string;
  projectName: string;
  progress: number;
  sampleBatches: SampleBatch[];
}

const Feedback: React.FC = () => {
  // 模拟项目数据
  const [projectInfo, setProjectInfo] = useState<ProjectInfo>({
    projectId: 'PRJ-2024-001',
    projectName: '花香调香水开发项目',
    progress: 75,
    sampleBatches: [
      {
        id: '1',
        batchNumber: '小样批号1',
        trackingNumber: 'SF1234567890',
        status: 'pending' as const,
        canAccept: true,
        canFeedback: true,
      },
      {
        id: '2',
        batchNumber: '小样批号2',
        trackingNumber: 'YT9876543210',
        status: 'pending' as const,
        canAccept: true,
        canFeedback: true,
      },
      {
        id: '3',
        batchNumber: '小样批号3',
        trackingNumber: 'JD5556667778',
        status: 'accepted' as const,
        canAccept: false,
        canFeedback: true,
      },
    ],
  });

  const [selectedBatch, setSelectedBatch] = useState<SampleBatch | null>(null);
  const [showAcceptanceModal, setShowAcceptanceModal] = useState(false);
  const [showRatingModal, setShowRatingModal] = useState(false);

  // 处理验收按钮点击
  const handleAcceptance = (batch: SampleBatch) => {
    setSelectedBatch(batch);
    setShowAcceptanceModal(true);
  };

  // 处理验收确认
  const handleAcceptanceConfirm = (accepted: boolean) => {
    if (selectedBatch) {
      const updatedBatches = projectInfo.sampleBatches.map(batch => 
        batch.id === selectedBatch.id 
          ? { ...batch, status: accepted ? ('accepted' as const) : ('rejected' as const), canAccept: false }
          : batch
      );

      setProjectInfo({
        ...projectInfo,
        sampleBatches: updatedBatches,
      });

      Alert.alert(
        '验收结果',
        accepted ? '小样已验收通过' : '小样验收未通过',
        [{ text: '确定' }]
      );
    }
    setShowAcceptanceModal(false);
    setSelectedBatch(null);
  };

  // 处理反馈按钮点击
  const handleFeedback = (batch: SampleBatch) => {
    setSelectedBatch(batch);
    setShowRatingModal(true);
  };

  // 获取状态显示文本
  const getStatusText = (status: string) => {
    switch (status) {
      case 'accepted':
        return '已验收';
      case 'rejected':
        return '未通过';
      default:
        return '待验收';
    }
  };

  // 获取状态颜色
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'accepted':
        return brandColors.success;
      case 'rejected':
        return brandColors.danger;
      default:
        return brandColors.warning;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={brandColors.background.primary} />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 头部区域 */}
        <View style={styles.header}>
          <Text style={styles.title}>反馈表</Text>
        </View>

        {/* 项目信息卡片 */}
        <View style={styles.section}>
          <View style={styles.projectCard}>
            <View style={styles.projectHeader}>
              <Text style={styles.projectId}>项目号：{projectInfo.projectId}</Text>
              <Text style={styles.projectName}>{projectInfo.projectName}</Text>
            </View>
            
            <View style={styles.progressSection}>
              <Text style={styles.progressLabel}>项目进度条</Text>
              <ProgressBar
                progress={projectInfo.progress}
                color={brandColors.primary}
                backgroundColor={brandColors.gray[200]}
                height={8}
              />
              <Text style={styles.progressText}>{projectInfo.progress}%</Text>
            </View>
          </View>
        </View>

        {/* 样品批次列表 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>样品批次</Text>
          
          {projectInfo.sampleBatches.map((batch) => (
            <View key={batch.id} style={styles.batchCard}>
              <View style={styles.batchHeader}>
                <Text style={styles.batchNumber}>{batch.batchNumber}</Text>
                <View style={[styles.statusBadge, { backgroundColor: getStatusColor(batch.status) }]}>
                  <Text style={styles.statusText}>{getStatusText(batch.status)}</Text>
                </View>
              </View>
              
              <Text style={styles.trackingNumber}>运单号：{batch.trackingNumber}</Text>
              
              <View style={styles.batchActions}>
                <TouchableOpacity
                  style={[
                    styles.actionButton,
                    styles.acceptButton,
                    !batch.canAccept && styles.disabledButton
                  ]}
                  onPress={() => handleAcceptance(batch)}
                  disabled={!batch.canAccept}
                >
                  <Text style={[
                    styles.actionButtonText,
                    !batch.canAccept && styles.disabledButtonText
                  ]}>
                    验收
                  </Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                  style={[
                    styles.actionButton,
                    styles.feedbackButton,
                    !batch.canFeedback && styles.disabledButton
                  ]}
                  onPress={() => handleFeedback(batch)}
                  disabled={!batch.canFeedback}
                >
                  <Text style={[
                    styles.actionButtonText,
                    !batch.canFeedback && styles.disabledButtonText
                  ]}>
                    反馈
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* 验收确认弹窗 */}
      <Modal
        visible={showAcceptanceModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowAcceptanceModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>验收确认</Text>
            <Text style={styles.modalMessage}>
              是否验收通过 {selectedBatch?.batchNumber}？
            </Text>
            
            <View style={styles.modalActions}>
              <TouchableOpacity
                style={[styles.modalButton, styles.rejectButton]}
                onPress={() => handleAcceptanceConfirm(false)}
              >
                <Text style={styles.modalButtonText}>不通过</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={[styles.modalButton, styles.acceptModalButton]}
                onPress={() => handleAcceptanceConfirm(true)}
              >
                <Text style={styles.modalButtonText}>通过</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* 香调评分弹窗 */}
      <Modal
        visible={showRatingModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowRatingModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { padding: 0, minWidth: 320, maxHeight: '85%' }]}>
            <View style={{ padding: spacing.md, borderBottomWidth: 1, borderBottomColor: brandColors.gray[100], flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={styles.modalTitle}>香调评分</Text>
              <TouchableOpacity onPress={() => setShowRatingModal(false)}>
                <Text style={[styles.modalButtonText, { color: brandColors.primary }]}>关闭</Text>
              </TouchableOpacity>
            </View>
            <ScrollView style={{ paddingHorizontal: spacing.lg }}>
              <FragranceRating
                visibleInModal
                initialType="imitation"
                sampleId={selectedBatch?.batchNumber || 'SAMPLE'}
                onClose={() => setShowRatingModal(false)}
              />
            </ScrollView>
          </View>
        </View>
      </Modal>
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
    textAlign: 'center',
    color: brandColors.text.primary,
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    ...typography.h3,
    marginBottom: spacing.md,
    color: brandColors.text.primary,
  },
  // 项目信息卡片样式
  projectCard: {
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
  projectHeader: {
    marginBottom: spacing.lg,
  },
  projectId: {
    ...typography.bodyMedium,
    color: brandColors.text.secondary,
    marginBottom: spacing.xs,
  },
  projectName: {
    ...typography.h3,
    color: brandColors.text.primary,
  },
  progressSection: {
    marginTop: spacing.md,
  },
  progressLabel: {
    ...typography.bodyMedium,
    color: brandColors.text.secondary,
    marginBottom: spacing.sm,
  },
  progressText: {
    ...typography.captionMedium,
    color: brandColors.primary,
    textAlign: 'center',
    marginTop: spacing.sm,
  },
  // 样品批次卡片样式
  batchCard: {
    ...card.elevated,
    padding: spacing.lg,
    marginBottom: spacing.md,
    backgroundColor: brandColors.white,
    shadowColor: brandColors.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    borderWidth: 1,
    borderColor: brandColors.gray[100],
  },
  batchHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  batchNumber: {
    ...typography.bodyMedium,
    color: brandColors.text.primary,
    fontWeight: '600',
  },
  statusBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 12,
  },
  statusText: {
    ...typography.caption,
    color: brandColors.white,
    fontWeight: '500',
  },
  trackingNumber: {
    ...typography.body,
    color: brandColors.text.secondary,
    marginBottom: spacing.md,
  },
  batchActions: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  actionButton: {
    flex: 1,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  acceptButton: {
    backgroundColor: brandColors.success,
  },
  feedbackButton: {
    backgroundColor: brandColors.primary,
  },
  disabledButton: {
    backgroundColor: brandColors.gray[300],
  },
  actionButtonText: {
    ...typography.bodyMedium,
    color: brandColors.white,
    fontWeight: '500',
  },
  disabledButtonText: {
    color: brandColors.gray[500],
  },
  // 说明文字样式
  instructionSection: {
    alignItems: 'flex-end',
    marginTop: spacing.lg,
    marginBottom: spacing.xl,
  },
  instructionText: {
    ...typography.body,
    color: brandColors.text.secondary,
  },
  // 弹窗样式
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: brandColors.white,
    borderRadius: 12,
    padding: spacing.xl,
    margin: spacing.lg,
    minWidth: 320,
    maxHeight: '90%',
    width: '95%',
    shadowColor: brandColors.dark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  modalTitle: {
    ...typography.h3,
    color: brandColors.text.primary,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  modalMessage: {
    ...typography.body,
    color: brandColors.text.secondary,
    textAlign: 'center',
    marginBottom: spacing.xl,
  },
  modalActions: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  modalButton: {
    flex: 1,
    paddingVertical: spacing.md,
    borderRadius: 8,
    alignItems: 'center',
  },
  rejectButton: {
    backgroundColor: brandColors.danger,
  },
  acceptModalButton: {
    backgroundColor: brandColors.success,
  },
  modalButtonText: {
    ...typography.bodyMedium,
    color: brandColors.white,
    fontWeight: '500',
  },
});

export default Feedback;
