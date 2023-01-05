<template>
    <div class="layout-wrapper">
     <Header />
    <!-- header -->
  
    <!-- ./ header -->
     <div class="content">
        <div class="row">
          <div class="order-2 order-lg-1 col-lg-9 bd-content">
            <form
              v-on:submit.prevent="onSubmit()"
              enctype="multipart/form-data"
            >
              <h4>Create Message</h4>

              <div class="card">
                <div class="card-body">
                  <select
                    v-model="categoryId"
                    class="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                  >
                    <option value="category">Select Category</option>
                    <option :value="category._id"  v-for="category in categories"  :key="category._id">{{category.name}}</option>
               
                  </select>
                </div>
              </div>
            
               <div class="card mt-2">
                <div class="card-body">
                  <select
                    v-model="type"
                    class="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                  >
                    <option value="type">Select Type</option>
                    <option value="recommeded">Recommeded</option>
                    <option value="pupolar">pupolar</option>
                    
                  </select>
                </div>
              </div>
               
               <div class="card mt-2">
                <div class="card-body">
                  <select
                    v-model="userId"
                    class="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                  >
                    <option value="user">Select User</option>
                    <option :value="user._id"  v-for="user in users"  :key="user._id">{{user.name}}</option>
                  </select>
                </div>
              </div> 
            <div class="card mt-2">
                 <div class="card-body">
              <div class="row g-3 mt-2">
                <div class="col-lg-6 md-12">
                  <input
                    type="text"
                    class="form-control"
                    required
                    v-model="title"
                    placeholder="Message Title *"
                    aria-label="Title"
                  />
                </div>
                <div class="col-lg-6 md-12">
                  <input
                    type="text"
                    class="form-control"
                    v-model="tag"
                    placeholder="Tag *"
                    required
                    aria-label="Tag"
                  />
                </div>
              </div>
                 </div>
             </div>
            
             <div class="card mt-2">
                 <div class="card-body">
             <div class="row g-3 mt-2">
                <div class="col-lg-6 md-12">
                  <input
                    type="file"
                    ref="file1"
                    @change="onSelect1"
                    placeholder="Message image cover"
                  />
                </div>
            
                <div class="col-lg-6 md-12">
                  <input
                    type="file"
                    ref="file"
                    @change="onSelect"
                    placeholder="Message image cover"
                  />
                </div>
              </div>
                 </div>
             </div>
              <div class="d-grid gap-2">
                <button class="btn btn-primary mt-4" type="submit">Save</button>
              </div>
            </form>
          </div>

          <div class="order-1 order-lg-2 col-lg-3">
            <div class="bd-toc mt-4 mb-5 my-md-0 ps-xl-3 mb-lg-5 text-muted">
              <nuxt-link to="/messages">
                <strong class="d-block h6 my-2 pb-2 border-bottom"
                  >View Messages</strong
                ></nuxt-link
              >
              <nav id="TableOfContents"></nav>
            </div>
          </div>
        </div>
      </div>
    <!-- content -->
  
    <!-- ./ content -->

    <!-- content-footer -->
        <Footer/>
    <!-- ./ content-footer -->

</div>
</template>

<script>
const querystring = require('querystring');
import Header from '../../components/inc/Header.vue';
import Footer from '../../components/inc/Footer.vue';
import { mapGetters } from 'vuex'
export default {
  components: {
    Header,
    Footer,
  },
    
     data() {
    return {
      categoryId: 'category',
      type: 'type',
      userId:'user',
      title: '',
      tag: '',
      file: '',
      file1: '',
    };
  },

created() {
    this.$store.dispatch('getUsers');
    this.$store.dispatch('getCategories');
  },

   computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
    users() {
      return this.$store.state.users;
    },

      categories() {
      return this.$store.state.categories;
       }

  },

     methods: {
       async onSubmit() {
      let urlObject = {
        title: this.title,
        tag:this.tag,
        userId:this.userId,
        categoryId:this.categoryId,
        message_type:this.type,
        image:this.file,
        imageCover:this.file1
      };

      let parsedQuery = querystring.stringify(urlObject);
     
      await this.$axios
        .$post('/messages', 
          parsedQuery,
          {
           headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                credentials:true
        })
        .then((res) => {
          console.log(res);
          this.$toast.success(
            'Message.....  Successfully Created'
          );
          window.location.reload(true);
        })
        .catch((error) => {
          this.$toast.error(`Error ${error.message}`);
        });
        },

      onSelect() {
      const file = this.$refs.file.files[0];
      this.file = file;
    },

     onSelect1() {
      const file1 = this.$refs.file1.files[0];
      this.file1 = file1;
    },    
     }



}
</script>

