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
      product: {},
      category: {}
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
      ApiService.getProduct(this.id)
        .then(response => {
          this.product = response.data;
          ApiService.getCategory(this.product.category).then(response => {
            this.product.category = response.data.name;
          });
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  }
};
</script>

<style scoped>
</style>