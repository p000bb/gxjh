<template>
  <el-dialog :title="dialogTitle" v-model="dialogOpen" width="40%" :close-on-click-modal="false" destroy-on-close>
    <el-form ref="formRef" :model="form" :rules="rules" label-width="auto">
      <el-form-item label="名称：" prop="name">
        <el-input v-model="form.name" placeholder="请输入名称" />
      </el-form-item>
      <el-form-item label="视频上传：" prop="imageUrl">
        <UploadVideo v-model:imageUrl="form.imageUrl" ref="uploadRef" />
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
import { ref } from "vue";
import { ElMessage } from "element-plus";
import UploadVideo from "./uploadVideo.vue";
import { getVideo, addVideo, updateVideo } from "@admin/api/video";

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
  imageUrl: [
    {
      required: true,
      message: "请上传视频",
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
        form.value.imageUrl && formData.append("file", uploadRef.value.fileList[0].raw);
        await updateVideo(formData);
      } else {
        const formData = new FormData();
        formData.append("name", form.value.name);
        formData.append("file", uploadRef.value.fileList[0].raw);
        await addVideo(formData);
      }
      dialogOpen.value = false;
      ElMessage.success("操作成功");
      emits("getPageList");
    }
  });
};

const openDialog = async (data?: any) => {
  if (data?.id) {
    const reslut = await getVideo(data.id);
    form.value = { ...reslut.data, imageUrl: import.meta.env.VITE_PREVIEW_URL + reslut.data.path };
    dialogTitle.value = "修改视频";
    dialogOpen.value = true;
  } else {
    form.value = {};
    dialogTitle.value = "新增视频";
    dialogOpen.value = true;
  }
};

defineExpose({
  openDialog
});
</script>
<style scoped lang="scss"></style>
