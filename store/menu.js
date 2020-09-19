export const state = () => ({
  isOpen: false,
})

export const getters = {
  isOpen: (state) => state.isOpen,
}

export const actions = {
  toggle({ commit }) {
    commit('TOGGLE')
  },
  close({ commit }) {
    commit('CLOSE')
  },
}

export const mutations = {
  TOGGLE(state) {
    state.isOpen = !state.isOpen
  },
  CLOSE(state) {
    state.isOpen = false
  },
}
