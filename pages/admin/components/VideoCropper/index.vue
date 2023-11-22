<template>
  <div>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-change="handleClick">
      <el-tab-pane label="封面截取" name="one">
        <div
          class="conts"
          element-loading-background="#fff"
          element-loading-text="解析中"
          v-loading="loading"
          style="height: 450px"
        >
          <div v-show="!loading">
            <div class="look_img">
              <img :src="imgForm.url" alt="" />
            </div>
            <div class="imgs_list_box">
              <div class="imgs_list">
                <div v-for="(item, index) in imgForm.img_list" :key="index" class="imgs_item">
                  <img :src="item" alt="" />
                </div>
                <div class="slider-dfl">
                  <el-slider
                    v-model="sliderVal"
                    :step="0.1"
                    :min="0"
                    :max="imgForm.videoTime"
                    placement="bottom"
                    :format-tooltip="formatTooltip"
                    @change="sliderChange"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="本地上传" name="two">
        <el-row>
          <el-col :span="12" :style="{ height: '350px' }">
            <VueCropper
              ref="cropperRef"
              @realTime="realTime"
              :img="options.img"
              :fixedNumber="[16, 9]"
              autoCrop
              fixed
            />
          </el-col>
          <el-col :span="12" :style="{ height: '350px' }">
            <div class="upload-preview">
              <img :src="options.previews.url" :style="options.previews.img" /></div
          ></el-col>
        </el-row>
        <el-row>
          <el-col :lg="2" :md="2">
            <el-upload action="#" :http-request="() => {}" :show-file-list="false" :before-upload="beforeUpload">
              <el-button size="small">
                本地上传
                <i class="upload -right"></i>
              </el-button>
            </el-upload>
          </el-col>
          <el-col :lg="{ span: 1, offset: 2 }" :md="2">
            <el-button icon="plus" size="small" @click="changeScale(1)"></el-button>
          </el-col>
          <el-col :lg="{ span: 1, offset: 1 }" :md="2">
            <el-button icon="minus" size="small" @click="changeScale(-1)"></el-button>
          </el-col>
          <el-col :lg="{ span: 1, offset: 1 }" :md="2">
            <el-button icon="refresh-left" size="small" @click="rotateLeft()"></el-button>
          </el-col>
          <el-col :lg="{ span: 1, offset: 1 }" :md="2">
            <el-button icon="refresh-right" size="small" @click="rotateRight()"></el-button>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VueCropper } from "vue-cropper";
import "vue-cropper/dist/index.css";
import { ElMessage } from "element-plus";

const props = defineProps({
  file: {
    type: Object,
    default: () => ({})
  }
});

const cropperRef = ref<any>();
const activeName = ref<string>("one");
const options = ref<any>({
  img: "", // 图片的url地址
  previews: {
    url: "",
    img: ""
  }
});

//#region 封面截取
const loading = ref<boolean>(false);
const imgForm = ref({
  url: "", //封面预览地址
  urlTwo: "", //封面预览地址
  blob: {}, //封面blob对象
  img_list: [], //底部预览条图片数组
  videoTime: 0, //视频时长
  oldVideoFile: {} //旧的视频文件
});
const sliderVal = ref(0);

const convertSeconds = (seconds: number) => {
  var hours = Math.floor(seconds / 3600);
  var minutes = Math.floor((seconds % 3600) / 60);
  var remainingSeconds = Math.floor(seconds % 60);

  var timeString = "";

  if (hours > 0) {
    timeString += hours + ":";
  }

  timeString += minutes + ":" + remainingSeconds;

  return timeString;
};

const formatTooltip = (val: number) => {
  var timeString = convertSeconds(val);
  return timeString;
};

//滑块位置改变 更滑上方主封面图
const sliderChange = async (val) => {
  const res = (await captureFrame(props.file, val)) as any;
  imgForm.value.url = res.url;
  imgForm.value.urlTwo = res.url;
  imgForm.value.blob = res.blob;
};

// 获取视频帧的封面
const captureFrame = (videoFile, time = 0) => {
  return new Promise((succeed) => {
    const video = document.createElement("video");
    video.currentTime = time;
    video.muted = true;
    video.autoplay = true;
    video.oncanplay = async () => {
      const res = await drawVideo(video);
      succeed(res);
    };
    video.src = URL.createObjectURL(videoFile);
  });
};

// 画视频
const drawVideo = (video: any) => {
  return new Promise((res) => {
    const cvs = document.createElement("canvas");
    const ctx = cvs.getContext("2d") as CanvasRenderingContext2D;
    cvs.width = video.videoWidth;
    cvs.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, cvs.width, cvs.height);
    cvs.toBlob((blob: any) => {
      res({
        blob,
        url: URL.createObjectURL(blob)
      });
    });
  });
};
//#endregion
const handleClick = (tab: any) => {
  console.log(tab);
};

const realTime = (data: any) => {
  console.log(data);
};

// 上传预处理
const beforeUpload = (file: any) => {
  if (file.type.indexOf("image/") == -1) {
    // prettier-ignore
    ElMessage.error("文件格式错误，请上传图片类型,如：JPG，PNG后缀的文件。");
  } else {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      options.value.img = reader.result;
    };
  }
};

const changeScale = (num: number) => {
  cropperRef.value.changeScale(num);
};

const rotateLeft = () => {
  cropperRef.value.rotateLeft();
};

const rotateRight = () => {
  cropperRef.value.rotateRight();
};

// 从视频中获取封面
const confirmCover = () => {
  //   emit("closeDialog", false);
  //   emit("confirmImg", {
  //     url: imgForm.url,
  //     blob: imgForm.blob
  //   });
};
//本地封面确定事件
const confirmCoverTwo = () => {
  cropperRef.value.getCropData((data) => {
    const image = new Image();
    image.src = data;
    image.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      canvas.toBlob((blob) => {
        // emit("closeDialog", false);
        // emit("confirmImg", {
        //   url: URL.createObjectURL(blob),
        //   blob
        // });
      });
    };
  });
};
</script>
<style scoped lang="scss">
.upload-preview {
  position: absolute;
  top: 50%;
  transform: translate(50%, -50%);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 0 0 4px #ccc;
  overflow: hidden;
}
</style>
