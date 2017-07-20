<template>
  <div class="ctabbar">
    <tabbar>
      <tabbar-item show-dot link="http://localhost:8080/#/" selected @on-item-click="test1">
        <img slot="icon" src="../assets/pic/home82.png" height="512" width="512">
        <span slot="label">全部</span>
      </tabbar-item>
      <tabbar-item show-dot link="http://localhost:8080/#/good" @on-item-click="test2">
        <img slot="icon" src="../assets/pic/star36.png" height="512" width="512">
        <span slot="label">精华</span>
      </tabbar-item>
      <tabbar-item  link="http://localhost:8080/#/share">
        <img slot="icon" src="../assets/pic/book115.png" height="512" width="512">
        <span slot="label">分享</span>
      </tabbar-item>
      <tabbar-item badge="3" link="http://localhost:8080/#/mypage">
        <img slot="icon" src="../assets/pic/male203.png" height="512" width="512">
        <span slot="label">个人</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  },
  methods: {
    test2() {
      this.$store.dispatch('getgoodnews')
      this.$store.dispatch('getArticleLists')
    },
    test1() {
      this.$store.dispatch('getallnews')
    }
  },
  data() {
    return {
      selected: null,
      index: 2
    }
  }
}   
</script>

<style>
 .ctabbar{
  position: fixed;
  bottom: 0;
  width: 100%;
 }   
</style>