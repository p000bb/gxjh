<template>
  <section class="section bg-white min-h-screen h-fit overflow-hidden" ref="sectionRef">
    <div class="logo-cirle top-[5%] left-[-5%] min-w-[350px] min-h-[350px] w-[40vw] h-[40vw]">
      <svg-icon name="gxjh-contact-one" class="logo-animation" data-aos="zoom-in" data-aos-duration="2000" />
    </div>
    <div class="logo-cirle top-[10%] right-[-15%] min-w-[400px] min-h-[400px] w-[40vw] h-[45vw]">
      <svg-icon name="gxjh-contact-two" class="logo-animation" data-aos="zoom-in" data-aos-duration="2000" />
    </div>
    <div class="logo-cirle bottom-[0] left-[30%] min-w-[500px] min-h-[500px] w-[50vw] h-[40vw]">
      <svg-icon name="gxjh-contact-three" class="logo-animation" data-aos="zoom-in" data-aos-duration="2000" />
    </div>

    <div
      class="p-36 grid grid-cols-2 gap-10 min-h-screen max-lg:grid-cols-1 max-lg:p-12 max-lg:mt-40 max-sm:p-4 max-sm:mt-20"
    >
      <div class="flex flex-col justify-center order-1 max-lg:order-2">
        <div class="mb-10" data-aos="fade-right" data-aos-duration="2000">
          <p class="p-title">联系我们 CONTACT INFORMATION</p>
          <p class="p-name">王崇均</p>
          <p class="p-info">中国地区·浙江省杭州市西湖区三墩镇申花路798号</p>
          <p class="p-info">浙江高兴就好传媒科技有限公司紫金港·创新企业园12楼</p>
          <p class="p-info">+86 151 5805 6680</p>
          <p class="p-info">Hello@gxjh.com</p>
        </div>
        <div data-aos="fade-right" data-aos-duration="2000" data-aos-delay="5000" data-aos-offset="100">
          <p class="p-title">{{ $t("contact.find") }}</p>
          <a>{{ $t("contact.red") }}</a>
          <a>{{ $t("contact.weixin") }}</a>
        </div>
      </div>
      <div class="flex flex-col justify-center order-2 max-lg:order-1">
        <div class="min-w-[300px] min-h-[300px] w-[25vw] h-[25vw] text-black">
          <svg-icon
            name="gxjh-contact-logo"
            class="logo-animation"
            data-aos="zoom-in"
            data-aos-duration="2000"
            data-aos-delay="1500"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const sectionRef = ref<HTMLElement | null>(null);

onMounted(() => {});
</script>
<style scoped lang="scss">
.logo-cirle {
  @apply absolute -z-[1];
}

.logo-animation {
  @apply w-full h-full;
}

.p-title {
  @apply text-[#FF5101] text-2xl pb-4 font-gxjh-medium;
}

.p-name {
  @apply text-black text-xl tracking-widest pb-4 font-gxjh-thin;
}
.p-info {
  @apply text-black text-xl tracking-widest pb-4 font-gxjh-thin;
}

a {
  @apply text-black text-xl link link-hover block pb-4 font-gxjh-thin;
}
</style>
