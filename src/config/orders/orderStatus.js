export const ORDER_STATUS = {
  CUSTOMER_REQUEST: {
    id: 'customer_request',
    label: '客户提出需求',
    color: 'success',
    icon: 'bi-person-plus'
  },
  AI_ANALYSIS: {
    id: 'ai_analysis',
    label: 'AI分析生成需求',
    color: 'info',
    icon: 'bi-robot'
  },
  AI_FORMULA: {
    id: 'ai_formula',
    label: 'AI智能生成配方',
    color: 'primary',
    icon: 'bi-magic'
  },
  ORDER_DISPATCH: {
    id: 'order_dispatch',
    label: '自动/手动派单',
    color: 'warning',
    icon: 'bi-send'
  },
  PERFUMER_PREP: {
    id: 'perfumer_prep',
    label: '配香员配香',
    color: 'secondary',
    icon: 'bi-droplet'
  },
  PERFUMER_ADJUST: {
    id: 'perfumer_adjust',
    label: '调香师结合AI调整配方',
    color: 'info',
    icon: 'bi-gear'
  },
  APPLICATION: {
    id: 'application',
    label: '应用工程师产品应用',
    color: 'primary',
    icon: 'bi-tools'
  },
  EVALUATION: {
    id: 'evaluation',
    label: '评香师测评',
    color: 'warning',
    icon: 'bi-star'
  },
  QUALITY_CHECK: {
    id: 'quality_check',
    label: '质检与寄样',
    color: 'success',
    icon: 'bi-check-circle'
  },
  CUSTOMER_FEEDBACK: {
    id: 'customer_feedback',
    label: '客户反馈',
    color: 'info',
    icon: 'bi-chat'
  },
  COMPLETED: {
    id: 'completed',
    label: '订单完成',
    color: 'success',
    icon: 'bi-check-lg'
  }
}

export const ORDER_STATUS_FLOW = [
  'customer_request',
  'ai_analysis', 
  'ai_formula',
  'order_dispatch',
  'perfumer_prep',
  'perfumer_adjust',
  'application',
  'evaluation',
  'quality_check',
  'customer_feedback',
  'completed'
]
