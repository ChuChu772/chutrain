<template>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=arrow_back,arrow_forward" />
    <!-- <section class="heitop"></section> -->
    <div id="pre">
      <section class="pre-root">
          <div class="heitop" v-if="isWide"></div>
          <div class="hei"
      v-for="(items, index) in w"
      :key="index"
      >
      <div class="hei1">
          <div class="heiw">
              <p>{{ items.title }}</p>
              <p>{{ items.type }}</p>
              <p>{{ items.content }}</p>
          </div>
          <a :href="items.link" target="_blank" class="heiw2" v-if="isWide">
              <p>Visit Site</p>
              <span class="material-symbols-rounded">arrow_forward</span>
          </a>
      </div>
        <div class="heipic"
        @mouseenter="emit('change-cursor', true)"
        @mouseleave="emit('change-cursor', false)"
        >
        <a :href="items.link" target="_blank" rel="noopener noreferrer" class="heipicoverlay"></a>
            <img :src="items.image" />
        </div>
    </div>
    </section>
  </div>
</template>

<style scoped>
@media screen and (min-width: 600px) {
.hei{
    display: flex;
    height: 80vh;
    width: var(--width);
    margin-left: var(--wid);
    padding: 0 0 2rem 0;
    /* border: 1px solid black; */
    gap: 2rem;
    overflow: hidden;
}
.hei1{
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    line-height: 1.7rem;
    width: calc(100%/6*2 - 2rem);
    /* margin-top: var(--wid); */
    color: var(--cc);
    font-size: var(--h6);
    overflow: hidden;
}
.heiw{
    display: flex;
    flex-direction: column;
    position: relative;
    gap: .5rem;
}
.hei p:nth-child(1){
    font-size: var(--h5);
    font-weight: 500;
}
.hei p:nth-child(2){
    width: fit-content;
    height: fit-content;
    font-size: var(--one);
    font-weight: 500;
  border-radius: 2rem;
  padding: 0.2rem 0.7rem;
  font-size: var(--one);
  font-weight: 300;
  background-color: var(--cc);
    color: var(--aa);
  line-height: 1.5;
  letter-spacing: .3px;
   font-family: "Roboto Mono", monospace;
}
.hei p:nth-child(3){

  letter-spacing: .1rem;
}
.heipic{
    display: flex;
    position: relative;
    height: 100%;
    width: calc(100%/6*4);
    justify-content: center;
    align-items: end;
    background-color: var(--bb);
    overflow: hidden;
    opacity: 0;
    cursor: pointer;
  font-size: var(--h6);
  clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
}
.heipic p{
    position: absolute;
    display: flex;
    right: 0;
    bottom: 0;
    margin: 3rem;
    color: var(--cc);
}
.heipic img{
    height: 60%;
    transform: translateY(-120%);
}
.heipicoverlay{
    position: absolute;
    display: flex;
    z-index: 9;
    inset: 0;
    height: 100%;
    width: 100%;
    background-color: transparent;
}
}
@media screen and (max-width: 600px) {

:root {
  --a1: 600 32px "Inter", sans-serif;
  --a12: 600 16px/1 "Inter", sans-serif;
  --a2: 500 13px/1.5 "Noto Sans TC", sans-serif;
  --a3: 400 11px/1.5 "Inter", sans-serif;
  --a4inter: 400 9px/1.5 "Inter", sans-serif;
  --a4mono: 400 9px/1.5 "Roboto Mono", monospace;
}
    .heitop{
        height: 100px;
        width: 100%;
    }
.hei{
    display: flex;
    height: 200px;
    width: var(--width);
    margin-left: var(--wid);
    padding: 0 0 16px 0;
    gap: 8px;
    overflow: hidden;
}
.hei1{
    display: flex;
    flex-direction: column;
    position: relative;
    height: 170px;
    line-height: 1.7;
    width: calc(50% - 8px);
    /* margin-top: var(--wid); */
    color: var(--cc);
    font-size: 10px;
    gap: 12px;
    overflow: hidden;
    justify-content: space-between;
    align-items: start;
}
.heiw{
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: space-between;
    gap: 8px;
}
.heiw2{
    display: flex;
    position: relative;
    height: 20px;
    width: 100%;
    justify-content: start;
    align-items: center;

}
.heiw2 p{
    font: var(--a4mono) !important;
}
.heiw2 span{
    display: flex;
    position: relative;
    height: 100%;
    transform: scale(.6);
}
.hei1 a{
    text-decoration: none;
    color: inherit;
    box-shadow: none;
}
.hei p:nth-child(1){
  letter-spacing: .5px;
  font: var(--a2);
  /* border: 1px solid orange; */
}
.hei p:nth-child(2){
    width: fit-content;
    height: fit-content;
    font-size: var(--one);
    font-weight: 500;
  border-radius: 30px;
  padding: 4px 10px;
  background-color: var(--cc);
    color: var(--aa);
    font: var(--a4mono);
   font-family: "Roboto Mono", monospace;
}
.hei p:nth-child(3){
  letter-spacing: .5px;
    /* border: 1px solid blue; */
  font: var(--a3);
}
.heipic{
    display: flex;
    position: relative;
    height: 170px;
    width: 50%;
    justify-content: center;
    align-items: center;
  background-color: var(--bb);
    overflow: hidden;
    cursor: pointer;
      clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
}
.heipic img{
    width: 90%;
    object-fit: cover;
}
.heipicoverlay{
    position: absolute;
    display: flex;
    z-index: 9;
    inset: 0;
    height: 100%;
    width: 100%;
    background-color: transparent;
}
}
</style>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, nextTick, reactive } from 'vue';
import gsap from 'gsap';
import { SplitText } from "gsap/SplitText";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useRoute } from 'vue-router';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger,SplitText,ScrollSmoother);

const isWide = window.innerWidth < 800
const route = useRoute();

const props = defineProps({
  cursorBig: {
    type: Boolean,
    default: false,
    required: false,
  }
})
const emit = defineEmits(['change-cursor'])
import a1 from '@/assets/a1.png'
import lako from '@/assets/lako.jpg'
import iPhone01 from '@/assets/iPhone-01.png'

const w = [
    { title: 'A History Of Taiwan Ceramic Patterns', year: '2024 - 2025', type: 'RWD', content: '結合陶瓷創作與 Arduino 網頁互動設計。觀者可以透過點選不同時期或紋樣類別進行互動。', link:'https://chuchu772.github.io/chuchu/k2/tty.html', image: a1 },
    { title: 'La1ako（ 施工中 ）', year: '2025', type: 'RWD', content: '為 La1ako 架設的線上商店，把購物從行為變成感受，讓使用網站本身也能是一段體驗。', image: lako},
    { title: 'OPQ temporary website for sabukaru pop-up', year: '2025', type: 'Mobile Only', content: 'OPQ 為 Sabukaru 在台灣活動打造的臨時網站，網站用於活動期間的資訊展示與互動。', image: iPhone01, link: 'https://opqtest.com/'}
]


function again() {

  if( window.innerWidth > 800){
gsap.utils.toArray(".heiw").forEach((elem) => {
  gsap.to(elem, {
    scrollTrigger: {
      trigger: elem,
      start: "top 20%",
      end: () => `+=${window.innerHeight * 0.8 - elem.offsetHeight}`,
      pin: true,
      markers: false,
      pinSpacing: true,
      toggleActions: "play none none reverse",
    }
  });
});
gsap.utils.toArray(".heipic img").forEach((elem) => {
  gsap.to(elem, {
    y: -50,
    scrollTrigger: {
      trigger: elem,
      start: "top bottom",
      end: "bottom -50%",
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse",
    }
  });
});
  }
gsap.utils.toArray(".heipic").forEach((elem) => {
  gsap.to(elem, {
    opacity:1,
    duration:1,
    clipPath:' polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    scrollTrigger: {
      trigger: elem,
      start: "top bottom",
      end: "bottom -50%",
      markers: false,
    }
  });
});
gsap.utils.toArray(".heiw").forEach((elem) => {
  gsap.from(elem, {
    y: 20,
    opacity:0,
    duration: 0.6,
    scrollTrigger: {
      trigger: elem,
      start: "top bottom",
      end: "bottom -50%",
      ease: "power2.out",
    }
  });
});
}
onMounted(async () => {
    await nextTick();
    again();
});

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach(t => t.kill());
});
</script>