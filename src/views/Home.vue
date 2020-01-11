<template>
  <div class="home">
    <div class="collections">
      <button
        v-for="(collection, index) in collections"
        :key="collection.id"
        @click="onStartGame(index)"
        class="collection"
      >
        <img class="collection-img" :src="collection.image" />
        <h3 class="collection-title">{{ collection.title }}</h3>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data: function() {
    return {
      collections: [
        {
          id: "9321487",
          image: `https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=${screen.width}&fit=max&ixid=eyJhcHBfaWQiOjEwOTExNH0`,
          title: "ANIMALS"
        },
        {
          id: "9325919",
          image: `https://images.unsplash.com/photo-1543528176-61b239494933?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=${screen.width}&fit=max&ixid=eyJhcHBfaWQiOjEwOTExNH0`,
          title: "FOOD"
        },
        {
          id: "9359868",
          image: `https://images.unsplash.com/photo-1564379976409-79bd0786fff1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=${screen.width}&fit=max&ixid=eyJhcHBfaWQiOjEwOTExNH0`,
          title: "CLOTHES"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    onStartGame(index) {
      this.$http
        .get(
          `https://api.unsplash.com/collections/${this.collections[index].id}/photos?client_id=d8088d5229a11ad079d7db3f733cf38d4ea221d037ff95a09371e311304de25a&per_page=50`
        )
        .then(response => {
          let images = [];

          response.data.forEach(element => {
            images.push(
              `${element.urls.raw}&w=${screen.width}&h=${(screen.height * 7) /
                10}&fit=crop&crop=focalpoint&q=80`
            );
          });

          this.$router.push({ name: "game", params: { images } });
        });
    }
  }
};
</script>

<style scoped>
.collections {
  max-width: 100vw;
}

.collection {
  position: relative;
  background: transparent;
  border: none;
}

.collection-img {
  filter: brightness(0.5);
}

.collection-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 1.5rem;
}
</style>
