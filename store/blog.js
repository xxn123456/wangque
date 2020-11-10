export const state = () => ({
   scrollTop:0
})
export const mutations = {
  SETSCROLLTOP(state,data) {
    state.scrollTop =data;
  }
}
export const actions = {
  setScrollTop(context,data) {
    context.commit('SETSCROLLTOP',data)
  }
}

