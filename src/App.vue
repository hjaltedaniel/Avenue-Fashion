<template>
  <div id="app">
    <Topbar :inCart="inCart"/>
    <Navbar/>
    <router-view/>
    <Footer/>
    <Bottombar/>
  </div>
</template>

<script>
import Topbar from "@/components/global/Topbar.vue";
import Navbar from "@/components/navigation/Navbar.vue";
import Footer from "@/components/global/Footer.vue";
import Bottombar from "@/components/global/Bottombar.vue";

export default {
  components: {
    Navbar,
    Topbar,
    Footer,
    Bottombar
  },
  computed: {
    inCart() {
      return this.$store.getters.inCart;
    }
  }
};
</script>

<style lang="scss">
@import "@/scss/_vars.scss";
@import "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css";
@import "https://use.fontawesome.com/releases/v5.7.2/css/all.css";
@import "https://fonts.googleapis.com/css?family=Montserrat:400,700|Roboto";

h1 {
  font-family: $head-font;
  font-size: 18pt;
}

h2 {
  font-family: $head-font;
  font-weight: 100;
  font-size: 15pt;
}

h3 {
  font-family: $head-font;
}

h4 {
  font-family: $head-font;
}

p {
  font-family: $body-font;
  font-style: regular;
  font-size: 15pt;
}

a {
  color: $grey;
  text-decoration: none;

  &:hover {
    color: $blue;
  }
}

.light {
  font-weight: 100;
}

.bold {
  font-weight: bold;
}

//Removing initial button styling
button,
input[type="submit"],
input[type="reset"] {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

//Adding states
.active {
  visibility: visible !important;
}
</style>
