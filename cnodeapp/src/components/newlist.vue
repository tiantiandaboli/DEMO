<template>
	<div>
  	<div class="cheader">
    	<x-header :left-options="{showBack: false}">全部</x-header>
    </div>
	  <div id="newlist" onscroll="scrollMethod()">
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
import axios from 'axios'
import { XHeader, Actionsheet, TransferDom } from 'vux'
export default{
  data() {
    return {

    }
  },
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Actionsheet
  },
	mounted() {
		window.addEventListener('scroll', this.scrollMethod)
	},
	computed: {
		getArticleLists() {
			return this.$store.getters.getArticleLists
		}
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
    getdata() {
    	this.$store.dispatch('getArticleLists')
    },
	},
	created() {
		this.getdata()
	}
	
}    
</script>

<style>
	body{
		height: 100%;
	}
	#newlist{
		margin: 45px 2px 50px 2px;
		overflow: scroll;
		z-index: -1;
	} 
	#newlist ul li{
		display: flex;
		flex-direction: column;
	}

</style>