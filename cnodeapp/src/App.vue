<template>
  <div id="app">
    <router-view></router-view>
    <loading v-model="isLoading"></loading>
    <ctabbar></ctabbar>
  </div>
</template>

<script>
import ctabbar from './components/tabbar.vue'
import { Loading } from 'vux'

export default {
	components: {
		ctabbar,Loading
	},
  computed: {
    isLoading(){
      return this.$store.state.isloading
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
<style>
	body{
		height: 100%;
	}
	.cheader{
    position: fixed;
    z-index: 1;
    top: 0;
    width: 100%;
  }  
</style>
