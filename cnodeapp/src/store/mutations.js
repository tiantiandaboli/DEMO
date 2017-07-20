export default {
    addArticlemy(state, articleLists) {
        state.articleLists = articleLists
    },
    addArticleNumber(state) {
        state.articleNumber += 10
    },
    addArticle(state, article) {
        state.article = article
    },
    addArticleAuthor(state, loginName) {
        state.articleAuthor = loginName
    },
    addUserInfo(state, userInfo) {
        state.userInfo = userInfo
    },
    settab1(state) {
        state.tab = 'good'
    },
    settab2(state) {
        state.tab = 'all'
    },
    addArticlepage(state, articlepage) {
        state.articlepage = articlepage
    },
    addUserpage(state,userpage){
        state.userpage = userpage
    },
    updateLoadingStatus (state, payload) {
      state.isloading = payload.isLoading
    }
}
