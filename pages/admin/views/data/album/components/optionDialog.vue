<template>
  <el-dialog :title="dialogTitle" v-model="dialogOpen" fullscreen :close-on-click-modal="false" destroy-on-close>
    <div>
      <!-- <TransitionGroup name="file" tag="div" class="grid grid-cols-5 gap-10"> -->
      <!-- <div class="avatar-uploader-icon border flex text-5xl"> -->
      <!-- <el-icon @click="open" class="m-auto"><Plus /></el-icon> -->
      <el-button @click="open" type="primary">添加素材</el-button>
      <!-- </div> -->
      <draggable
        :list="fileArray"
        ghost-class="ghost"
        chosen-class="chosenClass"
        animation="300"
        @start="onStart"
        @end="onEnd"
        class="grid grid-cols-5 gap-10 mt-4"
      >
        <template #item="{ element }">
          <div class="avatar-uploader-icon flex border">
            <div class="absolute text-3xl hover:text-red-600 text-black" @click="deleteData(element)">
              <el-icon><Close /></el-icon>
            </div>
            <img :src="basrUrl + element.file.path" class="w-full m-auto" v-if="element.fileType === 0" />
            <video
              class="w-full h-auto m-auto aspect-video"
              :poster="basrUrl + element.file.cover"
              controls
              :src="basrUrl + element.file.path"
              v-else
            ></video>
          </div>
        </template>
      </draggable>
      <!-- </TransitionGroup> -->
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="cancel">关 闭</el-button>
      </div>
    </template>
    <!-- 素材选择 -->
    <FileDialog ref="fileDialogRef" @confirm="confirm" />
  </el-dialog>
</template>

<script setup lang="ts">
import { addAlbumFile, deleteAlbumFile, getAlbumFilePage, updateAlbumFilePage } from "@admin/api/album";
import FileDialog from "./fileDialog.vue";
import { ref, onMounted } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import draggable from "vuedraggable";
import { throttle } from "lodash-es";

const basrUrl = import.meta.env.VITE_PREVIEW_URL;

const emits = defineEmits(["getPageList"]);
const dialogTitle = ref<string>("");
const dialogOpen = ref<boolean>(false);
const albumId = ref<any>({});

const cancel = () => {
  dialogOpen.value = false;
};

const openDialog = async (data: any) => {
  albumId.value = data.id;
  getPageList();
  dialogTitle.value = "素材整理";
  dialogOpen.value = true;
};

const fileArray = ref<any[]>([]);
const getPageList = async () => {
  const reslut = await getAlbumFilePage({
    pageNum: 1,
    pageSize: 1000,
    albumId: albumId.value
  });
  fileArray.value = reslut.data.list;
};

const fileDialogRef = ref<any>(null);
const open = () => {
  fileDialogRef.value.openDialog();
};

const confirm = async (data: any) => {
  await addAlbumFile(albumId.value, data.id, data.fileType);
  ElMessage.success("添加成功");
  getPageList();
};

const onStart = (evt: any) => {
  console.log("onStart", evt);
};

const onEnd = throttle(async (evt: any) => {
  console.log("onEnd", evt);
  await updateAlbumFilePage({
    albumId: albumId.value,
    fileId: evt.item._underlying_vm_?.fileId,
    oldSort: evt.oldIndex,
    newSort: evt.newIndex
  });
});

const deleteData = async ({ fileId, fileType }: any) => {
  ElMessageBox.confirm(`是否删除该条数据`, {
    title: "警告",
    type: "warning"
  }).then(async () => {
    await deleteAlbumFile(albumId.value, fileId, fileType);
    ElMessage.success("删除成功");
    getPageList();
  });
};

onMounted(() => {});

defineExpose({
  openDialog
});
</script>
<style scoped lang="scss">
.border {
  border: 1px dashed var(--el-border-color);
}

.avatar-uploader-icon {
  color: #8c939d;
  text-align: center;
  width: 100%;
  aspect-ratio: 1 / 1;
  cursor: move;
  transition: var(--el-transition-duration-fast);
  &:hover {
    border-color: var(--el-color-primary);
    color: var(--el-color-primary);
  }
}

.file-move, /* 对移动中的元素应用的过渡 */
.file-enter-active,
.file-leave-active {
  transition: all 0.5s ease;
}

.file-enter-from,
.file-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.file-leave-active {
  position: absolute;
}
</style>
