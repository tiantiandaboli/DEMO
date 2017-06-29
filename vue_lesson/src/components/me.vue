<template>
  <div id="me">
    <myname name1="jack"></myname>
    <myage age="18"></myage>
<!--动态prop-->
    <p>please input:<input v-model="sexin"></p>
    <mysex :mysex="sexin"></mysex>
  </div>
</template>

<script>
import age from './mymsg/myage.vue'
import name from './mymsg/myname.vue'
import sex from './mymsg/mysex.vue'
export default{
	data : function () {
		return {
			sexin :null
		}
	},
  components: {'myname': name, 'myage': age,'mysex': sex}
}
</script>
<style>
#me{
	display: flex;
	flex: 1;
	flex-direction: column;
	width: 300px;
}
#me p{
	display: flex;
	flex-direction: row;
}
</style>
