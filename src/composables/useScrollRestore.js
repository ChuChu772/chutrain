import { onMounted } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let lastScrollY = 0

export function saveScroll() {
  lastScrollY = window.scrollY
}

export function useScrollRestore() {
  onMounted(() => {
    if (lastScrollY <= 0) return

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo(0, lastScrollY)
        ScrollTrigger.refresh(true)
      })
    })
  })
}
