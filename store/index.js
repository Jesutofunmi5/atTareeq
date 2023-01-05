/* eslint-disable */

//state

export const state = () => ({
  users: [],
  messages: [],
  categories: [],
  reviews: []
});

//getter

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  }
};
//action

export const actions = {
  nuxtServerInit({ commit }, { req, app: { $cookies } }) {
    if (req.headers.cookie) {
      // console.log($cookies.get('auth._token.local'));
      commit('authuser/setLoggedIn', true);
    }
  },

  async getUsers({ commit }) {
    await this.$axios
      .$get('/users')
      .then(result => {
        commit('setUsers', result.data.data);
      })
      .catch(error => {
        throw new Error(`API ${error}`);
      });
  },

  async getMessages({ commit }) {
    await this.$axios
      .$get('/messages')
      .then(result => {
        commit('setMessages', result.data.data);
      })
      .catch(error => {
        throw new Error(`API ${error}`);
      });
  },


  async getCategories({ commit }) {
    await this.$axios
      .$get('/categories')
      .then(result => {
        commit('setCategories', result.data.data);
      })
      .catch(error => {
        throw new Error(`API ${error}`);
      });
  },

  async getReviews({ commit }) {
    await this.$axios
      .$get('/reviews')
      .then(result => {
        commit('setReviews', result.data.data);
      })
      .catch(error => {
        throw new Error(`API ${error}`);
      });
  },

  
};

//mutation

export const mutations = {
  setUsers(state, payload) {
    state.users = payload;
  },

  setMessages(state, payload) {
    state.messages = payload;
  },

  setCategories(state, payload) {
    state.categories = payload;
  },

  setReviews(state, payload) {
    state.reviews = payload;
  }
};

