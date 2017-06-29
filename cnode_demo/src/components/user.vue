<template>
   <div id="user">
			<el-row :gutter="20">
			  <el-col :span="20">
			  	<div class="grid-content bg-purple">
			  		<p class="usertitle">主页</p>
			  		<div class="grey"></div>
			  		<div class="usermes">
			  			<p><img :src="message.avatar_url"><span>{{message.loginname}}</span></p>
			  			<p>{{message.score}}积分</p>
			  			<p>创建时间:{{time}}</p>
			  		</div>		
			  	</div>
			  </el-col>
			  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
			</el-row> 
			<el-row :gutter="20">
			  <el-col :span="20">
			  	<div class="grid-content bg-purple">
			  		<p class="usertitle">最近创建的话题</p>
			  		<div class="grey"></div>
			  		<ul>
			  			<li v-for="item in topicmsg" class="topicmsg"><img :src="message.avatar_url"><router-link :to="{name:'ArticleRoute',params:{id:item.id}}">{{item.title}}</router-link><div class="grey"></div></li>
			  		</ul>
			  	</div>
			  </el-col>
			</el-row>
			<el-row :gutter="20">
			  <el-col :span="20">
			  	<div class="grid-content bg-purple">
			  		<p class="usertitle">最近参与的话题</p>
			  		<div class="grey"></div>
			  		<ul>
			  			<li v-for="item in replymsg" class="topicmsg"><router-link :to="{name:'Userpage',params:{loginname:item.author.loginname}}"><img :src="item.author.avatar_url"></router-link><router-link :to="{name:'ArticleRoute',params:{id:item.id}}">{{item.title}}</router-link><div class="grey"></div></li>
			  		</ul>
			  	</div>
			  </el-col>
			</el-row>				
   </div>
</template>

<script>
export default{
	data: function () {
		return {
			message: [],
			time: null,
			topicmsg: [],
			replymsg: []
		}
	},
/*添加路由监听 路由改变是重新加载*/
	watch:{
		'$route': 'getuser'
	},
	mounted() {
		this.getuser()
	},
	methods: {
		getuser: function() {
			//console.log(this.$route.params.loginname)
			this.$http({
				url: 'https://cnodejs.org/api/v1/user/' + this.$route.params.loginname,
				method: 'GET',
				params: {},
        headers: {
    			'Content-Type': 'x-www-from-urlencoded'
        }
			}).then(function(res) {
				this.message = res.data.data
				this.time = this.message.create_at.slice(0,-14)
				this.topicmsg = res.data.data.recent_topics
				this.replymsg = this.message.recent_replies
				console.log()
			},function() {
        console.log("error")
			})
		}
	}
}    
</script>

<style>
#user{
	margin: 10px 200px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}  
.usertitle{
	height: 50px;
	line-height: 50px;
	margin-left: 20px;
	color: grey;
} 
.usermes{
	display: flex;
	align-items: flex-start;
	color: grey;
	font-size: 14px;
}
.usermes p:nth-child(1){
	display: flex;
	align-items: flex-start;
}
.usermes p{	
	margin: 20px;
}
.topicmsg {
	list-style-type: none;
	margin-left: 10px;	
}
.topicmsg img{
	width: 30px;
	height: 30px;
	margin-right: 10px;
}
.topicmsg a {
	color: black;

}
</style>