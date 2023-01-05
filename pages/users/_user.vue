<template>
  <div class="layout-wrapper">
       <Header/>
    <Sidebar />

  <div class="content ">
    <div class="row">
        <div class="order-2 order-lg-1 col-lg-9 bd-content">
            <h4>Edit User</h4>
            <div class="card">
                <div class="card-body">
    <form class="row g-3"  v-on:submit.prevent="onSubmit()"
              enctype="multipart/form-data" >
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email"  v-model="user.email" class="form-control" id="inputEmail4"  >
  </div>
  <div class="col-md-6">
    <label for="inputAddress" class="form-label">Name</label>
     <input type="text" v-model="user.name"  class="form-control" id="inputAddress">
  </div>
 
  <div class="col-md-5">
    <label for="inputPhone" class="form-label">Tell Number</label>
    <input type="number" v-model="user.phone" class="form-control" id="inputPhone">
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">Role</label>
    <select id="inputState" class="form-select" v-model="user.role[0]">
      <option value="role">Choose</option>
      <option value="admin">Admin</option>
      <option value="guest">Guest</option>
      <option value="host">Host</option>
      <option value="listener">Listener</option>

    </select>
  </div>
  <div class="col-md-3">
    <label for="inputState" class="form-label">Status</label>
    <select id="inputState" class="form-select" v-model="user.active">
      <option value="choose">Choose</option>
      <option value="true">Active</option>
      <option value="false">Deactive</option>
    </select>
  </div>
  
  <div class="col-12">
    <button  class="btn btn-primary" @click="onSubmit(user._id)">Update</button>
  </div>
  
   </form>
                </div>
                
            </div>
          </div>

          
    </div>
  </div>
  <Footer/>
  </div>
</template>

<script>
const querystring = require('querystring');
import Sidebar from '~/components/inc/Sidebar.vue';
import Header from '~/components/inc/Header.vue';
import Footer from '~/components/inc/Footer.vue';
export default {
  name: 'UserPage',
  components: {
    Sidebar,
    Header,
    Footer
  },

  data() {
    return {
      status:'choose',
      role:'',
      email: '',
      name: '',
      phone: '',
      
    };
  },

  asyncData({$axios, route}) {
      return $axios.$get(`/users/${route.params.user}`).then(res=> {
           return {
               user: res.data.data
           }
       })
          
    },

  methods:{

    onSelect() {
      const file = this.$refs.file.files[0];
      this.file = file;
    },

    async onSubmit(id) {
      let urlObject = {
        name: this.name,
        email:this.email,
        phone:this.phone,
        active:this.status,
        role:this.role
      };
      const formData = new FormData();
    
      formData.append('file', this.file);
   

      let parsedQuery = querystring.stringify(urlObject);
     
      await this.$axios
        .$patch(`/users/${id}`, 
           parsedQuery,
          {
           headers: {
                    Accept: 'application/json'
                },
                credentials:true
        })
        .then((res) => {
          console.log(res);
          this.$toast.success(
            'User.....  Successfully Updated'
          );
          //window.location.reload(true);
        })
        .catch((error) => {
          this.$toast.error(`Error ${error.message}`);
        });
        },
  }
};
</script>
