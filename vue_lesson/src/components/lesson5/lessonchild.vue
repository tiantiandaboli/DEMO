<template>
	<div>
<!--slot-->
  	<button @click="increment"><slot name='slot1'></slot>{{counter}}</button>
  	<slot name="slot2"></slot>
  </div> 
</template>

<script>
export default{
	data : function () {
		return {
			counter : 0
		}
	},
	methods : {
		increment : function () {
			this.counter += 1
			this.$emit('increment')
		}
	}
}    
</script>

<style>
    
</style>