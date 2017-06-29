<template>
	<div id="lesson8">
		<input type="text" v-model="myinput" v-focus>
		<p>my words is{{myinput}}</p>
		<p v-demo:hello.a.b="message"></p>
	</div>
</template>

<script>
export default{
	data : function () {
		return {
			myinput : null,
			message : "world"
		}
	},
/******自定义指令***************/
	directives: {
		focus: function (val) {
			val.value = 'hello'
		},
  	demo: {
/********hook function********/
  		bind: function (el, binding, vnode) {
		    var s = JSON.stringify
		    el.innerHTML =
		      'name: '       + s(binding.name) + '<br>' +
		      'value: '      + s(binding.value) + '<br>' +
		      'expression: ' + s(binding.expression) + '<br>' +
		      'argument: '   + s(binding.arg) + '<br>' +
		      'modifiers: '  + s(binding.modifiers) + '<br>' +
		      'vnode keys: ' + Object.keys(vnode).join(', ')
		  }
	  }
	}
}    
</script>

<style>
#lesson8{
	width: 200px;
}    
</style>