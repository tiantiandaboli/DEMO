import get from '@/assets/js/xhr.js'

export default {
  getArticleLists(context) {
    let number = context.getters.getArticleNumber
    //console.log(number)
    get('https://cnodejs.org/api/v1/topics', {
      page: 1,
      limit: context.state.articleNumber,
      mdrender: 'false',
      tab: context.state.tab
    }).then((res) => {
      context.commit('addArticlemy', res.data)
      //console.log(res.data)
    }).catch((res) => {
      console.log('MaiSec.vue: ', res);
    });
  },
  getgoodnews(context) {
    context.commit('settab1')
  },
  addArticleNumber(context) {
    context.commit('addArticleNumber')
  },
  getallnews(context) {
    context.commit('settab2')
  },
  getArticlepage(context,url) {
    get(url).then((res) => {
      context.commit('addArticlepage', res.data)
      //console.log(res.data)
    }).catch((res) => {
      console.log('MaiSec.vue: ', res);
    });
  }, 
  updateLoadingStatus(context) {
    context.commit('updateLoadingStatus', {isLoading: true})
  },
  updateLoadingStatus1(context) {
    context.commit('updateLoadingStatus', {isLoading: false})
  } 
}
