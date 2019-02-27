<template>
  <div>
    <h1>Homepage</h1>
  </div>
</template>

<script>
import ApiService from "@/services/ApiService.js";
export default {
  data() {
    return {
      products: []
    };
  },
  created() {
    ApiService.getProducts()
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