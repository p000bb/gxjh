<template>
  <section>
    <div class="index03wrap bg-white">
      <div class="imgbox animate__fadeInLeft duration-300 ease-in">
        <img
          src="http://www.galaculture.com/static/modules/cms/images/i-img09.jpg"
        />
      </div>
      <div class="text animate__fadeInRight duration-300">
        <div class="i-tl02">
          <div class="i-tl02min">
            <h3>深白空间摄影棚</h3>
          </div>
        </div>
        <div class="i03info">
          <h4>
            深白空间摄影棚不断探索创新，致力于打造全新白色印象，将拍摄创作环境舒适化，融入品牌形象的同时激发无穷的创作灵感，为崇尚极简、自由、创意的创作者们提供一个舒适的拍摄创作空间。
          </h4>
          <a href="/lists/51.html" class="more more01">more+</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: "section",
  start: "top top",
  end: "bottom bottom",
  scrub: true,
  onUpdate: (self) => {
    gsap.to(".imgbox", {
      x: self.progress * 100,
      y: self.progress * 100,
      rotation: self.progress * 90,
      ease: "power1",
    });
  },
  onEnter: () => {
    console.log(1);
    gsap.to(".imgbox", {
      opacity: 1,
      duration: 0.5,
      ease: "power1",
    });
  },
});

onMounted(() => {});
</script>
<style scoped lang="scss">
.index03wrap {
  margin: 100px auto;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
  overflow: hidden;
}

.imgbox {
  width: 55%;
  position: relative;
  box-sizing: border-box;
  padding-left: 30px;
  padding-top: 60px;
  padding-bottom: 60px;
}

.text {
  width: 40%;
  box-sizing: border-box;
}

.i-tl02 {
  position: relative;
  box-sizing: border-box;
  padding: 20px;
}

.i-tl02min {
  box-sizing: border-box;
  padding: 10px 0;
  background-color: #fff;
  position: relative;
  h3 {
    font-size: 24px;
    color: #222222;
    font-weight: bold;
    margin-bottom: 6px;
  }
}

.i03info {
  margin-top: 60px;
  h4 {
    font-size: 16px;
    color: #222222;
    line-height: 24px;
    margin-bottom: 50px;
  }
  .more1 {
    background-color: transparent;
    border: 1px solid #222222;
    margin: auto;
    text-transform: uppercase;
    font-size: 16px;
    color: #222222;
    margin-top: 50px;
    width: 210px;
    height: 56px;
    margin: 0;
  }
}
</style>
