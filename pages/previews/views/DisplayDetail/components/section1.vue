<template>
  <section class="section bg-[#231F20] p-20 min-h-screen overflow-x-hidden" ref="sectionRef">
    <div class="container mx-auto">
      <div class="flex justify-center">
        <h1
          class="text-8xl text-white text-center font-black tracking-[1.5rem] mb-20 relative max-w-5xl leading-[8rem]"
        >
          关于关于关于关于关于关于关于
        </h1>
      </div>
      <div class="mb-20">
        <p class="text-2xl leading-10">
          高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，自2014年成立以来，高兴就好 以“Shine Your
          Joy”为宗旨，始终专注高校影像赛道。10年来，高兴就好累计为超过百万用户提供了记录美好瞬间的机会.
          高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，自2014年成立以来，高兴就好 以“Shine Your
          Joy”为宗旨，始终专注高校影像赛道。10年来，高兴就好累计为超过百万用户提供了记录美好瞬间的机会.高兴就好，作为中国成立最
        </p>
        <p></p>
        <p class="text-2xl leading-10">
          高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，自2014年成立以来，高兴就好 以“Shine Your
          Joy”为宗旨，始终专注高校影像赛道。10年来，高兴就好累计为超过百万用户提供了记录美好瞬间的机会.
          高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，自2014年成立以来，高兴就好 以“Shine Your
          Joy”为宗旨，始终专注高校影像赛道。10年来，高兴就好累计为超过百万用户提供了记录美好瞬间的机会.高兴就好，作为中国成立最
        </p>
        <p class="text-2xl leading-10">
          高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，自2014年成立以来，高兴就好 以“Shine Your
          Joy”为宗旨，始终专注高校影像赛道。10年来，高兴就好累计为超过百万用户提供了记录美好瞬间的机会.
          高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，自2014年成立以来，高兴就好 以“Shine Your
          Joy”为宗旨，始终专注高校影像赛道。10年来，高兴就好累计为超过百万用户提供了记录美好瞬间的机会.高兴就好，作为中国成立最
        </p>
        <p class="text-2xl leading-10">
          高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，自2014年成立以来，高兴就好 以“Shine Your
          Joy”为宗旨，始终专注高校影像赛道。10年来，高兴就好累计为超过百万用户提供了记录美好瞬间的机会.
          高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，自2014年成立以来，高兴就好 以“Shine Your
          Joy”为宗旨，始终专注高校影像赛道。10年来，高兴就好累计为超过百万用户提供了记录美好瞬间的机会.高兴就好，作为中国成立最
        </p>
        <p class="text-2xl leading-10">
          高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，自2014年成立以来，高兴就好 以“Shine Your
          Joy”为宗旨，始终专注高校影像赛道。10年来，高兴就好累计为超过百万用户提供了记录美好瞬间的机会.
          高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，自2014年成立以来，高兴就好 以“Shine Your
          Joy”为宗旨，始终专注高校影像赛道。10年来，高兴就好累计为超过百万用户提供了记录美好瞬间的机会.高兴就好，作为中国成立最
        </p>
      </div>
    </div>

    <div class="absolute left-0 bottom-10 w-screen flex justify-center">
      <svg-icon
        name="down"
        class="text-5xl logo-animation hover:cursor-pointer"
        @click="next"
        data-aos="fade-up"
        data-aos-easing="linear"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const sectionRef = ref<HTMLElement | null>(null);

const next = () => {
  // 获取sectionRef元素的高度
  const sectionHeight = sectionRef.value?.offsetHeight;
  // 浏览器滚动到指定区域
  window.scrollTo({
    top: sectionHeight,
    behavior: "smooth"
  });
};
</script>
<style scoped lang="scss">
p + p {
  margin-top: 2rem;
}
</style>
