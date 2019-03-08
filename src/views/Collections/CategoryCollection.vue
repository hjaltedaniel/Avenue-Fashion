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
import ProductGrid from "@/components/products/ProductGrid.vue";
import HeadSection from "@/components/global/HeadSection.vue";
export default {
  props: ["gender", "style", "category"],
  components: {
    ProductGrid,
    HeadSection
  },
  data() {
    return {};
  },
  methods: {
    isEmpty: function(obj) {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) return true;
      }
      return false;
    }
  },
  computed: {
    products() {
      return this.$store.getters.filterProductsByCategory(
        this.gender,
        this.category
      );
    },
    cat() {
      return this.$store.getters.getCategory(this.category);
    }
  }
};
</script>
<style scoped>
</style>