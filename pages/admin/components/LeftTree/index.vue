<script setup lang="ts">
import { ref, onMounted } from "vue";
import { ElTree } from "element-plus";

onMounted(() => {});
const props = defineProps({
  data: {
    type: Array,
    default: []
  },
  loading: {
    type: Boolean,
    default: false
  },
  treeProps: {
    type: Object,
    default: {
      label: "name",
      children: "children",
      value: "id",
      isLeaf: "leaf"
    }
  }
});
const emits = defineEmits(["nodeClick"]);

const treeRef = ref<InstanceType<typeof ElTree>>();

const nodeClick = (el: any) => {
  emits("nodeClick", el);
};

// 更新树节点的子节点数据
const updateKeyChildren = (id: any, data: any[]) => {
  treeRef.value && treeRef.value.updateKeyChildren(id, data);
};

defineExpose({
  updateKeyChildren
});
</script>
<template>
  <div class="card-tree">
    <slot></slot>
    <el-tree
      v-bind="$attrs"
      v-loading="loading"
      ref="treeRef"
      :props="props.treeProps"
      :data="props.data"
      @node-click="nodeClick"
      class="tree"
    >
      <template #default="{ node, data }">
        <span class="tree-node-span" :title="node.label">
          {{ node.label }}
        </span>
      </template>
    </el-tree>
  </div>
</template>

<style lang="scss" scoped>
.tree {
  :deep(.el-tree-node__label) {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  :deep(.el-tree-node.is-current > .el-tree-node__content) {
    background-color: #e5f6fe !important;
    border-right: 3px solid #068af9 !important;
    .tree-node-span {
      color: #1176c6;
    }
  }
  :deep(.el-tree-node__content) {
    height: 42px;
    &:hover {
      background-color: #e5f6fe;
    }
    i {
      margin-left: 20px;
    }
  }
}
.tree-node-span {
  font-size: 16px;
  margin-left: 5px;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #657785;
  font-weight: 500;
}
</style>
