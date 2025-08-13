/**
 * 表单选项配置文件
 * 集中管理所有表单的选项数据，便于统一修改和维护
 */

// 产品大类选项
export const productCategoryOptions = [
  { label: '香水', value: 'perfume', description: '香水产品' },
  { label: '香氛', value: 'fragrance', description: '香氛产品' },
  { label: '个人护理', value: 'personal_care', description: '个人护理产品' },
  { label: '家居香氛', value: 'home_fragrance', description: '家居香氛产品' },
  { label: '其他', value: 'other', description: '其他产品' },
];

// 产品子类选项（根据大类筛选）
export const productSubCategoryOptions = {
  perfume: [
    { label: '女士香水', value: 'women_perfume', description: '女士香水' },
    { label: '男士香水', value: 'men_perfume', description: '男士香水' },
    { label: '中性香水', value: 'unisex_perfume', description: '中性香水' },
    { label: '古龙水', value: 'cologne', description: '古龙水' },
  ],
  fragrance: [
    { label: '香体喷雾', value: 'body_spray', description: '香体喷雾' },
    { label: '香体乳', value: 'body_lotion', description: '香体乳' },
    { label: '香体膏', value: 'body_balm', description: '香体膏' },
  ],
  personal_care: [
    { label: '沐浴露', value: 'shower_gel', description: '沐浴露产品' },
    { label: '洗发水', value: 'shampoo', description: '洗发水产品' },
    { label: '身体乳', value: 'body_lotion', description: '身体乳产品' },
    { label: '护手霜', value: 'hand_cream', description: '护手霜产品' },
    { label: '香皂', value: 'soap', description: '香皂产品' },
    { label: '牙膏', value: 'toothpaste', description: '牙膏产品' },
    { label: '漱口水', value: 'mouthwash', description: '漱口水产品' },
  ],
  home_fragrance: [
    { label: '香氛蜡烛', value: 'candle', description: '香氛蜡烛' },
    { label: '香薰精油', value: 'essential_oil', description: '香薰精油' },
    { label: '空气清新剂', value: 'air_freshener', description: '空气清新剂' },
    { label: '香薰机', value: 'diffuser', description: '香薰机' },
    { label: '织物护理', value: 'fabric_care', description: '织物护理产品' },
  ],
  other: [
    { label: '其他', value: 'other', description: '其他产品' },
  ],
};

// 应用场景选项（根据子类筛选）
export const applicationScenarioOptions = {
  women_perfume: [
    { label: '日常使用', value: 'daily_use', description: '日常使用场景' },
    { label: '约会社交', value: 'dating', description: '约会社交场景' },
    { label: '商务办公', value: 'business', description: '商务办公场景' },
    { label: '特殊场合', value: 'special', description: '特殊场合使用' },
  ],
  men_perfume: [
    { label: '日常使用', value: 'daily_use', description: '日常使用场景' },
    { label: '商务办公', value: 'business', description: '商务办公场景' },
    { label: '约会社交', value: 'dating', description: '约会社交场景' },
    { label: '运动健身', value: 'sports', description: '运动健身场景' },
  ],
  unisex_perfume: [
    { label: '日常使用', value: 'daily_use', description: '日常使用场景' },
    { label: '商务办公', value: 'business', description: '商务办公场景' },
    { label: '约会社交', value: 'dating', description: '约会社交场景' },
    { label: '特殊场合', value: 'special', description: '特殊场合使用' },
  ],
  cologne: [
    { label: '日常使用', value: 'daily_use', description: '日常使用场景' },
    { label: '商务办公', value: 'business', description: '商务办公场景' },
    { label: '运动健身', value: 'sports', description: '运动健身场景' },
  ],
  body_spray: [
    { label: '日常使用', value: 'daily_use', description: '日常使用场景' },
    { label: '运动健身', value: 'sports', description: '运动健身场景' },
    { label: '旅行出差', value: 'travel', description: '旅行出差场景' },
  ],
  body_lotion: [
    { label: '日常护理', value: 'daily_care', description: '日常护理场景' },
    { label: '运动后护理', value: 'post_sports', description: '运动后护理' },
    { label: '睡前护理', value: 'bedtime_care', description: '睡前护理' },
  ],
  body_balm: [
    { label: '日常护理', value: 'daily_care', description: '日常护理场景' },
    { label: '特殊护理', value: 'special_care', description: '特殊护理' },
  ],
  shower_gel: [
    { label: '日常清洁', value: 'daily_cleaning', description: '日常清洁' },
    { label: '运动后清洁', value: 'post_sports', description: '运动后清洁' },
    { label: '深层清洁', value: 'deep_cleaning', description: '深层清洁' },
  ],
  shampoo: [
    { label: '日常清洁', value: 'daily_cleaning', description: '日常清洁' },
    { label: '深层清洁', value: 'deep_cleaning', description: '深层清洁' },
    { label: '滋养护理', value: 'nourishing', description: '滋养护理' },
  ],
  hand_cream: [
    { label: '日常护理', value: 'daily_care', description: '日常护理' },
    { label: '工作护理', value: 'work_care', description: '工作护理' },
    { label: '夜间护理', value: 'night_care', description: '夜间护理' },
  ],
  soap: [
    { label: '日常清洁', value: 'daily_cleaning', description: '日常清洁' },
    { label: '手部清洁', value: 'hand_cleaning', description: '手部清洁' },
    { label: '身体清洁', value: 'body_cleaning', description: '身体清洁' },
  ],
  toothpaste: [
    { label: '日常清洁', value: 'daily_cleaning', description: '日常清洁' },
    { label: '美白护理', value: 'whitening', description: '美白护理' },
    { label: '敏感护理', value: 'sensitive_care', description: '敏感护理' },
  ],
  mouthwash: [
    { label: '日常护理', value: 'daily_care', description: '日常护理' },
    { label: '清新口气', value: 'fresh_breath', description: '清新口气' },
    { label: '杀菌护理', value: 'antibacterial', description: '杀菌护理' },
  ],
  candle: [
    { label: '居家生活', value: 'home_life', description: '居家生活' },
    { label: '浪漫氛围', value: 'romantic', description: '浪漫氛围' },
    { label: '放松心情', value: 'relaxation', description: '放松心情' },
  ],
  essential_oil: [
    { label: '居家生活', value: 'home_life', description: '居家生活' },
    { label: '放松心情', value: 'relaxation', description: '放松心情' },
    { label: '提神醒脑', value: 'energizing', description: '提神醒脑' },
  ],
  air_freshener: [
    { label: '居家生活', value: 'home_life', description: '居家生活' },
    { label: '车内使用', value: 'car_use', description: '车内使用' },
    { label: '办公环境', value: 'office', description: '办公环境' },
  ],
  diffuser: [
    { label: '居家生活', value: 'home_life', description: '居家生活' },
    { label: '办公环境', value: 'office', description: '办公环境' },
    { label: '酒店客房', value: 'hotel', description: '酒店客房' },
  ],
  fabric_care: [
    { label: '衣物护理', value: 'clothing_care', description: '衣物护理' },
    { label: '家居织物', value: 'home_fabric', description: '家居织物' },
    { label: '汽车内饰', value: 'car_interior', description: '汽车内饰' },
  ],
  other: [
    { label: '其他', value: 'other', description: '其他应用场景' },
  ],
};

// 香调类型选项
export const fragranceTypeOptions = [
  { label: '花香调', value: 'floral', description: '以花朵香气为主' },
  { label: '果香调', value: 'fruity', description: '以水果香气为主' },
  { label: '木质调', value: 'woody', description: '以木材香气为主' },
  { label: '东方调', value: 'oriental', description: '以香料和树脂为主' },
  { label: '海洋调', value: 'marine', description: '以海洋清新为主' },
  { label: '柑橘调', value: 'citrus', description: '以柑橘类水果为主' },
  { label: '绿叶调', value: 'green', description: '以植物绿叶为主' },
  { label: '皮革调', value: 'leather', description: '以皮革香气为主' },
  { label: '美食调', value: 'gourmand', description: '以美食香气为主' },
  { label: '混合调', value: 'mixed', description: '多种香调混合' },
];

// 香气特点选项
export const fragranceCharacteristicsOptions = [
  { label: '前调', value: 'top_notes', description: '香水最初闻到的香气' },
  { label: '中调', value: 'middle_notes', description: '香水的主体香气' },
  { label: '后调', value: 'base_notes', description: '香水的基调香气' },
  { label: '前中后', value: 'all_notes', description: '完整的香调层次' },
];

// 颜色需求选项（改为单选）
export const colorRequirementOptions = [
  { label: '有颜色', value: 'colored', description: '产品有颜色要求' },
  { label: '无色透明', value: 'colorless', description: '产品无色透明' },
];

// 原料要求选项
export const rawMaterialRequirementOptions = [
  { label: '纯天然', value: 'natural', description: '要求使用纯天然原料' },
  { label: '有机认证', value: 'organic', description: '要求有机认证原料' },
  { label: 'Vegan', value: 'vegan', description: '要求Vegan认证原料' },
  { label: 'Halal', value: 'halal', description: '要求Halal认证原料' },
  { label: '无动物测试', value: 'cruelty_free', description: '要求无动物测试' },
  { label: '无防腐剂', value: 'preservative_free', description: '要求无防腐剂' },
  { label: '无香精', value: 'fragrance_free', description: '要求无香精' },
  { label: '无酒精', value: 'alcohol_free', description: '要求无酒精' },
];

// 法规要求选项
export const regulatoryRequirementOptions = [
  { label: '中国', value: 'china', description: '符合中国法规要求' },
  { label: '欧盟+CMR', value: 'eu_cmr', description: '符合欧盟+CMR法规' },
  { label: '美国', value: 'usa', description: '符合美国法规要求' },
  { label: '澳大利亚', value: 'australia', description: '符合澳大利亚法规' },
  { label: '新西兰', value: 'new_zealand', description: '符合新西兰法规' },
  { label: '菲律宾', value: 'philippines', description: '符合菲律宾法规' },
  { label: '日本', value: 'japan', description: '符合日本法规要求' },
  { label: '韩国', value: 'korea', description: '符合韩国法规要求' },
  { label: '东南亚', value: 'southeast_asia', description: '符合东南亚法规' },
  { label: '全球通用', value: 'global', description: '符合全球主要市场法规' },
];

// 仿香或创香选项
export const fragranceTypeOptions2 = [
  { label: '仿香', value: 'imitation', description: '仿制现有香水' },
  { label: '创香', value: 'original', description: '原创香水设计' },
  { label: '改良香', value: 'improved', description: '在现有基础上改良' },
];

// 小样规格选项
export const sampleSpecificationOptions = [
  { label: '5g', value: '5g', description: '5克小样' },
  { label: '10g', value: '10g', description: '10克小样' },
  { label: '30g', value: '30g', description: '30克小样' },
  { label: '50g', value: '50g', description: '50克小样' },
  { label: '100g', value: '100g', description: '100克小样' },
  { label: '200g', value: '200g', description: '200克小样' },
  { label: '500g', value: '500g', description: '500克小样' },
];

// 目标市场选项
export const targetMarketOptions = [
  { label: '女性市场', value: 'female', description: '主要面向女性消费者' },
  { label: '男性市场', value: 'male', description: '主要面向男性消费者' },
  { label: '中性市场', value: 'unisex', description: '男女通用市场' },
  { label: '年轻群体', value: 'young', description: '18-35岁年轻群体' },
  { label: '成熟群体', value: 'mature', description: '35岁以上成熟群体' },
  { label: '高端市场', value: 'luxury', description: '高端奢侈品市场' },
  { label: '大众市场', value: 'mass', description: '大众消费市场' },
  { label: '专业市场', value: 'professional', description: '专业香水爱好者' },
];

// 特殊要求选项
export const requirementsOptions = [
  { label: '持久度要求', value: 'longevity', description: '要求香水持久度' },
  { label: '扩散度要求', value: 'sillage', description: '要求香水扩散度' },
  { label: '季节性要求', value: 'seasonal', description: '针对特定季节设计' },
  { label: '包装要求', value: 'packaging', description: '特殊包装设计需求' },
  { label: '成本控制', value: 'cost', description: '严格控制成本' },
  { label: '环保要求', value: 'eco', description: '环保材料要求' },
  { label: '过敏原控制', value: 'allergen', description: '控制过敏原成分' },
  { label: '有机认证', value: 'organic', description: '需要有机认证' },
];

// 反馈类型选项
export const feedbackTypeOptions = [
  { label: '产品反馈', value: 'product', description: '关于产品本身的反馈' },
  { label: '服务反馈', value: 'service', description: '关于客户服务的反馈' },
  { label: '建议意见', value: 'suggestion', description: '改进建议和意见' },
  { label: '投诉问题', value: 'complaint', description: '投诉和问题反馈' },
  { label: '功能需求', value: 'feature', description: '新功能需求' },
  { label: '使用体验', value: 'experience', description: '使用体验分享' },
];

// 满意度调查选项
export const satisfactionOptions = [
  { label: '香味持久度', value: 'longevity', description: '香水在皮肤上的持续时间' },
  { label: '香味扩散度', value: 'sillage', description: '香水在空气中的扩散范围' },
  { label: '包装设计', value: 'packaging', description: '产品包装的美观和实用性' },
  { label: '价格合理性', value: 'price', description: '产品价格的合理性' },
  { label: '客户服务', value: 'service', description: '客户服务的质量' },
  { label: '整体体验', value: 'experience', description: '整体使用体验' },
  { label: '产品创新性', value: 'innovation', description: '产品的创新程度' },
  { label: '品牌形象', value: 'brand', description: '品牌形象的满意度' },
];

// 项目状态选项
export const projectStatusOptions = [
  { label: '需求收集', value: 'requirements', description: '正在收集项目需求' },
  { label: '方案设计', value: 'design', description: '正在设计香水方案' },
  { label: '样品制作', value: 'sampling', description: '正在制作香水样品' },
  { label: '测试评估', value: 'testing', description: '正在进行测试评估' },
  { label: '客户反馈', value: 'feedback', description: '等待客户反馈' },
  { label: '方案调整', value: 'adjustment', description: '根据反馈调整方案' },
  { label: '最终确认', value: 'confirmation', description: '等待最终确认' },
  { label: '项目完成', value: 'completed', description: '项目已完成' },
];

// 预算范围选项
export const budgetRangeOptions = [
  { label: '低预算 (< 10万)', value: 'low', description: '10万元以下' },
  { label: '中预算 (10-50万)', value: 'medium', description: '10-50万元' },
  { label: '高预算 (50-100万)', value: 'high', description: '50-100万元' },
  { label: '豪华预算 (> 100万)', value: 'luxury', description: '100万元以上' },
];

// 项目规模选项
export const projectScaleOptions = [
  { label: '小型项目', value: 'small', description: '1-3个月完成' },
  { label: '中型项目', value: 'medium', description: '3-6个月完成' },
  { label: '大型项目', value: 'large', description: '6-12个月完成' },
  { label: '超大型项目', value: 'xlarge', description: '12个月以上' },
];

// 香调层次选项
export const noteLayerOptions = [
  { label: '前调 (Top Notes)', value: 'top', description: '香水最初闻到的香气' },
  { label: '中调 (Middle Notes)', value: 'middle', description: '香水的主体香气' },
  { label: '后调 (Base Notes)', value: 'base', description: '香水的基调香气' },
];

// 评分维度选项
export const ratingDimensionOptions = [
  { label: '整体评分', value: 'overall', description: '对香水的整体印象' },
  { label: '香味评分', value: 'fragrance', description: '香味的质量和表现' },
  { label: '包装评分', value: 'packaging', description: '包装设计和质量' },
  { label: '价格评分', value: 'price', description: '价格合理性' },
  { label: '持久度', value: 'longevity', description: '香水持久度' },
  { label: '扩散度', value: 'sillage', description: '香水扩散度' },
  { label: '复杂度', value: 'complexity', description: '香调层次复杂度' },
  { label: '独特性', value: 'uniqueness', description: '香水的独特性' },
];

// 导出所有选项的映射
export const formOptions = {
  productCategory: productCategoryOptions,
  productSubCategory: productSubCategoryOptions,
  applicationScenario: applicationScenarioOptions,
  fragranceType: fragranceTypeOptions,
  fragranceCharacteristics: fragranceCharacteristicsOptions,
  colorRequirement: colorRequirementOptions,
  rawMaterialRequirement: rawMaterialRequirementOptions,
  regulatoryRequirement: regulatoryRequirementOptions,
  fragranceType2: fragranceTypeOptions2,
  sampleSpecification: sampleSpecificationOptions,
  targetMarket: targetMarketOptions,
  requirements: requirementsOptions,
  feedbackType: feedbackTypeOptions,
  satisfaction: satisfactionOptions,
  projectStatus: projectStatusOptions,
  budgetRange: budgetRangeOptions,
  projectScale: projectScaleOptions,
  noteLayer: noteLayerOptions,
  ratingDimension: ratingDimensionOptions,
};

export default formOptions;
