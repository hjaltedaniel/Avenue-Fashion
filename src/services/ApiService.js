import axios from "axios"

const apiClient = axios.create({
  baseURL: `https://avenue-fashion-530c3.firebaseio.com`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
})

var ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

var ID_LENGTH = 8;

var generate = function () {
  var rtn = '';
  for (var i = 0; i < ID_LENGTH; i++) {
    rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
  }
  return rtn;
}

export default {
  getProducts() {
    return apiClient.get("/products.json")
  },
  getGenderProducts(gender) {
    return apiClient.get('/products.json?orderBy="gender"&equalTo="' + gender + '"')
  },
  getCategoryProducts(gender, style, category) {
    return apiClient.get('/products.json?gender=' + gender + "&style=" + style + "&category=" + category)
  },
  getStyleProducts(gender, style) {
    return apiClient.get('/products.json?gender=' + gender + "&style=" + style)
  },
  getCategories(gender) {
    return apiClient.get('/categories.json?orderBy="gender"&equalTo="' + gender + '"')
  },
  getCategory(id) {
    return apiClient.get('/categories.json?orderBy="id"&equalTo="' + id + '"')
  },
  getProduct(id) {
    return apiClient.get('/products.json?orderBy="id"&equalTo=' + id)
  },
  getContent(id) {
    return apiClient.get('/content.json?orderBy="id"&equalTo=' + id)
  },
  postUser(user) {
    return apiClient.post('/users', {
      id: generate(),
      email: user.email,
      password: user.password,
      newsletter: user.newsletter
    })
  }
}