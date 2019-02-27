<template>
  <div v-if="isEmpty(products)">
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
    this.fetchData();
  },
  watch: {
    // call again the method if the route changes
    $route: "fetchData"
  },
  methods: {
    fetchData: function() {
      this.products = [];
      ApiService.getCategoryProducts(this.gender, this.style, this.category)
        .then(response => {
          this.products = response.data;
        })
        .catch(error => {
          console.log("There was an error:" + error.response);
        });
      ApiService.getCategory(this.category)
        .then(response => {
          this.cat = response.data;
        })
        .catch(error => {
          console.log("There was an error:" + error.response);
        });
    },
    isEmpty: function(obj) {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) return true;
      }
      return false;
    }
  }
};
</script>
<style scoped>
</style>