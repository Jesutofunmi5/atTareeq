<template>
  <div>
    <div class="layout-wrapper">
      <!-- header -->
      <Header />
      <!-- ./ header -->

      <!-- content -->
      <div class="content" v-if="isAuthenticated">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col-lg-7 col-md-12">
            <div class="card widget h-100">
              <div class="card-header d-flex">
                <h6 class="card-title">
                  View Chart
                  <a
                    href="#"
                    class="bi bi-question-circle ms-1 small"
                    data-bs-toggle="tooltip"
                    title="Daily downloads"
                  ></a>
                </h6>
                <div class="d-flex gap-3 align-items-center ms-auto">
                  <div class="dropdown">
                    <a
                      href="#"
                      data-bs-toggle="dropdown"
                      class="btn btn-sm"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="bi bi-three-dots"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end">
                      <a href="#" class="dropdown-item">View Detail</a>
                      <a href="#" class="dropdown-item">Download</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="d-md-flex align-items-center mb-3">
                  <div class="d-flex align-items-center">
                    <div class="display-7 me-3">
                      <i class="bi bi-bag-check me-2 text-success"></i>
                      0
                    </div>
                    <span class="text-success">
                      <i class="bi bi-arrow-up me-1 small"></i>0%
                    </span>
                  </div>
                  <div
                    class="d-flex gap-4 align-items-center ms-auto mt-3 mt-lg-0"
                  >
                    <select class="form-select">
                      <optgroup label="2020">
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                      </optgroup>
                      <optgroup label="2021">
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May" selected>May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                      </optgroup>
                    </select>
                  </div>
                </div>
                <div id="sales-chart"></div>
                <div
                  class="d-flex justify-content-center gap-4 align-items-center ms-auto mt-3 mt-lg-0"
                >
                  <div>
                    <i
                      class="bi bi-circle-fill mr-2 text-primary me-1 small"
                    ></i>
                    <span>Message</span>
                  </div>
                  <div>
                    <i
                      class="bi bi-circle-fill mr-2 text-success me-1 small"
                    ></i>
                    <span>Download</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-12">
            <div class="card widget h-100">
              <div class="card-header d-flex">
                <h6 class="card-title">
                  Channels
                  <a
                    href="#"
                    class="bi bi-question-circle ms-1 small"
                    data-bs-toggle="tooltip"
                    title="Channels where your users login"
                  ></a>
                </h6>
                <div class="d-flex gap-3 align-items-center ms-auto">
                  <div class="dropdown">
                    <a
                      href="#"
                      data-bs-toggle="dropdown"
                      class="btn btn-sm"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="bi bi-three-dots"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end">
                      <a href="#" class="dropdown-item">View Detail</a>
                      <a href="#" class="dropdown-item">Download</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div id="sales-channels"></div>
                <div class="row text-center mb-5 mt-4">
                  <div class="col-4">
                    <div class="display-7">48%</div>
                    <div class="text-success my-2 small">
                      <i class="bi bi-arrow-up me-1 small"></i>30.50%
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-center"
                    >
                      <i class="bi bi-circle-fill text-orange me-2 small"></i>
                      <span class="text-muted">Social Media</span>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="display-7">30%</div>
                    <div class="text-danger my-2 small">
                      <i class="bi bi-arrow-down me-1 small"></i>15.20%
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-center"
                    >
                      <i class="bi bi-circle-fill text-cyan me-2 small"></i>
                      <span class="text-muted">Google</span>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="display-7">22%</div>
                    <div class="text-success my-2 small">
                      <i class="bi bi-arrow-up me-1 small"></i>1.80%
                    </div>
                    <div
                      class="d-flex align-items-center justify-content-center"
                    >
                      <i class="bi bi-circle-fill text-indigo me-2 small"></i>
                      <span class="text-muted">Email</span>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <button class="btn btn-outline-primary btn-icon">
                    <i class="bi bi-download"></i> Download Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        
         
          <div class="col-lg-4 col-md-12">
            <div class="card h-100">
              <div class="card-body">
                <div class="d-flex mb-4">
                  <h6 class="card-title mb-0">Users Rating</h6>
                  <div class="dropdown ms-auto">
                    <a
                      href="#"
                      data-bs-toggle="dropdown"
                      class="btn btn-sm"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="bi bi-three-dots"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end">
                      <a href="#" class="dropdown-item">View Detail</a>
                      <a href="#" class="dropdown-item">Download</a>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <div class="display-6">3.0</div>
                  <div class="d-flex justify-content-center gap-3 my-3">
                    <i class="bi bi-star-fill icon-lg text-warning"></i>
                    <i class="bi bi-star-fill icon-lg text-warning"></i>
                    <i class="bi bi-star-fill icon-lg text-warning"></i>
                    <i class="bi bi-star-fill icon-lg text-muted"></i>
                    <i class="bi bi-star-fill icon-lg text-muted"></i>
                    <span>(318)</span>
                  </div>
                </div>
                <div
                  class="text-muted d-flex align-items-center justify-content-center"
                >
                  <span class="text-success me-3 d-block">
                    <i class="bi bi-arrow-up me-1 small"></i>+35
                  </span>
                  Point from last month
                </div>
                <div class="row my-4">
                  <div class="col-md-6 m-auto">
                    <div id="customer-rating"></div>
                  </div>
                </div>
                <div class="text-center">
                  <button class="btn btn-outline-primary btn-icon">
                    <i class="bi bi-download"></i> Download Report
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card widget h-100">
              <div
                class="card-header d-flex justify-content-between align-items-center"
              >
                <h5 class="card-title">
                  Users
                  <a
                    href="#"
                    class="bi bi-question-circle ms-1 small"
                    data-bs-toggle="tooltip"
                    title="Sales performance revenue based by country"
                  ></a>
                </h5>
                <a href="#">View All</a>
              </div>
              <div class="card-body" v-if="users">
                <div
                  class="list-group list-group-flush"
                  v-for="(user, index) in users.slice(0, 4)"
                  :key="user._id"
                >
                  <div
                    class="list-group-item d-flex justify-content-between align-items-center px-0"
                  >
                    <div class="d-flex flex-grow-1 align-items-center">
                      <img
                        width="45"
                        class="rounded-circle"
                        :src="user.photo"
                        alt="..."

                      />
                      <span>{{ user.name }}</span>
                    </div>
                    <span>{{ user.role[0] }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="card widget h-100">
              <div
                class="card-header d-flex justify-content-between align-items-center"
              >
                <h5 class="card-title">
                   Categories
                  <a
                    href="#"
                    class="bi bi-question-circle ms-1 small"
                    data-bs-toggle="tooltip"
                    title="Sales performance revenue based by country"
                  ></a>
                </h5>
                <a href="#">View All</a>
              </div>
              <div class="card-body" v-if="categories">
                <div
                  class="list-group list-group-flush"
                  v-for="(category, index) in categories.slice(0, 4)"
                  :key="category._id"
                >
                  <div
                    class="list-group-item d-flex justify-content-between align-items-center px-0"
                  >
                    <div class="d-flex flex-grow-1 align-items-center">
                      <img width="45" class="me-3" :src="appLogo" alt="..." />
                      <span>{{ category.name }}</span>
                    </div>
                    <span>{{ appName }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-12">
            <div class="card widget">
              <div class="card-header">
                <h5 class="card-title">Activity Overview</h5>
              </div>
              <div class="row g-4">
                <div class="col-md-6">
                  <div class="card border-0">
                    <div class="card-body text-center">
                      <div class="display-5">
                        <i class="bi bi-envelope text-secondary"></i>
                      </div>
                      <h5 class="my-3">Messages</h5>
                      <div class="text-muted">{{ messages.length }}</div>
                      <div class="progress mt-3" style="height: 5px">
                        <div
                          class="progress-bar bg-secondary"
                          role="progressbar"
                          :style="{ width: `${messages.length}%` }"
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card border-0">
                    <div class="card-body text-center">
                      <div class="display-5">
                        <i class="bi bi-person-square text-warning"></i>
                      </div>
                      <h5 class="my-3">Users</h5>
                      <div class="text-muted">{{users.length}}</div>
                      <div class="progress mt-3" style="height: 5px">
                        <div
                          class="progress-bar bg-warning"
                          role="progressbar"
                          :style="{ width: `${users.length}%` }"
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card border-0">
                    <div class="card-body text-center">
                      <div class="display-5">
                        <i class="bi bi-collection text-info"></i>
                      </div>
                      <h5 class="my-3">Categories</h5>
                      <div class="text-muted">{{ categories.length }}</div>
                      <div class="progress mt-3" style="height: 5px">
                        <div
                          class="progress-bar bg-info"
                          role="progressbar"
                          :style="{ width: `${categories.length}%` }"
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="card border-0">
                    <div class="card-body text-center">
                      <div class="display-5">
                        <i class="bi bi-megaphone text-success"></i>
                      </div>
                      <h5 class="my-3">Reviews</h5>
                      <div class="text-muted">{{ reviews.length }}</div>
                      <div class="progress mt-3" style="height: 5px">
                        <div
                          class="progress-bar bg-success"
                          role="progressbar"
                          :style="{ width: `${reviews.length}%` }"
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-7 col-md-12">
            <div class="card widget">
              <div
                class="card-header d-flex align-items-center justify-content-between"
              >
                <h5 class="card-title">Recent Messages</h5>
                <div class="dropdown ms-auto">
                  <a
                    href="#"
                    data-bs-toggle="dropdown"
                    class="btn btn-sm btn-floating"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="bi bi-three-dots"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a href="#" class="dropdown-item">Action</a>
                    <a href="#" class="dropdown-item">Another action</a>
                    <a href="#" class="dropdown-item">Something else here</a>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <p class="text-muted">
                  Messages added today. Click <nuxt-link to="/messages">here</nuxt-link> for more
                  details
                </p>
                <div class="table-responsive">
                  <table class="table table-custom mb-0" id="recent-products">
                    <thead>
                      <tr>
                        <th>
                          <input
                            class="form-check-input select-all"
                            type="checkbox"
                            data-select-all-target="#recent-products"
                            id="defaultCheck1"
                          />
                        </th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th class="text-end">Actions</th>
                      </tr>
                    </thead>
                    <tbody v-if="messages">
                      <tr
                        v-for="message in messages.slice(0, 4)"
                        :key="message._id"
                      >
                        <td>
                          <input class="form-check-input" type="checkbox" />
                        </td>
                        <td>
                          <a href="#">
                            <img
                              :src="message.userId[0].photo"
                              class="rounded"
                              width="40"
                              alt="..."
                            />
                          </a>
                        </td>
                        <td>{{ message.userId[0].name }}</td>
                        <td>
                          <span class="text-danger">{{ message.title }}</span>
                        </td>
                        <td>
                          <span
                            v-if="message.secretMessage === true"
                            class="text-success"
                            >Online</span
                          >
                          <span
                            v-else-if="message.secretMessage === false"
                            class="text-danger"
                            >Offline</span
                          >
                        </td>

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
                                <a href="#" class="dropdown-item">Action</a>
                                <a href="#" class="dropdown-item"
                                  >Another action</a
                                >
                                <a href="#" class="dropdown-item"
                                  >Something else here</a
                                >
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
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
import Footer from '~/components/inc/Footer.vue';
import Header from '~/components/inc/Header.vue';
import { mapGetters } from 'vuex'
export default {
  middleware: 'auth',
  name: 'HomePage',
  components: {
    Footer,
    Header
  },
  
  data() {
    return {
      appLogo: process.env.APP_LOGO,
      appName: process.env.APP_NAME
    };
  },
  created() {
    this.$store.dispatch('getUsers');
    this.$store.dispatch('getMessages');
    this.$store.dispatch('getCategories');
    this.$store.dispatch('getReviews');
  },

  computed: {

    ...mapGetters(['isAuthenticated', 'loggedInUser']),

    users() {
      return this.$store.state.users;
    },

     messages() {
      return this.$store.state.messages;
    },

      categories() {
      return this.$store.state.categories;
    },

    reviews() {
      return this.$store.state.reviews;
    }
  },
};
</script>
