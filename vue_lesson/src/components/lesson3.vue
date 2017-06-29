<template>
	<div>
		<div class="box" :class="{active: isActive,'text-danger': hasError}"></div>
		<div class="box" :style="styleObject"></div>
<!--if-->
		<div v-if="Math.random() > 0.5">
 		  Now you see me
		</div>
		<div v-else>
	  	Now you don't
		</div>
<!--for-->
		<ul>
<!--v-for 还支持一个可选的第二个参数为当前项的索引。-->
			<li v-for='(item ,index) in items'>{{item.message}}-{{index}}</li>
		</ul>
	</div>
</template>
<script>
export default{
	data : function () {
		return {
//style and CSS
			isActive: true,
			hasError: false,
			styleObject : {
				background : 'blue',
				borderRadius : '5px'
			},
			items:[
				{message: 'Foo'},
				{message: 'Bar'}
			]
		}
	}
}
</script>
<style>
	.box{
		display: flex;
		width: 100px;
		height: 50px;
		border: 1px solid grey;
	}
</style>