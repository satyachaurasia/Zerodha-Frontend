import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    result: null
  },
  mutations: {
    setResult(state, data) {
      state.result = data;
    }
  },
  actions: {
    getSearchQuery({ commit }, { date, search }) {
      axios
        .get(`http://15.206.70.97/api/core/get-records/`, {
          params: {
            date: date,
            q: search
          }
        })
        .then(response => commit("setResult", response.data))
        .catch(console.error);
    }
  },
  modules: {}
});
