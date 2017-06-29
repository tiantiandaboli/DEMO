<template>
	<div id="test_1">
		<span>message:{{msg}}</span>
<!--text-->
		<span v-html='msg'></span>
<!--v-html标签解析html-->
		<a :href="href">BAIDU</a>
<!--属性-->
		<a>{{ msg.split('').reverse().join('') }}</a>
<!--javascript-->
		<p v-for='tel in tels'>{{tel | newtel}}</p>
<!--过滤-->
		<a v-for='url in urllist' :href="url.url | geturl(url.name,url.age)">{{url.url| geturl(url.name,url.age)}}</a>
<!--过滤用于处理文本 filter内函数第一个参数是默认的 切记-->
	</div>
</template>
<script>
export default{
  data: function () {
    return {
      msg : '<a>hello!</a>',
      href : 'http://www.baidu.com',
      tels :[
      	10000,
      	10001,
      	10002,
      	10003
      ],
      urllist :[
      	{url : 'http://www.baidu.com',name :'ziksang',age : 20},
      	{url : 'http://www.google.com',name :'ziksang2',age : 30}
      ]
    }
  },
//filter
  filters : {
  	newtel : function (value) {
  		value = value.toString().substr(3,2)
  		value = '*'.repeat(3) + value
  		return value
  	},
  	geturl : function (value,name,age) {
  		if(!value) return ''
  			return `${value}?name=${name}&age=${age}`
  	}
  }
}
</script>
<style>
#test_1{
  display: flex;
  flex-direction: column;
}	
</style>
