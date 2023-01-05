<template>
  <div class="menu" v-if="isAuthenticated">
    <div class="menu-header">
      <a href="/" class="menu-header-logo">
        <img :src=appLogo alt="logo" style="height: 50px; width: 50px;" />
      </a>
      <nuxt-link to="/" class="btn btn-sm menu-close-btn">
        <i class="bi bi-x"></i>
      </nuxt-link>
    </div>
    <div class="menu-body" >
       <div class="dropdown">
            <a href="#" class="d-flex align-items-center" data-bs-toggle="dropdown">
                <div class="avatar me-3">
                    <img :src=$auth.$state.user.data.data.photo
                         class="rounded-circle" alt="image">
                </div>
                <div >
                    <div class="fw-bold">{{ $auth.$state.user.data.data.name }}</div>
                    <small class="text-muted">{{ $auth.$state.user.data.data.role[0] }}</small>
                </div>
            </a>
            <div class="dropdown-menu dropdown-menu-end" >
                <a href="/profiles/" class="dropdown-item d-flex align-items-center">
                    <i class="bi bi-person dropdown-item-icon"></i> Profile
                </a>
          
                <button @click="$auth.logout()" class="dropdown-item d-flex align-items-center text-danger"
                   target="_blank">
                    <i class="bi bi-box-arrow-right dropdown-item-icon"></i> Logout
                </button>
            </div>
        </div>
      <ul>
        <li class="menu-divider">{{ appName }}</li>
        <li>
          <a class="active" href="/">
            <span class="nav-link-icon">
              <i class="bi bi-bar-chart"></i>
            </span>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <nuxt-link to="#">
            <span class="nav-link-icon">
              <i class="bi bi-envelope"></i>
            </span>
            <span>Messages</span>
          </nuxt-link>
          <ul>
            <li>
              <nuxt-link to="/messages">View</nuxt-link>
            </li>
            <li>
              <a href="/messages/create">Create</a>
            </li>
          </ul>
        </li>
        <li>
          <a>
            <span class="nav-link-icon">
              <i class="bi bi-collection"></i>
            </span>
            <span>Categories</span>
          </a>
          <ul>
            <li>
              <a href="/categories">View</a>
            </li>
            <li>
              <a href="/categories/create">Create</a>
            </li>
          </ul>
        </li>
        <li>
          <nuxt-link to="#">
            <span class="nav-link-icon">
              <i class="bi bi-megaphone"></i>
            </span>
            <span>Reviews</span>
          </nuxt-link>
          <ul>
            <li>
              <a href="/reviews/">View</a>
            </li>
          </ul>
        </li>

        <li>
          <nuxt-link to="#">
            <span class="nav-link-icon">
              <i class="bi bi-person"></i>
            </span>
            <span>Profile</span>
          </nuxt-link>
          <ul>
            <li>
              <a href="/profiles/">Update Profile</a>
            </li>
          </ul>
        </li>
        <li>
          <nuxt-link to="#">
            <span class="nav-link-icon">
              <i class="bi bi-person-circle"></i>
            </span>
            <span>Users</span>
          </nuxt-link>
          <ul>
            <li><a href="/users">View</a></li>
            <li><a href="/users/create">Create</a></li>
          </ul>
        </li>
        <li>
          <nuxt-link to="#">
            <span class="nav-link-icon">
              <i class="bi bi-lock"></i>
            </span>
            <span>Authentication</span>
          </nuxt-link>
          <ul >
            <li>
              <a href="" target="_blank"
                ><span class="form-logout" @click="$auth.logout()">Logout</span></a
              >
            </li>
            <li>
              <a href="/password">Reset Password</a>
            </li>
           
            <li>
              <a href="" >Permission</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      appLogo: process.env.APP_LOGO,
      appName: process.env.APP_NAME
    };
  },

computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },

  methods: {
    async logout() {
      $auth.logout();
      this.$cookies.remove('auth._token.local');
      //this.$store.commit('authuser/setLoggedIn', false)
      this.$router.push('/login');
    }
  }
};
</script>
