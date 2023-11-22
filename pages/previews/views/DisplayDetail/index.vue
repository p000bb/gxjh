<template>
  <div class="display-detail">
    <Section1 />
    <Section2 v-viewer />
  </div>
</template>

<script setup lang="ts" name="DisplayDetail">
import Section1 from "./components/section1.vue";
import Section2 from "./components/section2.vue";
</script>
<style scoped lang="scss"></style>
