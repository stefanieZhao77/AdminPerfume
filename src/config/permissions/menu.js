import { ROLES } from './roles.js'

export const MENU_CONFIG = {
  [ROLES.ADMIN]: [
    { id: 'dashboard', label: '主页', icon: 'bi-speedometer', path: '/index.html' },
    { id: 'materials', label: '原料管理', icon: 'bi-box-seam', path: '/materials/index.html' },
    { id: 'gcms', label: 'GC-MS', icon: 'bi-activity', path: '/gcms/index.html' },
    { 
      id: 'ai', label: 'AI配方', icon: 'bi-magic', 
      children: [
        { id: 'ai-formulas', label: '配方查询', path: '/ai/formulas.html' },
        { id: 'ai-studio', label: 'AI创香', path: '/ai/studio.html' }
      ]
    },
    { id: 'orders', label: '订单管理', icon: 'bi-receipt', path: '/orders/index.html' },
    { id: 'customers', label: '客户管理', icon: 'bi-people', path: '/customers/index.html' },
    { id: 'settings', label: '系统设置', icon: 'bi-gear', path: '/settings/index.html' }
  ],
  [ROLES.PERFUMER]: [
    { id: 'dashboard', label: '主页', icon: 'bi-speedometer', path: '/dashboard.html' },
    { id: 'materials', label: '原料管理', icon: 'bi-box-seam', path: '/materials/index.html' },
    { id: 'gcms', label: 'GC-MS', icon: 'bi-activity', path: '/gcms/index.html' },
    { 
      id: 'ai', label: 'AI配方', icon: 'bi-magic', 
      children: [
        { id: 'ai-formulas', label: '配方查询', path: '/ai/formulas.html' },
        { id: 'ai-studio', label: 'AI创香', path: '/ai/studio.html' }
      ]
    },
    { id: 'orders', label: '订单管理', icon: 'bi-receipt', path: '/orders/index.html' }
  ],
  [ROLES.EVALUATOR]: [
    { id: 'dashboard', label: '主页', icon: 'bi-speedometer', path: '/dashboard.html' },
    { id: 'orders', label: '订单管理', icon: 'bi-receipt', path: '/orders/index.html' }
  ]
}
