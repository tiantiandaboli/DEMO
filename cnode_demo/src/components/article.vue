<style>
#article{
	margin: 10px 200px;

}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 1600px;
}
.grid-content1 {
  border-radius: 4px;
  min-height: 160px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
} 
.art_main{
	display: flex;
	flex-direction: column;
} 
.art_main h2{
	margin: 20px;
}
.art_main p{
	margin: 0 0 5px 20px ; 
	color: grey;
}
.art_news{
	margin: 20px;
}
.art_news p{
	margin: 10px;
}
#content{
	margin: 20px;
}
#content *{
	margin: 10px;
}
#content img{
	max-width: 100%;
  max-height: 100%;
}
.reply_pic{
	width: 30px;
	height: 30px;
}
.reply ul li{
	list-style-type: none;
	margin: 20px;
	display: flex;
	flex-direction: column;
}

.reply_num{
	padding: 10px;
	background-color: lightgray;
}
.reply_main{
	display: flex;
	flex-direction: row;
	margin-left: 10px;
}
.reply_time{
	font-size: 12px;
	color: grey;
}
.reply22{
	margin-left: 20px;
	flex-direction: column;
}
.reply22 img{
	width: 10px;
	height: 10px;
}
.rightmsg{
	display: flex;
	flex-direction: column;
}
.rightmsg p{
	margin: 20px 0 0 20px;
	font-size: 18px;
	color: grey;
}
.rightmsg img{
	width: 50px;
	height: 50px;
}
</style>
<template>
   <div id="article">
   	<el-row :gutter="20">
		  <el-col :span="20">
		  	<div class="grid-content bg-purple">
		  		<div class="art_main">
		  			<h2>{{news.title}}</h2>
		  			<p>发布于:{{art_time}}·作者:{{loginname}}&nbsp&nbsp&nbsp{{news.visit_count}}次浏览</p>
		  		</div>
		  		<div class="grey"></div>
		  		<div v-html='news.content' id='content'></div>
		  		<div class="grey"></div>
		  		<div class="reply">
		  			<p class="reply_num">{{news.reply_count}}回复</p>
		  			<div class="grey"></div>
		  			<ul>
		  				<li v-for="(item, index ) in reply">
		  					<div class="reply_main">	
		  				    <img :src="item.author.avatar_url" class="reply_pic">	
		  				    <div class="reply22">			
			  						<p class="reply_time">{{item.author.loginname}}*{{index+1}}楼*{{item.create_at.slice(0,-14)}}&nbsp&nbsp&nbsp<span>{{item.ups.length}}赞</span></p>
			  						<div v-html="item.content"></div>
			  					</div>
			  				</div>
		  					<div class="grey" style="margin-top:10px;"></div>
		  				</li>
		  			</ul>
		  		</div>
		  	</div>
		  </el-col>
		  <el-col :span="4">
		  	<div class="grid-content bg-purple rightmsg">
		  		<p>作者</p>
		  		<p><router-link :to="{name:'Userpage',params:{loginname:news.author.loginname}}"><img :src="news.author.avatar_url"><span>&nbsp&nbsp{{news.author.loginname}}</span></router-link></p>
		  	</div>
		  </el-col>
		</el-row>
   </div> 
</template>

<script>
export default {
  data() {
    return {
      news: [],
      content: [],
      art_time: null,
      loginname: null,
      reply: []
    }
  },
  mounted() {
    this.getnewlist()
  },
  methods: {
    getnewlist: function () {
    	console.log(this.$route.params.id)
      this.$http({
          url: 'https://cnodejs.org/api/v1/topic/' + this.$route.params.id,
          method: 'GET',
          // 请求体重发送的数据
          params: {
            mdrender: true
          },
          // 设置请求头
          headers: {
              'Content-Type': 'x-www-from-urlencoded'
          }
      }).then(function (res) {
          this.news = res.data.data
          console.log(this.news)
          this.art_time = this.news.create_at.slice(0,-14)
          this.loginname = this.news.author.loginname
          this.reply = this.news.replies
      }, function () {
          // 请求失败回调
          console.log("error")
      });
    }
  }
}    
</script>

