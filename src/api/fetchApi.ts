import axios from 'axios'
import { IProduct } from 'myTypes/product'
import { IProductModel } from 'store/models/product'
const API = axios.create({
  baseURL: 'https://fakestoreapi.com/',
})

export const getProducts = () => API.get<IProduct[]>('products')
export const getProductById = (id: number | string) => API.get(`products/${id}`)
export const getCategories = () => API.get('products/categories')
export const getProductByCategory = (category: string) =>
  API.get(`products/category/${category}`)
export const getProductsWithLimit = (limit: number) =>
  API.get(`products?limit=${limit}`)
export const signUp = (data: {
  email: string
  login: string
  password: string
  confirmPassword: string
}) => API.post('https://e-commerce-kts.herokuapp.com/user/signup', data)
export const signIn = (data: { email: string; password: string }) =>
  API.post('https://e-commerce-kts.herokuapp.com/user/signin', data)
export const addToFavs = (id: string, product: IProductModel) =>
  API.patch(`https://e-commerce-kts.herokuapp.com/user/${id}/addtofavs`, product)
