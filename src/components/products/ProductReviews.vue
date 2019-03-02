<template>
  <div class="review-container">
    <div class="review-container__single-review" v-for="review in reviews" :key="review.id">
      <div class="head-section">
        <span class="name">{{ review.name }}</span>
        <span class="stars">
          <i v-for="n in review.stars" :key="n" class="fas fa-star yellow-star"></i>
          <i v-for="n in blackStars(review.stars)" :key="n" class="fas fa-star grey-star"></i>
        </span>
      </div>
      <p>{{ review.review }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["productId"],
  data() {
    return {
      reviews: [
        {
          id: 1,
          name: "Hjalte Daniel Hansen",
          stars: 4,
          review:
            "Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum."
        },
        {
          id: 2,
          name: "Joachim Allouche",
          stars: 3,
          review:
            "Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum."
        },
        {
          id: 3,
          name: "Andreas Bartelsen",
          stars: 5,
          review:
            "Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum."
        },
        {
          id: 4,
          name: "Sammi Nielsen",
          stars: 2,
          review:
            "Donec sem lorem laoreet tempor un risus vitae, rutrum sodales nibh suspendisse est congue metus nunc, id viverra elit loreti rhoncus quis consecteur es. Donec pulvinar tempor lorem a pretium justo interdum."
        }
      ]
    };
  },
  methods: {
    blackStars: function(stars) {
      return 5 - stars;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/_vars.scss";
.review-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  justify-content: space-between;

  &__single-review {
    grid-column: span 6;
    margin-bottom: 10px;
    margin-right: 10px;
    border: 1px solid $midlightgrey;
    padding: 10px;

    .head-section {
      display: flex;
      justify-content: space-between;

      .name {
        font-size: 10pt;
        line-height: 1.6;
        font-family: $head-font;
        font-weight: bold;
      }

      span {
        .yellow-star {
          color: #ded3aa;
        }

        .grey-star {
          color: #dfdfde;
        }
      }
    }

    p {
      font-size: 10pt;
      line-height: 1.6;
    }
  }
}
</style>