<template>
  <div v-if="isEmpty(content)">
    <h1>{{ content.name }}</h1>
    <h2>{{ content.byline }}</h2>
    <img :src="require('@/assets/images/content/' + content.section1.picture)">
  </div>
  <div v-else>
    <h1>No contentpage with id: {{ id }} is found!</h1>
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

<style scoped>
</style>