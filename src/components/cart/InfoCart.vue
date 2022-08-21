<script setup lang="ts">
import { useCartStore } from '../../stores/CartStore'
import { storeToRefs } from 'pinia'

const cartStore = useCartStore()
const { cart, subTotal } = storeToRefs(cartStore)
</script>
<template>
  <div id="cart" class="collapse position-absolute me-2 border border-secondary bg-white p-4"
    :style="{ right: '0', top: '4em', width: '380px' }">
    <h4> Resumen de Compra </h4>

    <div v-for="(cartItem) in cart" :key="cartItem.id" class="row border-bottom py-3">
      <div class="col-4">
        <h6 class="text-truncate">
          {{ cart.name }}
        </h6>
        <small class="mb-0">
          Precio: ${{ cartItem.price }}
        </small>
      </div>

      <div class="col-4 d-flex px-0 ms-0 border border-primary" :style="{ height: 'fit-content' }">
        <button class="btn btn-sm d-flex align-items-center px-1" @click="cartStore.decrease(cartItem)">
          <i class="bi bi-dash" />
        </button>
        <input v-model="cartItem.quantity" type="text" class="form-control text-center border-0 rounded-0" disabled>
        <button class="btn btn-sm d-flex align-items-center px-1" @click="cartStore.increase(cartItem)">
          <i class="bi bi-plus" />
        </button>
      </div>
      <span class="col-4">
        Subtotal <span class="fw-bold">{{ cartItem.price * cartItem.quantity }}</span>
      </span>
    </div>


    <p class="text-end text-secondary mb-0 mt-3 fs-4">
      Subtotal: <span class="fw-bold">{{ subTotal }}</span>
    </p>
  </div>
</template>

<style lang="scss" scoped>
#cart {
  max-width: 360px;
}
</style>