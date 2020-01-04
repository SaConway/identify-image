<template>
  <div>
    <div class="game">
      <button @click="onBack">
        <font-awesome-icon icon="arrow-circle-left" class="back" />
      </button>

      <img v-if="index !== images.length" :src="images[index]" />

      <div v-if="index !== images.length" class="buttons">
        <button @click="onAnswer(false)">
          <font-awesome-icon icon="times-circle" class="wrong" />
        </button>
        <button @click="onAnswer(true)">
          <font-awesome-icon icon="check-circle" class="right" />
        </button>
      </div>
    </div>

    <div v-if="index === images.length" class="result">
      {{ rightAnswers }} / {{ images.length }}
    </div>
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
  color: #28a745;
}

.wrong {
  color: #dc3545;
}

.back {
  color: #007bff;
}

img {
  width: 100vw;
  max-height: 60vh;
}

.result {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3.5rem;
}
</style>
