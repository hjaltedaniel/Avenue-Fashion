<template>
  <div v-if="isEmpty(products)">
    <HeadSection>
      <span slot="headline">
        Style
        <span class="light">View</span>
      </span>
      <span slot="byline">{{ gender }} - {{ style }}</span>
    </HeadSection>
    <ProductGrid :products="products"/>
  </div>
  <div v-else>
    <HeadSection>
      <span slot="headline">
        No products of style
        <span class="light">{{ style }}</span> available
      </span>
      <span slot="byline">{{ gender }} - {{ style }}</span>
    </HeadSection>
    <h1></h1>
  </div>
</template>

<script>
import ApiService from "@/services/ApiService.js";
import ProductGrid from "@/components/products/ProductGrid.vue";
import HeadSection from "@/components/global/HeadSection.vue";
export default {
  props: ["gender", "style"],
  components: {
    ProductGrid,
    HeadSection
  },
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