<template>
  <div class="box">
    <div v-if="videoForm.videoUrl" class="input-div">
      <span>视频名称：</span>
      <el-input v-model="videoForm.name" class="input-name" />
    </div>
    <video class="videos" controls :src="videoForm.videoUrl" v-if="videoForm.videoUrl"></video>

    <div class="look_img" v-viewer v-if="imgLookUrl">
      <img :src="imgLookUrl" alt="" />
    </div>

    <div class="btns">
      <el-button size="large" class="button">
        选择视频文件
        <input type="file" id="video-file" accept="video/*" @change="fileChange" />
      </el-button>
      <el-button size="large" color="#fe3355" @click="shows"> 提取封面 </el-button>
      <el-button size="large" @click="back"> 关闭 </el-button>
      <el-button size="large" type="primary" @click="submit"> 保存 </el-button>
    </div>
    <videoCover
      :isShow="videoForm.comIsShow"
      :file="videoForm.file"
      @closeDialog="close"
      @confirmImg="confirmImg"
    ></videoCover>
  </div>
</template>

<script setup>
// @ts-ignore
import videoCover from "./components/videoCropper.vue";
import { reactive, ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getVideo, addVideo, updateVideo } from "@admin/api/video";

const route = useRoute();
const router = useRouter();

const videoForm = reactive({
  videoUrl: "",
  file: {},
  comIsShow: false,
  name: "",
  type: "",
  id: ""
});

const videoFile = ref({});
const imgLookUrl = ref("");
const imgLookFile = ref({});
const fileChange = (e) => {
  let videoFile = e.target.files[0];
  if (videoFile) {
    videoForm.videoUrl = URL.createObjectURL(videoFile);
    videoForm.file = videoFile;
    videoForm.name = videoFile.name;
    videoForm.type = videoFile.type;
  }
};
// 打开组件
const shows = () => {
  videoForm.comIsShow = true;
};
//关闭组件回调
const close = () => {
  videoForm.comIsShow = false;
};
//确认封面回调 data返回值
const confirmImg = (data) => {
  imgLookUrl.value = data.url;
  imgLookFile.value = new File([data.blob], `${videoForm.name}-封面`, { type: data.blob.type });
};

const submit = async () => {
  if (!videoForm.name) {
    ElMessage.error("请填写视频名称");
    return;
  }
  if (!videoForm.file) {
    ElMessage.error("请选择视频文件");
    return;
  }
  if (videoForm.id) {
    const formData = new FormData();
    formData.append("id", videoForm.id);
    formData.append("name", videoForm.name);
    formData.append("file", videoForm.file);
    imgLookFile.value && formData.append("coverFile", imgLookFile.value);
    await updateVideo(formData);
  } else {
    const formData = new FormData();
    formData.append("name", videoForm.name);
    formData.append("file", videoForm.file);
    imgLookFile.value && formData.append("coverFile", imgLookFile.value);
    await addVideo(formData);
  }
  ElMessage.success("操作成功");
  back();
};

const back = () => {
  router.push({
    path: "/file/video"
  });
};

onMounted(() => {
  route.query.id &&
    getVideo(route.query.id).then((res) => {
      videoForm.videoUrl = import.meta.env.VITE_PREVIEW_URL + res.data.path;
      videoForm.name = res.data.name;
      videoForm.id = res.data.id;
    });
});
</script>

<style lang="scss" scoped>
.button {
  position: relative;
}
.button input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}
.box {
  padding: 50px;
  background: #fff;
  .videos {
    width: auto;
    height: 300px;
    margin: 0 auto;
    padding-bottom: 20px;
    display: block;
  }
  .input-div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    span {
      margin-right: 20px;
    }
    .input-name {
      width: auto;
    }
  }

  .btns {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.look_img {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  img {
    width: auto;
    height: 200px;
  }
}
</style>
