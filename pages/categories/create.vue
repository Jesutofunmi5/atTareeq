<template>
  <div>
    <div class="layout-wrapper">
      <Header />
      <div class="content">
        <div class="row">
          <div class="order-2 order-lg-1 col-lg-9 bd-content">
            <h4>Create Category</h4>

            <div class="card">
              <div class="card-body">
                <form v-on:submit.prevent="onSubmit()">
                  <div class="row g-3">
                    <div class="col">
                      <input
                        type="text"
                        class="form-control"
                        v-model="category"
                      />
                    </div>
                  </div>
                  <div class="text-danger">{{ error }}</div>
                  <div class="d-grid gap-2">
                    <button class="btn btn-primary mt-4" type="submit">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="order-1 order-lg-2 col-lg-3">
            <div class="bd-toc mt-4 mb-5 my-md-0 ps-xl-3 mb-lg-5 text-muted">
              <nuxt-link to="/categories">
                <strong class="d-block h6 my-2 pb-2 border-bottom"
                  >View Categories</strong
                ></nuxt-link
              >
              <nav id="TableOfContents"></nav>
            </div>
          </div>
        </div>
      </div>
      <!-- ./ content -->

      <!-- content-footer -->
      <Footer />
      <!-- ./ content-footer -->
    </div>
  </div>
</template>

<script>
import axios from 'axios';
const querystring = require('querystring');
import Header from '../../components/inc/Header.vue';
import Footer from '../../components/inc/Footer.vue';
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      category: '',
      error: '',
      pretoken: this.$cookies.get('auth._token.local')
    };
  },

  methods: {
    async onSubmit() {
      let urlObject = {
        name: this.category,
      };
      let parsedQuery = querystring.stringify(urlObject);
      await this.$axios
        .$post('/categories', 
          parsedQuery,
          {
              // data: {  name: this.category },

           headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                credentials:true
        })
        .then((res) => {
          console.log(res);
          this.$toast.success(
            `${this.category} Category.....  Successfully Created`
          );
          window.location.reload(true);
        })
        .catch((error) => {
            
          this.$toast.error(`Error ${error.message}`);
        });
    },
  },
};
</script>
