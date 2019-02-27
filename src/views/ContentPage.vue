<template>
  <div v-if="content != 0">
    <h1>{{ content.name }}</h1>
    <h2>{{ content.byline }}</h2>
    <img v-bind:src="'@/assets/images/content/' + content.section1.picture">
  </div>
  <div v-else>
    <h1>404
      <br>
      No contentpage with id: {{ id }} is found!
    </h1>
  </div>
</template>

<script>
import ApiService from "@/services/ApiService.js";
export default {
  props: ["id"],
  data() {
    return {
      content: {}
    };
  },
  created() {
    ApiService.getContent(this.id)
      .then(response => {
        this.content = response.data;
      })
      .catch(error => {
        console.log("There was an error:" + error.response);
      });
  }
};
</script>

<style scoped>
</style>