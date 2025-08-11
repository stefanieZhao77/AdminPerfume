export const ROLES = {
  ADMIN: 'admin',           // 技术总监
  PERFUMER: 'perfumer',     // 调香师
  EVALUATOR: 'evaluator'    // 评香师
}

export const ROLE_DISPLAY_NAMES = {
  [ROLES.ADMIN]: '技术总监',
  [ROLES.PERFUMER]: '调香师',
  [ROLES.EVALUATOR]: '评香师'
}

export const ROLE_HIERARCHY = {
  [ROLES.ADMIN]: ['*'],
  [ROLES.PERFUMER]: ['formula_management', 'material_management', 'gcms_access', 'order_view'],
  [ROLES.EVALUATOR]: ['evaluation_management', 'order_view', 'customer_feedback']
}
