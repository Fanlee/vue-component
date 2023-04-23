import Vue from "vue";
import Vuex from "vuex";
import todos from "./modules/todos";
import user from "./modules/user";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { todos, user }
});

export default store;
