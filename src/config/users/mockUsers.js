export const MOCK_USERS = [
  {
    id: 1,
    username: 'admin',
    password: 'admin123',
    name: '技术总监',
    role: 'admin',
    avatar: 'avatar.png',
    email: 'admin@perfume.com',
    department: '技术部'
  },
  {
    id: 2,
    username: 'perfumer1',
    password: 'perfumer123',
    name: '张调香师',
    role: 'perfumer',
    avatar: 'avatar2.png',
    email: 'perfumer1@perfume.com',
    department: '调香部',
    specialties: ['花香调', '果香调']
  },
  {
    id: 3,
    username: 'perfumer2',
    password: 'perfumer123',
    name: '李调香师',
    role: 'perfumer',
    avatar: 'avatar3.png',
    email: 'perfumer2@perfume.com',
    department: '调香部',
    specialties: ['木质调', '东方调']
  },
  {
    id: 4,
    username: 'evaluator1',
    password: 'evaluator123',
    name: '王评香师',
    role: 'evaluator',
    avatar: 'avatar4.png',
    email: 'evaluator1@perfume.com',
    department: '评价部',
    experience: '5年'
  },
  {
    id: 5,
    username: 'evaluator2',
    password: 'evaluator123',
    name: '赵评香师',
    role: 'evaluator',
    avatar: 'avatar5.png',
    email: 'evaluator2@perfume.com',
    department: '评价部',
    experience: '3年'
  }
]

export const USER_ROLES = {
  admin: {
    name: '技术总监',
    description: '拥有系统所有权限',
    color: 'danger'
  },
  perfumer: {
    name: '调香师',
    description: '负责配方创建和调整',
    color: 'primary'
  },
  evaluator: {
    name: '评香师',
    description: '负责配方评价和客户反馈',
    color: 'success'
  }
}
