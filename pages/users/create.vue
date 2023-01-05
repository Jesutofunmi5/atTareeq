<template>
  <div class="layout-wrapper">
       <Header/>
    <Sidebar />

  <div class="content ">
        
    <div class="row">
        <div class="order-2 order-lg-1 col-lg-9 bd-content">

            <h4>Create User</h4>

            <div class="card">
                <div class="card-body">
    <form class="row g-3"  v-on:submit.prevent="onSubmit()"
              enctype="multipart/form-data" >
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email"  v-model="email" class="form-control" id="inputEmail4">
  </div>
  <div class="col-md-6">
    <label for="inputAddress" class="form-label">Name</label>
     <input type="text" v-model="name"  class="form-control" id="inputAddress">
  </div>
  <div class="col-12">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" v-model="password" class="form-control" id="inputPassword4">
  </div>

   <div class="col-12">
    <label for="inputPassword4" class="form-label"> Confirm Password</label>
    <input type="password" v-model="cpassword" class="form-control" id="inputPassword4">
  </div>
  <div class="col-md-5">
    <label for="inputPhone" class="form-label">Tell Number</label>
    <input type="number" v-model="phone" class="form-control" id="inputPhone">
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">Role</label>
    <select id="inputState" class="form-select" v-model="role">
      <option value="role">Choose</option>
      <option value="admin">Admin</option>
      <option value="guest">Guest</option>
      <option value="host">Host</option>
      <option value="listener">Listener</option>

    </select>
  </div>
  <div class="col-md-3">
    <label for="inputState" class="form-label">Status</label>
    <select id="inputState" class="form-select" v-model="status">
      <option value="choose">Choose</option>
      <option value="true">Active</option>
      <option value="false">Deactive</option>
    </select>
  </div>
  
   <!-- <div class="col-12">
    <label for="inputPassword4" class="form-label">Photo</label>
    <input type="file"  ref="file"
                    @change="onSelect" class="form-control" id="inputPassword4">
  </div> -->
 
 
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
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
      role:'role',
      email: '',
      name: '',
      password: '',
      cpassword: '',
      phone:'',
      file: '',
    };
  },

  methods:{

    onSelect() {
      const file = this.$refs.file.files[0];
      this.file = file;
    },

    async onSubmit() {
      let urlObject = {
        name: this.name,
        email:this.email,
        phone:this.phone,
        password:this.password,
        passwordConfirm:this.cpassword,
        active:this.status,
        role:this.role
      };
      const formData = new FormData();
    
      formData.append('file', this.file);
    //   formData.append('name', this.name);
    //   formData.append('email', this.email);
    //   formData.append('phone', this.phone);
    //   formData.append('role', this.role);
    //   formData.append('active', this.status);
    //   formData.append('password', this.password);
    //   formData.append('passwordConfirm', this.cpassword);
      


      let parsedQuery = querystring.stringify(urlObject);
     
      await this.$axios
        .$post('/users', 
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
            'User.....  Successfully Created'
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
