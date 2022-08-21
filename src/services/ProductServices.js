import api from '../api'

export const getProducts = async () => {
  try {
    const resProduct = await api.get('product/')
    return resProduct.data
  } catch (error) {
    throw new Error(error);
  }
}