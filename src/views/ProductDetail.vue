<!-- src/views/ProductDetail.vue -->
<template>
    <div class="col"></div>
    <div v-if="product">
      <h1>{{ product.name }}</h1>
      <img :src="product.image" />
      <p>{{ product.description }}</p>
    </div>
    <div class="product-detail">
    <h1>產品詳細頁面</h1>
    <p>產品 ID：{{ route.params.id }}</p>
    <button @click="goBack">返回</button>
  </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
// 假設產品資料放這裡


const router = useRouter()

function goBack() {
  router.back()  // 回到上一頁
}
  const route = useRoute()
  const productId = parseInt(route.params.id)
  const product = products.find(p => p.id === productId)
  </script>