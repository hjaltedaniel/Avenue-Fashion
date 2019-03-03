<template>
  <div class="header-section">
    <h1 class="header-section__headline" slot name="headline">
      <slot name="headline"></slot>
    </h1>
    <h2 class="header-section__byline">
      <slot name="byline"></slot>
    </h2>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/scss/_vars.scss";
.header-section {
  background-image: url(~@/assets/images/template/header.png);
  background-size: cover;
  background-position: center;
  text-transform: uppercase;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 450px;

  &__headline {
    color: $white;
  }

  &__byline {
    color: $white;

    .active {
      color: $blue;
    }
  }
}

@media (max-width: 768px) {
  .header-section {
    height: 225px;
  }
}
</style>