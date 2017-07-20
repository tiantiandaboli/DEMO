<template>
  <div class="cheader">
    <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true" title="全部"></x-header>
  </div>
</template>

<script>
import { XHeader, Actionsheet, TransferDom } from 'vux'

export default {
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Actionsheet
  },
  data () {
    return {
      menus: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      },
      showMenus: false
    }
  },
  methods: {
    test2 (){
    }
  },
  created() {
    this.test2()
  }
}   
</script>

<style>
  .cheader{
    position: fixed;
    z-index: 1;
    top: 0;
    width: 100%;
  }  
</style>