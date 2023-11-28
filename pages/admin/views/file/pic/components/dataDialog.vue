<template>
  <el-dialog :title="dialogTitle" v-model="dialogOpen" width="40%" :close-on-click-modal="false" destroy-on-close>
    <el-form ref="formRef" :model="form" :rules="rules" label-width="auto">
      <el-form-item label="名称：" prop="name">
        <el-input v-model="form.name" placeholder="请输入名称" />
      </el-form-item>
      <el-form-item label="文件种类：" prop="categoryId">
        <el-tree-select
          v-model="form.categoryId"
          :data="treeData"
          :props="{ value: 'id', label: 'name', children: 'children' }"
          value-key="id"
          placeholder="选择文件种类"
          check-strictly
          filterable
          :render-after-expand="false"
          class="w-full"
        />
      </el-form-item>
      <el-form-item label="图片上传：" prop="imageUrl">
        <UploadImg v-model:imageUrl="form.imageUrl" ref="uploadRef" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="submit">保 存</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import UploadImg from "./uploadImg.vue";
import { getPic, addPic, updatePic } from "@admin/api/pic";
import { ElMessage } from "element-plus";
import { getCategoryList } from "@admin/api/category";
import { arrayToTree } from "@admin/utils";

const emits = defineEmits(["getPageList"]);
const dialogTitle = ref<string>();
const dialogOpen = ref<boolean>(false);
const formRef = ref<any>();
const uploadRef = ref<any>();
const form = ref<any>({});
const rules = ref<any>({
  name: [
    {
      required: true,
      message: "请输入名称",
      trigger: "change"
    }
  ],
  categoryId: [
    {
      required: true,
      message: "请选择文件种类",
      trigger: "change"
    }
  ],
  imageUrl: [
    {
      required: true,
      message: "请上传图片",
      trigger: "change"
    }
  ]
});

const cancel = () => {
  dialogOpen.value = false;
};

const submit = () => {
  formRef.value?.validate(async (valid: boolean) => {
    if (valid) {
      if (form.value.id) {
        const formData = new FormData();
        formData.append("id", form.value.id);
        formData.append("name", form.value.name);
        formData.append("categoryId", form.value.categoryId);
        uploadRef.value?.fileList.length && formData.append("file", uploadRef.value.fileList[0].raw);
        await updatePic(formData);
      } else {
        const formData = new FormData();
        formData.append("name", form.value.name);
        formData.append("file", uploadRef.value.fileList[0].raw);
        formData.append("categoryId", form.value.categoryId);
        await addPic(formData);
      }
      dialogOpen.value = false;
      ElMessage.success("操作成功");
      emits("getPageList");
    }
  });
};

const openDialog = async (data?: any) => {
  if (data?.id) {
    const reslut = await getPic(data.id);
    form.value = { ...reslut.data, imageUrl: import.meta.env.VITE_PREVIEW_URL + reslut.data.path };
    dialogTitle.value = "修改图片";
    dialogOpen.value = true;
  } else {
    form.value = {
      categoryId: data.categoryId
    };
    dialogTitle.value = "新增图片";
    dialogOpen.value = true;
  }
};

//#region 获取文件种类
const treeData = ref<any[]>([]);
const getTreeData = async () => {
  const reslut = await getCategoryList({ pageNum: 1, pageSize: 1000 });
  treeData.value = arrayToTree([...reslut.data.list]) || [];
};
//#endregion

onMounted(() => {
  getTreeData();
});
defineExpose({
  openDialog
});
</script>
<style scoped lang="scss"></style>
