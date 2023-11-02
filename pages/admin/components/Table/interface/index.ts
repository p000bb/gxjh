import { TableColumnCtx } from "element-plus/es/components/table/src/table-column/defaults";
import type { VNode } from "vue";

export interface DictProps {
  label: string; // 选项框显示的文字
  value: string | number; // 选项框值
  elTagType?: string;
}

interface ExclusiveProps {
  type?: "slot" | "text" | "dict"; // 列类型
  render?: never;
}

interface ExclusivePropsInverse<T> {
  type?: never; // 列类型
  render?: (scope: { row: T; column: defalutColumnProps<T>; $index: number }) => VNode | String | Number | undefined;
}

// 互斥类型
type Exclusive<T> = ExclusiveProps | ExclusivePropsInverse<T>;

interface defalutColumnProps<T = any> extends Partial<Omit<TableColumnCtx<T>, "children" | "type">> {
  prop: string; // 列属性
  dict?: DictProps[]; // 字典
  children?: defalutColumnProps<T>[]; // 多级表头;
  show?: boolean | ((column: defalutColumnProps) => boolean); // 是否显示
  auth?: string | string[]; // 权限
}

export type ColumnProps<T = any> = Exclusive<T> & defalutColumnProps;

export interface OptionsProps {
  index?: boolean; // 是否显示序号
  selection?: boolean; // 是否显示选择框
  align?: "left" | "center" | "right"; // 对齐方式
  selectionProps?: {
    selectable?: (row: any, index: number) => boolean; // Function 的返回值用来决定这一行的 CheckBox 是否可以勾选
    reserveSelection?: boolean; // 在多选表格中，是否保留已选项
  }; // el-table-column的selection属性
}
