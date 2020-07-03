export const state = () => ({
  isLoading: false,
  itemsPerPage: 9,
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
