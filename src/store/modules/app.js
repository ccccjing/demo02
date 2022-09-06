const state = {
  sidebar: {
    open: true // 左侧菜单展开
  }
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.open = !state.sidebar.open
  }
}

const actions = {
  toggleSidebar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}