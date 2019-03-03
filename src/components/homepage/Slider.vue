<template>
  <div class="frontpage-slider">
    <div class="slider-container">
      <div class="slider-container__image">
        <img :src="require('@/assets/images/template/frontpage-slider.png')" height="100%" alt>
      </div>
      <div class="slider-container__heading">
        <span>AVE</span>
      </div>
      <div class="slider-container__button">
        <button>
          <router-link :to="{ name: 'gender', params: { gender: 'mens' } }">Shop men's collection</router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/scss/_vars.scss";
.frontpage-slider {
  background-color: $lightgrey;
  height: 400px;

  .slider-container {
    display: flex;
    flex-direction: column;
    max-width: $container-size + 400px;
    margin: auto;

    &__image {
      height: 492px;
      position: absolute;
      top: 40px;
      left: 250px;
      z-index: 1;
    }

    &__heading {
      width: 100%;
      font-family: $head-font;
      font-weight: 700;
      color: $grey;
      text-align: center;
      font-size: 250pt;
      line-height: 1;
      letter-spacing: 150px;
      text-indent: 150px;
      z-index: 2;
    }

    &__button {
      margin-left: 750px;
      z-index: 3;

      button {
        font-family: $head-font;
        font-weight: 600;
        font-size: 11pt;
        text-transform: uppercase;
        letter-spacing: 2.5px;
        border: 1px solid $grey;
        padding-left: 20px;
        padding-right: 20px;
        height: 50px;
        a {
          color: $grey;
          padding: 20px;
          &:hover {
            color: $white;
          }
        }

        &:hover {
          background-color: $grey;
          color: $white;
        }
      }
    }
  }
}
@media (max-width: 992px) {
  .frontpage-slider {
    height: 200px;

    .slider-container {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      &__image {
        display: none;
      }

      &__heading {
        grid-column: span 12;
        letter-spacing: 0.9em;
        text-indent: 0.9em;
        text-align: center;
        margin: auto;
        font-size: 100pt;
        span {
          width: 100%;
        }
      }

      &__button {
        margin-left: auto;
        margin-right: auto;
        grid-column: span 12;
        z-index: 3;
      }
    }
  }
}
@media (max-width: 576px) {
  .frontpage-slider {
    height: 200px;

    .slider-container {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      &__image {
        display: none;
      }

      &__heading {
        grid-column: span 12;
        letter-spacing: 0.2em;
        text-indent: 0.2em;
        text-align: center;
        margin: auto;
        font-size: 100pt;
        span {
          width: 100%;
        }
      }

      &__button {
        margin-left: auto;
        margin-right: auto;
        grid-column: span 12;
        z-index: 3;
      }
    }
  }
}
</style>