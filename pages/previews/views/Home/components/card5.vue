<template>
  <div class="video-player w-96 h-96" @mouseover="toggleVideo" @mouseout="toggleVideoout">
    <img :src="imageUrl" alt="Thumbnail" v-if="!show" class="w-full h-full" />
    <img :src="videoUrl" class="w-full h-full" v-else="show" />
    <video width="320" height="240" controls autoplay>
      <source src="../../../../public/test" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      imageUrl: "https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg", // 替换为你的图片URL
      videoUrl: "../../../../public/test.gif" // 替换为你的视频URL
    };
  },
  methods: {
    toggleVideo(e) {
      this.show = true;
    },
    toggleVideoout(e) {
      this.show = false;
    }
  }
};
</script>
