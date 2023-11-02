<template>
  <section ref="sectionRef">
    <Transition name="slide-fade">
      <!-- <slot v-show="slotVisible"></slot> -->
    </Transition>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
// import { useIntersectionObserver } from "@vueuse/core";


const sectionRef = ref<HTMLElement>();
// const slotVisible = ref<boolean>(false);

// 监听元素是否进入视口,如果slotVisible为true,则表示元素进入视口
// const { stop } = useIntersectionObserver(sectionRef, ([{ isIntersecting }]) => {
//   if (slotVisible.value) {
//     stop();
//     return;
//   }
//   slotVisible.value = isIntersecting;
// });
</script>
<style scoped lang="scss">
.slide-fade-enter-active {
  transition: all 2.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 2.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
