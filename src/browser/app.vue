<style>
  body, html {
    width: 100%;
    height: 100%;
  }

  body {
    margin: 0 auto;
  }

  #app {
    background-color: #343C3F;
    display: flex;
    width: 100%;
    height: 100%;
  }
</style>

<template>
  <div id="app">
    <app-header></app-header>
  </div>
</template>

<script>
  import './styles/perkide.css';
  import appHeader from './components/header.vue';

  export default {
    name: 'app',
    components: {
      appHeader,
    },
  };
</script>