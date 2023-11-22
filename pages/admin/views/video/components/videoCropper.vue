<template>
  <div>
    <el-dialog
      v-model="dialogOpen"
      title=""
      width="1000px"
      class="dialog-dfl"
      :close-on-click-modal="false"
      destroy-on-close
    >
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
            <el-col :span="12" :style="{ height: '350px', display: flex }">
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
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { VueCropper } from "vue-cropper";
import "vue-cropper/dist/index.css";
import { ElMessage } from "element-plus";

const props = defineProps({
  file: {
    type: Object,
    default: () => ({})
  }
});

const dialogOpen = ref<boolean>(false);
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

watch([() => props.file, () => dialogOpen.value], (newVal: any, oldVal: any) => {
  if (dialogOpen.value == true && props.file.type) {
    if (props.file.type.includes("video")) {
      //通过验证
      if (newVal[0].name != imgForm.value.oldVideoFile.name && newVal[0].size != imgForm.value.oldVideoFile.size) {
        //是否已经选择了这个视频文件 选择了相同的文件就不用初始化了 如果不同就初始化
        loading.value = true;
        activeName.value = "one";
        init();
      }
    } else {
      //未通过验证
      ElMessage({
        message: "请选择视频格式的文件",
        grouping: true,
        type: "error"
      });
    }
  } else if (dialogOpen.value == true) {
    //未通过验证
    ElMessage({
      message: "请选择视频格式的文件",
      grouping: true,
      type: "error"
    });
  }
});

// 视频帧功能初始化
const init = () => {
  imgForm.value.url = "";
  imgForm.value.blob = {};
  imgForm.value.img_list = [];
  imgForm.value.videoTime = 0;
  imgForm.value.oldVideoFile = props.file;
  let reader = new FileReader();
  //获取视频时长
  reader.onload = function (e) {
    let video = document.createElement("video");
    // @ts-ignore
    video.src = e.target.result;
    video.addEventListener("loadedmetadata", async function () {
      // 这里先看900宽度能放几张图片
      const img_src = (await captureFrame(props.file, Math.floor(video.duration))) as any;
      var img_load = document.createElement("img");
      img_load.setAttribute("src", img_src.url);
      img_load.onload = function () {
        var aspectRatio = img_load.naturalWidth / img_load.naturalHeight;
        // option.fixedNumber[0] =
        //   parseFloat((img_load.width / img_load.height).toFixed(2)) - 0.2;
        options.value.fixedNumber[0] = img_load.width / img_load.height;
        var width = 90 * aspectRatio;
        let count = Math.floor(960 / width); // 总宽度为960 看能放几张图片

        let duration = Math.floor(video.duration); //取整
        imgForm.value.videoTime = duration;
        var step = Math.floor(duration / (count - 1)); // 步长
        var result = []; // 存储结果的数组
        for (var i = 0; i < count; i++) {
          result.push(i * step);
        }
        if (result[0] == 0) {
          result[0] = 0.1;
        }
        result.forEach(async (item, index) => {
          const res = (await captureFrame(props.file, item)) as any;
          if (index == 0) {
            imgForm.value.url = res.url;
            imgForm.value.urlTwo = res.url;
            imgForm.value.blob = res.blob;
          }
          imgForm.value.img_list.push(res.url);
        });
      };
    });
  };

  // @ts-ignore
  reader.readAsDataURL(props.file);
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

const openDialog = async (data?: any) => {
  dialogOpen.value = true;
};

defineExpose({
  openDialog
});
</script>
<style scoped lang="scss">
.upload-preview {
  margin: auto;
  box-shadow: 0 0 4px #ccc;
  overflow: hidden;
}

.conts {
  height: 450px;
  box-sizing: border-box;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  .look_img {
    display: flex;
    justify-content: center;
    margin-bottom: 45px;
    img {
      width: auto !important;
      height: 256px !important;
      border-radius: 4px;
    }
  }
  .imgs_list_box {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .imgs_list {
    position: relative;
    width: auto !important;
    height: 91px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    .imgs_item {
      img {
        width: auto !important;
        height: 88px !important;
      }
    }
  }
}
.slider-dfl {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}
:deep(.dialog-dfl .el-dialog__header) {
  padding: 0 !important;
}
:deep(.dialog-dfl .el-dialog__body) {
  padding: 0 !important;
}
:deep(.dialog-dfl .el-dialog__headerbtn) {
  z-index: 3;
}
:deep(.dialog-dfl .el-dialog__footer) {
  padding: 15px 24px !important;
  border-top: 1px solid #e4e7ed !important;
}
:deep(.dialog-dfl .el-tabs__item) {
  height: 60px !important;
  font-size: 16px !important;
}
:deep(.dialog-dfl .el-tabs__nav-wrap::after) {
  height: 1px !important;
}
:deep(.dialog-dfl .el-tabs__item:hover) {
  color: #fe3355 !important;
}
:deep(.dialog-dfl .el-tabs__nav-wrap) {
  padding-left: 20px !important;
}
:deep(.dialog-dfl .el-tabs__active-bar) {
  background-color: #fe3355 !important;
  height: 3px !important;
}
:deep(.dialog-dfl .el-tabs__item.is-active) {
  color: #fe3355 !important;
}
:deep(.dialog-dfl .el-slider__button) {
  position: relative !important;
  width: 24px !important;
  height: 94px !important;
  border: 2px solid #fe3355;
  border-radius: 4px;
  transform: translateY(12%);
}
:deep(.dialog-dfl .el-slider__button::after) {
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
  content: "";
  background-color: #ebebeb;
  border-radius: 1.5px;
  height: 34px;
  width: 3px;
}
:deep(.dialog-dfl .el-slider__button::before) {
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  content: "";
  background-color: #ebebeb;
  border-radius: 1.5px;
  height: 34px;
  width: 3px;
}
:deep(.dialog-dfl .el-slider__runway) {
  background-color: transparent !important;
  height: 88px !important;
}
:deep(.dialog-dfl .el-slider__bar) {
  height: 88px !important;
  // transform: translateY(-48%);
  background-color: rgba(0, 0, 0, 0.4);
}
:deep(.dialog-dfl .el-slider) {
  height: 100% !important;
}
:deep(.dialog-dfl .el-loading-spinner .path) {
  stroke: #fe3355 !important;
}
:deep(.dialog-dfl .el-loading-spinner .el-loading-text) {
  color: #c1c1c1 !important;
  margin-top: 10px;
}
</style>
