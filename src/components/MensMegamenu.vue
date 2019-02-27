<template>
  <li class="main-menu__mega-dropdown" @mouseover="mouseOver" v-bind:class="{ active: active }">
    <router-link :to="{ name: 'gender', params: { gender: 'mens' } }">Mens
      <br>
      <i class="fas fa-angle-down"></i>
    </router-link>
    <ul class="mega-dropdown" v-bind:class="{ active: active }">
      <li class="mega-dropdown__category" v-for="style in styles" :key="style">
        <router-link :to="{ name: 'style', params: { gender: 'mens', style: style } }">{{ style }}</router-link>
        <ul v-for="cat in categoriesByStyle(style)" :key="cat">
          <router-link
            :to="{ name: 'category', params: { gender: 'mens', style: cat.style, category: cat.id } }"
          >
            <li>{{ cat.name }}</li>
          </router-link>
        </ul>
      </li>
    </ul>
  </li>
</template>

<script>
import ApiService from "@/services/ApiService.js";
export default {
  data() {
    return {
      active: false,
      categories: [],
      styles: []
    };
  },
  created() {
    ApiService.getCategories("mens")
      .then(response => {
        this.categories = response.data;
        let y = [];
        this.categories.forEach(function(element) {
          y.push(element.style);
        });
        let x = [...new Set(y)];
        this.styles = x;
      })
      .catch(error => {
        console.log("There was an error:" + error.response);
      });
  },
  methods: {
    mouseOver: function() {
      this.active = !this.active;
    },
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