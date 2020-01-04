<template>
  <div class="home">
    <div class="collections">
      <router-link
        :to="{ name: 'game', params: { images } }"
        class="collection"
      >
        <img
          class="collection-img"
          src="https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
        />
        <h3 class="collection-title">ANIMALS</h3>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data: function() {
    return {
      images: []
    };
  },
  mounted() {
    this.$http
      .get(
        "https://api.unsplash.com/collections/9321487/photos?client_id=d8088d5229a11ad079d7db3f733cf38d4ea221d037ff95a09371e311304de25a&per_page=50"
      )
      .then(response => {
        console.log(response.data);
        console.log(screen.width);

        response.data.forEach(element => {
          this.images.push(`${element.urls.raw}?w=${screen.width}&h=500&q=80`);
        });
      });
  }
};
</script>

<style scoped>
.collection {
  position: relative;
  display: block;
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
