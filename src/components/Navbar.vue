<template>
  <div class="main-navigation">
    <div class="navigation-container">
      <div class="navigation-container__nav-bar-brand">
        <router-link :to="{ name: 'home' }">
          <h1>
            Avenue
            <span class="light">Fashion</span>
          </h1>
        </router-link>
      </div>
      <nav class="navigation-container__main-menu">
        <ul class="main-menu">
          <li class="main-menu__mega-dropdown">
            <router-link :to="{ name: 'product', params: { id: '1' } }">Mens
              <br>
              <i class="fas fa-angle-down"></i>
            </router-link>
            <ul class="mega-dropdown">
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
                    <li>Jackets</li>
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
              <div class="mega-dropdown__banner">
                <div>
                  <span class="bold">Autumn sale!</span>
                  <br>
                  <span>Up to 50% off</span>
                </div>
              </div>
            </ul>
          </li>
          <li class="main-menu__mega-dropdown">
            <a href="#">Womens
              <br>
              <i class="fas fa-angle-down"></i>
            </a>
            <ul class="mega-dropdown">
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
          <li>
            <router-link :to="{ name: 'content', params: { id: '2' } }">The Brand</router-link>
          </li>
          <li class="main-menu__dropdown-child">
            <a href="#">Local Stores
              <br>
              <i class="fas fa-angle-down"></i>
            </a>
          </li>
          <li class="main-menu__dropdown-child">
            <a href="#">Look Book
              <br>
              <i class="fas fa-angle-down"></i>
            </a>
          </li>
        </ul>
      </nav>
      <div class="navigation-container__search-field">
        <input type="text" placeholder="Search">
        <i class="fa fa-search"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/scss/_vars.scss";
//Main-nav stuff
.main-navigation {
  background-color: $lightgrey;
  width: 100%;
  font-family: $head-font;
  font-size: 8pt;

  li {
    list-style: none;

    :hover {
      color: $blue;
    }
  }

  ul {
    padding-inline-start: 0px;
  }

  a {
    color: $grey;
  }
}

.navigation-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  max-width: $container-size + 150;
  margin: auto;

  &__nav-bar-brand {
    text-transform: uppercase;
  }

  &__main-menu {
    li {
      padding-right: 50px;
      font-weight: bold;
      text-transform: uppercase;
    }
  }

  &__search-field {
    i {
      position: relative;
      z-index: 1;
      left: -25px;
      top: 1px;
      color: #7b7b7b;
      cursor: pointer;
      width: 0;
    }

    input {
      width: 190px;
      padding: 7px;
    }
  }
}

.main-menu {
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 3px;

  .fas {
    font-size: 6pt;
  }

  &__mega-dropdown a.is-active {
    color: $blue;
  }
}

.mega-dropdown {
  display: flex;
  flex-wrap: wrap;
  visibility: hidden;
  position: absolute;
  width: 320px;
  background-color: $lightgrey;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 20px 20px 20px 20px !important;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 40px;

  &__category {
    a li {
      font-weight: 400;
      text-transform: none;
      line-height: 25px;
      display: block;
      padding-right: 10px;
    }

    padding-bottom: 20px;
  }

  &__banner {
    background-color: #333333;
    color: #fff;
    width: 100%;
    margin: auto;
    font-size: 18pt;
    text-align: center;
    line-height: 30px;
    font-weight: 400;

    div {
      padding: 50px 0 50px 0;
    }
  }
}
</style>