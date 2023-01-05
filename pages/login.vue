<template>
  <div>
    <div class="auth">
      <div class="form-wrapper">
        <div class="container">
          <div class="card">
            <div class="row g-0">
              <div class="col">
                <div class="row">
                  <div class="col-md-10 offset-md-1">
                    <div class="d-block d-lg-none text-center text-lg-start">
                      <img crossorigin="anonymous" :src="appLogo" alt="logo" />
                    </div>
                    <div class="my-5 text-center text-lg-start">
                      <h1 class="display-8">Sign In</h1>
                      <p class="text-muted">
                        Sign in to {{ appName }} to continue as an Admin
                      </p>
                    </div>
                    <form class="mb-5" @submit.prevent="onLogin">
                      <div class="mb-3">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Enter email"
                          autofocus
                          required
                          v-model="email"
                        />
                      </div>
                      <div class="mb-3">
                        <input
                          type="password"
                          class="form-control"
                          placeholder="Enter password"
                          required
                          v-model="password"
                        />
                      </div>
                      <div class="text-center text-lg-start">
                        <p class="small">
                          Can't access your account?
                          <a href="#">Reset your password now</a>.
                        </p>
                        <button class="btn btn-primary" @click="onLogin">
                          Sign In
                        </button>
                      </div>
                    </form>
                    <div class="social-links justify-content-center">
                      <a href="#">
                        <i class="ti-google bg-google"></i> Sign in with Google
                      </a>
                      <a href="#">
                        <i class="ti-facebook bg-facebook"></i> Sign in with
                        Facebook
                      </a>
                    </div>
                    <p class="text-center d-block d-lg-none mt-5 mt-lg-0">
                      Don't have an account?
                      <a href="">Sign up</a>.
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="col d-none d-lg-flex border-start align-items-center justify-content-between flex-column text-center"
              >
                <div class="logo">
                  <img crossorigin="anonymous" :src="appLogo" alt="logo" />
                    <br/> <br/> <br/> <br/>
                  <h3 class="fw-bold">Welcome to {{ appName }}!</h3>
                  <p class="lead my-5">
                    If you don't have an account, please contact the super admin?
                  </p>
                  <a href="#" class="btn btn-primary">Sign Up</a>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 middleware: 'guest',
  layout: 'login',
  data() {
    return {
      appLogo: process.env.APP_LOGO,
      appName: 'AT-Tareeq',
      email: '',
      password: ''
    };
  },
  methods: {
    async onLogin({ $axios }) {
      await this.$auth
        .loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          }
        })
        .then(res => this.handleToken(res.token));
        this.$toast.success(`Successfully Login`);
         window.location.reload(true);
    },

    handleToken(token) {
     this.$cookies.set('jwt', token);
    
      this.$router.push('/');
    }
  }
};
</script>
