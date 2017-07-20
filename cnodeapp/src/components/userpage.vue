<template>
	<div>
	  <div class="cheader">
	    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true" title="个人信息"></x-header>
	  </div>
	  <div id="userpage">
	  	<img :src="userpage.avatar_url"  class="userlogo">
	  	<p></p>
	  	<p>创建时间：{{ userpage.create_at.slice(0,10) }}&nbsp积分:{{userpage.score}}</p>
	  </div>
	  <div class="choosetopic">
	  	<p @click="getlist1">最近发帖</p>
	  	<p @click="getlist2">最近回复</p>
	  </div>
	  <div>
	  	<ul>
	  		<li v-for="item in replylist">
	  			<div class="recentlist">
	  				<router-link :to="{name:'Userpage',params:{loginname:item.author.loginname}}"><img :src="item.author.avatar_url"></router-link>
	  				<div class="recent25">
	  					<p>{{item.title}}</p>
	  					<p class="recentlist2"><span>{{item.author.loginname}}</span><span>{{ item.last_reply_at.slice(0,10) }}</span></p>
	  				</div>
	  			</div>
	  			<div class="grey"></div>
	  		</li>
	  	</ul>
	  </div>
	</div>  
</template>

<script>
import { XHeader, Actionsheet, TransferDom } from 'vux'
import axios from 'axios'
export default{
	data() {
		return {
			userpage: {
				avatar_url: '',
				create_at: '',
				score: 0
			},
			replylist: [],
		}
	},
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Actionsheet
  },
	methods:{
		getuserpage() {
			let url = `https://cnodejs.org/api/v1${this.$route.path}`
			axios.get(url).
			then( res => {
				this.userpage = res.data.data
				this.replylist = this.userpage.recent_topics
			})
		  .catch(function(err){
		  	console.log(err)
		  })
			//console.log(this.replylist)
		},
		getlist1() {
			this.replylist = this.userpage.recent_topics

		},
		getlist2() {
			this.replylist = this.userpage.recent_replies
		}
	},
	created(){
		this.getuserpage()
	},
	watch:{
		'$route' : 'getuserpage',
	}
}    
</script>

<style>
  #userpage{
  	margin-top: 48px;
  	text-align: center;
  	background-color: #CBC5C5;
  }  
  .userlogo{
  	width: 100px;
  	height: 100px;
  	border-radius: 50px;
  }
  .recentlist{
  	display: flex;
  	flex-direction: row;
  	font-size: 14px;
  }
  .recentlist2{
  	display: flex;
  	justify-content: space-between;
  }
  .recent25{
  	width: calc(100% - 70px);
  }
  .recentlist img{
  	width: 50px;
  	height: 50px;
  	border-radius: 25px;
  	margin-left: 10px;
  	margin-bottom: 20px;
  }
  .choosetopic{
  	display: flex;
  	justify-content: space-between;
  }
  .choosetopic p{
  	width: 49.8%;
  	text-align: center;
  	background-color: #D4D3D3;
  }
</style>