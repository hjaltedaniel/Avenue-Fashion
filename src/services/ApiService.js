import axios from "axios"

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
})

export default {
  getProducts() {
    return apiClient.get("/products")
  },
  getGenderProducts(gender) {
    return apiClient.get('/products?gender=' + gender)
  },
  getCategoryProducts(gender, style, category) {
    return apiClient.get('/products?gender=' + gender + "&style=" + style + "&category=" + category)
  },
  getCategories(gender) {
    return apiClient.get('/productCategories?gender=' + gender)
  },
  getProduct(id) {
    return apiClient.get('/products/' + id)
  }
}