<template>
  <div>
    <div class="game">
      <button @click="onBack">
        <font-awesome-icon icon="arrow-circle-left" class="back" />
      </button>

      <img v-if="index !== images.length" :src="images[index]" />

      <div v-if="index !== images.length" class="buttons">
        <button @click="onAnswer(false)">
          <font-awesome-icon icon="thumbs-down" class="wrong" />
        </button>
        <button @click="onAnswer(true)">
          <font-awesome-icon icon="thumbs-up" class="right" />
        </button>
      </div>
    </div>

    <div v-if="index === images.length" class="result">{{ rightAnswers }} / {{ images.length }}</div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      index: 0,
      rightAnswers: 0
    };
  },
  props: ["images"],
  mounted() {},
  methods: {
    onAnswer(result) {
      this.rightAnswers += result ? 1 : 0;
      this.index++;
    },
    onBack() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style scoped>
.game {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background: var(--color-bg);
}

.buttons {
  display: flex;
  justify-content: space-evenly;
}

.buttons button {
  width: 50vw;
  font-size: 2rem;
}

.buttons button:nth-of-type(1) {
  background: #dc3545;
}

.buttons button:nth-of-type(2) {
  background: #28a745;
}

button {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 1rem;
  font-size: 3.5rem;
}

button:first-of-type {
  align-self: flex-start;
}

button:focus {
  outline: none;
}

.right {
  color: #fff;
}

.wrong {
  color: #fff;
}

.back {
  color: #007bff;
}

img {
  width: 100vw;
  max-height: 70vh;
}

.result {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3.5rem;
}
</style>
