const todos = {
  namespaced: true,
  state: {
    count: 1
  },
  getters: {
    addCount: state => {
      return state.count + 1;
    }
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
    incrementBy({ commit, rootState }) {
      console.log("rootState", rootState);
      setTimeout(() => {
        commit("increment");
      }, 1000);
    }
  }
};

export default todos;
