<template>
  <el-dialog :title="dialogTitle" v-model="dialogOpen" width="40%" :close-on-click-modal="false" destroy-on-close>
    <el-form ref="formRef" :model="form" :rules="rules" label-width="auto">
      <el-row>
        <el-col :span="24">
          <el-form-item label="上级图册：" prop="parentId">
            <el-tree-select
              v-model="form.parentId"
              :data="treeData"
              :props="{ value: 'id', label: 'name', children: 'children' }"
              value-key="id"
              placeholder="选择上级图册"
              check-strictly
              filterable
              :render-after-expand="false"
              class="w-full"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="节点名称：" prop="name">
            <el-input v-model="form.name" placeholder="请输入节点名称" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="排序：" prop="sort">
            <el-input-number v-model="form.sort" :min="0" controls-position="right" class="w-full" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="节点类型" prop="type">
            <el-radio-group v-model="form.type">
              <el-radio :label="1">框架</el-radio>
              <el-radio :label="2">文本</el-radio>
              <el-radio :label="3">图片</el-radio>
              <el-radio :label="4">视频</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="24" v-if="form.type === '3' || form.type === '4'">
          <el-form-item label="素材选择" prop="dataId"> </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="节点内容：" prop="content">
            <el-input v-model="form.content" placeholder="请输入备注" type="textarea" />
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
import { getNode, addNode, updateNode, getNodeList } from "@admin/api/node";
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
  ],
  dataId: [
    {
      required: true,
      message: "请选择素材",
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
        await updateNode(form.value);
      } else {
        await addNode(form.value);
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
    const reslut = await getNode(data.id);
    form.value = {
      ...reslut.data
    };
    dialogTitle.value = "修改图册";
    dialogOpen.value = true;
  } else {
    form.value = {
      parentId: data?.parentId
    };
    dialogTitle.value = "新增图册";
    dialogOpen.value = true;
  }
};

const getTreeData = async () => {
  const reslut = await getNodeList({ pageNum: 1, pageSize: 1000 });
  treeData.value = arrayToTree([...reslut.data.list, { id: "0", name: "根" }]) || [];
};

//#region 图片选择
const picArray = ref<any>([]);
const getPicArray = async () => {};
//#endregion
defineExpose({
  openDialog
});
</script>
<style scoped lang="scss"></style>
