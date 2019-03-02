<template>
  <div
    class="image-card"
    @mouseover="active = true"
    @mouseleave="active = false"
    :class="[{ active: active }, isFrontpage(frontpage)]"
  >
    <router-link :to="{ name: 'product', params: { id: product.id } }">
      <div class="image-card__price" v-if="product.discount.isDiscounted">
        <span class="image-card__old-price">&#163;{{ product.price }}</span>
        <span class="image-card__new-price">&#163;{{ product.discount.discountPrice }}</span>
      </div>
      <div class="image-card__price" v-else>
        <span class="image-card__new-price">&#163;{{ product.price }}</span>
      </div>
      <img
        v-for="picture in product.images"
        :key="picture"
        :src="require('@/assets/images/products/' + picture)"
        alt
      >
      <div class="image-card__misc" v-bind:class="{ active: active }">
        <span>{{ product.name }}</span>
        <template v-if="product.discount.isDiscounted">
          <span class="price">&#163;{{ product.discount.discountPrice }}</span>
        </template>
        <template v-else>
          <span class="price">&#163;{{ product.price }}</span>
        </template>
        <p>{{ product.short }}</p>
        <span class="buttons">
          <button>
            <i class="fas fa-shopping-cart"></i>
          </button>
          <button>
            <i class="far fa-heart"></i>
          </button>
          <button>
            <i class="fas fa-compress-arrows-alt"></i>
          </button>
        </span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["product", "frontpage"],
  data() {
    return {
      active: false
    };
  },
  methods: {
    isFrontpage: function(bool) {
      if (bool == true) {
        return this.product.frontpageSize;
      } else {
        return "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/_vars.scss";
.frontpage-grid {
  .grid-container {
    &__image-grid {
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
            line-height: 1.6;
            padding-left: 10px;
            padding-right: 10px;
          }

          .buttons {
            button {
              margin-bottom: 10px;
              margin-right: 10px;
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