import { createStore } from 'vuex'

export default createStore({
  state: {
    checkBoxes: [],
  },
  mutations: {
    setCheckBoxes(state, checkBoxes) {
      state.checkBoxes = checkBoxes
    },
  },
  actions: {
    setCheckBoxes({ commit }, checkBoxes) {
      commit('setCheckBoxes', checkBoxes)
    },
  },
  modules: {},
  getters: {
    getCheckBoxes(state) {
      return state.checkBoxes
    },
  },
})
