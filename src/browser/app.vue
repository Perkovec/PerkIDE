<style>
  #app {
    width: 100px;
  }
</style>

<template>
  <div id="app">
    <app-header></app-header>
  </div>
</template>

<script>
  import appHeader from './components/header.vue';

  export default {
    name: 'app',
    components: {
      appHeader,
    },
  };
</script>