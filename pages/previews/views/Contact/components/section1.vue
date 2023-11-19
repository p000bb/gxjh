<template>
  <section class="section bg-white min-h-screen" ref="sectionRef">
    <div class="container mx-auto pl-36 pr-36">11</div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const sectionRef = ref<HTMLElement | null>(null);

onMounted(() => {});
</script>
<style scoped lang="scss"></style>
