<template>
<div id="smooth-wrapper">
<div id="smooth-content">
    <div class="bgc"></div>
    <div class="lecture">
        <div class="record">
            <div class="l1">
                <div class="l111">
                    <div class="l11">
                        <div class="l11w1"><p>Lecture</p></div>
                        <div class="l11w2"><p>Record</p></div>
                    </div>
                    <div class="container">
                        <div class="animate-me" aria-hidden="true">
                            在畢業製作中，我負責公關組的講座專案。前期需要主動與講者接洽、確認合作意向，再依照講者特性規劃講座主題與流程。中期著手整理訪談資料、撰寫講座腳本，並與視覺組共同協作，製作宣傳圖文與對外發布內容。講座當天協助場地動線安排、來賓接待與主持串場，確保節奏順暢無誤。
                        </div>
                    </div>
                </div>
                <div class="l12" v-if="!isWide">
                    <div class="p23w">
                        <div @click="goBack" class="p23w1">
                            <div class="p23ww">
                              <p>Back</p>
                            </div>
                        </div>
                        <div class="p23w1">
                            <div class="p23ww">
                             <p>Contact</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="l2">
                <div 
                v-for="( a , index) in record"
                :key="index"
                class="l22">
                    <div class="namelec">{{ a.name }}</div>
                    <div class="content">{{ a.content ?? '' }}</div>
                    <img :src=" a.pic ?? ''" class="pic"></img>
                    <span class="l22-after"></span>
                </div>
            </div>
            <div class="l12" v-if="isWide">
                <div @click="goBack" class="p23w1">
                    <div class="p23ww">
                        <p>Back</p>
                    </div>
                </div>
                <div class="p23w1">
                    <div class="p23ww">
                        <p>Contact</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>

<style scoped>
@media screen and (min-width: 800px) {
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
  padding: calc(var(--wid) + 13vh + 1.6rem) 0 calc(var(--wid) + 1rem ) 0;
}
.container{
    display: flex;
    position: relative;
    font-size: var(--h6);
  overflow: hidden;
    width: calc(var(--width)/6 * 1.5);
    font-weight: 300;
    line-height: 1.3rem;
    justify-content: start;
    align-items: start;
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
.l22-after {
  position: absolute;
  border-bottom: .5px solid var(--aa);
  inset: 0 0 -1rem 0;
  display: block;
  overflow: hidden;
    transform: scaleX(0);
    transform-origin: left;
    opacity:0,
}
.namelec{
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
    font-weight: 300;
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
.p23w{
  height: calc(100vh - var(--wid));
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: end;
  align-items: start;
  gap: 1rem;
  padding-bottom: var(--wid);
}
.p23w1{
  display: block;
  position: relative;
  background-color: var(--cc);
}
.p23ww{
  display: flex;
  position: relative;
  height: 35px;
  width: 100%;
  color: var(--cc);
  background-color: var(--aa);
  transform-origin: top center;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}
.p23w1::after{
  content: "About me";
}
.p23w1:nth-child(2):after{
  content: "Contact";
}
}

@media screen and (max-width: 799px) {
.bgc{
    position: fixed;
    display: block;
    inset: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--dd);
    z-index: -1;
}
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
    flex-direction: column;
    height: 100%;
    width: var(--width);
    overflow: hidden;
    padding-top: 36px;
}
.l1{
    display: flex;
    position: relative;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
}
.l111{
    height: 60%;
    width: 100%;
    display: flex;
    gap: 16px;
    flex-direction: column;
}
.l11{
    position: relative;
    padding: var(--wid) 0 0 0;
    width: 100%;
    height: 80px;
    font: var(--a1);
    letter-spacing: 1px;
    align-items: center;
    line-height: 1;
}
/* .l11w1 p, .l11w2 p{
    transform: translateY(100%);
} */
.l12{
    display: flex;
    flex-direction: column;
    position: relative;
    height: 110px;
    align-items: start;
    justify-content: center;
    bottom: 8px;
    gap: 8px;
}
.l2{
    display: flex;
    flex-direction: column;
    width: 100%;
  display: flex;
  position: relative;
  gap: 24px;
  overflow: hidden;
  padding: 32px 0 32px 0;
  align-items: end;
}
.container{
    display: flex;
    position: relative;
    overflow: hidden;
    width: 100%;
    justify-content: start;
    align-items: start;
    font: var(--a3);
    /* border: 1px solid blue; */
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
  overflow: visible;
    gap: 4px;
}
.l22-after{
    content: "";
    position: absolute;
    border-bottom: .5px solid var(--aa);
    display: block;
    inset: 0 0 -12px 0 ;
    overflow: hidden;
    transform: scaleX(0);
    transform-origin: left;
        opacity:0,
    /* transform: translateY(5%); */
}
.namelec{
    display: block;
    position: relative;
    width: 100%;
    color: var(--aa);
    font: var(--a2);
}
.content{
    display: block;
    position: relative;
    letter-spacing: .5px;
    font: var(--a4inter);
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
.p23ww p{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--aa);
  transition: all 0.6s ease;
}
.p23ww{
  color: var(--cc);
}
}

</style>

<script setup>
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import SplitText from "gsap/SplitText";
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';


const isWide = window.innerWidth < 800
const router = useRouter()

function goBack() {
  router.back()   // 或 router.go(-1)
}

gsap.registerPlugin(ScrollTrigger,SplitText,ScrollSmoother);

onMounted(() => {
window.scrollTo(0, 0);
    ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    smooth: 2,   // 1~3 之間，數字越大越滑
    effects: true
    });
    gsap.utils.toArray(".pic").forEach(elem => {
    gsap.from(elem, {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        duration: 1.5,
        delay: 3,
        opacity:0,
        ease:"power4.out",
    });
    });
    gsap.utils.toArray(".l22-after").forEach(elem => {
    gsap.to(elem, {
        scaleX: 1,
        duration: 1.5,
        delay: 3,
        ease:"power4.out",
    });
    });
    gsap.to( '.l1', {
        scrollTrigger: {
        trigger:'.l1',
        start: 'top top',
        end: 'bottom -999',
        pin: !isWide,
    }});

  gsap.from(".l12", {
        delay: 4.5,
  opacity:0,
  duration: .6,
  });

})




onMounted(async () => {
await document.fonts.ready;

gsap.registerPlugin(SplitText);

document.fonts.ready.then(() => {
    let split1 = SplitText.create(".l11", { type: "chars", aria: "hidden" });

  gsap.from(split1.chars, {
    y:10,
    opacity: 0,
    duration: 0.6,
    delay: 1.5,
    ease: "sine.out",
    stagger: 0.01,
  });
  let split = SplitText.create(".animate-me", { type: "chars", aria: "hidden" });

  gsap.from(split.chars, {
    y:10,
    opacity: 0,
    duration: 1.5,
    ease: "sine.out",
    delay: 1.5,
    stagger: 0.01,
  });

 let splitname = SplitText.create(".namelec", { type: "chars", aria: "hidden" })

    gsap.from(splitname.chars, {
    y: 10,
    opacity: 0,
    duration: 0.9,
    ease: "sine.out",
    stagger: 0.01,
    delay:2.5,
    });
 let splitcon = SplitText.create(".content", { type: "chars", aria: "hidden" })
    gsap.from(splitcon.chars, {
    y: 10,
    opacity: 0,
    duration: 0.9,
    ease: "sine.out",
    stagger: 0.01,
    delay:2.5,
    });
});
});


const record = [
  { 
    name: '陳敬恆｜赤燭遊戲 美術總監',
    content: '獨立遊戲創作：從視覺建構世界觀',
    pic: '/lecture-02.png'
  },
  { 
    name: '林思翰｜Group.G AI 文化科技導演',
    content: '生成未來：AI導演的敘事實驗與業介現象',
    pic: '/lecture-03.png'
  },
  { 
    name: '陳念瑩｜[ 2022 金曲獎 ] 最佳裝幀設計獎設計師',
    content: '自由創作者的自學與自立之路：創作如何成為職涯？',
    pic: '/lecture-01.png'
  }
]


</script>