<style>
  .header {
    background-color: #3E474C;
    height: 30px;
    width: 100%;
  }
</style>

<template>
  <header class="header">
    <div class="btn-group">
      <button class="btn">
        <span class="icon-control-drag"></span>
      </button>
      <button class="btn">
        <span class="icon-control-move"></span>
      </button>
      <button class="btn">
        <span class="icon-control-rotate"></span>
      </button>
      <button class="btn">
        <span class="icon-control-zoom"></span>
      </button>
    </div>
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