<template>
  <el-dialog :title="dialogTitle" v-model="dialogOpen" width="1100px" :close-on-click-modal="false" destroy-on-close>
    <el-form :model="queryParams" :inline="true" label-width="auto" class="search-form">
      <el-form-item label="视频名称" prop="name">
        <el-input v-model="queryParams.name" placeholder="请输入视频名称" clearable />
      </el-form-item>
      <form-search @reset="resetQuery" @search="handleQuery" />
    </el-form>

    <div class="table-main w-full">
      <div
        class="grid grid-cols-4 gap-10 place-items-center w-full max-h-[500px] overflow-y-auto overflow-x-hidden"
        element-loading-background="#fff"
        element-loading-text="加载中！"
        v-loading="loading"
      >
        <div
          v-for="(item, index) in tableData"
          :key="index"
          class="img-item"
          @click="chooseVideo(item)"
          :class="{ 'active-img': chooseData.id === item.id }"
        >
          <img :src="basrUrl + item.cover" class="w-[178px]" />
          <p class="text-center font-black line-clamp-1">{{ item.name }}</p>
        </div>
      </div>
      <pagination
        v-show="total > 0"
        :total="total"
        v-model:page="queryParams.pageNum"
        v-model:limit="queryParams.pageSize"
        @pagination="getPageList"
      />
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="cancel">关 闭</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getVideoList } from "@admin/api/video";
import { ElMessage } from "element-plus";

const emits = defineEmits(["confirm"]);
const dialogTitle = ref<string>("");
const dialogOpen = ref<boolean>(false);

const basrUrl = import.meta.env.VITE_PREVIEW_URL;
const loading = ref<boolean>(false);
const tableData = ref<any>([]);
const queryParams = ref<any>({
  pageNum: 1,
  pageSize: 10
});
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
  getVideoList(queryParams.value).then((res: any) => {
    tableData.value = res.data.list || [];
    total.value = parseInt(res.data.total);
    loading.value = false;
  });
};

const cancel = () => {
  dialogOpen.value = false;
};

const chooseData = ref<any>({});
const chooseVideo = (data: any) => {
  chooseData.value = {
    id: data.id,
    url: basrUrl + data.path,
    cover: basrUrl + data.cover
  };
};

const submit = () => {
  if (!chooseData.value.id) {
    return ElMessage.error("请选择视频");
  }
  dialogOpen.value = false;
  emits("confirm", chooseData.value);
};

const openDialog = async (data?: any) => {
  data?.id && chooseVideo(data);
  resetQuery();
  dialogTitle.value = "选择视频";
  dialogOpen.value = true;
};

onMounted(() => {});

defineExpose({
  openDialog
});
</script>
<style scoped lang="scss">
.img-item {
  padding: 20px;
  p {
    margin: 10px 0 0 0;
  }
  &:hover {
    cursor: pointer;
    background: rgba(31, 147, 255, 0.24);
  }
}

.active-img {
  background: rgba(31, 147, 255, 0.24);
}
</style>
