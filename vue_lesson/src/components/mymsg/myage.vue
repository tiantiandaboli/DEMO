<style>
  #myage{color:red}
</style>

<template id="age">
  <div id="myage">
  	<p>我的age是{{age}}</p>
  	<p>{{ageup}}</p>
  </div>
</template>

<script>
export default{
  props: ['age'],
//单向数据流 组件内处理
  computed: {
  	ageup :function () {
  		return this.age.split('').reverse().join('')
  	}
  }
}
</script>
