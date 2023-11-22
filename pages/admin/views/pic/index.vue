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
import { getPicList, deletePic } from "@admin/api/pic";
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
  getPicList(queryParams.value).then((res: any) => {
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
    label: "图片路径",
    prop: "path",
    minWidth: 150,
    showOverflowTooltip: true,
    render: (scope) => {
      return (
        <el-link type="primary" href={import.meta.env.VITE_PREVIEW_URL + scope.row.path} target="_blank">
          {import.meta.env.VITE_PREVIEW_URL + scope.row.path}
        </el-link>
      );
    }
  },
  {
    label: "创建时间",
    prop: "createTime",
    minWidth: 150
  },
  {
    label: "图片种类",
    prop: "type"
  },
  {
    label: "图片预览",
    prop: "preview",
    render: (scope) => {
      return (
        <el-image
          style="width: 100px; height: 100px"
          src={import.meta.env.VITE_PREVIEW_URL + scope.row.path + `?updateTime=${scope.row.updateTime}`}
          zoom-rate={1.2}
          preview-src-list={[import.meta.env.VITE_PREVIEW_URL + scope.row.path]}
          fit="cover"
        />
      );
    }
  },
  {
    label: "操作",
    prop: "option",
    fixed: "right",
    render: (scope) => {
      return (
        <>
          <el-link
            class="table_link_btn"
            underline={false}
            size="small"
            type="primary"
            icon="Edit"
            onClick={updateData(scope.row)}
          >
            <span class="table_link_text">修改</span>
          </el-link>
          <el-link
            class="table_link_btn"
            underline={false}
            size="small"
            type="danger"
            icon="Remove"
            onClick={deleteData(scope.row)}
          >
            <span class="table_link_text">删除</span>
          </el-link>
        </>
      );
    }
  }
]);

const dataDialogRef = ref<any>(null);
//#region 新增
const addData = () => {
  dataDialogRef.value.openDialog();
};
//#endregion

//#region 修改
const updateData = (row: any) => () => {
  dataDialogRef.value.openDialog(row);
};
//#endregion

//#region 删
const deleteData =
  ({ id }: any) =>
  () => {
    ElMessageBox.confirm(`是否删除该条数据`, {
      title: "警告",
      type: "warning"
    }).then(() => {
      deletePic(id).then((res: any) => {
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
