import React, { useState, useEffect, useRef } from 'react';
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
  TouchableWithoutFeedback,
  Modal,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { WebView } from 'react-native-webview';
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

// 扩展全局类型
declare global {
  var setParentScrollEnabled: ((enabled: boolean) => void) | undefined;
}

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

interface ChatMessage {
  role: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

// 轻量 Markdown 预览组件（保留但当前未使用）
const MarkdownPreview: React.FC<{ content: string }> = ({ content }) => {
  const renderInline = (text: string): React.ReactNode => {
    const parts: Array<{ type: 'bold' | 'italic' | 'text'; value: string }> = [];
    const regex = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;
    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push({ type: 'text', value: text.slice(lastIndex, match.index) });
      }
      const token = match[0];
      if (token.startsWith('**') && token.endsWith('**')) {
        parts.push({ type: 'bold', value: token.slice(2, -2) });
      } else if (token.startsWith('*') && token.endsWith('*')) {
        parts.push({ type: 'italic', value: token.slice(1, -1) });
      } else {
        parts.push({ type: 'text', value: token });
      }
      lastIndex = match.index + token.length;
    }
    if (lastIndex < text.length) {
      parts.push({ type: 'text', value: text.slice(lastIndex) });
    }

    return (
      <Text>
        {parts.map((p, i) => (
          <Text
            key={i}
            style={
              p.type === 'bold'
                ? styles.mdBold
                : p.type === 'italic'
                ? styles.mdItalic
                : undefined
            }
          >
            {p.value}
          </Text>
        ))}
      </Text>
    );
  };

  const lines = content.split(/\r?\n/);
  return (
    <View>
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (trimmed === '') {
          return <View key={idx} style={{ height: 8 }} />;
        }
        if (trimmed === '---' || trimmed === '___') {
          return <View key={idx} style={styles.mdDivider} />;
        }
        if (trimmed.startsWith('### ')) {
          return (
            <Text key={idx} style={styles.mdH3}>
              {renderInline(trimmed.replace(/^###\s+/, ''))}
            </Text>
          );
        }
        if (trimmed.startsWith('## ')) {
          return (
            <Text key={idx} style={styles.mdH2}>
              {renderInline(trimmed.replace(/^##\s+/, ''))}
            </Text>
          );
        }
        if (trimmed.startsWith('# ')) {
          return (
            <Text key={idx} style={styles.mdH1}>
              {renderInline(trimmed.replace(/^#\s+/, ''))}
            </Text>
          );
        }
        return (
          <Text key={idx} style={styles.mdParagraph}>
            {renderInline(line)}
          </Text>
        );
      })}
    </View>
  );
};

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

  // Markdown 报告已废弃
  const [isReportGenerated, setIsReportGenerated] = useState<boolean>(false);
  const [activeDropdownId, setActiveDropdownId] = useState<string | null>(null);
  const [scrollEnabled, setScrollEnabled] = useState<boolean>(true);
  const scrollViewRef = useRef<ScrollView>(null);
  const [isChatVisible, setIsChatVisible] = useState<boolean>(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState<string>('');
  // 仅使用 HTML 视图
  const htmlWebViewRef = useRef<any>(null);
  const [htmlContent, setHtmlContent] = useState<string>('');
  const [isReportModalVisible, setIsReportModalVisible] = useState<boolean>(false);

  // 设置全局滚动控制函数
  useEffect(() => {
    global.setParentScrollEnabled = (enabled: boolean) => {
      setScrollEnabled(enabled);
      if (scrollViewRef.current) {
        scrollViewRef.current.setNativeProps({ scrollEnabled: enabled });
      }
    };
    return () => {
      delete global.setParentScrollEnabled;
    };
  }, []);

  // 初始化 HTML 内容（创意解读与香调构思 → 折叠式卡片）
  useEffect(() => {
    setHtmlContent(buildCreativeHtml());
  }, []);

  // 监听触摸事件来关闭下拉框
  const handleOutsideTouch = () => {
    if (activeDropdownId) {
      setActiveDropdownId(null);
    }
  };

  // 构建用于日志预览的结构化报告数据
  const buildReportDetailData = (data: RequirementFormData) => ({
    '项目主题：': data.theme,
    '产品类别：': data.productCategory,
    '产品子类：': data.productSubCategory,
    '应用场景：': data.applicationScenario,
    '香型类型：': data.fragranceType,
    '前调：': data.topNotes,
    '中调：': data.middleNotes,
    '后调：': data.baseNotes,
    '颜色要求：': data.colorRequirement,
    '原料要求：': data.rawMaterialRequirements,
    '目标价格：': `${data.targetPriceMin} - ${data.targetPriceMax}`,
    '法规要求：': data.regulatoryRequirements,
    '香型类型2：': data.fragranceType2,
    '小样数量：': data.sampleQuantity,
    '小样规格：': data.sampleSpecifications,
    '项目时间：': `${String(data.projectTimeline.startDate)} - ${String(data.projectTimeline.endDate)}`,
    '目标年龄段：': data.targetAgeRange,
    '目标性别：': data.targetGender,
    '目标收入：': data.targetIncome,
    '其他要求：': data.targetOther,
    '产品理念：': data.productConcept,
  });

  // 处理下拉栏打开/关闭
  const handleDropdownOpen = (id?: string) => {
    // 关闭其他所有下拉栏，只保留当前打开的
    setActiveDropdownId(id || null);
  };

  const handleDropdownClose = () => {
    setActiveDropdownId(null);
  };

  const handleSubmit = () => {
    if (!formData.theme || !formData.productCategory || !formData.fragranceType) {
      Alert.alert('错误', '请填写必填字段');
      return;
    }
    // 预览提交数据
    const preview = buildReportDetailData(formData);
    console.log('提交数据', JSON.stringify(preview));

    // 生成 HTML 报告
    const fullHtml = buildFullReportHtml(formData);
    setHtmlContent(fullHtml);
    setIsReportGenerated(true);

    Alert.alert('成功', '需求报告已生成', [
      { text: '确定', onPress: () => console.log('Form submitted: HTML report generated') }
    ]);
  };

  const handleOpenChat = () => {
    setIsChatVisible(true);
    if (chatMessages.length === 0) {
      setChatMessages([
        {
          role: 'ai',
          content:
            `您好，我是AI助手。基于你刚刚生成的需求报告（主题：${formData.theme || '未填写'}），我们可以进一步细化需求。例如：目标市场/渠道、留香时长偏好、是否限制过敏原、稳定性与着色要求等。有什么想补充的吗？`,
          timestamp: new Date(),
        },
      ]);
    }
  };

  const handleCloseChat = () => {
    setIsChatVisible(false);
  };

  const handleSendMessage = () => {
    const trimmed = chatInput.trim();
    if (!trimmed) return;
    const userMessage: ChatMessage = { role: 'user', content: trimmed, timestamp: new Date() };
    setChatMessages(prev => [...prev, userMessage]);
    setChatInput('');

    // 模拟AI回复
    setTimeout(() => {
      const aiMessage: ChatMessage = {
        role: 'ai',
        content: `我已收到你的补充：“${trimmed}”。为了更好地制定配方与打样计划，还建议补充：目标客户所在地区、对IFRA/国标的特殊限制、期望小样反馈周期等。`,
        timestamp: new Date(),
      };
      setChatMessages(prev => [...prev, aiMessage]);
    }, 500);
  };

  // HTML 保存确认弹窗
  const handleConfirmSaveHtml = () => {
    Alert.alert('确认', '是否保存当前报告？', [
      { text: '取消', style: 'cancel' },
      { text: '保存', onPress: handleSaveHtml },
    ]);
  };

  const openReportModal = () => {
    setIsReportModalVisible(true);
  };

  const closeReportModal = () => {
    setIsReportModalVisible(false);
  };
  


  const buildCreativeHtml = (): string => buildFullReportHtml(formData);

  // 汇总：整页 HTML
  const buildFullReportHtml = (data: RequirementFormData): string => {
    const htmlHeader = `<!DOCTYPE html><html lang="zh-CN"><head><meta charset=\"UTF-8\"/><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"/>
    <style>
      :root{--bg:#f8fafc;--card:#ffffff;--txt:#1e293b;--muted:#64748b;--primary:#FF6B35;--border:#e2e8f0;--focus-bg:#fff8f6}
      html,body{margin:0;padding:0;background:var(--bg);color:var(--txt);font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif}
      .wrap{padding:16px}
      .h1{font-size:24px;font-weight:700;margin:0 0 16px;color:var(--txt)}
      .section{background:var(--card);border:1px solid var(--border);border-radius:12px;margin:12px 0;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1)}
      .section h3{margin:0;padding:16px;border-bottom:1px solid var(--border);font-size:18px;font-weight:600;color:var(--txt)}
      .section .body{padding:16px}
      .section .body p{margin:0 0 12px;line-height:1.6}
      .section .body p:last-child{margin-bottom:0}
      .section .body strong{color:var(--txt);font-weight:600}
      details.card{background:var(--card);border:1px solid var(--border);border-radius:12px;margin-bottom:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.05)}
      summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;padding:16px;background:var(--card);transition:background-color 0.2s}
      summary:hover{background-color:#f1f5f9}
      summary::-webkit-details-marker{display:none}
      .badge{background:var(--primary)!important;color:white!important;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:500;cursor:text;transition:all 0.2s}
      .badge[contenteditable=\"true\"]:hover{background-color:#e55a2b!important;color:white!important}
      .badge[contenteditable=\"true\"]:focus{outline:2px solid #FF8C69!important;background-color:var(--primary)!important;color:white!important;box-shadow:0 0 0 1px white inset}
      .card-title{font-weight:600;font-size:16px;color:var(--txt);cursor:text;transition:all 0.2s}
      .card-title[contenteditable=\"true\"]:hover{background-color:#f1f5f9;border-radius:4px}
      .card-title[contenteditable=\"true\"]:focus{outline:2px solid var(--primary);background-color:var(--focus-bg);border-radius:4px}
      .content{padding:16px;border-top:1px solid var(--border);line-height:1.6}
      .content[contenteditable=\"true\"]{cursor:text;transition:all 0.2s}
      .content[contenteditable=\"true\"]:hover{background-color:#f8fafc}
      .content[contenteditable=\"true\"]:focus{outline:2px solid var(--primary);background-color:var(--focus-bg);border-radius:8px}
      .muted{color:var(--muted);font-size:14px;margin-top:12px;font-style:italic}
      .journey{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:16px;margin-top:16px;box-shadow:0 1px 3px rgba(0,0,0,0.05)}
      .journey[contenteditable=\"true\"]{cursor:text;transition:all 0.2s}
      .journey[contenteditable=\"true\"]:hover{background-color:#f8fafc}
      .journey[contenteditable=\"true\"]:focus{outline:2px solid var(--primary);background-color:var(--focus-bg)}
      .journey h3{margin:0 0 12px;font-size:18px;font-weight:600;color:var(--txt)}
      .journey ul{margin:0;padding-left:20px;color:var(--txt)}
      .journey li{margin-bottom:8px;line-height:1.6}
      .journey li:last-child{margin-bottom:0}
    </style></head><body>`;

    const overview = `
    <section class=\"section\"><h3>香水需求报告</h3><div class=\"body content\" contenteditable=\"true\">
    <p><strong>项目名称</strong>: "晨露玫瑰" (暂定名，旨在体现清新感)</p>
    <p><strong>核心理念</strong>: 献给都市独立女性的通勤之选，一支摆脱了传统玫瑰的厚重与甜腻，如清晨带着露珠的玫瑰般，清新、通透、且充满韧性的现代花香调香水。</p>
    <p><strong>目标消费者画像 (Target Audience Profile)</strong></p>
    <p><strong>人群</strong>: 25-35岁的都市女性。</p>
    <p><strong>特征</strong>:</p>
    <p><strong>职业与生活</strong>: 通常是处于事业上升期的白领、专业人士或创意工作者。她们生活节奏快，追求效率与品质。</p>
    <p><strong>价值观</strong>: 独立、自信、有良好的教育背景和审美情趣。她们不仅关注产品的外在，更看重其内在品质、品牌故事和"纯净"、"天然"等价值标签。</p>
    <p><strong>消费习惯</strong>: 属于中高收入人群，愿意为高品质、独特体验和情感共鸣的产品支付溢价。她们是小众香水、设计师品牌的潜在爱好者。</p>
    <p><strong>香水诉求</strong>:</p>
    <p><strong>场景匹配</strong>: 需要一款适合日常通勤、办公室等近距离社交场景的香水。气味需有存在感但不能扰人，即"扩散度"适中。</p>
    <p><strong>风格偏好</strong>: 她们不追求"甜美少女感"，也不喜欢过于成熟、带有侵略性的"大女主香"。她们寻求的是一种能体现专业、优雅，同时又保留个人特质的"伪体香"或高级感香气。</p>

    </div></section>`

    const creative = (() => {
      return `
      <section class=\"section\"><h3>创意解读与香调构思</h3><div class=\"body\">
        ${[
          { name: '水感清新', ratio: '10%', body: '功能：唤起“露珠”的意象。提供清冽多汁的感受，如刚切开的新鲜水果，瞬间提升香气的年轻感与水润感、洗去沉闷。' },
          { name: '绿叶清新', ratio: '10%', body: '功能：塑造“枝叶”的轮廓。带来鲜嫩绿叶或花茎被折断时的青涩气息，为整体香气注入生命力与清透感，构建自然的呼吸空间。' },
          { name: '果香清新', ratio: '10%', body: '功能：注入“阳光”的活力。它不是幼稚的甜，而是一种明快、闪亮、略带微酸的高级质感，让玫瑰的开场充满光芒，显得更加现代与自信。' },
          { name: '花香清新', ratio: '30%', body: '功能：(香气主角) 描绘“玫瑰”的质感。这是玫瑰的灵魂，但以一种极其清雅细腻的方式呈现。它让人联想到含苞待放的花蕾和轻盈的、半透明的花瓣，纯粹、温柔且富有女性魅力。' },
          { name: '花香甜香', ratio: '20%', body: '功能：赋予“花心”的深度。为了避免香气过于单薄，我们需要这一部分来提供更丰富的果香和天然蜜感。它模拟了玫瑰在盛放时散发的、更加柔和甜美的核心香气，增加了层次与温度。' },
          { name: '木质香调', ratio: '10%', body: '功能：建立“风骨”与支撑。为香水提供一个稳定、干爽的基底，增强香水的骨架感和穿着者的知性气质。木质的线性、沉静感能完美平衡花香的柔美，避免甜腻。' },
          { name: '琥珀/麝香调', ratio: '10%', body: '功能：营造“体温”与余韵。这是香气的“第二层肌肤”，为了解供一种温暖、洁净、柔软的贴肤感。它不追求强烈的存在感，而是为了极大提升持香度和高级感，留下安心且难忘的温暖尾声。' },
        ].map((m,i)=>`
          <details class=\"card\" ${i<2?'open':''}>
            <summary>
              <span class=\"card-title\" contenteditable=\"true\">${m.name}</span>
              <span class=\"badge\" contenteditable=\"true\">占比 ${m.ratio}</span>
            </summary>
            <div class=\"content\" contenteditable=\"true\">${m.body}</div>
          </details>
        `).join('')}

        <div class=\"journey\" contenteditable=\"true\">
          <h3>香气演变旅程 (Scent Journey)</h3>
          <ul>
            <li><strong>初调 (0-15分钟)</strong>：如同清晨推开花园的大门，迎面而来的是混合着水汽、绿叶与微酸果香的清新空气，明亮而振奋。</li>
            <li><strong>中段 (15分钟-3小时)</strong>：阳光洒下，露珠蒸发，玫瑰花瓣的清雅与花心的甜润逐渐绽放，交织成一曲复杂而不造作的二重奏，优雅而从容。</li>
            <li><strong>尾声 (3小时以后)</strong>：花香渐渐与肌肤融合，温暖的木质与洁净的体香感浮现，形成一种持久、私密且高级的余韵，仿佛是使用者自身散发出的气质。</li>
          </ul>
          <p class=\"muted\">提示：以上内容可直接编辑，修改后点击“保存HTML”以同步到应用。</p>
        </div>
      </div></section>`;
    })();

    return `${htmlHeader}<div class=\"wrap\"><div class=\"h1\">香水需求报告</div>${overview}${creative}<p class=\"muted\">本报告由AI生成，可根据实际需求进行调整。点击任意内容区域即可编辑。</p></div><script>
      (function(){
        // 防止链接跳转和处理可编辑元素点击
        document.addEventListener('click',function(e){
          var t=e.target;
          if(t&&t.closest('a')){
            e.preventDefault();
          }
          // 防止点击可编辑的标题和占比时触发折叠/展开
          if(t && (t.classList.contains('card-title') || t.classList.contains('badge'))) {
            e.stopPropagation();
          }
        });
        
        // 初始化编辑功能
        function initEditing() {
          var editableElements = document.querySelectorAll('.content, .journey, .card-title, .badge');
          editableElements.forEach(function(el) {
            el.contentEditable = true;
            el.style.cursor = 'text';
            el.style.minHeight = '1em';
            
            // 添加视觉反馈
            el.addEventListener('mouseenter', function() {
              if (this !== document.activeElement) {
                if (this.classList.contains('badge')) {
                  this.style.backgroundColor = '#e55a2b';
                } else {
                  this.style.backgroundColor = '#f8fafc';
                }
              }
            });
            
            el.addEventListener('mouseleave', function() {
              if (this !== document.activeElement) {
                if (this.classList.contains('badge')) {
                  this.style.backgroundColor = '#FF6B35';
                } else {
                  this.style.backgroundColor = 'transparent';
                }
              }
            });
            
            el.addEventListener('focus', function() {
              if (this.classList.contains('badge')) {
                this.style.outline = '2px solid #FF8C69';
                this.style.backgroundColor = '#FF6B35';
                this.style.color = 'white';
                this.style.boxShadow = '0 0 0 1px white inset';
              } else {
                this.style.outline = '2px solid #FF6B35';
                this.style.backgroundColor = '#fff8f6';
                this.style.borderRadius = '8px';
              }
            });
            
            el.addEventListener('blur', function() {
              this.style.outline = 'none';
              this.style.boxShadow = 'none';
              if (this.classList.contains('badge')) {
                this.style.backgroundColor = '#FF6B35';
                this.style.color = 'white';
              } else {
                this.style.backgroundColor = 'transparent';
              }
            });
            
            // 防止富文本粘贴
            el.addEventListener('paste', function(e) {
              e.preventDefault();
              var text = (e.clipboardData || window.clipboardData).getData('text/plain');
              document.execCommand('insertText', false, text);
            });
            
            // 防止拖拽
            el.addEventListener('drop', function(e) {
              e.preventDefault();
            });
          });
        }
        
        // DOM加载完成后初始化
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', initEditing);
        } else {
          initEditing();
        }
      })();
    </script></body></html>`;
  };

  const handleResetHtml = () => {
    const html = buildCreativeHtml();
    setHtmlContent(html);
  };

  const handleSaveHtml = () => {
    if (htmlWebViewRef.current) {
      const js = `window.ReactNativeWebView.postMessage(document.documentElement.outerHTML); true;`;
      htmlWebViewRef.current.injectJavaScript(js);
    }
  };

  const onWebViewMessage = (event: any) => {
    const html = String(event?.nativeEvent?.data || '');
    if (html) {
      setHtmlContent(html);
      Alert.alert('已保存', '已同步HTML内容');
    }
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
    setHtmlContent('');
    setIsReportGenerated(false);
    setActiveDropdownId(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={brandColors.background.primary} />
      
      <TouchableWithoutFeedback onPress={handleOutsideTouch}>
        <View style={{ flex: 1 }}>
          <ScrollView 
            ref={scrollViewRef}
            style={styles.content} 
            showsVerticalScrollIndicator={false} 
            keyboardShouldPersistTaps="always"
            scrollEnabled={scrollEnabled}
          >
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

            <TouchableWithoutFeedback>
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
                  searchable={true}
                  searchPlaceholder="搜索产品类别..."
                  onDropdownOpen={() => handleDropdownOpen('productCategory')}
                  onDropdownClose={handleDropdownClose}
                  id="productCategory"
                  activeId={activeDropdownId}
                />
              </View>
            </TouchableWithoutFeedback>

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
                  searchable={true}
                  searchPlaceholder="搜索产品子类别..."
                  onDropdownOpen={() => handleDropdownOpen('productSubCategory')}
                  onDropdownClose={handleDropdownClose}
                  id="productSubCategory"
                  activeId={activeDropdownId}
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
                  searchable={true}
                  searchPlaceholder="搜索应用场景..."
                  onDropdownOpen={() => handleDropdownOpen('applicationScenario')}
                  onDropdownClose={handleDropdownClose}
                  id="applicationScenario"
                  activeId={activeDropdownId}
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
                onDropdownOpen={() => handleDropdownOpen('fragranceType')}
                onDropdownClose={handleDropdownClose}
                id="fragranceType"
                activeId={activeDropdownId}
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
          <Text style={styles.sectionTitle}>香精要求</Text>
          
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
                onDropdownOpen={() => handleDropdownOpen('fragranceType2')}
                onDropdownClose={handleDropdownClose}
                id="fragranceType2"
                activeId={activeDropdownId}
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
                  <DropdownPicker
                    options={[
                      { label: '女性', value: '女性' },
                      { label: '男性', value: '男性' },
                      { label: '不限', value: '不限' },
                    ]}
                    value={formData.targetGender}
                    onValueChange={(value) => setFormData({ ...formData, targetGender: String(value) })}  
                    placeholder="请选择性别"
                    onDropdownOpen={() => handleDropdownOpen('targetGender')}
                    onDropdownClose={handleDropdownClose}
                    id="targetGender"
                    activeId={activeDropdownId}
                  />
                </View>
                <View style={styles.customerInput}>
                  <Text style={styles.customerLabel}>收入水平</Text>
                  <DropdownPicker
                    options={[
                      { label: '低收入', value: '低收入' },
                      { label: '中等收入', value: '中等收入' },
                      { label: '中高收入', value: '中高收入' },
                      { label: '高收入', value: '高收入' },
                      { label: '不限', value: '不限' },
                    ]}
                    value={formData.targetIncome}
                    onValueChange={(value) => setFormData({ ...formData, targetIncome: String(value) })}
                    placeholder="请选择收入水平"
                    onDropdownOpen={() => handleDropdownOpen('targetIncome')}
                    onDropdownClose={handleDropdownClose}
                    id="targetIncome"
                    activeId={activeDropdownId}
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
              <View style={styles.reportActions}>
                <TouchableOpacity 
                  style={[styles.actionButton, { marginBottom: spacing.sm }]} 
                  onPress={openReportModal}
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                  <Text style={styles.actionButtonText}>全屏预览/编辑</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.actionButton, { marginBottom: spacing.sm }]} 
                  onPress={handleConfirmSaveHtml}
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                  <Text style={styles.actionButtonText}>保存报告</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.actionButtonPrimary} 
                  onPress={handleOpenChat}
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                  <Text style={styles.actionButtonPrimaryText}>与AI继续沟通</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
          </ScrollView>

      {/* 报告全屏编辑/预览弹窗 */}
      <Modal
        visible={isReportModalVisible}
        animationType="slide"
        onRequestClose={closeReportModal}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>报告编辑</Text>
            <TouchableOpacity style={styles.modalCloseButton} onPress={closeReportModal}>
              <Text style={styles.modalCloseButtonText}>关闭</Text>
            </TouchableOpacity>
          </View>
          <WebView
            ref={htmlWebViewRef}
            originWhitelist={["*"]}
            onMessage={onWebViewMessage}
            source={{ html: htmlContent || buildCreativeHtml() }}
            style={{ flex: 1, backgroundColor: 'transparent' }}
            scrollEnabled={true}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={true}
            onLoadEnd={() => {
              // 页面加载完成后启用编辑功能
              const jsCode = `
                (function() {
                  // 处理点击事件，防止编辑时触发折叠
                  document.addEventListener('click', function(e) {
                    var t = e.target;
                    if (t && (t.classList.contains('card-title') || t.classList.contains('badge'))) {
                      e.stopPropagation();
                    }
                  });
                  
                  // 等待DOM完全加载
                  if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', initEditing);
                  } else {
                    initEditing();
                  }
                  
                  function initEditing() {
                    // 让所有内容可编辑
                    const editableElements = document.querySelectorAll('.content, .journey, .card-title, .badge');
                    editableElements.forEach(el => {
                      el.contentEditable = true;
                      el.style.cursor = 'text';
                      el.style.minHeight = '1em';
                      
                      // 添加编辑状态样式
                      el.addEventListener('focus', function() {
                        if (this.classList.contains('badge')) {
                          this.style.outline = '2px solid #FF8C69';
                          this.style.backgroundColor = '#FF6B35';
                          this.style.color = 'white';
                          this.style.boxShadow = '0 0 0 1px white inset';
                        } else {
                          this.style.outline = '2px solid #FF6B35';
                          this.style.backgroundColor = '#FFF8F6';
                          this.style.borderRadius = '8px';
                        }
                      });
                      
                      el.addEventListener('blur', function() {
                        this.style.outline = 'none';
                        this.style.boxShadow = 'none';
                        if (this.classList.contains('badge')) {
                          this.style.backgroundColor = '#FF6B35';
                          this.style.color = 'white';
                        } else {
                          this.style.backgroundColor = 'transparent';
                        }
                      });
                      
                      // 防止富文本粘贴
                      el.addEventListener('paste', function(e) {
                        e.preventDefault();
                        const text = (e.clipboardData || window.clipboardData).getData('text/plain');
                        document.execCommand('insertText', false, text);
                      });
                    });
                    
                    // 显示编辑提示
                    console.log('编辑功能已启用');
                  }
                })();
                true;
              `;
              htmlWebViewRef.current?.injectJavaScript(jsCode);
            }}
          />
          <View style={styles.modalBottomActions}>
            <TouchableOpacity style={styles.modalSaveButton} onPress={handleConfirmSaveHtml}>
              <Text style={styles.modalSaveButtonText}>保存报告</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>

      {/* AI 对话弹窗 */}
      <Modal
        visible={isChatVisible}
        animationType="slide"
        onRequestClose={handleCloseChat}
      >
        <SafeAreaView style={styles.chatModalContainer}>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          >
            <View style={styles.chatHeader}>
              <Text style={styles.chatTitle}>AI 需求对话</Text>
              <TouchableOpacity style={styles.chatCloseButton} onPress={handleCloseChat}>
                <Text style={styles.chatCloseButtonText}>关闭</Text>
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.chatMessages} contentContainerStyle={{ paddingBottom: spacing.lg }}>
              {chatMessages.map((msg, index) => (
                <View
                  key={`${msg.role}-${index}-${msg.timestamp.getTime()}`}
                  style={[
                    styles.chatMessageRow,
                    msg.role === 'user' ? { justifyContent: 'flex-end' } : { justifyContent: 'flex-start' },
                  ]}
                >
                  <View style={msg.role === 'user' ? styles.chatBubbleUser : styles.chatBubbleAI}>
                    <Text style={msg.role === 'user' ? styles.chatBubbleUserText : styles.chatBubbleAIText}>
                      {msg.content}
                    </Text>
                  </View>
                </View>
              ))}
            </ScrollView>

            <View style={styles.chatInputBar}>
              <TextInput
                style={styles.chatTextInput}
                value={chatInput}
                onChangeText={setChatInput}
                placeholder="请输入你的补充或问题..."
                placeholderTextColor={brandColors.text.secondary}
                multiline
              />
              <TouchableOpacity style={styles.chatSendButton} onPress={handleSendMessage}>
                <Text style={styles.chatSendButtonText}>发送</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </Modal>
        </View>
      </TouchableWithoutFeedback>
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
    flexDirection: 'column',
    marginTop: spacing.lg,
    gap: spacing.sm,
  },
  webActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: spacing.sm,
  },
  toggleRow: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: brandColors.gray[100],
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: spacing.md,
  },
  toggleButton: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
  },
  toggleButtonActive: {
    backgroundColor: brandColors.white,
  },
  toggleButtonText: {
    ...typography.bodyMedium,
    color: brandColors.text.secondary,
  },
  toggleButtonTextActive: {
    color: brandColors.text.primary,
  },
  markdownPreviewBox: {
    minHeight: 300,
    borderWidth: 1,
    borderColor: brandColors.gray[200],
    borderRadius: 8,
    padding: spacing.lg,
    backgroundColor: brandColors.background.primary,
  },
  actionButton: {
    backgroundColor: brandColors.gray[200],
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 44,
  },
  actionButtonText: {
    ...typography.bodyMedium,
    color: brandColors.text.primary,
  },
  actionButtonPrimary: {
    backgroundColor: brandColors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: 8,
    minWidth: 120,
    alignItems: 'center',
  },
  actionButtonPrimaryText: {
    ...typography.bodyMedium,
    color: brandColors.white,
  },
  // Modal styles
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: brandColors.gray[200],
    backgroundColor: brandColors.white,
  },
  modalTitle: {
    ...typography.h2,
    color: brandColors.text.primary,
  },
  modalCloseButton: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 8,
    backgroundColor: brandColors.gray[200],
  },
  modalCloseButtonText: {
    ...typography.bodyMedium,
    color: brandColors.text.primary,
  },
  modalBottomActions: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderTopWidth: 1,
    borderTopColor: brandColors.gray[200],
    backgroundColor: brandColors.white,
  },
  modalSaveButton: {
    backgroundColor: brandColors.primary,
    paddingVertical: spacing.md,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 44,
  },
  modalSaveButtonText: {
    ...typography.button,
    color: brandColors.white,
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
  // Chat Modal styles
  chatModalContainer: {
    flex: 1,
    backgroundColor: brandColors.background.primary,
  },
  chatHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: brandColors.gray[200],
    backgroundColor: brandColors.white,
  },
  chatTitle: {
    ...typography.h3,
    color: brandColors.text.primary,
  },
  chatCloseButton: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 8,
    backgroundColor: brandColors.gray[200],
  },
  chatCloseButtonText: {
    ...typography.bodyMedium,
    color: brandColors.text.primary,
  },
  chatMessages: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
  },
  chatMessageRow: {
    flexDirection: 'row',
    marginBottom: spacing.sm,
  },
  chatBubbleUser: {
    maxWidth: '80%',
    backgroundColor: brandColors.primary,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: 12,
    borderTopRightRadius: 2,
  },
  chatBubbleAI: {
    maxWidth: '80%',
    backgroundColor: brandColors.gray[100],
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: 12,
    borderTopLeftRadius: 2,
  },
  chatBubbleUserText: {
    ...typography.bodyMedium,
    color: brandColors.white,
  },
  chatBubbleAIText: {
    ...typography.bodyMedium,
    color: brandColors.text.primary,
  },
  chatInputBar: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: brandColors.white,
    borderTopWidth: 1,
    borderTopColor: brandColors.gray[200],
  },
  chatTextInput: {
    flex: 1,
    ...input.base,
    maxHeight: 120,
    color: brandColors.text.primary,
    fontSize: 16,
    paddingVertical: spacing.sm,
    marginRight: spacing.sm,
  },
  chatSendButton: {
    backgroundColor: brandColors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: 10,
  },
  chatSendButtonText: {
    ...typography.bodyMedium,
    color: brandColors.white,
  },
  // Markdown typography
  mdH1: {
    ...typography.h1,
    marginBottom: spacing.md,
    color: brandColors.text.primary,
  },
  mdH2: {
    ...typography.h2,
    marginBottom: spacing.sm,
    color: brandColors.text.primary,
  },
  mdH3: {
    ...typography.h3,
    marginBottom: spacing.xs,
    color: brandColors.text.primary,
  },
  mdParagraph: {
    ...typography.bodyMedium,
    marginBottom: spacing.xs,
    color: brandColors.text.primary,
    lineHeight: 22,
  },
  mdBold: {
    fontWeight: '700',
    color: brandColors.text.primary,
  },
  mdItalic: {
    fontStyle: 'italic',
    color: brandColors.text.primary,
  },
  mdDivider: {
    height: 1,
    backgroundColor: brandColors.gray[200],
    marginVertical: spacing.sm,
  },
});

export default RequirementForm;
