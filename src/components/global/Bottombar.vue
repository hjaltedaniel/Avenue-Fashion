<template>
  <div class="bottom-bar">
    <div class="bottom-container">
      <div class="bottom-container__copyright">
        <span>&copy; 2016 Avenue Fashion&trade;</span>
      </div>
      <div class="bottom-container__misc">
        <span>Design by RobbyDesigns.com</span>
        <span>Dev by hjaltedaniel</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/scss/_vars.scss";
.bottom-bar {
  background-color: $grey;
  color: $midgrey;
  font-family: $body-font;
  font-weight: 700;
  font-size: 10pt;

  .bottom-container {
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(12, 1fr);
    max-width: $container-size;
    margin: auto;
    padding-top: 15px;
    padding-bottom: 15px;

    &__copyright {
      grid-column: 1/3;
    }

    &__misc {
      grid-column: 9/13;
      display: flex;
      justify-content: space-between;
    }
  }
}
@media (max-width: 768px) {
  .bottom-bar {
    .bottom-container {
      &__copyright {
        grid-column: span 12;
        text-align: center;
      }

      &__misc {
        grid-column: span 12;
        display: flex;
        justify-content: space-around;
      }
    }
  }
}
</style>