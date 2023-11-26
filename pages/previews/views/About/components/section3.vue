<template>
  <section class="section bg-white p-10" ref="sectionRef">
    <div class="container mx-auto grid grid-cols-3 gap-20 max-lg:grid-cols-1 max-lg:gap-10">
      <div class="row-span-2 row-start-2 flex justify-end flex-col max-lg:hidden">
        <div class="mb-[5rem] w-full max-w-[416px] h-[397px]" data-aos="fade-right">
          <svg-icon name="about-people" class="about-people" />
        </div>
      </div>
      <h1
        class="text-black text-8xl max-lg:text-6xl max-md:text-4xl leading-normal col-span-2 col-start-2 max-lg:col-span-1 max-lg:col-start-1 font-gxjh-bold mt-16 mb-16 max-sm:mt-4 max-sm:mb-4"
        data-aos-delay="1000"
        data-aos="fade-left"
      >
        / 关于关于关于关于 关于关于关于
      </h1>
      <div class="col-start-2 col-span-2 max-lg:col-span-1 max-lg:col-start-1">
        <div>
          <p
            class="text-[#696969] text-2xl leading-[2.5rem] max-sm:text-xl max-sm:leading-[2.5rem] whitespace-pre-wrap"
            data-aos="fade-left"
          >
            Joy”为宗旨，始终专注高校影像赛道。10年来，高兴就好累计为超过百万用户提供了记录美好瞬间的机会.
          </p>

          <p
            class="text-[#696969] text-2xl leading-[2.5rem] max-sm:text-xl max-sm:leading-[2.5rem] whitespace-pre-wrap"
            data-aos="fade-left"
          >
            高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，自2014年成立以来，高兴就好 以“Shine Your
            Joy”为宗旨，始终专注高校影像赛道。10年来，高兴就好累计为超过百万用户提供了记录美好瞬间的机会.高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，自2014年成立以来，高兴就好
            以“Shine Your
            Joy”为宗旨，始终专注高校影像赛道。10年来，高兴就好累计为超过百万用户提供了记录美好瞬间的机会.高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，
          </p>

          <p
            class="text-[#696969] text-2xl leading-[2.5rem] max-sm:text-xl max-sm:leading-[2.5rem] whitespace-pre-wrap"
            data-aos="fade-left"
          >
            自2014年成立以来，高兴就好 以“Shine Your
            Joy”为宗旨，始终专注高校影像赛道。10年来，高兴就好累计为超过百万用户提供了记录美好瞬间
          </p>

          <p
            class="text-[#696969] text-2xl leading-[2.5rem] max-sm:text-xl max-sm:leading-[2.5rem] whitespace-pre-wrap"
            data-aos="fade-left"
          >
            自2014年成立以来，高兴就好 以“Shine Your
            Joy”为宗旨，始终专注高校影像赛道。10年来，高兴就好累计为超过百万用户提供了记录美好瞬间
          </p>

          <p
            class="text-[#696969] text-2xl leading-[2.5rem] max-sm:text-xl max-sm:leading-[2.5rem] whitespace-pre-wrap"
            data-aos="fade-left"
          >
            高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，自2014年成立以来，高兴就好 以“Shine Your
            Joy”为宗旨，始终专注高校影像赛道。10年来，高兴就好累计为超过百万用户提供了记录美好瞬间的机会.高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，自2014年成立以来，高兴就好
            以“Shine Your
            Joy”为宗旨，始终专注高校影像赛道。10年来，高兴就好累计为超过百万用户提供了记录美好瞬间的机会.高兴就好，作为中国成立最早、最具先锋的高校影像创造公司，
          </p>

          <p
            class="text-[#696969] text-2xl leading-[2.5rem] max-sm:text-xl max-sm:leading-[2.5rem] whitespace-pre-wrap"
            data-aos="fade-left"
          >
            自2014年成立以来，高兴就好 以“Shine Your
            Joy”为宗旨，始终专注高校影像赛道。10年来，高兴就好累计为超过百万用户提供了记录美好瞬间
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const sectionRef = ref<HTMLElement | null>(null);
</script>
<style scoped lang="scss">
.about-people {
  @apply w-full h-full;
}

p + p {
  margin-top: 1.25rem;
}
</style>
