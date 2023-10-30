<template>
  <div class="bg-black overflow-y-hidden">
    <Header />
    <AppMain />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header/index.vue"
import AppMain from "./components/AppMain.vue"
import Footer from "./components/Footer.vue"
</script>
<style scoped lang="scss">
// tailwind
@import "./styles/tailwind.scss";
</style>
