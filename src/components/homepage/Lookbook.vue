<template>
  <div class="frontpage-lookbook">
    <div class="frontpage-lookbook__item">
      <img :src="require('@/assets/images/template/lookbook-men.png')">
      <div>
        <h2>Men's
          <br>
          <span class="light">lookbook</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet eras facilisis consectetur adipiscing elit lor, integer lorem consecteur
          dignissim laciniqui.Elementum metus facilisis ut phasellu.
        </p>
        <button>View now</button>
      </div>
    </div>
    <div class="frontpage-lookbook__item">
      <img :src="require('@/assets/images/template/lookbook-women.png')">
      <div>
        <h2>Women's
          <br>
          <span class="light">lookbook</span>
        </h2>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Pellentesque laoreet quis enim
          et mattis. Quisque interdum felis tellus.
        </p>
        <button>View now</button>
      </div>
    </div>
    <div class="frontpage-lookbook__item">
      <img :src="require('@/assets/images/template/you-lookbook.png')">
      <div>
        <h2>Your
          <br>
          <span class="light">lookbook</span>
        </h2>
        <p>
          See an item you like and click the
          <i class="far fa-heart"></i> button to add it to your lookbook where
          you
          can create your own perfect
          look. It’s like your own boutique!
        </p>
        <button>View now</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/scss/_vars.scss";
.frontpage-lookbook {
  display: grid;
  grid-gap: 0px;
  grid-template-columns: repeat(12, 1fr);
  grid-row: auto;
  text-align: right;
  color: $grey;
  margin-bottom: 50px;

  &__item {
    grid-column: span 4;
    background-color: $lightgrey;
    height: 400px;
    margin: 10px;
    padding: 10px 10px 0px 10px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-row: auto;

    h2 {
      text-transform: uppercase;
      font-size: 25pt;
      margin-top: 10px;
      font-weight: bold;
      margin-bottom: 10px;

      .light {
        font-weight: 400;
      }
    }

    div {
      align-self: center;
      margin-left: 30px;
      margin-right: 30px;
      grid-column: span 8;
    }

    p {
      font-size: 10pt;
      line-height: 1.6;
    }

    img {
      object-fit: cover;
      align-self: flex-end;
      height: 95%;
      grid-column: span 4;
    }

    button {
      color: $grey;
      font-family: $head-font;
      font-weight: 600;
      font-size: 9pt;
      text-transform: uppercase;
      letter-spacing: 2.5px;
      border: 1px solid $grey;
      padding-left: 15px;
      padding-right: 15px;
      height: 40px;

      &:hover {
        color: $white;
        background-color: $blue;
        border: none;
      }
    }
  }
}

@media (max-width: 1080px) {
  .frontpage-lookbook {
    &__item {
      height: 350px;
      h2 {
        font-size: 20pt;
      }
    }
  }
}

@media (max-width: 992px) {
  .frontpage-lookbook {
    &__item {
      grid-column: span 12;
      height: 400px;

      h2 {
        font-size: 25pt;
      }

      div {
        align-self: center;
        margin-left: 30px;
        margin-right: 30px;
        margin-top: 25px;
        grid-column: span 8;
      }

      img {
        grid-column: span 4;
      }
    }
  }
}

@media (max-width: 768px) {
  .frontpage-lookbook {
    &__item {
      grid-column: span 12;
      height: 400px;

      h2 {
        font-size: 25pt;
      }

      div {
        align-self: center;
        margin-left: 30px;
        margin-right: 30px;
        margin-top: 25px;
        grid-column: span 8;
      }

      img {
        grid-column: span 4;
      }
    }
  }
}
</style>