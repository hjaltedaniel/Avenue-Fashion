<template>
  <div v-if="isEmpty(products)">
    <HeadSection>
      <span slot="headline">
        Gender
        <span class="light">View</span>
      </span>
      <span slot="byline">{{ gender }}</span>
    </HeadSection>
    <ProductGrid :products="products"/>
  </div>
  <div v-else>
    <HeadSection>
      <span slot="headline">
        No products in
        <span class="light">{{ gender }}</span> department available
      </span>
    </HeadSection>
    <h1></h1>
  </div>
</template>

<script>
import ProductGrid from "@/components/products/ProductGrid.vue";
import HeadSection from "@/components/global/HeadSection.vue";
export default {
  props: ["gender"],
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
      return this.$store.getters.filterProductsByGender(this.gender);
    }
  }
};
</script>

<style scoped>
</style>