<template>
	<div>
		<p>{{rev}}</p>
		<span>time:{{ reve() }}</span>
		<p>hhh:{{ b }}</p>
		<input type="text" v-model="a">
		<input type="text" v-model="firstName">
    <input type="text" v-model="lastName">
    <input type="text" v-model="fullName">
	</div>
</template>
<script>
export default{
	data : function () {
		return {
			msg : 'hello!',
			a : 'tt',
			b : 0,
			firstName: 'Foo',
      lastName: 'Bar',
    	fullName: 'Foo Bar'
		}
	},
//计算属性
	computed : {
		rev: function() {
			return this.msg.split('').reverse().join('')
		}
	},
//methods需要调用 加括号
	methods: {
	  reve: function () {
	    return Date.now()
	  }
	},
//提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：watch 属性
	watch :{
		a: function(val) {
			this.b = val + this.msg
		},
		firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
	}
}
</script>
<style>
	input{
		display: flex;
		flex-direction: column;
		margin: 5px;
	}
</style>