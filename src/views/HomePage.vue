<template>
  <div>
    <Slider/>
    <ProductGrid :products="products" :frontpage="true"/>
    <Lookbook/>
  </div>
</template>

<script>
import { mapState } from "vuex";
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
    return {};
  },
  computed: mapState(["products"])
};
</script>

<style scoped>
</style>