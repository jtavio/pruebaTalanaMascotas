<script setup>
import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'

import ProductsGridCustom from '../components/product/ProductsGridCustom.vue';
import Spinner from '../components/spinner/Spinner.vue';
import { useProductStore } from '../stores/ProductStore';


const route = useRoute()

const productStore = useProductStore()
const { products, isLoading } = storeToRefs(productStore)

productStore.findProducts(route.query.q?.toLowerCase())

watch(() => route.query.q, () => {
  productStore.findProducts(route.query.q?.toLowerCase())
})
</script>
<template>
  <h1 class="my-4">
    Resultados para: {{ route.query.q }}
  </h1>
  <ProductsGridCustom v-if="!isLoading" :products="products" />
  <Spinner v-if="isLoading" />
</template>