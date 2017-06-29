<template>
		<div id="news">
			<el-row :gutter="20">
        <el-col :span="20"><div class="grid-content bg-purple">
          <div class="newsheader">
            <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="getnewtab">
              <el-menu-item index="all">全部</el-menu-item>
              <el-menu-item index="good">精华</el-menu-item>
            </el-menu>
            <div class="newslist">
              <ul>
                <li v-for="item in news">
                  <div>
                    <router-link :to="{name:'Userpage',params:{loginname:item.author.loginname}}" class="user"><img :src='item.author.avatar_url'></router-link>
                    <span>{{item.reply_count}}/{{item.visit_count}}</span>
                    <router-link :to="{name:'ArticleRoute',params:{id:item.id}}" class="newstitle">{{item.title}}</router-link>
                    <div class="newstime">{{item.create_at.slice(0,-14)}}</div>
                  </div>
                  <div class="grey"></div>
                </li>
              </ul>
            </div>
            <div class="block">
              <el-pagination layout="prev, pager, next" :total="1000"  @current-change="getnewlist">
              </el-pagination>
            </div>
          </div>
        </div></el-col>
        <el-col :span="4">
          <div class="grid-content1 bg-purple zl">
              <p>cnode.js重构</p>
              <p>作者：zl</p>    
          </div>
        </el-col>
      </el-row>
		</div> 
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      news: [],
      id: null,
      currentPage: 1,
      tablist: ["all","good"],
    }
  },
  mounted() {
    this.getnewlist()
  },
  methods: {
    getnewlist: function (currentPage) {
      this.$http({
          url: 'https://cnodejs.org/api/v1/topics',
          method: 'GET',
          // 请求体重发送的数据
          params: {
            page: currentPage,
            limit: 20,
            mdrender: false,
            tab: "all"
          },
          // 设置请求头
          headers: {
              'Content-Type': 'x-www-from-urlencoded'
          }
      }).then(function (res) {
          this.news = res.data.data
      }, function () {
          // 请求失败回调
      });
    },
    getnewtab: function (index) {
      this.$http({
          url: 'https://cnodejs.org/api/v1/topics',
          method: 'GET',
          // 请求体重发送的数据
          params: {
            page: 1,
            limit: 20,
            mdrender: false,
            tab: index
          },
          // 设置请求头
          headers: {
              'Content-Type': 'x-www-from-urlencoded'
          }
      }).then(function (res) {
          this.news = res.data.data
      }, function () {
          // 请求失败回调
      });
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}  
</script>

<style>
.zl{
  display: flex;
  flex-direction: column;
}
.zl p {
  margin: 20px;
  font-weight: 800;
}
#news{
	margin: 10px 200px;
}
.newspic{
  width: 30px;
  height: 30px;
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
  min-height: 100px;
}
.grid-content1 {
  border-radius: 4px;
  min-height: 160px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.newslist ul li{
  list-style-type: none;
  height: 45px;
  line-height: 45px;
}
.newslist ul li div span{
  width: 80px;
  color: grey;
  font-size: 13px;
}
.newstitle{
  width: 80%;
  text-decoration: none;
}
.newslist ul li div a{
  text-decoration: none;
  color: black;
}
li div{
  display: flex;
  height: 45px;
}  
.user img{
  width: 25px;
  height: 25px;
  margin: 10px;
}
.grey{
  width: 98%;
  height: 1px;
  background-color: grey;
  margin: 0 auto;
}
</style>