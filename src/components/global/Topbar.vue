<template>
  <div class="top-bar">
    <div class="top-container">
      <div class="top-container__currency-selector">
        <span>Currency:</span>
        <select>
          <option>GBP</option>
          <option>DKK</option>
          <option>EUR</option>
        </select>
        <i class="fas fa-angle-down"></i>
      </div>
      <div class="top-container__user-section">
        <button>Register</button>
        <router-link :to="{ name: 'user' }">
          <button>Sign in</button>
        </router-link>
      </div>
      <div class="top-container__cart">
        <button v-if="inCart.length == 0">
          <i class="fas fa-shopping-cart"></i>
          empty
          <i class="fas fa-angle-down"></i>
        </button>
        <button v-else>
          <i class="fas fa-shopping-cart"></i>
          {{ inCart.length }}
          <i class="fas fa-angle-down"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["inCart"]
};
</script>

<style scoped lang="scss">
@import "@/scss/_vars.scss";
.top-bar {
  background-color: $grey;
  height: 40px;
  width: 100%;
}

.top-container {
  display: grid;
  grid-gap: 3px;
  grid-template-columns: repeat(12);
  grid-auto-rows: 40px;
  max-width: $container-size;
  margin: auto;
  font-family: $head-font;
  font-size: 8pt;
  color: $midgrey;

  &__currency-selector {
    grid-column: 1/3;
    align-self: center;
    justify-self: center;

    select {
      padding: 5px 0px 5px 5px;
      color: $midgrey;
      border: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background: none;
    }
  }

  &__user-section {
    grid-column: 8/11;
    align-self: center;
    justify-self: center;

    :hover {
      color: $blue;
    }
    a {
      color: $midgrey;
    }
  }

  &__cart {
    grid-column: 12/13;
    background-color: $blue;
    color: $white;

    button {
      display: flex;
      justify-content: space-around;
      height: 100%;
      width: 100%;
      margin: auto;
    }

    :hover {
      background-color: darken($blue, 5);
    }
  }
}
</style>