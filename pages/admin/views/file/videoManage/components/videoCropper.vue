<template>
  <div>
    <el-dialog
      :model-value="props.isShow"
      title=""
      :close-on-click-modal="false"
      width="1000px"
      class="dialog-dfl"
      :before-close="beforeClose"
    >
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
            <div
              element-loading-background="#fff"
              element-loading-text="解析中"
              v-loading="cropperForm.loadings"
              style="height: 450px"
            >
              <div v-if="!cropperForm.loadings" class="conts_right">
                <div class="l">
                  <div
                    v-html="cropperForm.imgLookUrl"
                    :style="{
                      backgroundColor: cropperForm.bgColor
                    }"
                  ></div>
                </div>
                <div class="r">
                  <VueCropper
                    ref="cropperRef"
                    :img="imgForm.urlTwo"
                    :outputSize="option.outputSize"
                    :outputType="option.outputType"
                    :info="option.info"
                    :canScale="option.canScale"
                    :autoCrop="option.autoCrop"
                    :autoCropWidth="option.autoCropWidth"
                    :autoCropHeight="option.autoCropHeight"
                    :fixedBox="option.fixedBox"
                    :fixed="option.fixed"
                    :fixedNumber="option.fixedNumber"
                    :canMove="option.canMove"
                    :canMoveBox="option.canMoveBox"
                    :original="option.original"
                    :centerBox="option.centerBox"
                    :infoTrue="option.infoTrue"
                    :full="option.full"
                    :enlarge="option.enlarge"
                    :mode="option.mode"
                    :fillColor="cropperForm.bgColor"
                    @real-time="previewHandle"
                  ></VueCropper>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button v-show="activeName == 'one'" color="#fe3355" @click="confirmCover"> 确认封面 </el-button>
          <div v-show="activeName == 'two'" class="bottom_btn">
            <div class="l">
              <el-button style="margin-right: 10px; position: relative">
                <span>选择本地封面</span>
                <input type="file" id="img-file" accept="image/*" @change="fileChange" />
              </el-button>
              <el-color-picker :locale="'zhCn'" v-model="cropperForm.bgColor" show-alpha />
            </div>
            <div class="r">
              <el-button color="#fe3355" @click="confirmCoverTwo"> 确认封面 </el-button>
            </div>
          </div>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script setup>
import { watch, ref, reactive, nextTick } from "vue";
import { ElMessage } from "element-plus";
import { VueCropper } from "vue-cropper";

const emit = defineEmits(["closeDialog", "confirmImg"]);
let props = defineProps({
  //组件模态是否打开
  isShow: {
    type: Boolean,
    default: () => true
  },
  //传过来的视频文件
  file: {
    type: Object,
    default: () => ({})
  }
});

const loading = ref(false);
const activeName = ref("one");
const sliderVal = ref(0);
// 裁剪组件Ref
const cropperRef = ref({});
const imgForm = reactive({
  url: "", //封面预览地址
  urlTwo: "", //封面预览地址
  blob: {}, //封面blob对象
  img_list: [], //底部预览条图片数组
  videoTime: 0, //视频时长
  oldVideoFile: {} //旧的视频文件
});
const option = reactive({
  img: "",
  outputSize: 1, // 裁剪生成图片的质量
  outputType: "jpeg", // 裁剪生成图片的格式 jpeg, png, webp
  info: true, // 裁剪框的大小信息
  canScale: true, // 图片是否允许滚轮缩放
  autoCrop: true, // 是否默认生成截图框
  autoCropWidth: 192, // 默认生成截图框宽度
  autoCropHeight: 108, // 默认生成截图框高度
  fixedBox: false, // 固定截图框大小 不允许改变
  fixed: false, // 是否开启截图框宽高固定比例
  fixedNumber: [16, 9], // 截图框的宽高比例 [ 宽度 , 高度 ]
  canMove: true, // 上传图片是否可以移动
  canMoveBox: true, // 截图框能否拖动
  original: true, // 上传图片按照原始比例渲染
  centerBox: false, // 截图框是否被限制在图片里面
  infoTrue: true, // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
  full: false, // 是否输出原图比例的截图
  enlarge: "10", // 图片根据截图框输出比例倍数
  mode: "contain" // 图片默认渲染方式 contain , cover, 100px, 100% auto，
});

//监听模态打开 传入的是否为图片格式 并且初始化
watch([() => props.file, () => props.isShow], (newVal, oldVal) => {
  console.log(props.file, props.isShow);
  if (props.isShow == true && props.file.type) {
    if (props.file.type.includes("video")) {
      //通过验证
      if (newVal[0].name != imgForm.oldVideoFile.name && newVal[0].size != imgForm.oldVideoFile.size) {
        //是否已经选择了这个视频文件 选择了相同的文件就不用初始化了 如果不同就初始化
        loading.value = true;
        cropperForm.loadings = true;
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
      emit("closeDialog", false);
    }
  } else if (props.isShow == true) {
    //未通过验证
    ElMessage({
      message: "请选择视频格式的文件",
      grouping: true,
      type: "error"
    });
    emit("closeDialog", false);
  }
});
// 视频帧功能初始化
const init = () => {
  imgForm.url = "";
  imgForm.blob = {};
  imgForm.img_list = [];
  imgForm.videoTime = 0;
  imgForm.oldVideoFile = props.file;
  let reader = new FileReader();
  //获取视频时长
  reader.onload = function (e) {
    let video = document.createElement("video");
    // @ts-ignore
    video.src = e.target.result;
    video.addEventListener("loadedmetadata", async function () {
      // 这里先看900宽度能放几张图片
      const img_src = await captureFrame(props.file, Math.floor(video.duration));
      var img_load = document.createElement("img");
      img_load.setAttribute("src", img_src.url);
      img_load.onload = function () {
        var aspectRatio = img_load.naturalWidth / img_load.naturalHeight;
        // option.fixedNumber[0] =
        //   parseFloat((img_load.width / img_load.height).toFixed(2)) - 0.2;
        option.fixedNumber[0] = img_load.width / img_load.height;
        var width = 90 * aspectRatio;
        let count = Math.floor(960 / width); // 总宽度为960 看能放几张图片

        let duration = Math.floor(video.duration); //取整
        imgForm.videoTime = duration;
        var step = Math.floor(duration / (count - 1)); // 步长
        var result = []; // 存储结果的数组
        for (var i = 0; i < count; i++) {
          result.push(i * step);
        }
        if (result[0] == 0) {
          result[0] = 0.1;
        }
        result.forEach(async (item, index) => {
          const res = await captureFrame(props.file, item);
          if (index == 0) {
            imgForm.url = res.url;
            imgForm.urlTwo = res.url;
            imgForm.blob = res.blob;
          }
          imgForm.img_list.push(res.url);
        });
        nextTick(() => {
          setTimeout(() => {
            loading.value = false;
          }, 2000);
        });
      };
    });
  };

  // @ts-ignore
  reader.readAsDataURL(props.file);
};
//滑块位置改变 更滑上方主封面图
const sliderChange = async (val) => {
  const res = await captureFrame(props.file, val);
  imgForm.url = res.url;
  imgForm.urlTwo = res.url;
  imgForm.blob = res.blob;
};
// 格式化提示时间
const formatTooltip = (val) => {
  var timeString = convertSeconds(val);
  return timeString;
};
const handleClick = async (tab, event) => {
  if (activeName.value == "two") {
    cropperForm.loadings = true;
    nextTick(() => {
      setTimeout(() => {
        cropperForm.loadings = false;
      }, 500);
    });
  }
};
//关闭模态弹窗
const beforeClose = () => {
  emit("closeDialog", false);
};
//确认封面选择封面
const confirmCover = () => {
  emit("closeDialog", false);
  emit("confirmImg", {
    url: imgForm.url,
    blob: imgForm.blob
  });
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
const drawVideo = (video) => {
  return new Promise((res) => {
    const cvs = document.createElement("canvas");
    const ctx = cvs.getContext("2d");
    cvs.width = video.videoWidth;
    cvs.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, cvs.width, cvs.height);
    cvs.toBlob((blob) => {
      res({
        blob,
        url: URL.createObjectURL(blob)
      });
    });
  });
};

// 秒数换算时间
const convertSeconds = (seconds) => {
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

const cropperForm = reactive({
  imgLookUrl: "", //裁剪实时预览
  bgColor: "rgba(255,255,255,0)", //裁剪图片底色
  loadings: true
});
//裁剪功能实时事件
const previewHandle = (val) => {
  cropperForm.imgLookUrl = val.html;
};
//本地上传封面
const fileChange = (e) => {
  let imgFile = e.target.files[0];
  if (imgFile) {
    cropperForm.loadings = true;

    imgForm.urlTwo = URL.createObjectURL(imgFile);
    nextTick(() => {
      setTimeout(() => {
        cropperForm.loadings = false;
      }, 500);
    });
  }
};
//本地封面确定事件
const confirmCoverTwo = () => {
  // @ts-ignore
  cropperRef.value.getCropData((data) => {
    const image = new Image();
    image.src = data;
    image.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      canvas.toBlob((blob) => {
        emit("closeDialog", false);
        emit("confirmImg", {
          url: URL.createObjectURL(blob),
          blob
        });
      });
    };
  });
};
</script>

<style lang="scss" scoped>
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
.conts_right {
  height: 450px;
  box-sizing: border-box;
  padding: 0 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  .l {
    flex: 1;
    height: 100%;
    border: 1px solid #e4e7ed;
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .r {
    flex: 1;
    height: 100%;
    border: 1px solid #e4e7ed;
  }
}
.bottom_btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .l {
    display: flex;
    align-items: center;
  }
}
#img-file {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
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
