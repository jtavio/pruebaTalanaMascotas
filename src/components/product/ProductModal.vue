<script setup>
import { ref } from 'vue'
import { useCartStore } from '../../stores/CartStore'

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

const TEXT_TRUNCATE = 250

const truncate = (text) => {
  if (text.length > length) {
    return text.substring(0, TEXT_TRUNCATE) + '...'
  }
  return text
}
</script>
<template>
  <div>
    <div :id="`staticBackdrop-${code}`" class="modal fade" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content rounded-0">
          <div class="modal-header">
            <h3 class="modal-title">
              Agregar Producto
            </h3>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div class="modal-body p-4">
            <div class="row">
              <img :src="photo" :alt="name" class="col-6">
              <div class="d-flex flex-column col-6">
                <h4 class="text-truncate">
                  {{ name }}
                </h4>
                <p>
                  {{ code }}
                </p>
                <p>Precio: <b>${{ price }}</b></p>
                <div class="d-flex justify-content-between mb-2">
                  Cantidad
                  <div class="d-flex border border-primary w-50">
                    <button class="btn btn-sm d-flex align-items-center px-1" @click="() => decrease()">
                      <i class="bi bi-dash" />
                    </button>
                    <input v-model="selectedQuantity" type="text" class="form-control border-0 text-center">
                    <button class="btn btn-sm d-flex align-items-center px-1" @click="() => increase()">
                      <i class="bi bi-plus" />
                    </button>
                  </div>
                </div>

                <p>
                  <span v-if="stock < 1" class="badge bg-secondary fs-6 fw-normal">Producto sin stock</span>
                </p>
                <p>Sub-total: <b>${{ price }}</b></p>
              </div>
            </div>
            <p class="mt-4 mb-0">
              {{ truncate(description) }}
            </p>
          </div>
          <div class="modal-footer justify-content-center">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Seguir comprando
            </button>
            <button type="button" class="btn btn-primary" :data-bs-toggle="`modal`"
              :disabled="selectedQuantity < 1 || stock < 1" @click="addToCart(props)">
              Agregar al carro
            </button>
          </div>
        </div>
      </div>
    </div>

    <slot />
  </div>
</template>
<style lang="scss" scoped>
.modal-dialog {
  max-width: 620px;
}

img {
  max-width: 280px;
  max-height: 240px;
  object-fit: cover;
}
</style>