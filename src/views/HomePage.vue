<template>
  <div>
    <Slider/>
    <ProductGrid :products="products"/>
    <Lookbook/>
  </div>
</template>

<script>
import ApiService from "@/services/ApiService.js";
import Slider from "@/components/homepage/Slider.vue";
import ProductGrid from "@/components/products/ProductGrid.vue";
import Lookbook from "@/components/homepage/Lookbook.vue";
export default {
  components: {
    Slider,
    ProductGrid,
    Lookbook
  },
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