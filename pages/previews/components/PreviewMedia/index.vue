<template>
  <img :src="setPreview(data?.file?.path)" v-if="!isVideo(data?.file?.type)" />
  <video
    ref="videoRef"
    muted
    :src="setPreview(data?.file?.path)"
    class="w-full h-full object-fill aspect-auto object-center"
    v-if="isVideo(data?.file?.type)"
  ></video>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { setPreview } from "@/utils";

interface OptionsProps {
  data: any;
}

const props = withDefaults(defineProps<OptionsProps>(), {
  data: {}
});

const videoRef = ref<HTMLVideoElement>();

// 判断是图片还是视频
const isVideo = (type: string) => {
  return type.includes("video");
};

onMounted(() => {
  if (!videoRef.value) return;
  videoRef.value.currentTime = 0;
  videoRef.value.play();

  // 视频播放结束后，重置播放时间，重新播放
  videoRef.value.addEventListener("ended", () => {
    videoRef.value.currentTime = 0;
    videoRef.value.play();
  });
});
</script>
<style scoped lang="scss"></style>
