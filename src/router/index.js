import { createRouter, createWebHistory,useRoute, useRouter } from 'vue-router'
import { nextTick } from 'vue';
import Home from '../views/home.vue';
import gsap from 'gsap';
import { saveScroll } from '../composables/useScrollRestore'
import { useScrollRestore } from '../composables/useScrollRestore'


gsap.registerPlugin(gsap)
const LectureRecord = () => import('../views/LectureRecord.vue')
const Contact = () => import('../views/Contact.vue')

const routes = [
  { path: '/', name: 'Home', component: () => import('../views/home.vue') },
  { path: '/LectureRecord', name: 'LectureRecord', component: () => import('../views/LectureRecord.vue') },
  { path: '/Contact', name: 'Contact', component: () => import('../views/Contact.vue') }
]

window.playEnter = async (done) => {
  const layer = document.querySelector('#page-layer');
  void layer.offsetWidth;

  layer.style.opacity = 0;

  // 等動畫跑完
  await gsap.to('#page-layer', {
    opacity: 1,
    duration: .6
  });

  done && done();
};

window.playLeave = async (done) => {
  const layer = document.querySelector('#page-layer');
  void layer.offsetWidth;

  await nextTick();
await new Promise(resolve => setTimeout(resolve, 1500));

  // 再跑離場動畫
  await gsap.to('#page-layer', {
    opacity: 0,
    duration: .6
  });


  done && done();
};


const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // ✅ 永遠回 top:0，交給我們自己控制
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  // ✅ 離開 Home 時記錄 scroll
  if (from.name === 'Home') {
    saveScroll()
  }

  // ✅ 進頁面一定先歸零（GSAP 穩定關鍵）

   window.playEnter(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 10)   // ✅ 延遲 100ms
    next()
  })
})

router.afterEach(() => {
  window.playLeave()
})

export default router
