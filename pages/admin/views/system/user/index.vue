<template>
  <div class="container">
    <transition name="fade">
      <el-form :model="queryParams" :inline="true" v-show="showSearch" label-width="auto" class="search-form">
        <el-form-item label="用户昵称" prop="nickname">
          <el-input v-model="queryParams.nickname" placeholder="请输入种类名称" clearable />
        </el-form-item>
        <el-form-item label="用户账号" prop="account">
          <el-input v-model="queryParams.account" placeholder="请输入用户账号" clearable />
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
    <DataDialog ref="dataDialogRef" @getPageList="getPageList" />
  </div>
</template>

<script setup lang="tsx">
import { ref, onMounted } from "vue";
import { ColumnProps } from "@admin/components/Table/interface";
import DataDialog from "./components/dataDialog.vue";
import { getUserList, deleteUser } from "@admin/api/user";
import { ElMessage, ElMessageBox } from "element-plus";
import { arrayToTree } from "@admin/utils";

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
  getUserList(queryParams.value).then((res: any) => {
    tableData.value = arrayToTree(res.data.list) || [];
    total.value = parseInt(res.data.total);
    loading.value = false;
  });
};

const columns = ref<ColumnProps[]>([
  {
    label: "用户昵称",
    prop: "nickname",
    width: 200
  },
  {
    label: "用户账号",
    prop: "account",
    width: 200
  },
  {
    label: "部门",
    prop: "deptName",
    width: 200
  },
  {
    label: "状态",
    prop: "state",
    type: "dict",
    dict: [
      { label: "正常", value: "0" },
      { label: "禁用", value: "1", elTagType: "danger" }
    ]
  },
  {
    label: "创建时间",
    prop: "createTime",
    minWidth: 200
  },
  {
    label: "更新时间",
    prop: "updateTime",
    minWidth: 200
  },
  {
    label: "操作",
    prop: "option",
    fixed: "right",
    width: 200,
    render: (scope) => {
      return (
        <>
          <el-link
            class="table_link_btn"
            underline={false}
            size="small"
            type="primary"
            icon="Plus"
            onClick={() => addData(scope.row)}
          >
            <span class="table_link_text">新增</span>
          </el-link>
          <el-link
            class="table_link_btn"
            underline={false}
            size="small"
            type="primary"
            icon="Edit"
            onClick={() => updateData(scope.row)}
          >
            <span class="table_link_text">修改</span>
          </el-link>
          {!scope.row?.children && (
            <el-link
              class="table_link_btn"
              underline={false}
              size="small"
              type="danger"
              icon="Remove"
              onClick={() => deleteData(scope.row)}
            >
              <span class="table_link_text">删除</span>
            </el-link>
          )}
        </>
      );
    }
  }
]);

const dataDialogRef = ref<any>(null);
//#region 新增
const addData = (data?: any) => {
  dataDialogRef.value.openDialog({
    parentId: data?.id || 0
  });
};
//#endregion

//#region 修改
const updateData = (row: any) => {
  dataDialogRef.value.openDialog(row);
};
//#endregion

//#region 删
const deleteData = ({ id }: any) => {
  ElMessageBox.confirm(`是否删除该条数据`, {
    title: "警告",
    type: "warning"
  }).then(() => {
    deleteUser(id).then((res: any) => {
      if (res.code === 0) {
        ElMessage.success("删除成功");
        getPageList();
      }
    });
  });
};
//#endregion

onMounted(() => {
  getPageList();
});
</script>
<style lang="scss" scoped></style>
