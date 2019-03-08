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
import ProductGrid from "@/components/products/ProductGrid.vue";
import HeadSection from "@/components/global/HeadSection.vue";
export default {
  props: ["gender", "style"],
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
      return this.$store.getters.filterProductsByStyle(this.gender, this.style);
    }
  }
};
</script>

<style scoped>
</style>