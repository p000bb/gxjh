<template>
  <div class="body px-5">
    <div class="welcome">
      <h1 class="heading">高兴就好</h1>
      <h3 class="sub-heading">一次就好</h3>
      <div class="loader-wrapper">
        <div class="loader"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "gsap";
import { useRouter } from "vue-router";

const router = useRouter();

const timeline = gsap.timeline({
  ease: "Expo.easeOutIn",
  duration: 1,
  delay: 0,
});
onMounted(() => {
  timeline.play(0);
  timeline.fromTo(
    ".welcome",
    {
      width: "0vw",
      opacity: 0,
    },
    {
      width: "100vw",
      opacity: 1,
      duration: 0.5,
    }
  );

  timeline.fromTo(".heading", { y: "-30px", opacity: 0 }, { y: 0, opacity: 1 });
  timeline.fromTo(
    ".sub-heading",
    { y: "-30px", opacity: 0 },
    { y: 0, opacity: 1 }
  );
  timeline.fromTo(
    ".loader-wrapper",
    { y: "-30px", opacity: 0 },
    { y: 0, opacity: 1 }
  );
  timeline.fromTo(".loader", { width: "0%" }, { width: "100%", duration: 2.3 });
  timeline.to(".welcome", {
    width: "0vw",
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    onComplete: () => {
      router.push("/home");
    },
  });
});
</script>

<style scoped>
.body {
  height: 100vh;
  width: 100vw;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-x: hidden;
}

.welcome {
  height: 100vh;
  width: 100vw;
  position: absolute;
  background: #4a4a4a;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  letter-spacing: 2px;
  color: #fff;
}

.heading {
  font-family: "Snell Roundhand";
  font-size: 50px;
  margin-bottom: 0px;
  opacity: 0;
}

.sub-heading {
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 2px;
  font-family: "Avenir Next";
  margin-bottom: 20px;
  opacity: 0;
}

.loader-wrapper {
  height: 2px;
  width: 150px;
  background: #ededed;
  border-radius: 100px;
  opacity: 0;
}

.loader {
  height: 2px;
  width: 150px;
  background: #fff;
  border-radius: 100px;
  background: #585858;
}

p {
  max-width: 500px;
  font-family: "Avenir";
  line-height: 25px;
  text-align: justify;
  opacity: 0;
  color: #585858;
}
</style>
