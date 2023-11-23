<template>
  <div class="container">
    <transition name="fade">
      <el-form :model="queryParams" :inline="true" v-show="showSearch" label-width="auto" class="search-form">
        <el-form-item label="名称" prop="name">
          <el-date-picker
            v-model="date"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          />
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
  </div>
</template>

<script setup lang="tsx">
import { ref, onMounted } from "vue";
import { ColumnProps } from "@admin/components/Table/interface";
import { getLogList } from "@admin/api/log";
import { formatDateTime } from "@admin/utils";

const date = ref<any>([
  formatDateTime(new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000), "YYYY-MM-DD"),
  formatDateTime(new Date(), "YYYY-MM-DD")
]);

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
  date.value = [
    formatDateTime(new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000), "YYYY-MM-DD"),
    formatDateTime(new Date(), "YYYY-MM-DD")
  ];
  getPageList();
};
// 搜索
const handleQuery = () => {
  getPageList();
};

/** 查询列表 */
const getPageList = async () => {
  loading.value = true;
  getLogList({ ...queryParams.value, startDate: date.value[0], endDate: date.value[1] }).then((res: any) => {
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

onMounted(() => {
  getPageList();
});
</script>
<style lang="scss" scoped></style>
