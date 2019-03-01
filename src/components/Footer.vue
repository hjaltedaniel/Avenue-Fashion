<template>
  <footer>
    <div class="footer-container">
      <nav class="footer-container__navigation">
        <ul class="navigation__navigation-list">
          <li class="navigation-list__headline">Information
            <ul class="navigation-list__submenu">
              <a href="#">
                <li>The brand</li>
              </a>
              <a href="#">
                <li>Local stores</li>
              </a>
              <a href="#">
                <li>Customer service</li>
              </a>
              <a href="#">
                <li>Privacy & cookies</li>
              </a>
              <a href="#">
                <li>Site map</li>
              </a>
            </ul>
          </li>
          <li class="navigation-list__headline">Why buy from us
            <ul class="navigation-list__submenu">
              <a href="#">
                <li>Shipping & returns</li>
              </a>
              <a href="#">
                <li>Secure shopping</li>
              </a>
              <a href="#">
                <li>Testimonials</li>
              </a>
              <a href="#">
                <li>Award winning</li>
              </a>
              <a href="#">
                <li>Ethical trading</li>
              </a>
            </ul>
          </li>
          <li class="navigation-list__headline">Your account
            <ul class="navigation-list__submenu">
              <a href="#">
                <li>Sign in</li>
              </a>
              <a href="#">
                <li>Register</li>
              </a>
              <a href="#">
                <li>View cart</li>
              </a>
              <a href="#">
                <li>View your lookbook</li>
              </a>
              <a href="#">
                <li>Track an order</li>
              </a>
              <a href="#">
                <li>Update information</li>
              </a>
            </ul>
          </li>
          <li class="navigation-list__headline">Lookbook
            <ul class="navigation-list__submenu">
              <a href="#">
                <li>Latest post</li>
              </a>
              <a href="#">
                <li>Men's lookbook</li>
              </a>
              <a href="#">
                <li>Women's lookbook</li>
              </a>
              <a href="#">
                <li>Lookbooks RSS feed</li>
              </a>
              <a href="#">
                <li>View your lookbook</li>
              </a>
              <a href="#">
                <li>Delete your lookbook</li>
              </a>
            </ul>
          </li>
        </ul>
        <div class="navigation__contact">
          <span class="contact__headline">Contact details</span>
          <p>Head Office: Avenue Fashion.
            <br>180-182 Regent Street, London.
          </p>
          <p>Telephone: 0123-456-789
            <br>Email: support@yourwebsite.com
          </p>
        </div>
      </nav>
      <div class="footer-container__banner">
        <p class="bold">Award winner</p>
        <p>Fashion awards 2016</p>
      </div>
      <div class="footer-container__banner blue">
        <p>
          <a href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i class="fab fa-pinterest"></i>
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/scss/_vars.scss";
footer {
  background-color: $lightgrey;

  .blue {
    background-color: $blue !important;
  }

  .footer-container {
    max-width: $container-size;
    margin: auto;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(12, 1fr);
    grid-row: auto;

    &__navigation {
      grid-column: 1/13;
      display: grid;
      grid-gap: 3px;
      grid-template-columns: repeat(15, 1fr);
      grid-row: auto;
      margin-top: 30px;
      margin-bottom: 20px;

      li,
      ul,
      span,
      p {
        list-style: none;
        padding-inline-start: 0px;
        font-family: $body-font;
        font-size: 10pt;
      }

      .navigation__navigation-list {
        grid-column: 1/12;
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(12, 1fr);
        grid-row: auto;

        .navigation-list {
          &__headline {
            grid-column: span 3;
            text-transform: uppercase;
            font-weight: 700;
          }

          &__submenu {
            margin-top: 10px;
            grid-column: span 3;
            text-transform: none;
            font-weight: 400;
            line-height: 2;
          }
        }
      }

      .navigation__contact {
        grid-column: 12/16;
        margin-top: 12px;

        .contact {
          &__headline {
            text-transform: uppercase;
            font-weight: 700;
          }
        }
      }
    }

    &__banner {
      grid-column: span 6;
      height: 200px;
      background-color: $grey;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 30px;

      p {
        color: $white;
        font-family: $head-font;
        text-transform: uppercase;
        font-size: 20pt;
        margin: 10px;
        text-align: center;
      }

      a {
        color: $white;
        padding: 20px;

        &:hover {
          color: $grey;
        }
      }
    }
  }
}
</style>