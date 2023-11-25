<template>
  <el-dialog :title="dialogTitle" v-model="dialogOpen" width="40%" :close-on-click-modal="false" destroy-on-close>
    <el-form ref="formRef" :model="form" :rules="rules" label-width="auto">
      <el-row>
        <el-col :span="24">
          <el-form-item label="上级菜单：" prop="parentId">
            <el-tree-select
              v-model="form.parentId"
              :data="treeData"
              :props="{ value: 'id', label: 'name', children: 'children' }"
              value-key="id"
              placeholder="选择上级菜单"
              check-strictly
              filterable
              :render-after-expand="false"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="菜单名称：" prop="name">
            <el-input v-model="form.name" placeholder="请输入菜单名称" /> </el-form-item
        ></el-col>
        <el-col :span="12">
          <el-form-item label="排序：" prop="sort">
            <el-input-number v-model="form.sort" :min="0" controls-position="right" style="width: 100%" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="备注：" prop="remark">
            <el-input v-model="form.remark" placeholder="请输入备注" type="textarea" />
          </el-form-item>
        </el-col>
      </el-row>
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
import { getMenu, addMenu, updateMenu, getMenuList } from "@admin/api/menu";
import { ElMessage } from "element-plus";
import { arrayToTree } from "@admin/utils";

const emits = defineEmits(["getPageList"]);
const dialogTitle = ref<string>();
const dialogOpen = ref<boolean>(false);
const formRef = ref<any>();
const form = ref<any>({});
const treeData = ref<any>([]);
const rules = ref<any>({
  name: [
    {
      required: true,
      message: "请输入名称",
      trigger: "blur"
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
        await updateMenu(form.value);
      } else {
        await addMenu(form.value);
      }
      dialogOpen.value = false;
      ElMessage.success("操作成功");
      emits("getPageList");
    }
  });
};

const openDialog = async (data?: any) => {
  getTreeData();

  if (data?.id) {
    const reslut = await getMenu(data.id);
    form.value = {
      ...reslut.data,
      type: 0
    };
    dialogTitle.value = "修改菜单";
    dialogOpen.value = true;
  } else {
    form.value = {
      parentId: data?.parentId,
      type: 0,
      path: "123213",
      iconPath: "123213"
    };
    dialogTitle.value = "新增菜单";
    dialogOpen.value = true;
  }
};

const getTreeData = async () => {
  const reslut = await getMenuList({ pageNum: 1, pageSize: 1000 });
  treeData.value = arrayToTree([...reslut.data.list, { id: "0", name: "根" }]) || [];
};

defineExpose({
  openDialog
});
</script>
<style scoped lang="scss"></style>
