<!--render不需要template  动态生成组件的标签-->
<script>
export default{
/*createElement方法通过render函数的参数传递进来*/
/*createElement( 标签名, 标签属性, 标签里的内容)*/
	render: function (createElement) {
    return createElement(
      'h' + this.level,   // tag name
      this.$slots.default// array of children
    )
  },

  props: {
    level: {
      type: Number,
      required: true
    }
  }
}    
</script>

<style>
    
</style>