<template>
	<div>
	  <div class="cheader">
	    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true" title="关于"></x-header>
	  </div>
	  <div class="mypage">
		  <p>关于项目</p>
		  <div>基于cnodejs的api，采用vue.js重写的webapp</div>
			<div v-transfer-dom>
	      <x-dialog v-model="show" class="dialog-demo">
	        <div class="img-box">
	          <p>22222</p>
	        </div>
	        <div @click="show=false">
	          <span class="vux-close"></span>
	        </div>
	      </x-dialog>
	    </div>
	  </div>
	</div>
</template>

<script>
import { XHeader, Actionsheet, TransferDom, XDialog, XSwitch} from 'vux'

export default{
	directives: {
    TransferDom
  },
  components: {
    XHeader,
    Actionsheet,
    XDialog,
    XSwitch
  },
  data() {
  	return {
  		show: true
  	}
  }
}    
</script>

<style>
	.mypage{
		margin: 70px 20px;
	} 
	.mypage p{
		color: #0C3E59;
		font-weight: 600;
	}
</style>
<style lang="less" scoped>
@import '~vux/src/styles/close';

.dialog-demo {
  .weui-dialog{
    border-radius: 8px;
    padding-bottom: 8px;
  }
  .dialog-title {
    line-height: 30px;
    color: #666;
  }
  .img-box {
    height: 350px;
    overflow: hidden;
  }
  .vux-close {
    margin-top: 8px;
    margin-bottom: 8px;
  }
}
</style>