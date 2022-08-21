import { defineStore } from 'pinia'
import { getCategories } from '../services/CategoryServices'

export const useCategoryStore = defineStore({
  id: 'categories',

  state: () => ({
    categories: [],
    selectedCategory: {
      id: 0,
      name: '',
      order: 0
    }
  }),

  getters: {
    getCategoryById: (state) => (id) => state.categories?.find(category => category.id === id)
  },

  actions: {
    getCategories() {
      getCategories().then(categories => {
        this.categories = categories
      })
    },

    setSelectedCategory(category) {
      this.selectedCategory = category
    }
  }
})