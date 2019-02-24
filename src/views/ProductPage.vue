<template>
  <div>
    <h1>
      Product
      <span class="light">View</span>
    </h1>
    <h2>{{ product.gender }} - {{ product.style }} - {{ product.category }} - {{ product.name }}</h2>
  </div>
</template>

<script>
import ApiService from "@/services/ApiService.js";
export default {
  props: ["id"],
  data() {
    return {
      product: {}
    };
  },
  created() {
    ApiService.getProduct(this.id)
      .then(response => {
        this.product = response.data;
      })
      .catch(error => {
        console.log(error.response);
      });
  }
};
</script>

<style scoped>
</style>