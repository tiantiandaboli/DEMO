<template>
	<div id="border">
		<ul>
			<li><a href="#" @click="toggleTabs(tab01Text)">{{tab01Text}}</a></li>
			<li><a href="#" @click="toggleTabs(tab02Text)">{{tab02Text}}</a></li>
			<li><a href="#" @click="toggleTabs(tab03Text)">{{tab03Text}}</a></li>
		</ul>
<!--动态组件-->
		<keep-alive>
<!--transition过渡效果--过渡模式 in-out 或者out-in-->
		  <transition name="fade" mode="out-in">
			  <component  :is="currentView" age='19'></component>
			</transition>
		</keep-alive>
	</div>
</template>

<script>
import age from './mymsg/myage.vue'
import name from './mymsg/myname.vue'
import sex from './mymsg/mysex.vue'
export default{
	data : function() {
		return {
			tab01Text: 'myage',
			tab02Text: 'myname',
			tab03Text: 'mysex',
			currentView: 'myage',
		}
	},
	components: {'myname': name, 'myage': age,'mysex': sex},
	methods: {
		toggleTabs: function(tabText) {
			this.currentView = tabText;
		}
	},
	computed: {
	  buttonMessage: function (docState) {
	  	console.log('+++++++++++++')
	    switch (docState) {
	      case 'saved': return 'Edit'
	      case 'edited': return 'Save'
	      case 'editing': return 'Cancel'
	    }
	  }
	}
}    
</script>

<style>
 #border ul li{
 	list-style-type: none;
 	width: 100px;
 }
 #border{
 	width: 300px;
 }
 #border ul{
 	display: flex;
 	flex-direction: row;
 } 
 /************CSS过渡类名

组件过渡过程中，会有四个CSS类名进行切换，这四个类名与上面transition的name属性有关，比如name="fade"，会有如下四个CSS类名：

fade-enter：进入过渡的开始状态，元素被插入时生效，只应用一帧后立即删除；

fade-enter-active：进入过渡的结束状态，元素被插入时就生效，在过渡过程完成之后移除；

fade-leave：离开过渡的开始状态，元素被删除时触发，只应用一帧后立即删除；

fade-leave-active：离开过渡的结束状态，元素被删除时生效，离开过渡完成之后被删除；***************/  
.fade-enter-active{
  transition: opacity 1s
}
.fade-leave-active{
	transition: opacity .1s
}
.fade-enter, .fade-leave-to  /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>