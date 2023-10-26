<template>
  <div>
    <section class="project project--intro">
      <span class="project__label project__label--name">Project</span>
      <span class="project__name">AI Art</span>
      <span class="project__label project__label--date">Date</span>
      <span class="project__date">July, 2023</span>
      <h2 class="project__title">
        <span class="project__title-line">Creativity</span>
        <span class="project__title-line">Redefined</span>
      </h2>
      <span class="project__label project__label--mission">Mission</span>
      <div class="project__mission">
        <p>
          The AI-Art Project is a transformative initiative dedicated to
          exploring the immense impact of AI-generated art on the art world and
          artists. We aim to discover and promote exceptional AI-generated
          artworks that push the boundaries of creativity, redefine traditional
          practices, and provoke thought.
        </p>
        <p>
          Through collaborations with artists, workshops, and educational
          programs, we empower artists to leverage AI as a tool for exploration,
          expanding their artistic horizons and embracing new forms of
          expression.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance() as any;
onMounted(() => {});
watch(
  () => {},
  (val) => {},
  { deep: true, immediate: true }
);
</script>
<style scoped lang="scss">
@import "./demo.css";
</style>
