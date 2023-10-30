<template>
  <div class="screen screen1">
    <div class="screen-content1" v-if="urlList.length">
      <el-image
        v-for="i in urlList[0]"
        :key="i"
        style="
          width: 100%;
          height: 460px;
          border-radius: 8px;
          margin-bottom: 15px;
          box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.11);
        "
        :src="i"
        fit="cover"
      >
        <template #error>
          <div class="image-slot">
            <!-- <i class="el-icon-picture-outline"></i> -->
          </div>
        </template>
      </el-image>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, getCurrentInstance } from "vue";

const urlList = ref<any[]>([
  [
    "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
    "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
    "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
    // 以上三条与最后三条重复
    "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
    "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
    "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
    // 以下三条与开始的三条重复
    "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
    "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
    "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
  ],
]);
</script>
<style scoped lang="scss">
.screen {
  width: 18%;
  min-width: 230px;
  height: 100%;
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
}

screen-content1 {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  transform: translate3d(0, 0, 0);
  animation: moveSlideshow 60s linear infinite;
}

@keyframes moveSlideshow {
  0% {
    -webkit-transform: translateY(0%);
  }
  100% {
    -webkit-transform: translateY(-66.66%);
  }
}
</style>
