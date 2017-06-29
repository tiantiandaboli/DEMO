<template>
	<div id="list-complete-demo" class="demo">
	  <button v-on:click="shuffle">Shuffle</button>
	  <button v-on:click="add">Add</button>
	  <button v-on:click="remove">Remove</button>
	  <transition-group name="list" tag="p">
	    <span
	      v-for="item in items"
	      v-bind:key="item"
	      class="list-item"
	    >
	      {{ item }}
	    </span>
	  </transition-group>
<!--render函数-->
	  <lesson8  :level="1">hello</lesson8>
	  <lesson8  :level="2">hello</lesson8>
	</div>  
</template>

<script>
import lesson8 from './lesson8.vue'
export default{
	data : function () {
		return {
			items:[1,2,3,4,5,6,7,8,9],
			nextNum: 10,
			level: {
				type: Number,
				required: true
			}
		}
	},
  methods: {
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length)
    },
    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove: function () {
      this.items.splice(this.randomIndex(), 1)
    },
    shuffle: function () {
      this.items = _.shuffle(this.items)
    }
  },
  components: {lesson8}
}    
</script>


<style>
#list-complete-demo{
	width: 300px;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-active {
  opacity: 0;
  transform: translateY(30px);
}
/********move-class属性定位过渡***************************/
.list-move{
	transition: transform 1s;
}
.list-leave-active{
	position: absolute;
}
</style>