<script setup>
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';

import Spinner from '../components/spinner/Spinner.vue';
import { useProductStore } from '../stores/ProductStore';
import ProductsGridCustom from '../components/product/ProductsGridCustom.vue';
import BreadCrumbNav from '../components/breadcrumb/BreadCrumbNav.vue';

const route = useRoute()
const productStore = useProductStore()
const { products, isLoading } = storeToRefs(productStore)

productStore.getProducts()
productStore.setIsLoading()


console.log('esto es:', products);

watch(() => route.params.category, () => {
  if (route.params.category) {
    productStore.getProductsByCategoryName(String(route.params.category))
  } else {
    productStore.getProducts()
  }
})
</script>
<template>
  <div class="py-4">
    <BreadCrumbNav />
  </div>
  <ProductsGridCustom v-if="!isLoading" :products="products" />
  <Spinner v-if="isLoading" />
</template>