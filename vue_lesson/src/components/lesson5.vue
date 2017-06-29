<template   inline-template>
	<div id="count">
		<p>{{total1}}</p>
<!--父组件中子组件标签内容默认不显示 需要在子组件中添加slot-->
		<lessonchild @increment="incrementTotal">
			<p slot="slot1">slot1</p>
			<p slot="slot2">slot2</p>
			<p>7</p>
		</lessonchild>
		<lessonchild @increment="incrementTotal"></lessonchild>
	</div>
</template>
<script>
import lessonchild from './lesson5/lessonchild.vue'
export default{
	data : function () {
		return {
			total1 : 0
		}
	},
	methods : {
		incrementTotal : function () {
			this.total1 += 1
		}
	},
	components: { lessonchild },
}
</script>
<style>
#count p{
	display: flex;
	flex-direction: row;
}	
</style>