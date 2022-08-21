<script setup>
import { useCategoryStore } from '../../stores/CategoryStore'
import { storeToRefs } from 'pinia'
import SideLink from '../sidelink/SideLink.vue';


const categoryStore = useCategoryStore()
const { categories } = storeToRefs(categoryStore)

categoryStore.getCategories()


</script>
<template>
  <div id="offcanvas" class="offcanvas offcanvas-start show " style="background-color: #e3f2fd;"
    data-bs-backdrop="false" data-bs-scroll="true" tabindex="-1" aria-labelledby="offcanvasLabel">
    <div class="offcanvas-header px-4 py-2">
      <h3 id="offcanvasLabel" class="offcanvas-title">
        Categorías
      </h3>
      <span class="bp-1 me-2" data-bs-target="#offcanvas">
        <i class="bi bi-list" :style="{ fontSize: '1.5em' }" />
      </span>
    </div>
    <div class="offcanvas-body p-0">
      <div class="d-grid">
        <SideLink v-for="item in categories" v-bind="item" :key="item.label" class="py-3 px-4" />
      </div>
    </div>
  </div>
</template>
<style scoped>
#offcanvas {
  margin-top: 62px;
  max-width: 320px;
  border-right: 0;
}

@media screen and (max-width: 720px) {
  #offcanvas {
    visibility: hidden;
    display: none;
  }
}
</style>
