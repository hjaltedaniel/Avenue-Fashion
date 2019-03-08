import axios from "axios"

const apiClient = axios.create({
    baseURL: `https://api.hjaltedaniel.io`,
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
    getContents() {
        return apiClient.get('/content')
    },
    getCategories() {
        return apiClient.get('/categories')
    }
}