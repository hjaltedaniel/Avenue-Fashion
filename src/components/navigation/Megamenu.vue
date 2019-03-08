<template>
  <li class="main-menu__mega-dropdown" @mouseover="active = true" @mouseleave="active = false">
    <router-link :class="{ active: active }" :to="{ name: 'gender', params: { gender: gender } }">
      {{ gender }}
      <br>
      <i class="fas fa-angle-down"></i>
    </router-link>
    <ul class="mega-dropdown" v-bind:class="{ active: active }">
      <li class="mega-dropdown__category" v-for="style in styles" :key="style">
        <router-link :to="{ name: 'style', params: { gender: gender, style: style } }">{{ style }}</router-link>
        <ul v-for="cat in categoriesByStyle(style)" :key="cat.id">
          <router-link
            :to="{ name: 'category', params: { gender: gender, style: cat.style, category: cat.id } }"
          >
            <li>{{ cat.name }}</li>
          </router-link>
        </ul>
      </li>
      <div v-if="hasBanner" class="mega-dropdown__banner">
        <div>
          <span class="bold">Autumn sale!</span>
          <br>
          <span>Up to 50% off</span>
        </div>
      </div>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["gender", "hasBanner"],
  data() {
    return {
      active: false
    };
  },
  computed: {
    categories() {
      return this.$store.getters.filterCategoriesByGender(this.gender);
    },
    styles() {
      let y = [];
      this.categories.forEach(function(element) {
        y.push(element.style);
      });
      let x = [...new Set(y)];
      return x;
    }
  },
  methods: {
    categoriesByStyle: function(x) {
      let y = this.categories.filter(function(cat) {
        return cat.style == x;
      });
      return y;
    }
  }
};
</script>

<style scoped>
</style>