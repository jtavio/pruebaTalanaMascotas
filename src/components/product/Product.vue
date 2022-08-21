<script setup>
import { ref } from 'vue'
import { useCartStore } from '../../stores/CartStore.js'
import ProductModal from './ProductModal.vue';

const props = defineProps({
  name: String,
  id: Number,
  attributes: Object,
  photo: String,
  code: String,
  description: String,
  price: Number,
  stock: Number,
  category: Object,
})

const cartStore = useCartStore()

const selectedQuantity = ref(0)

const increase = () => {
  selectedQuantity.value++
}
const decrease = () => {
  selectedQuantity.value != 0 ? selectedQuantity.value-- : null
}


const addToCart = () => {
  const item = {
    id: props.id,
    name: props.name,
    quantity: selectedQuantity.value,
    price: props.price
  }
  cartStore.addToCart(item)
  selectedQuantity.value = 0
}

</script>
<template>
  <ProductModal v-bind="props" :increase="increase">
    <div class="card m-0 ">
      <img :src="photo" data-bs-toggle="modal" :data-bs-target="`#staticBackdrop-${code}`" class="card-img-top"
        alt="props.name">
      <div class="card-body text-truncate col-12">
        <a data-bs-toggle="modal" :data-bs-target="`#staticBackdrop-${code}`" :style="{ cursor: 'pointer' }">
          {{ name }}
        </a>
        <h4 class="card-title align-items-center d-flex">
          ${{ price }}
          <small v-if="stock < 1" class="badge bg-secondary ms-1 p-1 fs-6 fw-normal">Sin stock :(</small>
        </h4>
        <div class="d-flex align-items-stretch gap-2">
          <div class="d-flex border border-primary w-50">
            <button class="btn btn-sm d-flex align-items-center px-1" @click="decrease()">
              <i class="bi bi-dash" />
            </button>
            <input v-model="selectedQuantity" type="text" class="form-control border-0 text-center">
            <button class="btn btn-sm d-flex align-items-center px-1" @click="increase()">
              <i class="bi bi-plus" />
            </button>
          </div>

          <button class="btn btn-sm btn-primary d-flex align-items-center justify-content-center w-50"
            :disabled="selectedQuantity === 0 || stock < 1" @click="addToCart">
            <i class="bi bi-cart-plus-fill fs-5" />
          </button>
        </div>
      </div>
    </div>

  </ProductModal>

</template>

<style lang="scss" scoped>
img {
  min-width: 100%;
  height: 240px;
  object-fit: cover;
  cursor: pointer;
}
</style>