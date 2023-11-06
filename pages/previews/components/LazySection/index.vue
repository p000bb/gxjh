<template>
  <Transition
    name="slide-fade"
    v-if="type === 'section'"
    :enter-active-class="enterActiveClass"
    :leave-active-class="leaveActiveClass"
  >
    <section ref="sectionRef">
      <slot></slot>
    </section>
  </Transition>

  <Transition name="fade" :enter-active-class="enterActiveClass" :leave-active-class="leaveActiveClass" v-else>
    <div>
      <slot></slot>
    </div>
  </Transition>
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
  // return intersecting.value ? props.enterClass : "";
  return props.enterClass;
});

const leaveActiveClass = computed(() => {
  return intersecting.value ? props.leaveClass : "";
});
</script>
<style scoped lang="scss">
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
