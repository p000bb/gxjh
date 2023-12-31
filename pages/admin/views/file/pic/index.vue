<template>
  <div class="container-main flex">
    <div class="w-[250px] left-tree">
      <LeftTree
        @nodeClick="nodeClick"
        :data="treeData"
        :expand-on-click-node="false"
        node-key="id"
        current-node-key="0"
        default-expand-all
      />
    </div>
    <div style="width: calc(100% - 270px)">
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
          <el-col :span="18">
            <div class="text-red-400 h-full leading-[24px] text-sm">注: 文件请勿过大，否则加载很慢</div>
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
  </div>
</template>

<script setup lang="tsx">
import { ref, onMounted } from "vue";
import { ColumnProps } from "@admin/components/Table/interface";
import DataDialog from "./components/dataDialog.vue";
import LeftTree from "@admin/components/LeftTree/index.vue";
import { getPicList, deletePic } from "@admin/api/pic";
import { ElMessage, ElMessageBox } from "element-plus";
import { arrayToTree } from "@admin/utils";
import { getCategoryList } from "@admin/api/category";

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
    align: "center",
    minWidth: 250,
    showOverflowTooltip: false,
    render: (scope) => {
      return (
        <el-link type="primary" href={import.meta.env.VITE_PREVIEW_URL + scope.row.path} target="_blank">
          {scope.row.path}
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
    prop: "type",
    minWidth: 120
  },
  {
    label: "文件类别",
    prop: "category.name",
    minWidth: 120,
    render: (scope) => {
      return scope.row.category?.name;
    },
    show: () => {
      return !queryParams.value.categoryId;
    }
  },
  {
    label: "图片预览",
    prop: "preview",
    showOverflowTooltip: false,
    minWidth: 150,
    fixed: "right",
    render: (scope) => {
      return (
        <img
          title={scope.row.title}
          style="width: 100px; height: 100px"
          src={import.meta.env.VITE_PREVIEW_URL + scope.row.path + `?name=${scope.row.name}&size=${scope.row.size}`}
        />
      );
    }
  },
  {
    label: "操作",
    prop: "option",
    fixed: "right",
    width: 150,
    render: (scope) => {
      return (
        <>
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
            type="danger"
            icon="Remove"
            onClick={() => deleteData(scope.row)}
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
  dataDialogRef.value.openDialog({
    categoryId: queryParams.value.categoryId
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
    deletePic(id).then((res: any) => {
      if (res.code === 0) {
        ElMessage.success("删除成功");
        getPageList();
      }
    });
  });
};
//#endregion

//#region 获取文件种类
const treeData = ref<any[]>([]);
const getTreeData = async () => {
  const reslut = await getCategoryList({ pageNum: 1, pageSize: 1000 });
  treeData.value = arrayToTree([...reslut.data.list, { id: "0", name: "文件种类" }]) || [];
};
//#endregion

const nodeClick = (el: any) => {
  el.id !== "0" ? (queryParams.value.categoryId = el.id) : (queryParams.value.categoryId = undefined);
  getPageList();
};

onMounted(() => {
  getPageList();
  getTreeData();
});
</script>
<style lang="scss" scoped></style>
