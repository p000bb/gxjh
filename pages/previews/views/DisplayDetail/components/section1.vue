<template>
  <section class="section bg-[#231F20] pt-24 min-h-screen overflow-x-hidden" ref="sectionRef">
    <div class="container mx-auto">
      <div class="flex justify-center">
        <h1
          class="font-gxjh-bold text-8xl max-2xl:text-7xl max-xl:text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl text-white text-center tracking-[1.5rem] mb-20 max-md:mb-10 relative max-w-5xl leading-[8rem]"
          data-aos="zoom-in"
        >
          关于关于关于关于关于关于关于
        </h1>
      </div>
      <div class="mb-40 max-md:mb-20">
        <p data-aos="zoom-in-up" data-aos-delay="300">
          高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，自2014年成立以来，高兴就好 以“Shine Your
          Joy”为宗旨，始终专注高校影像赛道。10年来，高兴就好累计为超过百万用户提供了记录美好瞬间的机会.
          高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，自2014年成立以来，高兴就好 以“Shine Your
          Joy”为宗旨，始终专注高校影像赛道。10年来，高兴就好累计为超过百万用户提供了记录美好瞬间的机会.高兴就好，作为中国成立最
        </p>
        <p data-aos="zoom-in-up" data-aos-delay="300">
          高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，自2014年成立以来，高兴就好 以“Shine Your
          Joy”为宗旨，始终专注高校影像赛道。10年来，高兴就好累计为超过百万用户提供了记录美好瞬间的机会.
          高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，自2014年成立以来，高兴就好 以“Shine Your
          Joy”为宗旨，始终专注高校影像赛道。10年来，高兴就好累计为超过百万用户提供了记录美好瞬间的机会.高兴就好，作为中国成立最
        </p>
        <p data-aos="zoom-in-up" data-aos-delay="300">
          高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，自2014年成立以来，高兴就好 以“Shine Your
          Joy”为宗旨，始终专注高校影像赛道。10年来，高兴就好累计为超过百万用户提供了记录美好瞬间的机会.
          高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，自2014年成立以来，高兴就好 以“Shine Your
          Joy”为宗旨，始终专注高校影像赛道。10年来，高兴就好累计为超过百万用户提供了记录美好瞬间的机会.高兴就好，作为中国成立最
        </p>
        <p data-aos="zoom-in-up" data-aos-delay="300">
          高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，自2014年成立以来，高兴就好 以“Shine Your
          Joy”为宗旨，始终专注高校影像赛道。10年来，高兴就好累计为超过百万用户提供了记录美好瞬间的机会.
          高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，自2014年成立以来，高兴就好 以“Shine Your
          Joy”为宗旨，始终专注高校影像赛道。10年来，高兴就好累计为超过百万用户提供了记录美好瞬间的机会.高兴就好，作为中国成立最
        </p>
        <p data-aos="zoom-in-up" data-aos-delay="300">
          高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，自2014年成立以来，高兴就好 以“Shine Your
          Joy”为宗旨，始终专注高校影像赛道。10年来，高兴就好累计为超过百万用户提供了记录美好瞬间的机会.
          高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，自2014年成立以来，高兴就好 以“Shine Your
          Joy”为宗旨，始终专注高校影像赛道。10年来，高兴就好累计为超过百万用户提供了记录美好瞬间的机会.高兴就好，作为中国成立最
        </p>
      </div>
    </div>

    <div class="flex justify-center next-animation" data-aos="zoom-in-up">
      <div class="rotate-90 w-[165px] h-[165px] text-[#656363]">
        <svg-icon name="gxjh-next" class="text-[10.25rem] hover:cursor-pointer" @click="next" />
      </div>
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

p {
  line-height: 1.5 !important;
  @apply text-2xl max-md:text-xl;
}
.next-animation {
  animation: bounce 3s infinite;
}
</style>
