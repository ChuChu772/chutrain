<template>
<div id="smooth-wrapper">
<div id="smooth-content">
    <!-- <div class="cr">
        <img src="/cr.png"></img>
    </div> -->
    <div class="contop" ref="contop">
        <div class="loading" ref="loading">
            Waiting<span class="dots">
                <span>.</span><span>.</span><span>.</span>
            </span>
        </div>
        <div class="success" ref="success"><p>Success!</p></div>
        <div class="failed" ref="failed"><p>Failed!</p></div>
        <div class="contopw" ref="contopw">
            <p class="cw1" ref="cw1">Your message has been sent! Thank You!</p>
            <p class="cw2" ref="cw2">Failed to send your message. Please try again.</p>
        </div>
    </div>
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
                <button class="tbot1" @click="goBack">
                    <div class="tbot2">
                        <p>Back</p>
                    </div>
                </button>
                <button class="submit" type="submit" @click="submitForm">
                    <div class="sb">
                        <p>Submit Message</p>
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
    /* display: flex; */
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    position: fixed;
    z-index: 100;
    /* opacity: 0; */
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px);
    background-color: rgba(236, 237, 228, 0.5);
}
.contopw{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: var(--h6);
    line-height: 1.5;
    letter-spacing: .05rem;
    font-family: "Roboto Mono", monospace;
    font-weight: 500;
    color: var(--cc);
}
.cw1, .cw2{
    position: absolute;
    display: flex;
    opacity: 0;
}
.loading {
    position: absolute;
    top: 40vh;
    font-size: var(--h2);
    display: flex;
    align-items: center;
    color: var(--cc);
    font-family: "Sirivennela", sans-serif;
    transform-origin: top;
}
.success, .failed{
    position: absolute;
    top: 40vh;
    font-size: var(--h2);
    display: flex;
    align-items: center;
    color: var(--cc);
    font-family: "Sirivennela", sans-serif;
    transform-origin: bottom;
    transform: scaleY(0);
    opacity: 0;
}

.dots {
  display: inline-flex;
  margin-left: 5px;
}

.dots span {
  opacity: 0;
  animation: blink 3s infinite;
  margin: 0 2px;
}

.dots span:nth-child(1) { animation-delay: 0s; }
.dots span:nth-child(2) { animation-delay: 0.3s; }
.dots span:nth-child(3) { animation-delay: 0.6s; }

@keyframes blink {
  0%, 50% { opacity: 0; }
  20%, 40% { opacity: 1; }
  90%, 100% { opacity: 0; } /* 最後一起消失 */
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
.contop{
    display: none;
    /* display: flex; */
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    position: fixed;
    z-index: 100;
    /* opacity: 0; */
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px);
    background-color: rgba(236, 237, 228, 0.5);
}
.contopw{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font: var(--a4mono);
    letter-spacing: .05px;
    color: var(--cc);
}
.cw1, .cw2{
    position: absolute;
    opacity: 0;
  font-family: "Roboto Mono", monospace;
}
.loading {
    position: absolute;
    top: 40vh;
    font-size: 32px;
    display: flex;
    align-items: center;
  color: rgb(182, 185, 169);
    font-family: "Sirivennela", sans-serif;
    transform-origin: top;
}
.loading span{
    font-family: inherit;
}
.success, .failed{
    display: flex; 
    position: absolute;
    top: 40vh;
    font-size: 32px;
    align-items: center;
  color: rgb(182, 185, 169);
    font-family: "Sirivennela", sans-serif !important;
    transform-origin: bottom;
    transform: scaleY(0.01);
    opacity: 0;
}
.success p, .failed p {
    font-family: "Sirivennela", sans-serif !important;
}
.dots {
  display: inline-flex;
  margin-left: 5px;
}

.dots span {
  opacity: 0;
  animation: blink 3s infinite;
  margin: 0 2px;
}

.dots span:nth-child(1) { animation-delay: 0s; }
.dots span:nth-child(2) { animation-delay: 0.3s; }
.dots span:nth-child(3) { animation-delay: 0.6s; }

@keyframes blink {
  0%, 50% { opacity: 0; }
  20%, 40% { opacity: 1; }
  90%, 100% { opacity: 0; } /* 最後一起消失 */
}
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
    flex-direction: column-reverse;
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
const contop = ref(null)
const contopw = ref(null)
const loading = ref(null)
const success = ref(null)
const failed = ref(null)
const cw1 = ref(null)
const cw2 = ref(null)

onMounted(() => {
  if (!contactForm.value) return;
  emailjs.init("fViVKY9Y7-jqKwrLC");
});


const sendEmail = async () => {
  if (!contactForm.value) return
  if (!formData.name.trim()) return alert("請輸入姓名");
  if (!formData.email.trim()) return alert("請輸入 Email");
  if (!formData.message.trim()) return alert("請輸入訊息");


gsap.set(contop.value, { display: "flex", opacity: 1 });

const animateWhileSending = () => {
  return new Promise(resolve => {
    gsap.to(contop.value, {
      opacity: 0,
      duration: 999,
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
    setTimeout(() => {
        gsap.to(contop.value, { opacity: 0, duration: 1, display: "none" });
    }, 2000);
    gsap.to(loading.value, {
      scaleY: 0,
      opacity: 1,
      duration: .6,
    });
    gsap.to(success.value, {
      scaleY: 1,
      opacity: 1,
      duration: .6,
    });
    gsap.to(cw1.value, {
      opacity: 1,
      duration: 1,
    });

  } catch (err) {
    console.error("Failed to send email:", err)
    setTimeout(() => {
        gsap.to(contop.value, { opacity: 0, duration: 1, display: "none" });
    }, 2000);
    gsap.to(loading.value, {
      scaleY: 0,
      opacity: 1,
      duration: .6,
    });
    gsap.to(failed.value, {
      scaleY: 1,
      opacity: 1,
      duration: .6,
    });
    gsap.to(cw2.value, {
      opacity: 1,
      duration: 1,
    });

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
