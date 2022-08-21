import { defineStore } from 'pinia'

export const useCartStore = defineStore({

  id: 'cart',

  state: () => ({
    totalQuantity: 0,
    subTotalItems: 0,
    cart: [],
  }),

  getters: {
    totalItems: (state) => {
      state.totalQuantity = state.cart.map(val => val.quantity).reduce((prev, curr) => prev + curr, 0)

      return state.totalQuantity
    },
    subTotal: (state) => {
      state.subTotalItems = state.cart.map(val => val.quantity * val.price).reduce((prev, curr) => prev + curr, 0)

      return state.subTotalItems
    },

  },

  actions: {
    addToCart(item) {
      const cartItem = this.cart.find(cartItem => cartItem.id === item.id)

      if (cartItem) {
        cartItem.quantity += Number(item.quantity)
      } else {
        this.cart.push(item)
      }
    },

    increase(item) {
      const cartItem = this.cart.find(cartItem => cartItem.id === item.id)

      if (cartItem) {
        cartItem.quantity++
      }

    },

    decrease(item) {
      const cartItem = this.cart.find(cartItem => cartItem.id === item.id)
      if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity--
      } else {
        this.cart = this.cart.filter(cartItem => cartItem.id !== item.id)
      }
    },
  }

})