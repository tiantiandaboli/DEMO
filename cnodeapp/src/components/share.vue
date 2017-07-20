<template>
	<div>
	  <div class="cheader">
	    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true" title="分享"></x-header>
	  </div>
	</div>
</template>

<script>
import { XHeader, Actionsheet, TransferDom } from 'vux'

export default{
	directives: {
    TransferDom
  },
  components: {
    XHeader,
    Actionsheet
  },
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