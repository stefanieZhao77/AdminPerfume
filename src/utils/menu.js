import { MENU_CONFIG } from '../config/permissions/menu.js'
import { hasPageAccess } from './permissions.js'

export function getMenuForRole(userRole) {
  return MENU_CONFIG[userRole] || []
}

export function filterMenuByPermissions(menuItems, userRole) {
  return menuItems.filter(item => {
    // 检查页面访问权限
    if (item.id && !hasPageAccess(userRole, item.id)) {
      return false
    }
    
    // 递归检查子菜单
    if (item.children) {
      item.children = filterMenuByPermissions(item.children, userRole)
      return item.children.length > 0
    }
    
    return true
  })
}
