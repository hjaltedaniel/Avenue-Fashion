<template>
  <div>
    <HeadSection>
      <span slot="headline">
        Welcome
        <span class="light">to ave</span>
      </span>
      <span slot="byline">sign in or register</span>
    </HeadSection>
    <div class="content-section">
      <div class="content-section__column-1">
        <SignIn/>
      </div>
      <div class="content-section__column-2">
        <Register/>
      </div>
    </div>
  </div>
</template>

<script>
import HeadSection from "@/components/global/HeadSection.vue";
import SignIn from "@/components/user/SignIn.vue";
import Register from "@/components/user/Register.vue";
export default {
  components: {
    HeadSection,
    SignIn,
    Register
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/_vars.scss";
.content-section {
  max-width: $container-size;
  margin: 30px auto;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(12, 1fr);
  grid-row: auto;
  color: $grey;

  &__column-1 {
    grid-column: 1/7;
    padding-right: 30px;
    border-right: 1px solid $midlightgrey;
  }

  &__column-2 {
    grid-column: 7/13;
  }
}
</style>