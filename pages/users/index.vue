<template>
  <div class="layout-wrapper">
    <Header />

    <!-- content -->
    <div class="content">
      <div class="mb-4">
        <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <nuxt-link to="/">
                <i class="bi bi-globe2 small me-2"></i> Dashboard
              </nuxt-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Users</li>
          </ol>
        </nav>
      </div>
      <div class="table-responsive">
        <table class="table table-custom table-lg mb-0" id="customers">
          <thead>
            <tr>
              <th>
                <input
                  class="form-check-input select-all"
                  type="checkbox"
                  data-select-all-target="#customers"
                  id="defaultCheck1"
                />
              </th>
              <th>ID</th>
              <th>Name</th>
              <th>email</th>
              <th>status</th>
              <th>Role</th>
              <th>Date</th>
    
              <th class="text-end">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in Users.slice(0,10)" :key="user._id">
              <td>
                <input class="form-check-input" type="checkbox" />
              </td>
              <td>
                <a href="#">{{ index + 1 }}</a>
              </td>
              
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td v-if="user.active">Active</td>
              <td v-else>Inactive</td>
              <td>{{ user.role[0] }}</td>
             
              <td>{{ user.createdAt | formatDate }}</td>
      

              <td class="text-end">
                <div class="d-flex">
                  <div class="dropdown ms-auto">
                    <a
                      href="#"
                      data-bs-toggle="dropdown"
                      class="btn btn-floating"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="bi bi-three-dots"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end">
                      <!-- <nuxt-link
                       :to="`users/${user._id}`"  class="dropdown-item">Show</nuxt-link> -->
                       <nuxt-link :to="`users/${user._id}`"  class="dropdown-item">Edit</nuxt-link>
                      <span
                        @click="_user(user._id)"
                        style="cursor: pointer"
                        class="dropdown-item"
                        >Delete</span
                      >
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <nav class="mt-4" aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item active"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <!-- ./ content -->

    <!-- content-footer -->
    <Footer />
    <!-- ./ content-footer -->
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

  filters: {
    options : {hour: "numeric", dayPeriod: "short"},
    formatDate: (dateStr) =>
    
      Intl.DateTimeFormat("us-EN").format(new Date(dateStr)),
  },

  data() {
    return {
      t: true,
      f: false,
    };
  }, 

  created() {
     this.$store.dispatch('getUsers');
  },
  computed: {
     Users() {
      return this.$store.state.users;
    },
  },

  methods: {
  

    async _user(id) {
      await this.$axios
        .$delete(`/users/${id}`, {
          credentials: true,
        })
        .then((res) => {
          window.location.reload(true);
          this.$toast.success(`${id} Item Successfully deleted`);
        })
        .catch((error) => {
          this.$toast.error(`Error Deleting ${error}`);
        });
    },
  },
};
</script>
