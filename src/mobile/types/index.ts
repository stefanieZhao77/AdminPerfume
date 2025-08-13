/**
 * 移动端应用类型定义
 */

// 导航类型
export interface RootStackParamList {
  Home: undefined;
  RequirementForm: undefined;
  Feedback: undefined;
  FragranceRating: undefined;
}

// 需求表单类型
export interface RequirementFormData {
  productCategory: string;
  applicationScenario: string;
  fragranceType: string[];
  fragranceCharacteristics: {
    top: string;
    middle: string;
    base: string;
  };
  colorRequirement: boolean;
  materialRequirements: {
    natural: boolean;
    organic: boolean;
    vegan: boolean;
    hala: boolean;
  };
  targetPrice: {
    min: number;
    max: number;
  };
  regulatoryRequirements: string[];
  fragranceMode: 'imitation' | 'creation';
  sampleSpecification: {
    quantity: number;
    size: string;
  };
  projectTime: {
    start: Date;
    end: Date;
  };
  targetCustomer: string;
}

// 反馈表类型
export interface FeedbackData {
  projectProgress: {
    percentage: number;
    trackingNumber: string;
    status: 'pending' | 'in-progress' | 'completed';
  };
  sampleBatches: SampleBatch[];
}

export interface SampleBatch {
  id: string;
  batchNumber: string;
  status: 'pending' | 'accepted' | 'rejected';
  feedback?: string;
  createdAt: Date;
  updatedAt: Date;
}

// 香气评分类型
export interface FragranceRatingData {
  mode: 'imitation' | 'creation';
  fragranceTags: FragranceTag[];
  feedback: string;
}

export interface FragranceTag {
  id: string;
  name: string;
  score: number; // -10 to 10
  category: string;
}

// 组件Props类型
export interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  style?: any;
}

export interface CardProps {
  title?: string;
  children: React.ReactNode;
  onPress?: () => void;
  style?: any;
}

export interface ProgressBarProps {
  progress: number; // 0-100
  color?: string;
  height?: number;
  showPercentage?: boolean;
  animated?: boolean;
}

export interface SliderProps {
  value: number;
  onValueChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  style?: any;
}

// 表单组件类型
export interface DropdownPickerProps {
  value: string | string[];
  onValueChange: (value: string | string[]) => void;
  items: Array<{ label: string; value: string }>;
  placeholder?: string;
  multiple?: boolean;
  searchable?: boolean;
  disabled?: boolean;
  style?: any;
}

export interface CheckboxGroupProps {
  value: string[];
  onValueChange: (value: string[]) => void;
  items: Array<{ label: string; value: string }>;
  selectAll?: boolean;
  disabled?: boolean;
  style?: any;
}

export interface DateRangePickerProps {
  startDate: Date;
  endDate: Date;
  onDateChange: (startDate: Date, endDate: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  style?: any;
}

// API响应类型
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// 用户类型
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'perfumer' | 'evaluator';
  avatar?: string;
}

// 应用状态类型
export interface AppState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

// 主题类型
export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    danger: string;
    info: string;
    light: string;
    dark: string;
    white: string;
    black: string;
    gray: Record<string, string>;
  };
  typography: {
    fontFamily: Record<string, string>;
    fontSize: Record<string, string>;
    fontWeight: Record<string, string>;
  };
  spacing: Record<string, string>;
  borderRadius: Record<string, string>;
}

// 通用类型
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface PaginationParams {
  page: number;
  limit: number;
  total?: number;
}

export interface SortParams {
  field: string;
  direction: 'asc' | 'desc';
}

// 注意：本文件已直接导出接口，无需重复 export type 聚合导出
