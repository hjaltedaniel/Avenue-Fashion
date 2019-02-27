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
  getStyleProducts(gender, style) {
    return apiClient.get('/products?gender=' + gender + "&style=" + style)
  },
  getCategories(gender) {
    return apiClient.get('/categories?gender=' + gender)
  },
  getCategory(id) {
    return apiClient.get('/categories/' + id)
  },
  getProduct(id) {
    return apiClient.get('/products/' + id)
  },
  getContent(id) {
    return apiClient.get('/content/' + id)
  }
}