<template>
  <div>
    <Header />
    <AppMain :class="blurClass" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header/index.vue";
import AppMain from "./components/AppMain.vue";
import Footer from "./components/Footer.vue";

import { useNavStore } from "@/store/modules/nav";
import { computed } from "vue";

const blurClass = computed(() => {
  return `${useNavStore().blurClass} duration-500`;
});
</script>
<style scoped lang="scss"></style>
