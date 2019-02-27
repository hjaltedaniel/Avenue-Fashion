<template>
  <div>
    <ul v-for="product in products" :key="product.id">
      <router-link :to="{ name: 'product', params: { id: product.id } }">
        <li>{{ product.name }}</li>
      </router-link>
    </ul>
  </div>
</template>

<script>
import ApiService from "@/services/ApiService.js";
export default {
  props: ["gender", "style", "category"],
  data() {
    return {
      products: []
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
  }
};
</script>

<style scoped>
</style>