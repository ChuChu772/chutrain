<template>
<div id="smooth-wrapper">
<div id="smooth-content">
    <!-- <div class="cr">
        <img src="/cr.png"></img>
    </div> -->
    <div class="contop"></div>
    <div class="con">
        <div class="contitle"><p class="tbig">Let's Be In<br>Touch</p></div>
        <div class="touch">
            <div class="ttop">
                <p class="tsma">I genuinely care about your ideas and your wellbeing.
                <br>Feel free to reach out — I’d love to hear from you...</p>
            </div>
            
            <form ref="contactForm" @submit.prevent="sendEmail" class="contact-form">
            <div class="allcon">
                <input class="i1" v-model="formData.name" name="name" type="text" placeholder="name" required />
                <input class="i1" v-model="formData.email" name="email" type="email" placeholder="@gmail.com" required />
                <textarea class="i2" v-model="formData.message" name="message" placeholder="Your Message..." required></textarea>
            </div>
            </form>
        </div>
        <div class="lastcon">
                <button class="tbot1" @click="goBack" v-if="!isWide">
                    <div class="tbot2">
                        <p>Back</p>
                    </div>
                </button>
                <button class="submit" type="submit" @click="submitForm">
                    <div class="sb">
                        <p>Submit Message</p>
                    </div>
                </button>
                <button class="tbot1" @click="goBack" v-if="isWide">
                    <div class="tbot2">
                        <p>Back</p>
                    </div>
                </button>
            </div>
               
    </div>
</div>
</div>
</template>

<style scoped>
@media screen and (min-width: 800px) {
    .contop{
        display: none;
        height: 100vh;
        width: 100vw;
        position: fixed;
        z-index: 100;
        opacity: 0;
  backdrop-filter: blur(5px);
  background-color: rgba(216, 218, 207, .5);
    }
.cr{
    display: flex;
    position: absolute;
    height: 100vh;
    width: 100vw;
    opacity: .3;
}
.con{
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100vw;
    justify-content: center;
    align-items: end;
    padding:0 var(--wid) 0 var(--wid);
    box-sizing: border-box;
    gap: 1rem;
}
.contitle{
     display: flex;
    position: relative;
    width: 100%;
    margin-top: 20vh;
}
.tbig{
  font-size: var(--h2);
    line-height: 1.2;
    letter-spacing: .05rem;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  color: var(--cc);
}
.touch{
    display: flex;
    position: relative;
    justify-content: space-between;
    height: 100%;
    width: 100%;
}
.ttop{
    width: 50%;
    display: flex;
    flex-direction: column;
    position: relative;
}
.tsma{
    color: var(--cc);
    font-size: var(--one);
    line-height: 1.25rem;
    display: inline-block;
    white-space: pre-line;
}
.tsma .word {           /* SplitText 拆字會加 .char */
  display: inline-block;
}
.contact-form {
  display: flex;
  flex-direction: column;
  position: relative;
  flex-direction: column;
  width: calc(100% / 6 * 3.5);
  justify-content: end;
  align-items: start;
    height: 100%;
    opacity: 0;
      clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
}
.allcon{
    display: flex;
    flex-direction: column;
    position: relative;
    height: 30vh;
    width: 100%;
    justify-content: space-between;
}
.con button {
  cursor: pointer;
}
.i1{ 
  all: unset;    
  text-decoration: none;
    width: calc(100% - var(--wid));
  font-size: 16px;
  height: 18%;
  font-family: "Roboto Mono", monospace;
  outline: none;
  background: transparent;
  border-bottom: 1px solid var(--cc);
  color: var(--cc);
}
::placeholder {
  color: var(--cc);
  opacity: .5;
}
.i2{
  all: unset;  
  outline: none;
  color: var(--cc);
    height: 48%;
    width: calc(100% - var(--wid));
  border-bottom: 1px solid var(--cc);
    background-color: transparent;
  font-family: "Roboto Mono", monospace;
}
.lastcon{
  all: unset;  
  outline: none;
    display: flex;
    position: relative;
    width: 100%;
    align-items: end;
    justify-content: space-between;
}
.submit, .tbot1{
  all: unset; 
  width: 140px;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--aa);
  background-color: var(--cc);
  border-radius: 30px;
  font-size: var(--one); 
  overflow: hidden;
  justify-content: center;
  align-items: center;
  font-family: "Roboto Mono", monospace;
}
.submit{
    margin-right: var(--wid);
}
.sb, .tbot2{
    display: flex;
    position: relative;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    z-index: 99;
}
.sb::after{
    content: "Subbmit Message";
    display: flex;
    position: absolute;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    color: var(--aa);
    background-color: var(--cc);
    transform: scaleY(0);
    transform-origin: bottom;
    transition: all .3s ease;
}
.tbot2::after{
    content: "Back";
    display: flex;
    position: absolute;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    color: var(--aa);
    background-color: var(--cc);
    transform: scaleY(0);
    transform-origin: bottom;
    transition: all .3s ease;
}
.submit:hover .sb::after, .tbot1:hover .tbot2::after{
    transform: scaleY(1);
    transition: all .3s ease;
}
.submit:hover .sb p, .tbot1:hover .tbot2 p{
    height: 50%;
    transform: scaleY(0);
    transition: all .3s ease;
}
.sb p, .tbot2 p{
    display: block;
    position: relative;
  padding: .6rem .7rem ;
  height: 100%;
  width: 100%;
    transform-origin: top;
    transform: scaleY(1);
    color: var(--cc);
    background-color: var(--bb);
    transition: all .3s ease;
}
}

@media screen and (max-width: 800px) {
.con{
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100vh;
    width: 100vw;
    align-items: center;
    padding-top: var(--wid);
}
.contitle{
    width: var(--width);
    padding-top: 36px;

}
.touch{
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    width: var(--width);
}
.ttop{
    display: flex;
    flex-direction: column;
    position: relative;
}
.tbig{
  font: var(--a1);
  letter-spacing: .05rem;
  color: var(--cc);
  padding: var(--wid) 0 0 0;
}
.tsma{
    margin: 1rem 0;
    color: var(--cc);
    font: var(--a4inter);
    display: inline-block;
    white-space: pre-line;
}
.tsma .word {           /* SplitText 拆字會加 .char */
  display: inline-block;
  border: 1px solid black;
}
.contact-form {
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: end;
  align-items: start;
  width: var(--width);
    opacity: 0;
    clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
}
.allcon{
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 297px;
    gap: 20px;
}
.con button {
  cursor: pointer;
}
.i1{ 
  all: unset;         /* 清空預設樣式 */
  width: 100%;
  height: 60px;
  font: var(--a2);
  color: var(--cc);
  font-family: "Roboto Mono", monospace;
  outline: none;
  background: transparent;
  border-bottom: 1px solid var(--cc);
}
::placeholder {
  color: var(--cc);
  opacity: .5;
}
.i2{
  all: unset;  
  height: 110px;
  outline: none;
  font: var(--a2);
  color: var(--cc);
  border-bottom: 1px solid var(--cc);
    background-color: transparent;
  font-family: "Roboto Mono", monospace;
}
.lastcon{
  all: unset;  
  outline: none;
  width: var(--width);
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
  gap: 8px;
}
.submit, .tbot1{
  all: unset;  
  outline: none;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--aa);
  width: 100%;
  background-color: var(--cc);
  border-radius: 30px;
  font: var(--a4mono); 
  overflow: hidden;
  font-family: "Roboto Mono", monospace;
}
.sb, .tbot2{
    display: flex;
    position: relative;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    z-index: 99;
}
.sb p, .tbot2 p{
    display: block;
    position: relative;
    width: 100%;
    color: var(--cc);
    background-color: var(--bb);
    transition: all .3s ease;
  padding: 10px 15px;
}
}
</style>

<script setup>
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import SplitText from "gsap/SplitText";
import { useRouter } from 'vue-router';
import { reactive, ref, onMounted } from "vue"
import emailjs from "@emailjs/browser"
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

})


const contactForm = ref(null)


const formData = reactive({
  name: "",
  email: "",
  message: "",
})
const submitForm = () => {
  if (contactForm.value) {
    contactForm.value.requestSubmit()
  }
}

onMounted(() => {
  if (!contactForm.value) return;
  emailjs.init("fViVKY9Y7-jqKwrLC");
});


const sendEmail = async () => {
  if (!contactForm.value) return
  if (!formData.name.trim()) return alert("請輸入姓名");
  if (!formData.email.trim()) return alert("請輸入 Email");
  if (!formData.message.trim()) return alert("請輸入訊息");
 const contop = document.querySelector(".contop");

// GSAP 動畫初始狀態
gsap.set(contop, { display: "flex", opacity: 1 });

// 建一個 Promise 來控制動畫
const animateWhileSending = () => {
  return new Promise(resolve => {
    gsap.to(contop, {
      opacity: 0,
      duration: 999, // 設很大，動畫會被手動結束
      ease: "linear",
      onComplete: resolve
    });
  });
};

  try {
    const animationPromise = animateWhileSending();
    await emailjs.sendForm(
      "PiPiChou",
      "template_lgr3x68",
      contactForm.value
    )
    contactForm.value.reset();
    gsap.to(contop, { opacity: 0, duration: 0.5, display: "none" });
  } catch (err) {
    console.error("Failed to send email:", err)
    alert("Failed to send email")
  }
}

onMounted(async () => {
await document.fonts.ready;

gsap.registerPlugin(SplitText);

document.fonts.ready.then(() => {

    let split1 = SplitText.create(".tsma", { type: "words", aria: "hidden" });

  gsap.from(split1.words, {
    y:10,
    opacity: 0,
    duration: 1.2,
    ease: "sine.out",
    stagger: 0.01,
    delay: 2,
  });

   let split2 = SplitText.create(".tbig", { type: "chars", aria: "hidden" });

  gsap.from(split2.chars, {
    y:10,
    opacity: 0,
    duration: 0.6,
    ease: "sine.out",
    stagger: 0.01,
    delay: 2,
  });
})
})

onMounted(() => {
    gsap.to( ".contact-form", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.5,
        delay: 2.7,
        opacity: 1,
        ease:"power4.out",
    })
    gsap.from( ".submit", {
        opacity:0,
        delay: 3.5,
        duration:0.6,
    })
    gsap.from( ".tbot1", {
        opacity:0,
        delay: 3.5,
        duration:0.6,
    })
})

</script>
