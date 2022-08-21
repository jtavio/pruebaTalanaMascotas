<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import BreadLink from '../breadlink/BreadLink.vue';


const route = useRoute()
const category = ref(route.params.category)

watch(() => route.params.category, () => {
  category.value = route.params.category
})

function capitalize(word) {
  const lower = word.toLowerCase()
  return word.charAt(0).toUpperCase() + lower.slice(1)
}
</script>

<template>
  <h1>{{ category ? capitalize(category) : 'Productos' }}</h1>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <BreadLink text="Home" :is-active="!category" />
      <BreadLink text="Productos" to="home" :is-active="!category" />
      <BreadLink v-if="category" :text="capitalize(category)" :is-active="true" />
    </ol>
  </nav>
</template>