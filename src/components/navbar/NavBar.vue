<script setup>
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import router from '../../router'
import { useCartStore } from '../../stores/CartStore'
import { useProductStore } from '../../stores/ProductStore'
import InfoCart from '../cart/InfoCart.vue'

const productStore = useProductStore()
const cartStore = useCartStore()

const { totalItems } = storeToRefs(cartStore)

const searchValue = ref('')

const route = useRoute()
const search = () => {
  if (route.query.q !== searchValue.value && searchValue.value.length > 0) {
    productStore.setIsLoading()
    router.push({
      name: 'search',
      query: {
        q: searchValue.value
      }
    })
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg  px-3 " style="background-color: #e3f2fd;">
    <div class="container-fluid">
      <RouterLink class="navbar-brand fs-3 text-danger fw-bold" :to="{ name: 'home' }">
        Tienda de Mascotas
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" />
      </button>
      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" />
        <div class="d-inline-flex justify-content-center left-nav">
          <form class="d-flex" role="search" @submit.prevent="search">
            <input v-model="searchValue" class="form-control me-2" type="search" placeholder="Buscar productos"
              aria-label="Search" :style="{ width: '280px' }">
          </form>
        </div>

        <div type="button" class="d-flex align-items-center position-relative pointer ms-3" data-bs-toggle="collapse"
          data-bs-target="#cart">
          <i class="bi bi-bag-fill fs-2" />
          <span v-if="totalItems > 0" class="bag-items position-absolute translate-middle badge rounded-pill bg-danger">
            {{ totalItems }}
          </span>
        </div>

        <InfoCart />
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  position: fixed;
  width: -webkit-fill-available;
  z-index: 99;
}

#cart {
  max-width: 360px;
}

@media screen and (max-width: 720px) {
  .left-nav {
    width: 100%;
  }
}
</style>