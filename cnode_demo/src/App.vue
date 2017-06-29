<template>
  <div id="app">
    <cnodeheader></cnodeheader>
    <router-view name='main'></router-view>
  </div>
</template>

<script>
import cnodeheader from './components/header.vue'
export default {
  components: {
    cnodeheader
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  font-family: "微软雅黑";
}
a{
  text-decoration: none;
  color: lightblue;
}
.grey{
  width: 98%;
  height: 1px;
  background-color: grey;
  margin: 0 auto;
}
</style>
