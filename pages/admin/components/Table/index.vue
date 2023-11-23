<template>
  <el-table v-bind="$attrs" ref="tableRef" border stripe :header-cell-style="{ textAlign: 'center' }" v-viewer>
    <!-- 复选框 -->
    <el-table-column
      type="selection"
      width="55"
      v-if="props.options.selection"
      :align="props.options?.align || 'center'"
      v-bind="props.options?.selectionProps"
    />
    <!-- 序号 -->
    <el-table-column
      type="index"
      width="65"
      label="序号"
      v-if="props.options.index"
      :align="props.options?.align || 'center'"
    />
    <!-- 普通 -->
    <TabelCol :columns="item" v-for="(item, index) in defalutColumns" :key="index">
      <template #[item.prop]="{ scope }">
        <slot :name="item.prop" :scope="scope"></slot>
      </template>
    </TabelCol>
  </el-table>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import TabelCol from "./components/TableCol.vue";
import { ElTable } from "element-plus";
import { ColumnProps, OptionsProps } from "./interface";
import { isBoolean, isFunction } from "./utils";
// import { checkPermi } from "@/utils/permission";

interface ProTableProps {
  options?: OptionsProps;
  columns: ColumnProps[];
}

const props = withDefaults(defineProps<ProTableProps>(), {
  columns: () => [],
  options: () => ({
    index: true,
    selection: false,
    align: "center",
    selectionProps: {} as any // el-table-column的selection属性
  })
});

// tableRef
const tableRef = ref<InstanceType<typeof ElTable>>();

// 调用el-table的方法
const tableMethods = (name: string, ...args: any[]): Function => {
  // @ts-ignore
  const Fn = tableRef.value![name];
  if (isFunction(Fn)) {
    return Fn(...args);
  } else {
    return Fn;
  }
};

// 鉴权处理
// const isIfPermi = (val?: string | string[]): boolean => {
//   if (val === undefined) {
//     return true;
//   } else {
//     return checkPermi(val);
//   }
// };

// 是否显示
const isIfShow = (column: ColumnProps): boolean => {
  const show = column.show;
  let isIfShow = true;
  // boolean类型
  if (isBoolean(show)) {
    isIfShow = show;
  }
  // function类型
  if (isFunction(show)) {
    isIfShow = show(column);
  }
  return isIfShow;
};

const defalutColumns = computed<ColumnProps[]>(() => {
  const columns = props.columns.filter((item) => {
    // return isIfShow(item) && isIfPermi(item.auth);
    return isIfShow(item);
  });
  return columns;
});

// 导出el-table方法
defineExpose({
  tableMethods,
  element: tableRef
});
</script>
<style scoped lang="scss"></style>
