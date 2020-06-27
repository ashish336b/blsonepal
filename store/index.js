export const state = () => ({
  isLoading: false
})

export const mutations = {
  set(state) {
    state.isLoading = true;
  },

  unset(state) {
    state.isLoading = false;
  }
}

export const getters = {
  isLoading(state) {
    return state.isLoading;
  }
}
