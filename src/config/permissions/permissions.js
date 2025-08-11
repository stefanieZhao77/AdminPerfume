import { ROLES } from './roles.js'

export const PERMISSIONS = {
  PAGES: {
    dashboard: [ROLES.ADMIN, ROLES.PERFUMER, ROLES.EVALUATOR],
    materials: [ROLES.ADMIN, ROLES.PERFUMER],
    gcms: [ROLES.ADMIN, ROLES.PERFUMER],
    ai_formulas: [ROLES.ADMIN, ROLES.PERFUMER],
    ai_studio: [ROLES.ADMIN, ROLES.PERFUMER],
    orders: [ROLES.ADMIN, ROLES.PERFUMER, ROLES.EVALUATOR],
    customers: [ROLES.ADMIN],
    settings: [ROLES.ADMIN]
  },
  FEATURES: {
    create_formula: [ROLES.ADMIN, ROLES.PERFUMER],
    edit_formula: [ROLES.ADMIN, ROLES.PERFUMER],
    delete_formula: [ROLES.ADMIN],
    view_analytics: [ROLES.ADMIN],
    manage_users: [ROLES.ADMIN],
    evaluate_formula: [ROLES.ADMIN, ROLES.EVALUATOR],
    manage_materials: [ROLES.ADMIN, ROLES.PERFUMER],
    access_gcms: [ROLES.ADMIN, ROLES.PERFUMER]
  },
  DATA: {
    view_all_orders: [ROLES.ADMIN],
    view_own_orders: [ROLES.PERFUMER, ROLES.EVALUATOR],
    view_all_formulas: [ROLES.ADMIN],
    view_own_formulas: [ROLES.PERFUMER],
    view_evaluation_data: [ROLES.ADMIN, ROLES.EVALUATOR],
    view_customer_data: [ROLES.ADMIN]
  }
}
