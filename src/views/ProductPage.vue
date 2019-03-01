<template>
  <div>
    <HeadSection>
      <span slot="headline">
        Product
        <span class="light">View</span>
      </span>
      <span slot="byline">
        {{ product.gender }} - {{ product.style }} - {{ product.category }} -
        <span
          class="active"
        >{{ product.name }}</span>
      </span>
    </HeadSection>
    <div class="product-section">
      <div class="product-container">
        <div
          class="product-container__image-gallery"
          v-for="picture in product.images"
          :key="picture"
        >
          <img width="100%" :src="require('@/assets/images/products/' + picture)">
        </div>
        <div class="product-container__info-section">
          <h3>{{ product.name }}</h3>
          <div class="info-section__social">
            <span>
              <i class="fas fa-star yellow-star"></i>
              <i class="fas fa-star yellow-star"></i>
              <i class="fas fa-star yellow-star"></i>
              <i class="fas fa-star yellow-star"></i>
              <i class="fas fa-star grey-star"></i>
              3 Review(s)
            </span>|
            <span>
              <button>Add a Review</button>
            </span>|
            <span class="share">
              Share:
              <a
                href="http://facebook.com/sharer.php?u=http://dr.dk&title=Se%20%de%20%vilde%20%billeder"
                target="_blank"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com/intent/tweet?text=Hallo!&url=http%3A%2F%2Fdr.dk%2Fid"
                target="_blank"
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://plus.google.com/share?url=dr.dk/id" target="_blank">
                <i class="fab fa-google-plus-g"></i>
              </a>
              <a
                href="https://pinterest.com/pin/create/button/?url=assets/image1&media=image1&description=Ave%20Sweatshirt"
                target="_blank"
              >
                <i class="fab fa-pinterest-p"></i>
              </a>
              <i class="fab fa-instagram"></i>
              <a href="mailto:?subject=Hvad sker der?&body=http%3A%2F%2Fdr.dk%2Fid">
                <i class="far fa-envelope"></i>
              </a>
            </span>
          </div>
          <div v-if="product.discount.isDiscounted" class="info-section__price">
            <span class="old-price">&#163;{{ product.price }}</span>
            <span class="new-price">&#163;{{ product.discount.discountPrice }}</span>
          </div>
          <div v-else class="info-section__price">
            <span class="new-price">&#163;{{ product.price }}</span>
          </div>
          <div class="info-section__misc">
            <p>
              <span class="misc-desc">Availability:&nbsp;</span>
              <span v-if="product.stock">In stock</span>
              <span v-else>Out of stock</span>
            </p>
            <p>
              <span class="misc-desc">Product code:&nbsp;</span>
              <span>#{{ product.id }}</span>
            </p>
            <p>
              <span class="misc-desc">Tags:&nbsp;</span>
              <span v-for="tag in product.tags" :key="tag">
                <a href="#">{{ tag }} &nbsp;</a>
              </span>
            </p>
          </div>
          <div class="info-section__description">
            <p>{{ product.short }}</p>
          </div>
          <div class="info-section__selectors">
            <div class="selectors__color-selector">
              <label for="color">Colour</label>
              <select name="color">
                <option selected disabled>Select Colour</option>
                <template v-for="color in product.colors">
                  <option :key="color">{{ color }}</option>
                </template>
              </select>
              <i class="fas fa-angle-down"></i>
            </div>
            <div class="selectors__size-selector">
              <label for="size">Size</label>
              <select name="size">
                <option selected disabled>Select Size</option>
                <template v-for="size in product.sizes">
                  <option :key="size">{{ size }}</option>
                </template>
              </select>
              <i class="fas fa-angle-down"></i>
            </div>
            <div class="selectors__qty-selector">
              <label for="qty">Qty</label>
              <input type="number" min="0" name="qty" step="1">
            </div>
          </div>
          <div class="info-section__buttons">
            <button @click="addToCart(product)">
              <i class="fas fa-shopping-cart"></i>Add to cart
            </button>
            <button>
              <i class="far fa-heart"></i>Add to lookbook
            </button>
          </div>
          <div class="info-section__compare">
            <button>
              <i class="fas fa-compress-arrows-alt"></i>Add to compare
            </button>
          </div>
        </div>
        <div class="product-container__tabs">
          <ul class="tabs__pagination">
            <li class="active">
              <a href="#">description</a>
            </li>
            <li>
              <a href="#">Video</a>
            </li>
            <li>
              <a href="#">Size & specs</a>
            </li>
            <li>
              <a href="#">Delivery & returns</a>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
          </ul>
          <div class="tabs__content">
            <h4>Nunc egestas posuere enim, eu maximus erat posuere eget</h4>
            <p>
              Sed ut mi mollis, consequat nulla lacinia, hendrerit turpis.
              Nulla sapien magna, interdum quis pretium nec, pharetra at
              felis. Curabitur dictum sapien est, eget ultricies turpis porta
              vel. Nam suscipit nec lacus sed imperdiet. Vestibulum a purus
              risus. Nulla et dictum augue, nec efficitur mi. Nam sit amet
              pretium elit. Aliquam congue, ligula id vehicula vestibulum,
              orci ex vulputate lacus, ac malesuada elit dolor eget ex. Sed
              quis aliquet risus, ut cursus lectus. In eget lorem tellus.
            </p>
            <p>
              Quisque eleifend varius nisi nec sagittis. Nulla ullamcorper
              imperdiet justo, ut venenatis purus lobortis ut. Nunc sagittis
              urna et hendrerit sodales. Nunc molestie risus nec fringilla
              lacinia. Nulla facilisi. Etiam neque velit, tristique eget
              sollicitudin eget, placerat at metus. Proin dictum lobortis
              velit, id suscipit orci faucibus ut. Aliquam erat volutpat.
              Vivamus feugiat justo in diam placerat, id dignissim elit
              auctor. Vestibulum scelerisque sem et lobortis ultricies. Morbi
              suscipit nulla urna. Suspendisse potenti. Nullam varius quam sed
              nisl dignissim, vel faucibus ipsum blandit. Vivamus at suscipit
              augue. Nam finibus gravida lorem eu viverra. Praesent rhoncus
              imperdiet ultricies. Nullam pretium cursus augue auctor
              vulputate. Quisque a convallis diam commodo eget diam id,
              eleifend dictum libero. Etiam varius, nisi vel dignissim
              sodales, enim dui posuere mauris, in aliquet lorem eros eget
              neque.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApiService from "@/services/ApiService.js";
import HeadSection from "@/components/HeadSection.vue";
export default {
  components: {
    HeadSection
  },
  props: ["id"],
  data() {
    return {
      product: {},
      category: {}
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
      ApiService.getProduct(this.id)
        .then(response => {
          this.product = response.data;
          ApiService.getCategory(this.product.category).then(response => {
            this.product.category = response.data.name;
          });
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    addToCart: function(prod) {
      this.$store.dispatch("addToCart", prod);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/_vars.scss";
.product-container {
  max-width: $container-size;
  margin: 30px auto;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(12, 1fr);
  grid-row: auto;
  justify-items: stretch;
  color: $grey;

  span {
    font-family: $body-font;
  }

  &__image-gallery {
    grid-column: 1/7;
  }

  &__info-section {
    grid-column: 7/13;

    h3 {
      text-transform: uppercase;
      margin-top: 0;
    }

    .info-section {
      &__social {
        display: flex;
        justify-content: space-between;

        .share {
          i {
            padding-right: 8px;
            padding-left: 8px;
          }
        }

        button {
          &:hover {
            color: $blue;
          }
        }

        span {
          font-size: 10pt;
          font-weight: 1000;
        }

        .yellow-star {
          color: #ded3aa;
        }

        .grey-star {
          color: #dfdfde;
        }
      }

      &__price {
        font-size: 25pt;
        color: $midgrey;
        font-weight: 300;
        padding-top: 15px;

        span {
          display: inline-block;
        }

        .old-price {
          text-decoration: line-through;
          padding-right: 10px;

          &::first-letter {
            font-size: 50%;
          }
        }

        .new-price {
          &::first-letter {
            font-size: 50%;
          }
        }
      }

      &__misc {
        p {
          font-size: 10pt;
          margin: 15px 0;
        }

        .misc-desc {
          font-weight: bold;
          text-transform: uppercase;
        }
      }

      &__description {
        p {
          font-size: 10pt;
          line-height: 1.6;
        }
      }

      &__selectors {
        display: flex;
        font-family: $body-font;
        font-size: 10pt;

        select {
          padding: 5px 0px 5px 5px;
          color: $midgrey;
          border: 0.5px solid $midlightgrey;
          border-radius: 0px;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          background: none;
        }

        input {
          padding: 5px 0px 5px 5px;
          color: $midgrey;
          border: 0.5px solid $midlightgrey;
          border-radius: 0px;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          background: none;
        }

        label {
          font-weight: bold;
          text-transform: uppercase;
          padding-bottom: 10px;
          position: relative;
        }

        .selectors {
          &__color-selector {
            display: flex;
            flex-direction: column;
            height: 50px;
            width: 170px;
            margin-right: 20px;

            i {
              position: absolute;
              margin-top: 32px;
              margin-left: 150px;
              color: $midgrey;
            }
          }

          &__size-selector {
            display: flex;
            flex-direction: column;
            height: 50px;
            width: 170px;
            margin-right: 20px;

            i {
              position: absolute;
              margin-top: 32px;
              margin-left: 150px;
              color: $midgrey;
            }
          }

          &__qty-selector {
            display: flex;
            flex-direction: column;
            height: 50px;
            width: 70px;
          }
        }
      }

      &__buttons {
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
        margin-bottom: 10px;

        button {
          color: $grey;
          font-family: $head-font;
          font-weight: 600;
          font-size: 11pt;
          text-transform: uppercase;
          letter-spacing: 2.5px;
          border: 1px solid $grey;
          padding-left: 20px;
          padding-right: 20px;
          height: 50px;

          &:hover {
            background-color: $grey;
            color: $white;
          }
        }
      }

      &__compare {
        button {
          color: $grey;
          font-family: $head-font;
          font-weight: 600;
          font-size: 11pt;
          padding-right: 33px;
          text-transform: uppercase;
          letter-spacing: 2.5px;
          height: 50px;

          &:hover {
            background-color: $grey;
            color: $white;
          }

          i {
            background-color: $midgrey;
            border-radius: 100%;
            padding: 5px;
            margin: auto 10px;
            color: $white;
          }
        }
      }
    }
  }

  &__tabs {
    grid-column: 1/13;

    .tabs {
      &__pagination {
        list-style: none;
        display: flex;
        padding-inline-start: 0px;
        background-color: $lightgrey;

        .active {
          background-color: $grey;

          a {
            color: $white;
          }
        }

        li {
          padding: 15px 50px;
          color: $grey;
          font-family: $head-font;
          font-size: 10pt;
          font-weight: bold;
          text-transform: uppercase;

          &:hover {
            background-color: $grey;

            a {
              color: $white;
            }
          }
        }
      }

      &__content {
        h4 {
          font-size: 10pt;
          line-height: 1.6;
        }

        p {
          font-size: 10pt;
          line-height: 1.6;
        }
      }
    }
  }
}
</style>