<template>
	<div id="header">
		<el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
		  <el-menu-item index="1"><router-link :to="{name:'index'}">首页</router-link></el-menu-item>
      <el-menu-item index="2">新手入门</el-menu-item>
		  <el-menu-item index="3">API</el-menu-item>
		  <el-menu-item index="4">关于</el-menu-item>
		  <el-menu-item index="5">注册</el-menu-item>
		  <el-menu-item index="6">登录</el-menu-item>
		  <el-menu-item index="7"><el-input placeholder="请输入内容" v-model="input7"></el-input></el-menu-item>
		</el-menu>
	</div> 
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '3',
        activeIndex2: '1',
        input7: ''
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }  
</script>

<style>
 .logo{
 	background: url('../assets/logo.png')
 }  
</style>