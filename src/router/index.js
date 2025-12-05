import { createRouter, createWebHistory,useRoute, useRouter } from 'vue-router'
import { nextTick } from 'vue';
// import HomeView from '../views/HomeView.vue'
// import { playEnter, playLeave } from "../views/layerAnimation";
import Home from '../views/home.vue';
const LectureRecord = () => import('../views/LectureRecord.vue')

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/LectureRecord', name: 'LectureRecord', component: LectureRecord },
];

let routerBack = false;

window.playEnter = (done) => {
  const layer = document.querySelector('#page-layer');
  layer.classList.remove('leave');
  void layer.offsetWidth; // 強制重繪
  layer.classList.add('enter');

  setTimeout(() => {
    layer.classList.remove('enter');
    done && done();
  }, 1000); // enter 動畫長度
};

window.playLeave = (done) => {
  const layer = document.querySelector('#page-layer');
  void layer.offsetWidth;
  layer.classList.add('leave');

  setTimeout(() => {
    layer.classList.remove('leave');
    done && done();
  }, 1000); // leave 動畫長度
};
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
        const pos = savedPosition || { top: 0 };
        resolve(pos);
    });
  }
});

router.beforeEach((to, from, next) => {
  window.playEnter(() => next());
});

router.afterEach(async () => {
  // 播放黑幕退開
  
  await window.playLeave();
});

export default router
