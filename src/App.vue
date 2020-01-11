<template>
  <router-view></router-view>
</template>

<script>
export default {
  mounted() {
    console.log('app started');
  },
  methods: {}
};
</script>

<style>
:root {
  --color-bg: #f8f9fa;
}

* {
  margin: 0;
  padding: 0;
}

body {
  background: var(--color-bg);
}
</style>
