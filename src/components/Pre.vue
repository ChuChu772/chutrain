<template>
    <!-- <section class="heitop"></section> -->
    <section class="hei"
    v-for="(items, index) in w"
    :key="index"
    >
    <div class="hei1">
        <div class="heiw">
            <p>{{ items.title }}</p>
        <p>{{ items.content }}</p>
        </div>
    </div>
    <div class="heipic"
     @mouseenter="emit('change-cursor', true)"
    @mouseleave="emit('change-cursor', false)"
    >
    <a :href="items.link" target="_blank" rel="noopener noreferrer" class="heipicoverlay"></a>
        <img :src="items.image" />
    </div>
</section>
</template>

<style scoped>
.heitop{
    height: 50vh;
    width: 100%;
    position: relative;
    display: flex;
}
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
    gap: 1rem;
    overflow: hidden;
}
.heiw{
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 1rem;
}
.hei p:nth-child(1){
    font-size: var(--h5);
    font-weight: 500;
}
.heipic{
    display: flex;
    position: relative;
    height: 100%;
    width: calc(100%/6*4);
    justify-content: center;
    align-items: end;
    background-color: var(--dd);
    overflow: hidden;
    opacity: 0;
    cursor: pointer;
  clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);

}
.heipic img{
    height: 60%;
    border-radius: 10px;
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
</style>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch, nextTick, reactive } from 'vue';
import gsap from 'gsap';
import { useRoute } from 'vue-router';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const route = useRoute();

const props = defineProps({
  cursorBig: {
    type: Boolean,
    default: false,
    required: false,
  }
})
const emit = defineEmits(['change-cursor'])

const w = [
    { title: 'A History Of Taiwan Ceramic Patterns', year: '2024 - 2025', content: '作品結合陶瓷創作與網頁互動設計。網頁內容分為三大部分：台灣陶瓷的歷史脈絡、二十款紋樣的文化寓意（互動式瀏覽）、以及陶瓷製作的流程介紹。觀者可以透過點選不同時期或紋樣類別進行互動，進一步了解台灣陶瓷如何在時間的推移中融合、演變，並從泥土之初走向精緻成品。', link:'https://chuchu772.github.io/chuchu/k2/tty.html', image: '/aaaa.png' },
    { title: 'La1ako', year: '2025', content: '這是展開後的內容 B', image: '/aaaa.png'},
    { title: 'OPQ temporary website for sabukaru pop-up', year: '2025', content: '這是展開後的內容 B', image: '/iPhone-01.png', link: 'https://opqtest.com/'}
]


function again() {
gsap.utils.toArray(".heiw").forEach((elem) => {
  gsap.to(elem, {
    scrollTrigger: {
      trigger: elem,
      start: "top 20%",
      end: () => `+=${window.innerHeight * 0.8 - elem.offsetHeight}`,
      pin: true,
      markers: false,
      pinSpacing: true
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
    }
  });
});
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
}
onMounted(async () => {
  await nextTick();
  again();
});

// 離開元件時清理動畫
onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach(t => t.kill());
});
</script>