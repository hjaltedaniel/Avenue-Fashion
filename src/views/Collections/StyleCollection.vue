<template>
  <div v-if="products != 0">
    <ul v-for="product in products" :key="product.id">
      <router-link :to="{ name: 'product', params: { id: product.id } }">
        <li>{{ product.name }}</li>
      </router-link>
    </ul>
  </div>
  <div v-else>
    <h1>No products of style {{ style }} available</h1>
  </div>
</template>

<script>
import ApiService from "@/services/ApiService.js";
export default {
  props: ["gender", "style"],
  data() {
    return {
      products: []
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
      ApiService.getStyleProducts(this.gender, this.style)
        .then(response => {
          this.products = response.data;
        })
        .catch(error => {
          console.log("There was an error:" + error.response);
        });
    }
  }
};
</script>

<style scoped>
</style>