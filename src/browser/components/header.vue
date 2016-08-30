<style>
  .header {
    background-color: #3E474C;
    height: 35px;
    width: 100%;
  }
</style>

<template>
  <header class="header">
    <button class="btn">
      <span class="icon-control-drag"></span>
    </button>
  </header>
</template>

<script>
  import '../styles/ui.css';

  export default {
    name: 'header',
    vuex: {
      getters: {
      },
      actions: {
      },
    },
    data() {
      return {};
    },
    methods: {
    },
  };
</script>