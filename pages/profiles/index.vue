<template>
    <div class="layout-wrapper">
     <Header />
    <div class="content ">
    <div class="mb-4">
        <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <nuxt-link  to="/">
                        <i class="bi bi-globe2 small me-2"></i> Dashboard
                    </nuxt-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">User Profile</li>
            </ol>
        </nav>
    </div>

    <div class="row">
        <div class="col-md-12">

            <div class="card mb-4">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-5">
                            <div class="slick-wrapper">
                                <div class="slider-for mb-3">
                                    <div class="slick-slide-item">
                                        <img :src=user.photo style="height:250px; width:100px" class="w-100 rounded"
                                             alt="image">
                                    </div>
                                </div>
                              
                            </div>
                        </div>
                        <div class="col-md-7">
                            <div class="d-flex justify-content-between align-items-start mt-4 mt-md-0">
                                <div>
                                    <div class="small text-muted mb-2">{{ user.name}}</div>
                                    <h2>{{ user.email}}</h2>
                                    <template>
                                    <p>
                                        <span class="badge bg-success">Online</span>
                                    </p>
                                  
                                    </template>
                        
                                   
                                    <div class="d-flex gap-2 mb-3">
                                        <i class="bi bi-star-fill text-warning"></i>
                                        <i class="bi bi-star-fill text-warning"></i>
                                        <i class="bi bi-star-fill text-warning"></i>
                                        <i class="bi bi-star-fill text-warning"></i>
                                        <i class="bi bi-star-fill text-muted"></i>
                                        <span></span>
                                    </div>
                                    <p>Features:</p>
                                    <p></p>
                                  
                                </div>
                                <a href="#" class="btn btn-icon flex-shrink-0">
                                    <i class="bi bi-heart-fill text-danger"></i> 
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>

        <Footer/>


</div>
</template>

<script>
import Header from '../../components/inc/Header.vue';
import Footer from '../../components/inc/Footer.vue';
export default {
  components: {
    Header,
    Footer,
  },
    
 data() {
    return {
      appLogo: process.env.APP_LOGO,
      appName: process.env.APP_NAME
    };
  },
    asyncData({$axios, route}) {
      return $axios.$get(`/users/me`).then(res=> {
           return {
               user: res.data.data
           }
       })
          
    },

}
</script>

