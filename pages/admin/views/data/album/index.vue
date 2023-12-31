<template>
  <div class="container-main">
    <transition name="fade">
      <el-form :model="queryParams" :inline="true" v-show="showSearch" label-width="auto" class="search-form">
        <el-form-item label="图册名称" prop="name">
          <el-input v-model="queryParams.name" placeholder="请输入图册名称" clearable />
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
    </div>
    <!-- 新增修改弹出框 -->
    <DataDialog ref="dataDialogRef" @getPageList="getPageList" />
    <!-- 素材整理框 -->
    <OptionDialog ref="optionDialogRef" />
  </div>
</template>

<script setup lang="tsx">
import { ref, onMounted } from "vue";
import { ColumnProps } from "@admin/components/Table/interface";
import DataDialog from "./components/dataDialog.vue";
import OptionDialog from "./components/optionDialog.vue";
import { getAlbumList, deleteAlbum } from "@admin/api/album";
import { ElMessage, ElMessageBox } from "element-plus";
import { arrayToTree } from "@admin/utils";

const queryParams = ref<any>({
  pageNum: 1,
  pageSize: 10
});
const showSearch = ref<boolean>(true);
const loading = ref<boolean>(false);
const tableData = ref<any>([]);

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
  getAlbumList(queryParams.value).then((res: any) => {
    tableData.value = arrayToTree(res.data.list) || [];
    loading.value = false;
  });
};

const columns = ref<ColumnProps[]>([
  {
    label: "部门名称",
    prop: "name",
    width: 200,
    align: "left"
  },
  {
    label: "排序",
    prop: "sort",
    minWidth: 100
  },
  {
    label: "创建时间",
    prop: "createTime",
    minWidth: 180
  },
  {
    label: "更新时间",
    prop: "updateTime",
    minWidth: 180
  },
  {
    label: "操作",
    prop: "option",
    fixed: "right",
    width: 300,
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
          <el-link
            class="table_link_btn"
            underline={false}
            size="small"
            type="primary"
            icon="Edit"
            onClick={() => optionData(scope.row)}
          >
            <span class="table_link_text">素材编辑</span>
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
    parentId: data?.id || "0"
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
    deleteAlbum(id).then((res: any) => {
      if (res.code === 0) {
        ElMessage.success("删除成功");
        getPageList();
      }
    });
  });
};
//#endregion

/** 素材编辑  */
const optionDialogRef = ref<any>(null);
const optionData = (row: any) => {
  optionDialogRef.value.openDialog(row);
};

onMounted(() => {
  getPageList();
});
</script>
<style lang="scss" scoped></style>
