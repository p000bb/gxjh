<template>
  <el-upload
    v-model:file-list="fileList"
    class="avatar-uploader"
    action="#"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
  >
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
  </el-upload>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { ElMessage } from "element-plus";
import { Plus } from "@element-plus/icons-vue";

import type { UploadProps } from "element-plus";

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => []
  },
  imageUrl: {
    type: String,
    default: ""
  }
});

const emits = defineEmits(["update:modelValue", "update:imageUrl"]);

const fileList = computed({
  get() {
    return props.modelValue ?? [];
  },
  set(val) {
    emits("update:modelValue", val);
  }
});

const imageUrl = computed({
  get() {
    return props.imageUrl ?? "";
  },
  set(val) {
    emits("update:imageUrl", val);
  }
});

const handleAvatarSuccess: UploadProps["onSuccess"] = (response, uploadFile) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!);
};

const beforeAvatarUpload: UploadProps["beforeUpload"] = (rawFile) => {
  if (rawFile.type !== "image/jpeg" && rawFile.type !== "image/png" && rawFile.type !== "image/gif") {
    ElMessage.error("图片类型不是jpeg,png,gif!");
    return false;
  } else if (rawFile.size / 1024 / 1024 > 5) {
    ElMessage.error("文件大小不得超过5MB!");
    return false;
  }
  return true;
};
</script>

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
