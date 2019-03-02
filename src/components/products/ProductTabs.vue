<template>
  <div class="product-container__tabs">
    <ul class="tabs__pagination">
      <li
        :class="{ active :tab.active}"
        @click="goToTab(tab)"
        v-for="tab in tabs"
        :key="tab.name"
      >{{ tab.name }}</li>
    </ul>
    <div class="tabs__content">
      <template v-if="activeTab == 'Description'">
        <h4>{{ product.description.heading }}</h4>
        <p>{{ product.description.body }}</p>
      </template>
      <template v-if="activeTab == 'Video'">
        <iframe
          id="ytplayer"
          type="text/html"
          width="640"
          height="360"
          :src="'https://www.youtube.com/embed/' + videoId"
          frameborder="0"
        ></iframe>
      </template>
      <template v-if="activeTab == 'Size & specs'">
        <h4>This product comes in a variety of sizes</h4>
        <p v-for="size in product.sizes" :key="size">{{ size }}</p>
      </template>
      <template v-if="activeTab == 'Delivery & returns'">
        <h4>Something about this products return and delivery terms</h4>
        <p>Sed ut mi mollis, consequat nulla lacinia, hendrerit turpis. Nulla sapien magna, interdum quis pretium nec, pharetra at felis. Curabitur dictum sapien est, eget ultricies turpis porta vel. Nam suscipit nec lacus sed imperdiet. Vestibulum a purus risus. Nulla et dictum augue, nec efficitur mi. Nam sit amet pretium elit. Aliquam congue, ligula id vehicula vestibulum, orci ex vulputate lacus, ac malesuada elit dolor eget ex. Sed quis aliquet risus, ut cursus lectus. In eget lorem tellus. Quisque eleifend varius nisi nec sagittis. Nulla ullamcorper imperdiet justo, ut venenatis purus lobortis ut. Nunc sagittis urna et hendrerit sodales. Nunc molestie risus nec fringilla lacinia. Nulla facilisi. Etiam neque velit, tristique eget sollicitudin eget, placerat at metus. Proin dictum lobortis velit, id suscipit orci faucibus ut. Aliquam erat volutpat. Vivamus feugiat justo in diam placerat, id dignissim elit auctor. Vestibulum scelerisque sem et lobortis ultricies. Morbi suscipit nulla urna. Suspendisse potenti. Nullam varius quam sed nisl dignissim, vel faucibus ipsum blandit. Vivamus at suscipit augue. Nam finibus gravida lorem eu viverra. Praesent rhoncus imperdiet ultricies. Nullam pretium cursus augue auctor vulputate. Quisque a convallis diam commodo eget diam id, eleifend dictum libero. Etiam varius, nisi vel dignissim sodales, enim dui posuere mauris, in aliquet lorem eros eget neque.</p>
      </template>
      <template v-if="activeTab == 'Reviews'">
        <ProductReviews :productId="product.id"/>
      </template>
    </div>
  </div>
</template>

<script>
import ProductReviews from "@/components/products/ProductReviews.vue";
export default {
  components: {
    ProductReviews
  },
  props: ["tabs", "product"],
  methods: {
    goToTab: function(tab) {
      let i;
      for (i = 0; i < this.tabs.length; i++) {
        this.tabs[i].active = false;
        if (this.tabs[i] == tab) {
          this.tabs[i].active = true;
        }
      }
    }
  },
  computed: {
    activeTab: function() {
      let array = this.tabs.filter(function(tab) {
        return tab.active == true;
      });
      return array[0].name;
    },
    videoId: function() {
      var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|=)([^#?]*).*/;
      var match = this.product.video.sourceLink.match(regExp);

      if (match && match[2].length == 11) {
        return match[2];
      } else {
        return "error";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/_vars.scss";
.product-container {
  &__tabs {
    grid-column: 1/13;

    .tabs {
      &__pagination {
        list-style: none;
        display: flex;
        padding-inline-start: 0px;
        background-color: $lightgrey;
        cursor: pointer;

        .active {
          background-color: $grey;
          color: $white;
        }

        li {
          padding: 15px 50px;
          color: $grey;
          font-family: $head-font;
          font-size: 10pt;
          font-weight: bold;
          text-transform: uppercase;

          &:hover {
            background-color: $grey;
            color: $white;
          }
        }
      }

      &__content {
        h4 {
          font-size: 10pt;
          line-height: 1.6;
        }

        p {
          font-size: 10pt;
          line-height: 1.6;
        }
      }
    }
  }
}
</style>