<script setup>
import { ref } from 'vue'
import Paginate from "vuejs-paginate-next"
import Product from './Product.vue';

const props = defineProps({
  products: {
    type: Array,
    default: []
  },
})

const recordsPerPage = 4

const current = ref(1)
const firstIndex = ref(0)
const lastIndex = ref(recordsPerPage)

const handlePaginatorClick = (page) => {
  if (current.value < page) {
    current.value++
    firstIndex.value = current.value !== 1 ? lastIndex.value : null
    lastIndex.value = current.value !== 1 ? lastIndex.value * current.value : null
  } else {
    current.value--
    firstIndex.value = current.value == 1 ? firstIndex.value - recordsPerPage : null
    lastIndex.value = current.value == 1 ? lastIndex.value - recordsPerPage : null
  }
}
</script>
<template>
  <div class="row g-3">
    <div v-for="product in products.slice(firstIndex, lastIndex)" :key="product.id" class="col-lg-3">
      <Product v-bind="product" />
    </div>
    <div class="d-flex justify-content-center pt-4">
      <Paginate class="" :style="{ bottom: 0 }" :page-count="Math.ceil(products.length / recordsPerPage)"
        :container-class="'pagination'" :prev-text="'<'" :page-range="2" :next-text="'>'"
        :click-handler="handlePaginatorClick" :page-class="'page-item pointer'" />
    </div>
  </div>
  <div v-if="!products.length">
    <h2 class="text-muted fw-normal">
      No se encontraron productos de este tipo.
    </h2>
    <RouterLink :to="{ name: 'home' }">
      Volver a Home
    </RouterLink>
  </div>

</template>
