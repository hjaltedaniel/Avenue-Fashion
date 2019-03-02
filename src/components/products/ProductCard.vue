<template>
  <div
    class="image-card"
    @mouseover="active = true"
    @mouseleave="active = false"
    :class="[{ active: active }, product.frontpageSize]"
  >
    <router-link :to="{ name: 'product', params: { id: product.id } }">
      <div class="image-card__price" :class="product.frontpageSize">
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
        <span class="price">&#163;{{ product.price }}</span>
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
  props: ["product"],
  data() {
    return {
      active: false
    };
  }
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