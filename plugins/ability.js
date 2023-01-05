/* eslint-disable */
export default ({ app, store}, inject) => {
  inject('authuser', () => store.state.authuser.loggedIn)
};
