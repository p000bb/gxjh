<template>
  <el-dialog :title="dialogTitle" v-model="dialogOpen" width="40%" :close-on-click-modal="false" destroy-on-close>
    <el-form ref="formRef" :model="form" :rules="rules" label-width="auto">
      <el-form-item label="名称：" prop="name">
        <el-input v-model="form.name" placeholder="请输入名称" />
      </el-form-item>
      <el-form-item label="标识：" prop="code">
        <el-input v-model="form.code" placeholder="请输入标识" />
      </el-form-item>
      <el-form-item label="排序：" prop="sort">
        <el-input-number v-model="form.sort" :min="0" controls-position="right" style="width: 100%" />
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
import { getCategory, addCategory, updateCategory } from "@admin/api/category";
import { ElMessage } from "element-plus";

const emits = defineEmits(["getPageList"]);
const dialogTitle = ref<string>();
const dialogOpen = ref<boolean>(false);
const formRef = ref<any>();
const form = ref<any>({});
const rules = ref<any>({
  name: [
    {
      required: true,
      message: "请输入名称",
      trigger: "change"
    }
  ],
  code: [
    {
      required: true,
      message: "请输入标识",
      trigger: "change"
    }
  ],
  sort: [
    {
      required: true,
      message: "请输入排序",
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
        await updateCategory(form.value);
      } else {
        await addCategory(form.value);
      }
      dialogOpen.value = false;
      ElMessage.success("操作成功");
      emits("getPageList");
    }
  });
};

const openDialog = async (data?: any) => {
  if (data?.id) {
    const reslut = await getCategory(data.id);
    form.value = {
      id: reslut.data.id,
      parentId: reslut.data.parentId,
      name: reslut.data.name,
      // code: reslut.data.code,
      sort: reslut.data.sort
    };
    dialogTitle.value = "修改文件种类";
    dialogOpen.value = true;
  } else {
    form.value = {
      parentId: data?.parentId || 0
    };
    dialogTitle.value = "新增文件种类";
    dialogOpen.value = true;
  }
};

defineExpose({
  openDialog
});
</script>
<style scoped lang="scss"></style>
