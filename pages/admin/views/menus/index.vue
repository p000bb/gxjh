<template>
  <div class="container">
    <transition name="fade">
      <el-form
        :model="queryParams"
        ref="queryFormRef"
        :inline="true"
        v-show="showSearch"
        label-width="auto"
        class="search-form"
      >
        <el-form-item label="状态" prop="status">
          <el-select v-model="queryParams.status" placeholder="请选择状态" clearable></el-select>
        </el-form-item>
        <el-form-item label="名称" prop="labelName">
          <el-input v-model="queryParams.labelName" placeholder="请输入名称" clearable />
        </el-form-item>
        <form-search @reset="resetQuery" @search="handleQuery" />
      </el-form>
    </transition>
    <div class="table-main">
      <el-row :gutter="10" class="mb8">
        <el-col :span="1.5">
          <el-button type="primary" plain icon="plus" size="small" @click="addData()">新增</el-button>
        </el-col>
      </el-row>
      <Table v-loading="loading" :data="tableData" row-key="id" :columns="columns" ref="multipleTableRef"></Table>
      <pagination
        v-show="total > 0"
        :total="total"
        v-model:page="queryParams.pageNum"
        v-model:limit="queryParams.pageSize"
        @pagination="getPageList"
      />
    </div>
    <!-- 新增修改弹出框 -->
    <DataDialog ref="dataDialogRef" @getPageList="getPageList" />
  </div>
</template>

<script setup lang="tsx">
import { ref, onMounted } from "vue";
import { ColumnProps } from "@admin/components/Table/interface";
import DataDialog from "./components/dataDialog.vue";

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
  //   loading.value = true;
  //   getApplyList(queryParams.value).then((res: any) => {
  //     tableData.value = res.rows || [];
  //     total.value = parseInt(res.total);
  //     loading.value = false;
  //   });
};

const columns = ref<ColumnProps[]>([
  {
    label: "标签英文名称",
    prop: "labelCode",
    minWidth: 120
  },
  {
    label: "申请周期",
    prop: "applyCycle",
    minWidth: 120
  }
]);

const dataDialogRef = ref<any>(null);
//#region 新增
const addData = () => {
  dataDialogRef.value.openDialog();
};
//#endregion

onMounted(() => {
  console.log(123);
  getPageList();
});
</script>
<style lang="scss" scoped></style>
