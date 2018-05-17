<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
  @import "../node_modules/ag-grid/dist/styles/ag-grid.css";
  @import "../node_modules/ag-grid/dist/styles/ag-theme-balham.css";
</style>
