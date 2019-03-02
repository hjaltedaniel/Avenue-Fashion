<template>
  <div v-if="isEmpty(products)">
    <HeadSection>
      <span slot="headline">
        Category
        <span class="light">View</span>
      </span>
      <span slot="byline">{{ cat.gender }} - {{ cat.style }} - {{ cat.name }}</span>
    </HeadSection>
    <ProductGrid :products="products"/>
  </div>
  <div v-else>
    <HeadSection>
      <span slot="headline">
        No products of category
        <span class="light">{{ cat.name }}</span> available
      </span>
      <span slot="byline">{{ cat.gender }} - {{ cat.style }} - {{ cat.name }}</span>
    </HeadSection>
    <h1></h1>
  </div>
</template>

<script>
import ApiService from "@/services/ApiService.js";
import ProductGrid from "@/components/products/ProductGrid.vue";
import HeadSection from "@/components/global/HeadSection.vue";
export default {
  props: ["gender", "style", "category"],
  components: {
    ProductGrid,
    HeadSection
  },
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