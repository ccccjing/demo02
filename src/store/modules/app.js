const state = {
  sidebar: {
    open: true
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