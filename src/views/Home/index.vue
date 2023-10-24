<template>
  <div class="main">
    <div>{{ $t("menuList.home") }}</div>
    <svg
      class="fat-logo overflow-visible w-full h-auto"
      viewBox="0 0 1300 324"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="q"
        d="M299.061 249.066C297.879 250.907 295.305 251.151 293.756 249.607L74.3918 30.9644C72.8363 29.4141 73.0814 26.8276 74.9332 25.6465C100.149 9.56348 130.124 0.239746 162.282 0.239746C251.906 0.239746 324.563 72.6553 324.563 161.986C324.563 194.048 315.203 223.93 299.061 249.066ZM220.844 312.878C222.429 312.267 224.213 312.428 225.643 313.345L235.599 319.728C237.134 320.712 239.077 320.831 240.704 320.007C260.855 309.806 276.116 297.28 290.987 280.62C292.209 279.25 292.134 277.165 290.834 275.869L57.2108 43.0225C55.9082 41.7241 53.8186 41.6567 52.4628 42.8994C20.2104 72.4604 0 114.872 0 161.986C0 251.317 72.6575 323.732 162.282 323.732C182.932 323.732 202.677 319.887 220.844 312.878Z"
        fill="#FF764A"
      ></path>
      <path
        id="u"
        d="M355.973 9.84383C355.973 7.43078 357.929 5.47461 360.342 5.47461H656.972C659.386 5.47461 661.342 7.43077 661.342 9.84382V170.374C661.342 254.699 592.983 323.058 508.657 323.058C424.332 323.058 355.973 254.699 355.973 170.374V9.84383Z"
        fill="#FFB84F"
      ></path>
      <path
        id="d"
        d="M705.725 317.823C703.378 317.823 701.476 315.921 701.476 313.574V9.72352C701.476 7.37691 703.378 5.47462 705.724 5.47462L854.14 5.47461C940.393 5.47461 1010.31 75.3962 1010.31 161.649C1010.31 247.901 940.393 317.823 854.14 317.823H705.725Z"
        fill="#77C6D9"
      ></path>
      <path
        id="e"
        d="M1191.1 318.137H1294.77C1297.66 318.137 1300 315.793 1300 312.902V207.441C1300 204.55 1297.66 202.206 1294.77 202.206H1269.01C1265.33 202.206 1262.8 198.503 1264.13 195.071L1297.22 110.096C1298.56 106.664 1296.03 102.962 1292.34 102.962H1269.06C1265.37 102.962 1262.83 99.2344 1264.2 95.798L1297.16 12.6386C1298.52 9.20214 1295.99 5.47461 1292.29 5.47461H1191.1C1104.76 5.47461 1034.76 75.4669 1034.76 161.806C1034.76 248.145 1104.76 318.137 1191.1 318.137Z"
        fill="#47B172"
      ></path>
    </svg>
  </div>
</template>

<script setup lang="ts" name="Home">
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".mian",
  start: "top top",
  end: "500",
  scrub: true,
  onUpdate: (self) => {
    gsap.to("#q", {
      x: self.progress * 100,
      y: self.progress * 100,
      rotation: self.progress * 90,
      ease: "power1",
    });
  },
});

ScrollTrigger.create({
  trigger: ".mian",
  start: "top top",
  end: "500",
  scrub: true,
  onUpdate: (self) => {
    gsap.to("#u", {
      x: self.progress * 50,
      y: self.progress * 100,
      rotation: self.progress * 45,
    });
  },
});

ScrollTrigger.create({
  trigger: ".mian",
  start: "top top",
  end: "500",
  scrub: true,
  onUpdate: (self) => {
    gsap.to("#d", {
      x: self.progress * 100,
      y: self.progress * 400,
      rotation: -self.progress * 45,
    });
  },
});

ScrollTrigger.create({
  trigger: ".mian",
  start: "top top",
  end: "500",
  scrub: true,
  onUpdate: (self) => {
    gsap.to("#e", {
      x: self.progress * 200,
      y: self.progress * 200,
      rotation: -self.progress * 90,
    });
  },
});

onMounted(() => {});
</script>
<style scoped lang="scss">
.main {
  height: 2000px;
}
.overflow-visible {
  overflow: visible;
  margin-top: 100px;
}
.w-full {
  width: 100%;
}
.h-auto {
  height: auto;
}
svg,
svg * {
  pointer-events: none;
}
</style>
