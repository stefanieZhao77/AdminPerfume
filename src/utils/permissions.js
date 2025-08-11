import { PERMISSIONS } from '../config/permissions/permissions.js'
import { ROLES } from '../config/permissions/roles.js'

export function hasPermission(userRole, permission) {
  if (!userRole || !permission) return false
  
  // 管理员拥有所有权限
  if (userRole === ROLES.ADMIN) return true
  
  // 检查具体权限
  const allowedRoles = PERMISSIONS[permission] || []
  return allowedRoles.includes(userRole)
}

export function hasPageAccess(userRole, page) {
  return hasPermission(userRole, `PAGES.${page}`)
}

export function hasFeatureAccess(userRole, feature) {
  return hasPermission(userRole, `FEATURES.${feature}`)
}

export function getDataScope(userRole, dataType) {
  const permission = `DATA.${dataType}`
  return hasPermission(userRole, permission) ? 'all' : 'own'
}

// 根据角色过滤订单数据
export function filterOrdersByRole(orders, userRole) {
  if (userRole === ROLES.ADMIN) {
    return orders
  }
  
  if (userRole === ROLES.PERFUMER) {
    return orders.filter(order => 
      ['perfumer_prep', 'perfumer_adjust'].includes(order.currentStatus)
    )
  }
  
  if (userRole === ROLES.EVALUATOR) {
    return orders.filter(order => 
      ['evaluation', 'customer_feedback'].includes(order.currentStatus)
    )
  }
  
  return []
}

// 根据角色过滤表格列
export function getTableColumnsByRole(tableType, userRole) {
  const baseColumns = {
    orders: [
      { key: 'id', label: '订单号', visible: true },
      { key: 'customer', label: '客户', visible: true },
      { key: 'status', label: '状态', visible: true },
      { key: 'amount', label: '金额', visible: true },
      { key: 'date', label: '下单日期', visible: true }
    ]
  }
  
  const roleColumns = {
    [ROLES.ADMIN]: {
      orders: [
        ...baseColumns.orders,
        { key: 'assignedTo', label: '负责人', visible: true },
        { key: 'priority', label: '优先级', visible: true },
        { key: 'actions', label: '操作', visible: true }
      ]
    },
    [ROLES.PERFUMER]: {
      orders: [
        ...baseColumns.orders,
        { key: 'assignedTo', label: '负责人', visible: true },
        { key: 'actions', label: '操作', visible: true }
      ]
    },
    [ROLES.EVALUATOR]: {
      orders: [
        ...baseColumns.orders,
        { key: 'actions', label: '操作', visible: true }
      ]
    }
  }
  
  return roleColumns[userRole]?.[tableType] || baseColumns[tableType] || []
}
