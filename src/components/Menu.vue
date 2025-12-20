<template>
     <div class="menufalse" :class="toggleab">
        <div class="menumix"></div>
        <div id="rootmenu">
            <svg class="rootmenu" ref="blob" r="50" id="root" data-name="root" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 971.44 126.28">
            <path d="M1.93,4.41l109.06-.03c20.23,2.31,48.83,8.47,48.04,34.06,11.76-22.54,37.98-32.77,62.1-36.01,40.59-5.46,104.25,5.21,108.24,55.44l2.98-13.34c8.75-24.65,35.9-37.23,60.27-41.3,34.64-5.8,73.89-1.02,100.47,23.4V4.41l396.09-.03c32.18,3.06,76.19,15.28,79.07,53.81,5.52,73.91-106.54,65.12-153.67,64.97-21.88-.07-44.26-.65-66.13-.75-33.06-.15-66.17.26-99.21-.07-1.23-.77-.78-9.03-.7-10.91,1.17-1.86,19.52.15,22.89-1.49V16.91l-13.94-.7c-.95.94,2.65,23.16.57,26.6-.86,2.28-10.76,1.06-13.12.14-6.67-2.59-9.27-21.35-14.27-26.74h-33.79v93.73l25.78,1.39v11.11h-94.05v-11.11l25.08-1.39V16.21h-34.14c-3.41,5.91-6.8,21.56-11.49,25.7-1.08.95-4.42,1.93-4.57,2.54-.63,2.56,2.5,11.57,2.81,15.17.67,7.81-.7,16.32-3.46,23.61-20.35,53.77-126.55,54.92-160.97,15.97-8.06-9.13-10.49-19.09-12.17-30.92-.76,22.93-16.79,39.16-36.8,48.03-51.19,22.68-155.1,8.38-137.72-68.16-2.82,3.46-5.65,5.95-9.53,8.2l-16.93,7.07c7.64,1.9,14.38,8.01,18.4,14.64,6.2,10.22,7.42,22.51,11.9,33.27h20.55c-.27,5.24,3.49,10.43-3.33,12.3-11.14,3.05-40.7,2.48-51.48-1.76-18.81-7.4-13.26-31.88-25.01-45.2-2.05-2.33-10.48-6.99-13.18-6.99h-19.51c-.07,0-1.05.97-1.05,1.04v39.23l22.99,1.39v11.11H1.93l-.6-11.01c1.3-2.08,19.7.66,21.56-1.93,1.35-1.89.5-21.49.61-25.62.32-12.7.26-24.75,0-37.43-.09-4.42.74-27.27-.59-29.13l-20.98-1.1V4.41ZM235.87,13.65c-47.11,4.62-50.75,85.94-6.66,98.56,68.71,19.67,77.5-105.51,6.66-98.56ZM410.73,13.64c-44.86,4.81-48.66,84.87-7.53,98.04,70.7,22.65,81.15-105.94,7.53-98.04ZM66.02,58.57c14.28-.61,41.15.66,48.89-14.11,5.71-10.89.48-19.75-10.1-24.2-2.58-1.09-12.43-4.04-14.76-4.04h-24.04v42.35ZM790.56,41.21h-14.98c-4.44-7.98-6.46-17.22-11.15-24.99h-49.81v40.96h32.74c.61-2.89,2.02-14.19,3.65-15.8,2.34-2.32,9.91.49,13.07-.16v42.35c-3.36-.95-10.93,2.04-13.24-.34-1.78-1.84-1.72-11.34-3.48-14.24h-32.74v42.35h55.73c2.68-7.03,4.9-15.94,8.45-22.48.62-1.15,2.39-3.9,3.75-3.9h12.89v24.65c0,3.64,15.08-.57,17.42.35V16.91l-22.29-.69v24.99ZM857.45,111.33c.94.63,19.61,0,22.64,0,29.24,0,48.81-33.65,42.5-60.41-6.86-29.13-40.26-37.8-66.54-34.01v91.3c0,.17,1.25,3.03,1.39,3.12Z"/>
            </svg>  
        </div>  
        <transition
          name="menu-fade"
          appear
        >
          <div class="menuword" ref="menuWord" v-if="showContent" @click="togglefalse">
            <p @click="fp">Menu</p>
            <p @click="p2">About me</p>
            <p @click="pre">My works</p>
            <p @click="p3">Creative<br>Media</p>
            <p @click="p4">Illustration</p>
            <p @click="p5">Playground</p>
            <div class="link">
              <router-link to='/LectureRecord'><p>Lecture<br>Record</p></router-link>
            </div>
            <div class="link">
              <router-link to='/Contact'><p>Contact</p></router-link>
            </div>
          </div>
        </transition>

        <div class="menutog" @click="toggle" :class="{ active: rotate }"></div>
    </div>
        <div class="menuoverlay" v-show="showMenu" @click="togglefalse"></div>
</template>

<style scoped>
p{
    text-decoration: none;
    color: black;
}

@media screen and (min-width: 600px) {
.link a{
  text-decoration: none;
}
.menufalse.classA {
  position: fixed;
  display: flex;
  width: 12vw;
  height: 80vh;
  justify-content: start;
  align-items: center;
  z-index: 999;
  top: 50%;
  left: 0%;
  transform: translate(0%, -50%);
  border-radius: 0 10px 10px 0;
  overflow: hidden;         /* 混合隔離層 */
  backdrop-filter: blur(5px);
  transition: all 0.5s ease; 
  background-color: rgba(216, 218, 207, .5);
}
.menufalse.classB {
  width: 20vw;
  height: 80vh;
  /* transform: translateX(calc( -100% - 1rem )); */
  backdrop-filter: blur(5px);
  top: 50%;
  left: 0;
  transform: translate(-90%, -50%);
  z-index: 999;
  opacity: 1;
  backdrop-filter: blur(5px);
  background-color: rgba(216, 218, 207, .5);
  transition: all 0.5s ease; 
}
.menufalse {
  z-index: 999;
  position: fixed;
  display: flex;
  width: 20vw;
  height: 60vh;
  justify-content: start;
  align-items: center;
  z-index: 1000;
  /* padding: 2rem 3rem 2rem 3rem; */
  border-radius: 10px;
  overflow: hidden;         /* 混合隔離層 */
  backdrop-filter: blur(5px);
  transition: all 0.5s ease; 
  background-color: rgba(216, 218, 207, .8);
}
.menumix {
  position: absolute;
  inset: 0;
}
#rootmenu {
  display: none;
  z-index: 999;
  fill: var(--bb);
  position: relative;
  opacity: .8;
  width: 40%;
  mix-blend-mode: exclusion;
  /* padding: 0 2rem 0 0; */
}
.menuword {
  display: flex;
  position: relative;
  z-index: 9999;
  flex-direction: column;
  height: 80%;
  width: calc(100% - 2rem);
  justify-content: space-between;
  align-items: start;
  text-align: start;
   /* font-family: "Roboto Mono", monospace; */
  padding: 0 2rem;
}
.menuword p {
  z-index: 1111 !important;
  color: var(--cc);
  text-decoration: none;
  font-weight: 500;
  font-size: var(--h5-6);
  align-items: center;
  cursor: pointer;
}
.link p{
  display: flex;
  color: var(--cc);
  width: 100%;
  /* padding: 20px; */
}
.menutog{
    display: flex;
    position: absolute;
    height: 100%;
    width: 2rem;
    right: 0;
    top: 0;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 2000;
    transition: all 0.6s ease;
}
.menutog:hover{
  /* background-color: rgba(216, 218, 207, 1); */
  background-color: rgba(116, 122, 116, 0.5);
}
.menutog:hover.menutog::after{
  color: rgba(216, 218, 207, 1);
}
.menutog::after{
    content: "+";
    color: var(--cc);
    position: absolute;
    font-size: 25px;
    font-weight: bolder;
    pointer-events: none;
  transition: all .6s;
}
.menutog.active::after {
  transform: rotate(45deg);
  transition: all .6s;
}
.menuoverlay{
    z-index: 1;
    display: flex;
    position: absolute;
    height: 100%;
    width: 100%;
    inset: 0;
    /* backdrop-filter: blur(5px); */
  /* background-color: rgba(237, 240, 234, 0.3); */
}
}
@media screen and (max-width: 600px){
.menufalse.classA {
  z-index: 1300;
  position: fixed;
  display: flex;
  width: 200px;
  height: 550px;
  justify-content: start;
  align-items: center;
  right: 0;
  border-radius: 10px;
  overflow: hidden;         /* 混合隔離層 */
  backdrop-filter: blur(5px);
  transition: all 0.5s ease; 
  background-color: rgba(216, 218, 207, .6);
}
.menufalse.classB {
  z-index: 1300;
  position: fixed;
  display: flex;
  width: 50px;
  height: 50px;
  justify-content: start;
  align-items: center;
  margin: 20px;
  top: 0;
  right: 0;
  border-radius: 10px;
  overflow: hidden;         /* 混合隔離層 */
  backdrop-filter: blur(2.5px);
  transition: all 0.5s ease; 
  background-color: rgba(216, 218, 207, .5);
} 
.menufalse {
  z-index: 1300;
  position: fixed;
  display: flex;
  width: 60px;
  height: 60px;
  justify-content: start;
  align-items: center;
  z-index: 1000;
  margin: 20px;
  top: 0;
  right: 0;
  border-radius: 10px;
  overflow: hidden;         /* 混合隔離層 */
  backdrop-filter: blur(5px);
  transition: all 0.5s ease; 
  background-color: rgba(216, 218, 207, .5);
}
.menumix {
  position: absolute;
  inset: 0;
}
#rootmenu {
  display: none;
  z-index: 999999;
  fill: var(--bb);
  position: relative;
  opacity: .8;
  width: 40%;
  mix-blend-mode: exclusion;
  /* padding: 0 2rem 0 0; */
}
.menuword {
  display: flex;
  position: relative;
  z-index: 9999;
  flex-direction: column;
  height: 450px;
  margin-top: 10px;
  width: calc(100% - 2rem);
  justify-content: space-between;
  align-items: start;
  text-align: start;
   /* font-family: "Roboto Mono", monospace; */
  padding: 0 2rem;
}
.menuword p {
  z-index: 1111 !important;
  color: var(--cc);
  text-decoration: none;
  font-weight: 500;
  font-size: 12px;
  align-items: center;
}
.link p{
  display: flex;
  color: var(--cc);
  width: 100%;
  /* padding: 20px; */
}
.menutog{
    display: flex;
    position: absolute;
    height: 50px;
    width: 50px;
    right: 0;
    top: 0;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.6s ease;
}
.menutog::after{
    content: "+";
    color: var(--cc);
    position: absolute;
    font-size: 25px;
    font-weight: bolder;
    pointer-events: none;
  transition: all .6s;
}
.menutog.active::after {
  transform: rotate(45deg);
  transition: all .6s;
}
.link a{
  text-decoration: none;
}
.menuoverlay{
    z-index: 1;
    display: flex;
    position: absolute;
    height: 100%;
    width: 100%;
    inset: 0;
    /* backdrop-filter: blur(5px); */
  /* background-color: rgba(237, 240, 234, 0.3); */
}
/* 
.menu-fade-enter-active {
  transition: all 0.5s ease;
}
.menu-fade-leave-active {
  transition: all 0.2s ease;
}
.menu-fade-enter-from, .menu-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.menu-fade-enter-to, .menu-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
} */
}
</style>


<script setup lang="ts">

import { ref, onMounted, onBeforeUnmount, computed, watch, nextTick } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
let smoother = null;

onMounted(() => {
  smoother = ScrollSmoother.create({
    smooth: 3,
    effects: true,
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
  })
})

const isWide = ref(window.innerWidth < 800)
function fp() {
  const el = document.querySelector('#fp');
  if (el && smoother) {
    smoother.scrollTo(el, true, "top top", 1);
  }
}
function p2() {
  const el = document.querySelector('#p2');
  if (el && smoother) {
    smoother.scrollTo(el, true, "top top", 1);
  }
}
function pre() {
  const el = document.querySelector('#pre');
  if (el && smoother) {
    smoother.scrollTo(el, true, "top top", 1);
  }
}
function p3() {
  const el = document.querySelector('#p3');
  if (el && smoother) {
    smoother.scrollTo(el, true, "top top", 1);
  }
}
function p4() {
  const el = document.querySelector('#p4');
  if (el && smoother) {
    smoother.scrollTo(el, true, "top top", 1);
  }
}
function p5() {
  const el = document.querySelector('#p5');
  if (el && smoother) {
    smoother.scrollTo(el, true, "top top", 1);
  }
}
// function scrollTo(hash) {
//   const el = document.querySelector(hash)
//   if (el) {
//     el.scrollIntoView({ behavior: 'smooth' })
//   }}
const menuoverlay = ref(null)
const menuWord = ref(null)
const rotate = ref(false)
const ab = ref(false)
const showContent = ref(false)

const toggleab = computed(() => {
  return ab.value ? 'classA' : 'classB'
})
const showMenu = computed(() => {
    return toggleab.value === 'classA'
})
onMounted(() => {
  if (!isWide.value) {
    // 寬螢幕立即顯示
    showContent.value = true
  } 
  watch(toggleab, (newVal) => {
  if (isWide.value && newVal === 'classA') {
    setTimeout(() => {
      showContent.value = true
    }, 500)
  }else if (isWide.value && newVal === 'classB') {
    // 回到 B 就隱藏
    showContent.value = false
  }
}, { immediate: true })
})
if(isWide.value){

watch(showContent, async (visible) => {
  if (visible) {
    await nextTick() // 確保 DOM 已渲染
    const items = menuWord.value.querySelectorAll('p, .link')
    gsap.from(items, {
      y: 20,
      opacity: 0,
      stagger: 0.05, // 每個元素依序出現間隔 0.1s
      duration: 1.5,
      ease: 'power2.out'
    })
  }
})
}
function toggle() {
  ab.value = !ab.value
  rotate.value = !rotate.value
//   document.querySelector("*").style.overflow = 'hidden'
}
const togglefalse = () => {
  if(!ab.value) return
  ab.value = false
  rotate.value = !rotate.value
//   document.querySelector("*").style.overflow = ''
}

</script>