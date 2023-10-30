<template>
  <section class="section3 bg-white">
    <div class="content">
      <h1 class="text-3xl text-black">渐变</h1>
      <div class="index03wrap bg-white">
        <div class="imgbox">
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
            <a href="javaScript:void(0)" class="more more01">more+</a>
          </div>
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

const setGasp = () => {
  ScrollTrigger.create({
    trigger: ".section3",
    onEnter: () => {
      var tl = gsap.timeline();
      tl.fromTo(".section3 .i-tl02min", {
        opacity: 0,
      }, {
        opacity: 1,
        duration: 3,
      }).fromTo(".section3 .i03info", { opacity: 0 }, {
        opacity: 1,
        duration: 3,
      }, "-=1");

      // 设置图片动画
      gsap.fromTo(".section3 .imgbox", {
        opacity: 0,
      }, {
        opacity: 1,
        duration: 3,
      });
    },
  });
};

onMounted(() => {
  setGasp();
});
</script>
<style scoped lang="scss">
.index03wrap {
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    -webkit-flex-direction: column;
  }
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
