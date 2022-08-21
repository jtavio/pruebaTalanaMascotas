<script setup>
import { useProductStore } from '../../stores/ProductStore.js'

const props = defineProps({
  id: { Number },
  name: {
    type: String,
    required: true,
  },
  order: Number,
  active: {
    type: Boolean,
    default: false
  }
})
const productStore = useProductStore()

</script>
<template>
  <RouterLink class="btn btn-light text-start fs-5 rounded-" style="background-color: #e3f2fd;"
    :to="{ name: 'category', params: { category: name.toLowerCase() } }" @click="productStore.setIsLoading()">
    {{ name }}
  </RouterLink>
</template>
<style lang="scss" scoped>
.router-link-active {
  font-weight: 700;
  border-left: 4px solid var(--bs-primary) !important;
  background-color: #9747ff19 !important;

  &:not(:hover) {
    background-color: transparent;
  }

  pointer-events: none;
  border-radius: 0;
}
</style>