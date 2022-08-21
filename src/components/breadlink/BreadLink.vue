<script setup>
import { RouterLink } from 'vue-router'
import { useProductStore } from '../../stores/ProductStore.js'
const props = defineProps({
  text: {
    type: String,
    required: true
  },
  to: String,
  isActive: {
    type: Boolean,
    default: false
  }
})

const productStore = useProductStore()
</script>
<template>
  <li class="breadcrumb-item" :class="{ active: isActive }">
    <RouterLink v-if="!isActive" :to="{ name: to || text.toLowerCase() }" @click="productStore.setIsLoading()">
      {{ text }}
    </RouterLink>
    {{ isActive ? text : '' }}
  </li>
</template>