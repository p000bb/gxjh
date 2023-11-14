<template>
  <section class="section" ref="sectionRef" v-lazy-data="getData"></section>
</template>

<script setup lang="ts">
import { ref } from "vue";
const sectionRef = ref<HTMLElement | null>(null);

const getData = () => {};
</script>
<style scoped lang="scss"></style>
