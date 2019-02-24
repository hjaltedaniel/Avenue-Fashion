<template>
  <div id="app">
    <Topbar/>
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Topbar from "@/components/Topbar.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
    Topbar
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
  font-style: regular;
  font-size: 18pt;
}

p {
  font-family: $body-font;
  font-style: regular;
  font-size: 15pt;
}

a {
  color: $grey;
  text-decoration: none;

  :hover {
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
.is-active {
  visibility: visible !important;
}
</style>
