<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import Typed from "typed.js";

let typed: any = null;
const pRef = ref<HTMLParagraphElement>();

const onceAgain = () => {
  typed?.reset();
  typed?.start();
};

onMounted(() => {
  if (pRef.value) {
    const options = {
      strings: ["高兴就好"],
      typeSpeed: 100,
      showCursor: false
    };
    typed = new Typed(pRef.value, options);
  }
});

onUnmounted(() => {
  typed?.destroy();
});
</script>

<template>
  <section>
    <div class="content">
      <div class="z-10 w-full">
        <div class="container1">
          <p ref="pRef" />
          <a-button type="primary" class="btn" @click="onceAgain"> Once Again </a-button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.container1 {
  width: 100%;
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #04182c, #000c17, #04182c);

  p {
    font-size: 44px;
    font-weight: 500;
    height: 54px;
    line-height: 48px;
    text-align: center;
    white-space: nowrap;
  }

  .btn {
    margin-top: 80px;
  }
}
</style>
