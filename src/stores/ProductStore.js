import { defineStore } from "pinia"
import { getProducts } from "../services/ProductServices"
export const useProductStore = defineStore({
  id: "product",
  state: () => ({
    products: [],
    isLoading: true,
  }),

  actions: {
    getProducts() {
      getProducts().then(response => {
        this.products = response
        this.isLoading = false
      })
    },

    setIsLoading() {
      this.isLoading = true
    },

    findProducts(value) {
      getProducts()
        .then(products => {
          this.products = products.filter(product =>
            product.name.toLowerCase().search(value) !== -1)
          this.isLoading = false
        })
    },

    async getProductsByCategoryName(name) {
      await getProducts()
        .then(products => {
          this.products = products.filter((product) => product.category.name.toLowerCase() === name)
          this.isLoading = false
        })
    },

  }
})