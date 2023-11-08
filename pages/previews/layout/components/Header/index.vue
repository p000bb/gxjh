<template>
  <!-- <PcMenus v-if="isPc" />
  <PhoneMenus v-else /> -->
  <!-- <PcMenus /> -->
  <OuterMenu />
</template>

<script setup lang="ts">
import PcMenus from "./components/pc.vue";
import PhoneMenus from "./components/phone.vue";
import OuterMenu from "@/components/OuterMenu/index.vue";

// 计算当前屏幕宽度判断显示pc还是phone
import { ref, onMounted, onUnmounted, computed } from "vue";
const width = ref(document.body.clientWidth);
const resize = () => {
  width.value = document.body.clientWidth;
};
onMounted(() => {
  window.addEventListener("resize", resize);
});
onUnmounted(() => {
  window.removeEventListener("resize", resize);
});

const isPc = computed(() => {
  return width.value > 768;
});
</script>
<style scoped lang="scss">
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 80px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.logo {
  width: 100px;
  height: 100%;
}
.logo img {
  width: 100%;
}
.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 100%;
}
.menu a {
  color: #333;
  font-size: 16px;
  text-decoration: none;
}
.menu a:hover {
  color: #1890ff;
}
</style>
