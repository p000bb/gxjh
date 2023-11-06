<template>
  <section ref="sectionRef" v-if="type === 'section'">
    <Transition name="fade" :enter-active-class="enterActiveClass" :leave-active-class="leaveActiveClass">
      <slot></slot>
    </Transition>
  </section>
  <div ref="sectionRef" v-else>
    <Transition name="fade" :enter-active-class="enterActiveClass" :leave-active-class="leaveActiveClass">
      <slot></slot>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

const props = defineProps({
  enterClass: {
    type: String,
    default: "slide-fade-enter-from"
  },
  leaveClass: {
    type: String,
    default: "slide-fade-leave-to"
  },
  type: {
    type: String,
    default: "section"
  }
});

const sectionRef = ref<HTMLElement>();
const intersecting = ref(false);

// 监听元素是否进入视口,如果slotVisible为true,则表示元素进入视口
useIntersectionObserver(sectionRef, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    intersecting.value = true;
    console.log("进入视口");
  } else {
    intersecting.value = false;
    console.log("离开视口");
  }
});

const enterActiveClass = computed(() => {
  return intersecting.value ? props.enterClass : "";
});

const leaveActiveClass = computed(() => {
  return intersecting.value ? props.leaveClass : "";
});
</script>
<style scoped lang="scss"></style>
