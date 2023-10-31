<template>
  <el-table-column :label="defaultColumns.label" v-if="defaultColumns?.children?.length">
    <table-col :columns="item" v-for="(item, index) in defaultColumns.children" :key="index"></table-col>
  </el-table-column>

  <template v-else>
    <el-table-column v-bind="defaultColumns">
      <template #default="scope">
        <template v-if="props.columns.render">
          <!-- tsx -->
          <component :is="props.columns.render" :row="scope.row" :$index="scope.$index" :column="scope.column" v-if="props.columns.render"></component>
        </template>
        <template v-if="tableColType === 'slot'">
          <slot :name="props.columns.prop" :scope="scope"></slot>
        </template>
        <template v-if="tableColType === 'text'">
          <span v-text="scope.row[columns.prop]" v-copyText="scope.row[columns.prop]" v-copyText:callback="copyTextSuccess"></span>
        </template>
        <template v-if="tableColType === 'dict'">
          <dict-tag :options="defaultColumns.dict" :value="scope.row[columns.prop]" />
        </template>
      </template>
    </el-table-column>
  </template>
</template>

<script setup lang="ts" name="TableCol">
import { computed } from "vue";
import { ColumnProps } from "../interface";

const copyTextSuccess = () => {
  console.log("复制成功");
};
const props = defineProps({
  // 渲染-循环数组
  columns: {
    type: Object,
    default: {},
  },
});

const defaultColumns = computed<ColumnProps>(() => {
  const { columns } = props as any;
  return {
    ...columns,
    showOverflowTooltip: columns?.showOverflowTooltip === false ? false : true,
    align: columns?.align || "center", // 默认文本居中
    key: columns?.key || columns?.prop,
    dict: columns?.dict || [],
  };
});

const tableColType = computed(() => {
  const render = props.columns?.render;
  if (!render) {
    return props.columns?.type ?? "text";
  }
});
</script>
<style scoped lang="scss"></style>
