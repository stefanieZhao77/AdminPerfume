import { MOCK_USERS } from '../config/users/mockUsers.js'

// 模拟登录验证
export function authenticateUser(username, password) {
  const user = MOCK_USERS.find(u => 
    u.username === username && u.password === password
  )
  
  if (user) {
    // 模拟存储用户信息到 sessionStorage
    const userInfo = {
      id: user.id,
      username: user.username,
      name: user.name,
      role: user.role,
      avatar: user.avatar,
      email: user.email,
      department: user.department,
      loginTime: new Date().toISOString()
    }
    
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('currentUser', JSON.stringify(userInfo))
    }
    
    return { success: true, user: userInfo }
  }
  
  return { success: false, message: '用户名或密码错误' }
}

// 获取当前用户信息
export function getCurrentUser() {
  if (typeof window !== 'undefined') {
    const userStr = sessionStorage.getItem('currentUser')
    return userStr ? JSON.parse(userStr) : null
  }
  return null
}

// 获取当前用户角色
export function getCurrentUserRole() {
  const user = getCurrentUser()
  return user ? user.role : null
}

// 检查用户是否已登录
export function isAuthenticated() {
  return getCurrentUser() !== null
}

// 登出
export function logout() {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem('currentUser')
    window.location.href = '/examples/login.html'
  }
}

// 获取用户显示名称
export function getUserDisplayName() {
  const user = getCurrentUser()
  return user ? user.name : '未登录'
}
