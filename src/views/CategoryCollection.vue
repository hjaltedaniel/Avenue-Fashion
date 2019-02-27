<template>
  <div v-if="products != 0">
    <ul v-for="product in products" :key="product.id">
      <router-link :to="{ name: 'product', params: { id: product.id } }">
        <li>{{ product.name }}</li>
      </router-link>
    </ul>
  </div>
  <div v-else>
    <h1>No products of category {{ cat.name }} available</h1>
  </div>
</template>

<script>
import ApiService from "@/services/ApiService.js";
export default {
  props: ["gender", "style", "category"],
  data() {
    return {
      products: [],
      cat: {}
    };
  },
  created() {
    ApiService.getCategoryProducts(this.gender, this.style, this.category)
      .then(response => {
        this.products = response.data;
      })
      .catch(error => {
        console.log("There was an error:" + error.response);
      });
    ApiService.getCategories("mens")
      .then(response => {
        let y = [];
        let category = this.category;
        y = response.data;
        let x = y.filter(function(cat) {
          return cat.id == category;
        });
        this.cat = x[0];
      })
      .catch(error => {
        console.log("There was an error:" + error.response);
      });
  }
};
</script>
<style scoped>
</style>