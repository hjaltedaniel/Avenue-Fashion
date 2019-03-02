<template>
  <div class="frontpage-grid">
    <div class="grid-container">
      <ul class="grid-container__pagination">
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
          <ProductCard :product="product" :key="product.id"/>
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
  props: ["products"]
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
      margin-bottom: 30px;
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
      max-width: $container-size + 400px;
      border-bottom: 0.7px solid $lightgrey;
      padding-bottom: 30px;
      margin-bottom: 30px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 15px;
      grid-row: repeat(5, auto);

      .large {
        height: 500px !important;
        grid-column: span 2 !important;
        grid-row: span 3 !important;

        img {
          object-fit: scale-down !important;
        }
      }

      .image-card.active {
        box-shadow: 0px 4px 10px -2px rgba(0, 0, 0, 0.75);
      }

      .image-card {
        height: 400px;
        background-color: $lightgrey;
        grid-column: span 1;
        grid-row: span 2;

        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        &__price {
          position: absolute;
          padding-top: 10px;
          padding-left: 10px;

          span {
            font-family: $head-font;
            color: $midgrey;
            font-size: 12pt;
            display: inline-block;

            &::first-letter {
              font-size: 75% !important;
            }
          }
        }

        &__old-price {
          text-decoration: line-through;
        }

        .active {
          visibility: visible;
        }

        &__misc {
          text-align: center;
          background-color: $white;
          visibility: hidden;
          position: relative;
          top: -4px;
          z-index: 4;
          box-shadow: 0px 4px 10px -2px rgba(0, 0, 0, 0.75);

          .price {
            display: inline-block;
            padding-left: 5px;

            &::first-letter {
              font-size: 75% !important;
            }
          }

          span {
            text-transform: uppercase;
            font-family: $head-font;
            font-weight: bold;
            font-size: 8pt;
            color: $midgrey;
          }

          p {
            font-size: 8pt;
            color: $midgrey;
          }

          .buttons {
            button {
              margin-bottom: 10px;
              background-color: $midgrey;
              padding: 5px;
              color: $white;
              border-radius: 100%;

              &:hover {
                background-color: $blue;
              }
            }
          }
        }
      }
    }
  }
}
</style>