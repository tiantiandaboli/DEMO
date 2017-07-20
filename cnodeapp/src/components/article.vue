<template>
  <div>
    <div class="cheader">
      <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true" >{{$store.state.articlepage.title}}</x-header>
    </div>
  	<h3>{{$store.state.articlepage.title}}</h3>
  	<div class="artmain">
  		<router-link :to="{name:'Userpage',params:{loginname:$store.state.articlepage.author.loginname}}"><img :src="$store.state.articlepage.author.avatar_url" class="author"></router-link>
  		<div class="art55">
  			<p>{{$store.state.articlepage.author.loginname}}</p>
  			<div class="artline">
  				<div>{{$store.state.articlepage.create_at.slice(0,-14)}}</div>
  				<div>{{$store.state.articlepage.visit_count}}次浏览</div>
  			</div>
  		</div>
  	</div>
  	<div v-html="$store.state.articlepage.content" class="article22"></div>
    <div>
      <ul>
        <li v-for="item in $store.state.articlepage.replies">
          <div class="reply_line">
              <p><router-link :to="{name:'Userpage',params:{loginname:item.author.loginname}}"><img :src="item.author.avatar_url" class="author"></router-link>{{item.author.loginname}}发布于：{{item.create_at.slice(0,-14)}}</p>
              <p>{{item.ups.length}}赞</p>
          </div>
          <div v-html="item.content" class="reply_line2"></div>
          <div class="grey"></div>
        </li>
      </ul>
    </div>
  </div>  
</template>

<script>
import { XHeader, Actionsheet, TransferDom } from 'vux'

export default{
	created() {
		this.getnewpage()
	},
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Actionsheet
  },
	methods: {
		getnewpage() {
			let url = `https://cnodejs.org/api/v1${this.$route.path}`
			console.log(url)
			this.$store.dispatch('getArticlepage',url)
		}
	}	
}    
</script>

<style>
  h3{
  	margin: 50px 5px 10px 5px;
  	text-align: center;
  }  
  .author{
  	width: 40px;
  	height: 40px;
  	border-radius: 20px;
  	margin-left: 10px;
  }
  .artmain{
  	display: flex;
  	flex-direction: row;
  	font-size: 13px;
  }
  .art55{
  	width: calc(100% - 70px)
  }
  .artline{
  	display: flex;
  	flex-direction: row;
  	justify-content: space-between;
  }
  .article22{
  	margin: 10px;
  }
  .article22 img {
  	width: 100%;
  }
  .reply_line{
    display: flex;
    flex-direction: row;
    font-size: 12px;
    justify-content: space-between;
    margin: 10px;
  }
  .reply_line2{
    margin: 10px 0 10px 20px ;
  }
</style>