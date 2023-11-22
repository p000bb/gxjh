<template>
  <div class="container">
    <transition name="fade">
      <el-form :model="queryParams" :inline="true" v-show="showSearch" label-width="auto" class="search-form">
        <el-form-item label="名称" prop="name">
          <el-input v-model="queryParams.name" placeholder="请输入名称" clearable />
        </el-form-item>
        <form-search @reset="resetQuery" @search="handleQuery" />
      </el-form>
    </transition>
    <div class="table-main">
      <Table v-loading="loading" :data="tableData" row-key="id" :columns="columns"></Table>
      <pagination
        v-show="total > 0"
        :total="total"
        v-model:page="queryParams.pageNum"
        v-model:limit="queryParams.pageSize"
        @pagination="getPageList"
      />
    </div>
    <!-- 新增修改弹出框 -->
    <!-- <DataDialog ref="dataDialogRef" @getPageList="getPageList" /> -->
  </div>
</template>

<script setup lang="tsx">
import { ref, onMounted } from "vue";
import { ColumnProps } from "@admin/components/Table/interface";
// import DataDialog from "./components/dataDialog.vue";
import { getLogList, deleteLog } from "@admin/api/log";
import { ElMessage, ElMessageBox } from "element-plus";

const queryParams = ref<any>({
  pageNum: 1,
  pageSize: 10
});
const showSearch = ref<boolean>(true);
const loading = ref<boolean>(false);
const tableData = ref<any>([]);
const total = ref<number>(0);

// 重置
const resetQuery = () => {
  queryParams.value = {
    pageNum: 1,
    pageSize: 10
  };
  getPageList();
};
// 搜索
const handleQuery = () => {
  getPageList();
};

/** 查询列表 */
const getPageList = async () => {
  loading.value = true;
  getLogList(queryParams.value).then((res: any) => {
    tableData.value = res.data.list || [];
    total.value = parseInt(res.data.total);
    loading.value = false;
  });
};

const columns = ref<ColumnProps[]>([
  {
    label: "图片名称",
    prop: "name",
    minWidth: 120
  },
  {
    label: "创建时间",
    prop: "createTime",
    minWidth: 150
  }
]);

const dataDialogRef = ref<any>(null);

onMounted(() => {
  getPageList();
});
</script>
<style lang="scss" scoped></style>
