<template>
  <div>
    <Header />
    <AppMain :class="blurClass" />
    <Footer v-if="show" />
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header/index.vue";
import AppMain from "./components/AppMain.vue";
import Footer from "./components/Footer.vue";
import { useNavStore } from "@/store/modules/nav";
import { computed } from "vue";
import { useShowStore } from "@/store/modules/showSection";
import { useRoute } from "vue-router";

const route = useRoute();
const blurClass = computed(() => {
  return `${useNavStore().blurClass} duration-500`;
});

const show = computed(() => {
  const isHome = route.name === "Home";
  return isHome ? useShowStore().showNext : true;
});

// 判断当前路由是否为首页
</script>
<style scoped lang="scss"></style>
