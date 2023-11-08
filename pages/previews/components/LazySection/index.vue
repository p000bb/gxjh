<template>
  <div ref="divRef">
    <Transition
      name="custom-classes"
      mode="out-in"
      :enter-active-class="enterActiveClass"
      :leave-active-class="leaveActiveClass"
      v-bind="$attrs"
    >
      <div v-show="intersecting">
        <slot></slot>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

const props = defineProps({
  enterClass: {
    type: String,
    default: ""
  },
  leaveClass: {
    type: String,
    default: ""
  }
});

const divRef = ref<HTMLElement>();
const intersecting = ref(false);

// 监听元素是否进入视口,如果slotVisible为true,则表示元素进入视口
useIntersectionObserver(divRef, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    intersecting.value = true;
    console.log("进入视口");
  } else {
    // intersecting.value = false;
    console.log("离开视口");
  }
});

const enterActiveClass = computed(() => {
  console.log(intersecting.value ? "animate__animated" + props.enterClass : "");
  return intersecting.value ? "animate__animated " + props.enterClass : "";
});

const leaveActiveClass = computed(() => {
  return intersecting.value ? "animate__animated " + props.leaveClass : "";
});
</script>
<style scoped lang="scss"></style>
