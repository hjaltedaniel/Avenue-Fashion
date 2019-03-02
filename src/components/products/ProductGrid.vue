<template>
  <div class="frontpage-grid">
    <div class="grid-container">
      <ul class="grid-container__pagination" v-if="frontpage">
        <a href="#">
          <li class="active">Popular</li>
        </a>
        <a href="#">
          <li>New arrivals</li>
        </a>
        <a href="#">
          <li>Best Sellers</li>
        </a>
        <a href="#">
          <li>Special offers</li>
        </a>
        <a href="#">
          <li>Coming soon</li>
        </a>
      </ul>
      <div class="grid-container__image-grid">
        <template v-for="product in products">
          <ProductCard :product="product" :frontpage="frontpage" :key="product.id"/>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/products/ProductCard.vue";
export default {
  components: {
    ProductCard
  },
  props: ["products", "frontpage"]
};
</script>

<style lang="scss" scoped>
@import "@/scss/_vars.scss";
.frontpage-grid {
  .active {
    color: $blue;

    &:hover {
      color: $grey;
    }
  }

  .grid-container {
    margin: auto;
    max-width: $container-size + 400px;

    &__pagination {
      display: flex;
      border-top: 0.7px solid $lightgrey;
      padding-top: 30px;
      margin-top: 30px;
      list-style: none;
      padding-inline-start: 0px;
      font-family: $head-font;
      font-weight: bold;
      text-transform: uppercase;

      li {
        padding-right: 40px;
        font-size: 8pt;
      }
    }

    &__image-grid {
      margin-top: 30px;
      max-width: $container-size + 400px;
      border-bottom: 0.7px solid $lightgrey;
      padding-bottom: 30px;
      margin-bottom: 30px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 15px;
      grid-row: repeat(5, auto);
    }
  }
}
</style>