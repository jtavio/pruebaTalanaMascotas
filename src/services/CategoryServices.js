import Api from "@/api"

export const getCategories = async () => {
  try {
    const categories = await Api.get(`product-category`)
    return categories.data
  } catch (error) {
    throw new Error(error)
  }
}