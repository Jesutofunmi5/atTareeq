<template> 
<div>
   <div class="header" v-if="isAuthenticated">
        <div class="menu-toggle-btn">
          <!-- Menu close button for mobile devices -->
          <a href="#">
            <i class="bi bi-list"></i>
          </a>
        </div>
        <!-- Logo -->
        <a href="/" class="logo">
         <img
          src='/assets/images/logo.png'
          alt="logo"
          style="height: 50px; width: 50px;"
        />
        </a>
        <!-- ./ Logo -->
        <div class="page-title">{{ appName }}</div>
        <form class="search-form">
          <div class="input-group">
            <button
              class="btn btn-outline-light"
              type="button"
              id="button-addon1"
            >
              <i class="bi bi-search"></i>
            </button>
            <input
              type="text"
              class="form-control"
              placeholder="Search..."
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            />
            <a href="#" class="btn btn-outline-light close-header-search-bar">
              <i class="bi bi-x"></i>
            </a>
          </div>
        </form>
         <div class="header-bar ms-auto">
        <ul class="navbar-nav justify-content-end">
            <!-- <li class="nav-item">
                <a href="#" class="nav-link nav-link-notify" data-count="2" data-sidebar-target="#notifications">
                    <i class="bi bi-bell icon-lg"></i>
                </a>
                
            </li> -->
            <li class="nav-item dropdown">
                <a href="#" class="nav-link nav-link-notify" data-count="3" data-bs-toggle="dropdown">
                    <i class="bi bi-bell icon-lg"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0">
                    <h6 class="m-0 px-4 py-3 border-bottom">Notification</h6>
                    <div class="dropdown-menu-body">
                        <div class="list-group list-group-flush">
                            <div class="list-group-item d-flex align-items-center">
                                <a href="#" class="text-danger me-3" title="Remove">
                                    <i class="bi bi-trash"></i>
                                </a>
                                <a href="#" class="me-3 flex-shrink-0 ">
                                    <img src="/assets/images/products/3.jpg" class="rounded" width="60"
                                         alt="">
                                </a>
                                <div>
                                    <h6>Digital clock</h6>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    <h6 class="m-0 px-4 py-3 border-top small">munber : <strong
                            class="text-primary">1</strong></h6>
                </div>
            </li>
          
        </ul>
          </div>
        <div class="header-bar ms-auto">
          <ul class="navbar-nav justify-content-end">
          
            <li class="nav-item ms-3">
              <button class="btn btn-primary btn-icon" @click="$auth.logout()">
                <i class="bi bi-plus-circle"></i> logout
              </button>
            </li>
          </ul>
        </div>
        <!-- Header mobile buttons -->
        <div class="header-mobile-buttons">
          <a href="#" class="search-bar-btn">
            <i class="bi bi-search"></i>
          </a>
          <a href="#" class="actions-btn">
            <i class="bi bi-three-dots"></i>
          </a>
        </div>
        <!-- ./ Header mobile buttons -->
      </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  
    data(){
        return{
        appName: process.env.APP_NAME,
        appLogo: process.env.APP_LOGO

        }
    },

    computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },

}
</script>
