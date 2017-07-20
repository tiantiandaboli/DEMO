<template>
	<div>
	  <div class="cheader">
	    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true" title="精华"></x-header>
	  </div>
		<div id="good" onscroll="scrollMethod()">
				<ul>
			  <li v-for="item in getArticleLists">
			  	<router-link :to="{name:'Article',params:{id:item.id}}">
			  		<p class="newstitle">{{item.title}}</p>
			  		<div class="newsmain">
			  			<img :src="item.author.avatar_url" class="newsauthor">
			  			<div class="newsline">
			  				<p><span>{{item.author.loginname}}</span><span>{{item.reply_count}}/{{item.visit_count}}</span></p>
			  				<p><span>{{item.create_at.slice(0,-14)}}</span><span>{{item.last_reply_at.slice(0,-14)}}</span></p>
			  			</div>
			  		</div>
			  		<div class="grey"></div>
			  	</router-link>
			  </li>
				</ul>
		</div>
	</div> 
</template>

<script>
import { XHeader, Actionsheet, TransferDom } from 'vux'

export default{
	computed: {
		getArticleLists() {
			return this.$store.getters.getArticleLists
		}
	},
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Actionsheet
  },
	methods: {
	  scrollMethod() {
	    const sumH = document.body.scrollHeight;
	    const viewH = document.documentElement.clientHeight;
	    const scrollH = document.body.scrollTop;
	    if (viewH + scrollH === sumH) {
	    		this.$store.dispatch('addArticleNumber')
	        this.getdata()
	    }
    },
	}
}    
</script>

<style>
 #good{
		margin: 45px 2px 50px 2px;
 }   
</style>