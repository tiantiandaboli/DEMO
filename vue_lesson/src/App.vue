<template>
  <div id="app">
    <lesson1></lesson1>
    <lesson2></lesson2>
    <lesson3></lesson3>
    <lesson4></lesson4>
    <me></me>
    <lesson5></lesson5>
    <lesson6></lesson6>
    <lesson7></lesson7>
    <lesson9></lesson9>
    <router-link to="/lesson10">Go To Lesson10</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import lesson1 from './components/lesson1.vue'
import lesson2 from './components/lesson2.vue'
import lesson3 from './components/lesson3.vue'
import lesson4 from './components/lesson4.vue'
import me from './components/me.vue'
import lesson5 from './components/lesson5.vue'
import lesson6 from './components/lesson6.vue'
import lesson7 from './components/lesson7.vue'
import lesson9 from './components/lesson9.vue'

export default {
  components: {
    lesson1,lesson2,lesson3,lesson4,me,lesson5,lesson6,lesson7,lesson9
  }
}

</script>

<style>
html{
  height: 100%;
}
body{
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
}
div{
  margin: 5px;
}
#app{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.finished{
  text-decoration: underline;
}
</style>
