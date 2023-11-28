<template>
  <el-dialog :title="dialogTitle" v-model="dialogOpen" width="500px" :close-on-click-modal="false" destroy-on-close>
    <el-form ref="formRef" :model="form" :rules="rules" label-width="auto">
      <el-form-item label="接口名称：" prop="name">
        <el-input v-model="form.name" placeholder="请输入名称" />
      </el-form-item>
      <el-form-item label="接口标识：" prop="path">
        <el-input v-model="form.path" placeholder="请输入标识" />
      </el-form-item>
      <el-form-item label="接口种类：" prop="type">
        <el-select v-model="form.type" @change="changeType">
          <el-option label="新增" value="==POST"></el-option>
          <el-option label="修改" value="==PUT"></el-option>
          <el-option label="删除" value="==DELETE"></el-option>
          <el-option label="列表查询" value="/page==POST"></el-option>
          <el-option label="单条查询" value="==GET"></el-option>
          <el-option label="树查询" value="/tree==POST"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="排序：" prop="sort">
        <el-input-number v-model="form.sort" :min="0" controls-position="right" class="w-full" />
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
import { getPermission, addPermission, updatePermission } from "@admin/api/permission";
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
  path: [
    {
      required: true,
      message: "请输入接口标识",
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
        await updatePermission(form.value);
      } else {
        await addPermission(form.value);
      }
      dialogOpen.value = false;
      ElMessage.success("操作成功");
      emits("getPageList");
    }
  });
};

const openDialog = async (data?: any) => {
  if (data?.id) {
    const reslut = await getPermission(data.id);
    form.value = {
      ...reslut.data
    };
    dialogTitle.value = "修改接口";
    dialogOpen.value = true;
  } else {
    form.value = {
      parentId: data?.parentId || 0,
      parentPath: data?.parentPath || ""
    };
    dialogTitle.value = "新增接口";
    dialogOpen.value = true;
  }
};

const changeType = (val: string) => {
  if (val === "==POST") {
    form.value.path = form.value.parentPath + val;
    form.value.name = "新增";
  }
  if (val === "==PUT") {
    form.value.path = form.value.parentPath + val;
    form.value.name = "修改";
  }
  if (val === "==DELETE") {
    form.value.path = form.value.parentPath + val;
    form.value.name = "删除";
  }
  if (val === "/page==POST") {
    form.value.path = form.value.parentPath + val;
    form.value.name = "列表查询";
  }
  if (val === "==GET") {
    form.value.path = form.value.parentPath + val;
    form.value.name = "单条查询";
  }
  if (val === "/tree==POST") {
    form.value.path = form.value.parentPath + val;
    form.value.name = "树查询";
  }
};

defineExpose({
  openDialog
});
</script>
<style scoped lang="scss"></style>
