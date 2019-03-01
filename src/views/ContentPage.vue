<template>
  <div v-if="isEmpty(content)">
    <HeadSection>
      <span slot="headline">{{ content.name }}</span>
      <span slot="byline">{{ content.byline }}</span>
    </HeadSection>
    <div class="content-section">
      <div class="content-section__column-1">
        <img width="100%" :src="require('@/assets/images/content/' + content.section1.picture)">
        <img width="100%" :src="require('@/assets/images/content/' + content.section3.picture)">
        <div>
          <h3>{{ content.section3.headline }}</h3>
          <h4>{{ content.section3.subdivision }}</h4>
          <p>{{ content.section3.body }}</p>
        </div>
      </div>
      <div class="content-section__column-2">
        <div>
          <h3>{{ content.section1.headline }}</h3>
          <h4>{{ content.section1.subdivision }}</h4>
          <p>{{ content.section1.body }}</p>
        </div>
        <img width="100%" :src="require('@/assets/images/content/' + content.section2.picture)">
        <div>
          <h3>{{ content.section2.headline }}</h3>
          <h4>{{ content.section2.subdivision }}</h4>
          <p>{{ content.section2.body }}</p>
        </div>
        <span v-if="content.rewards.hasRewards">
          <img
            v-for="reward in content.rewards.rewards"
            :key="reward"
            width="100%"
            :src="require('@/assets/images/content/' + reward)"
          >
        </span>
      </div>
    </div>
  </div>
  <div v-else>
    <h1>No contentpage with id: {{ id }} is found!</h1>
  </div>
</template>

<script>
import ApiService from "@/services/ApiService.js";
import HeadSection from "@/components/HeadSection.vue";
export default {
  props: ["id"],
  components: {
    HeadSection
  },
  data() {
    return {
      content: {}
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    // call again the method if the route changes
    $route: "fetchData"
  },
  methods: {
    fetchData: function() {
      this.content = [];
      ApiService.getContent(this.id)
        .then(response => {
          this.content = response.data;
        })
        .catch(error => {
          console.log("There was an error:" + error.response);
        });
    },
    isEmpty: function(obj) {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) return true;
      }
      return false;
    }
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

  img {
    margin-bottom: 30px;
  }

  h3 {
    font-size: 10pt;
    text-transform: uppercase;
  }

  h4 {
    font-size: 7.7pt;
    text-transform: uppercase;
    margin-top: 0px;
  }

  p {
    font-size: 10pt;
    line-height: 1.6;
    margin-bottom: 30px;
  }

  &__column-1 {
    grid-column: 1/7;
  }

  &__column-2 {
    grid-column: 7/13;

    span {
      display: grid;
      grid-gap: 30px;
      grid-template-columns: repeat(12, 1fr);
      grid-row: auto;

      img {
        grid-column: span 4;
      }
    }
  }
}
</style>