<template>
  <li class="main-menu__mega-dropdown" @mouseover="mouseOver" v-bind:class="{ active: active }">
    <router-link :to="{ name: 'gender', params: { gender: 'womens' } }">Womens
      <br>
      <i class="fas fa-angle-down"></i>
    </router-link>
    <ul class="mega-dropdown" v-bind:class="{ active: active }">
      <li class="mega-dropdown__category">
        <a href="#">Casual</a>
        <ul>
          <a href="#">
            <li>Jackets</li>
          </a>
          <a href="#">
            <li>Hoodies & Sweatshirts</li>
          </a>
          <a href="#">
            <li>Polo Shirts</li>
          </a>
          <a href="#">
            <li>Sportswear</li>
          </a>
          <a href="#">
            <li>Trousers & Chinos</li>
          </a>
          <a href="#">
            <li>T-shirts</li>
          </a>
        </ul>
      </li>
      <li class="mega-dropdown__category">
        <a href="#">Formal</a>
        <ul>
          <a href="#">
            <li>Skirts</li>
          </a>
          <a href="#">
            <li>Shirts</li>
          </a>
          <a href="#">
            <li>Suits</li>
          </a>
          <a href="#">
            <li>Trousers</li>
          </a>
        </ul>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      active: false
    };
  },
  methods: {
    mouseOver: function() {
      this.active = !this.active;
    }
  }
};
</script>

<style scoped>
</style> 