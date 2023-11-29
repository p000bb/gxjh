<template>
  <el-dialog :title="dialogTitle" v-model="dialogOpen" width="1000px" :close-on-click-modal="false" destroy-on-close>
    <el-form ref="formRef" :model="form" :rules="rules" label-width="auto">
      <el-row>
        <el-col :span="24">
          <el-form-item label="上级节点：" prop="parentId">
            <el-tree-select
              v-model="form.parentId"
              :data="treeData"
              :props="{ value: 'id', label: 'name', children: 'children' }"
              value-key="id"
              placeholder="选择上级节点"
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
            <el-radio-group v-model="form.type" @change="changeType">
              <el-radio :label="1">框架</el-radio>
              <el-radio :label="2">文本</el-radio>
              <el-radio :label="3">图片</el-radio>
              <el-radio :label="4">视频</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="24" v-if="form.type === 3 || form.type === 4">
          <el-form-item label="素材选择" prop="dataId">
            <div @click="chooseData" class="hover:cursor-pointer" v-if="form.type === 3">
              <div v-if="form.dataUrl" class="w-[178px] h-[178px] flex border">
                <img :src="form.dataUrl" class="w-full m-auto" />
              </div>
              <el-icon class="avatar-uploader-icon border" v-else><Plus /></el-icon>
            </div>
            <div v-else class="flex items-center">
              <video
                class="w-auto h-[200px] aspect-video mr-4"
                :poster="form.coverUrl"
                controls
                :src="form.dataUrl"
                v-if="form.dataUrl"
              ></video>
              <el-button @click="chooseData" type="primary">选择素材</el-button>
            </div>
          </el-form-item>
        </el-col>
        <el-col :span="24" v-if="form.type !== 1">
          <el-form-item label="节点内容：" prop="content">
            <Editor v-model="form.content" />
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

    <!-- 图片选择 -->
    <PicDialog ref="picDialogRef" @confirm="setDataId" />
    <!-- 视频选择 -->
    <VideoDialog ref="videoDialogRef" @confirm="setDataId" />
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getNode, addNode, updateNode, getNodeList } from "@admin/api/node";
import { ElMessage } from "element-plus";
import { arrayToTree } from "@admin/utils";
import Editor from "@admin/components/Editor/index.vue";
import PicDialog from "./picDialog.vue";
import VideoDialog from "./videoDialog.vue";

const basrUrl = import.meta.env.VITE_PREVIEW_URL;

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
    const reslut = (await getNode(data.id)) as any;
    form.value = {
      ...reslut.data
    };
    if (reslut.data.file) {
      form.value.dataUrl = basrUrl + reslut.data.file.path;
      reslut.data.file.cover && (form.value.coverUrl = basrUrl + reslut.data.file.cover);
    }
    dialogTitle.value = "修改节点";
    dialogOpen.value = true;
  } else {
    form.value = {
      parentId: data?.parentId,
      type: 1
    };
    dialogTitle.value = "新增节点";
    dialogOpen.value = true;
  }
};

const getTreeData = async () => {
  const reslut = await getNodeList({ pageNum: 1, pageSize: 1000 });
  treeData.value = arrayToTree([...reslut.data.list, { id: "0", name: "根" }]) || [];
};

const changeType = () => {
  form.value.dataId = undefined;
  form.value.dataUrl = undefined;
  form.value.coverUrl = undefined;
};

//#region 素材选择
const picDialogRef = ref<any>(null);
const videoDialogRef = ref<any>(null);

const chooseData = () => {
  if (form.value.type === 3) {
    picDialogRef.value.openDialog({
      id: form.value.dataId,
      url: form.value.dataUrl
    });
  } else if (form.value.type === 4) {
    videoDialogRef.value.openDialog({
      id: form.value.dataId,
      url: form.value.dataUrl,
      cover: form.value.coverUrl
    });
  }
};

const setDataId = (data: any) => {
  form.value.dataId = data.id;
  form.value.dataUrl = data.url;
  data.cover && (form.value.coverUrl = data.cover);
};
//#endregion

defineExpose({
  openDialog
});
</script>
<style scoped lang="scss">
.border {
  border: 1px dashed var(--el-border-color);
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;

  cursor: pointer;
  transition: var(--el-transition-duration-fast);
  &:hover {
    border-color: var(--el-color-primary);
    color: var(--el-color-primary);
  }
}
</style>
