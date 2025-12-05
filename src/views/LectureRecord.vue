<template>
<div id="smooth-wrapper">
<div id="smooth-content">
    <div class="lecture">
        <div class="record">
            <div class="l1">
                <div class="l111">
                    <div class="l11">
                    <div class="l11w1"><p>Lecture</p></div>
                    <div class="l11w2"><p>Record</p></div>
                    </div>
                    <!-- <div class="l21" id="fff">
                       <p>在畢業製作擔任公關組組員一職，負責名人講座的整體規劃與執行，從最初與講者聯繫、安排流程，到中期撰寫講座大綱、視覺素材與宣傳內容，最後協助現場動線與活動主持。熟悉溝通協調、內容策劃和活動執行的完整流程，並能在在有限時間中整合資訊、統籌細節。</p>
                    </div> -->
                    <div class="container">
                        <div class="animate-me" aria-hidden="true">
                            在畢業製作擔任公關組組員一職，負責名人講座的整體規劃與執行，從最初與講者聯繫、安排流程，到中期撰寫講座大綱、視覺素材與宣傳內容，最後協助現場動線與活動主持。熟悉溝通協調、內容策劃和活動執行的完整流程，並能在在有限時間中整合資訊、統籌細節。
                        </div>
                    </div>
                </div>

                <div class="l12">
                        <div @click="goBack" class="p23ww">
                            <p>Back</p>
                        </div>
                        <div class="p23ww">
                            <p>Contact</p>
                        </div>
                </div>
            </div>
            <div class="l2">
                <div 
                v-for="( a , index) in record"
                :key="index"
                class="l22">
                    <div class="name">{{ a.name }}</div>
                    <div class="content">{{ a.content ?? '' }}</div>
                    <img :src=" a.pic ?? ''" class="pic"></img>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>

<style scoped>
.lecture{
    width: 100vw;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: start;
    background-color: var(--dd);
  color: var(--aa);
  overflow: hidden;
}
.record{
    display: flex;
    height: 100%;
    width: var(--width);
  overflow: hidden;
}
.l1{
    display: flex;
    position: relative;
  flex-direction: column;
  height: 100vh;
  width: calc(var(--width)/6 * 2);
  justify-content: space-between;
  font-size: var(--h2);
  letter-spacing: .1rem;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  gap: 1rem;
}
.l111{
    height: 60%;
    width: 100%;
    display: flex;
    gap: 1rem;
    flex-direction: column;
}
.l11{
    position: relative;
    padding: var(--wid) 0 0 0;
    width: 100%;
}
/* .l11w1 p, .l11w2 p{
    transform: translateY(100%);
} */
.l12{
    display: flex;
    flex-direction: column;
    position: relative;
    height: 40%;
    justify-content: end;
}
.l2{
    display: flex;
    flex-direction: column;
  height: 100%;
  width: calc(var(--width)/6 * 3);
  display: flex;
  position: relative;
  gap: 2rem;
  overflow: hidden;
  padding: calc(var(--wid) + 11vh + 1.4rem) 0 calc(var(--wid) + 1rem ) 0;
}
.container{
    display: flex;
    position: relative;
    font-size: var(--h6);
  overflow: hidden;
    width: calc(var(--width)/6 * 1.5);
    font-weight: 300;
    line-height: 1.7rem;
    justify-content: start;
    align-items: start;
    /* height: 35vh; */
}
.animate-me {
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  perspective: 500px;
  overflow: hidden;
}
.l22{
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: start;
    align-items: flex-start;
    text-align: start;
    width: 100%;
    gap: .7rem;
  overflow: visible;
}
.l22::after{
    content: "";
    position: absolute;
    border-bottom: .5px solid var(--aa);
    display: block;
    inset: 0 0 -1.5rem 0 ;
  overflow: hidden;
    /* transform: translateY(5%); */
}
.name{
    display: block;
    position: relative;
    width: 100%;
    color: var(--aa);
    font-size: var(--h5);
    line-height: 1;
}
.content{
    display: block;
    position: relative;
    font-size: var(--h6);
    line-height: 1;
}
.pic{
    display: flex;
    position: relative;
    width: 100%;
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}
.pic img{
    position: relative;
    display: flex;
    width: 100%;
    object-fit: cover;
}
.p23ww{
  color: var(--aa);
}
</style>

<script setup>
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import SplitText from "gsap/SplitText";
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

function goBack() {
  router.back()   // 或 router.go(-1)
}

gsap.registerPlugin(ScrollTrigger,SplitText,ScrollSmoother);

onMounted(() => {

    ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    smooth: 2,   // 1~3 之間，數字越大越滑
    effects: true
    });

    // const tl = gsap.timeline()
    // tl

    gsap.utils.toArray(".pic").forEach(elem => {
    gsap.from(elem, {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        duration: 1.5,
        delay: 1.5,
        opacity:0,
        ease:"power4.out",
    });
    });
    gsap.to( '.l1', {
        scrollTrigger: {
        trigger:'.l1',
        start: 'top top',
        end: 'bottom -999',
        pin:true,
    }});

})




onMounted(async () => {
await document.fonts.ready;   // 等待字體載入

gsap.registerPlugin(SplitText);

document.fonts.ready.then(() => {
    let split1 = SplitText.create(".l11", { type: "chars", aria: "hidden" });

  gsap.from(split1.chars, {
    y:10,
    opacity: 0,
    duration: 0.6,
    ease: "sine.out",
    stagger: 0.01,
  });
  let split = SplitText.create(".animate-me", { type: "chars", aria: "hidden" });

  gsap.from(split.chars, {
    y:10,
    opacity: 0,
    duration: 1.5,
    ease: "sine.out",
    stagger: 0.01,
  });

 let splitname = SplitText.create(".name", { type: "chars", aria: "hidden" })

    gsap.from(splitname.chars, {
    y: 10,
    opacity: 0,
    duration: 0.9,
    ease: "sine.out",
    stagger: 0.01,
    delay:1,
    });
 let splitcon = SplitText.create(".content", { type: "chars", aria: "hidden" })
    gsap.from(splitcon.chars, {
    y: 10,
    opacity: 0,
    duration: 0.9,
    ease: "sine.out",
    stagger: 0.01,
    delay:1,
    });


});
});


const record = [
  { 
    name: '陳敬恆｜赤燭遊戲 美術總監',
    content: '獨立遊戲創作-從視覺建構世界觀',
    pic: '/lecture-02.png'
  },
  { 
    name: '林思翰｜Group.G AI 文化科技導演',
    content: '生成未來-AI導演的敘事實驗與業介現象',
    pic: '/lecture-03.png'
  },
  { 
    name: '陳念瑩｜[ 2022 金曲獎 ] 最佳裝幀設計獎設計師',
    content: '自由創作者的自學與自立之路：創作如何成為職涯？',
    pic: '/lecture-01.png'
  }
]


</script>