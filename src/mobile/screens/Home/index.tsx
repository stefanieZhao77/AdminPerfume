import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { brandColors } from '../../styles/colors';
import { container, card, typography, spacing, shadows } from '../../styles/design';
import { Button, Card as CardComponent } from '../../components/common';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={brandColors.background.primary} />
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 头部区域 */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.title}>AdminPerfume</Text>
            <Text style={styles.subtitle}>香水管理系统</Text>
            <View style={styles.headerDecoration} />
          </View>
        </View>

        {/* 功能菜单区域 */}
        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>功能菜单</Text>
          
          <TouchableOpacity 
            style={styles.menuCard}
            onPress={() => navigation.navigate('RequirementForm')}
            activeOpacity={0.8}
          >
            <View style={styles.cardHeader}>
              <View style={[styles.iconContainer, { backgroundColor: brandColors.primary }]}>
                <Text style={styles.iconText}>📋</Text>
              </View>
              <View style={styles.cardTitleContainer}>
                <Text style={styles.cardTitle}>需求管理</Text>
                <Text style={styles.cardSubtitle}>创建和管理香水项目需求</Text>
              </View>
            </View>
            <View style={styles.cardArrow}>
              <Text style={styles.arrowText}>→</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.menuCard}
            onPress={() => navigation.navigate('Feedback')}
            activeOpacity={0.8}
          >
            <View style={styles.cardHeader}>
              <View style={[styles.iconContainer, { backgroundColor: brandColors.info }]}>
                <Text style={styles.iconText}>💬</Text>
              </View>
              <View style={styles.cardTitleContainer}>
                <Text style={styles.cardTitle}>反馈系统</Text>
                <Text style={styles.cardSubtitle}>收集和管理用户反馈</Text>
              </View>
            </View>
            <View style={styles.cardArrow}>
              <Text style={styles.arrowText}>→</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.menuCard}
            onPress={() => navigation.navigate('FragranceRating')}
            activeOpacity={0.8}
          >
            <View style={styles.cardHeader}>
              <View style={[styles.iconContainer, { backgroundColor: brandColors.success }]}>
                <Text style={styles.iconText}>⭐</Text>
              </View>
              <View style={styles.cardTitleContainer}>
                <Text style={styles.cardTitle}>香调评分</Text>
                <Text style={styles.cardSubtitle}>对香水香调进行评分和分析</Text>
              </View>
            </View>
            <View style={styles.cardArrow}>
              <Text style={styles.arrowText}>→</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.menuCard}
            onPress={() => navigation.navigate('ComponentShowcase')}
            activeOpacity={0.8}
          >
            <View style={styles.cardHeader}>
              <View style={[styles.iconContainer, { backgroundColor: brandColors.warning }]}>
                <Text style={styles.iconText}>🎨</Text>
              </View>
              <View style={styles.cardTitleContainer}>
                <Text style={styles.cardTitle}>组件展示</Text>
                <Text style={styles.cardSubtitle}>查看所有UI组件的展示</Text>
              </View>
            </View>
            <View style={styles.cardArrow}>
              <Text style={styles.arrowText}>→</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* 底部信息区域 */}
        <View style={styles.infoSection}>
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>欢迎使用</Text>
            <Text style={styles.infoText}>
              选择上方功能开始使用 AdminPerfume Mobile 应用
            </Text>
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
    paddingTop: spacing.lg,
  },
  headerContent: {
    alignItems: 'center',
    position: 'relative',
  },
  headerDecoration: {
    position: 'absolute',
    top: -20,
    left: -20,
    right: -20,
    height: 100,
    backgroundColor: brandColors.primary,
    borderRadius: 20,
    opacity: 0.08,
    zIndex: -1,
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
  menuSection: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    ...typography.h3,
    marginBottom: spacing.lg,
    color: brandColors.text.primary,
  },
  menuCard: {
    ...card.elevated,
    marginBottom: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
    ...shadows.sm,
  },
  iconText: {
    fontSize: 20,
  },
  cardTitleContainer: {
    flex: 1,
  },
  cardTitle: {
    ...typography.h3,
    marginBottom: spacing.xs,
    color: brandColors.text.primary,
  },
  cardSubtitle: {
    ...typography.caption,
    color: brandColors.text.secondary,
    lineHeight: 18,
  },
  cardArrow: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: brandColors.background.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.sm,
  },
  arrowText: {
    fontSize: 16,
    color: brandColors.text.secondary,
    fontWeight: 'bold',
  },
  infoSection: {
    marginTop: spacing.xl,
  },
  infoCard: {
    ...card.base,
    alignItems: 'center',
    padding: spacing.lg,
  },
  infoTitle: {
    ...typography.h3,
    marginBottom: spacing.sm,
    color: brandColors.text.primary,
  },
  infoText: {
    ...typography.body,
    textAlign: 'center',
    color: brandColors.text.secondary,
    lineHeight: 22,
  },
});

export default HomeScreen;
