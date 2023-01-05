<template>
  <div>
    <footer class="content-footer" v-if="isAuthenticated">
      <div>
        © 2022 <a href="/" target="_blank">{{ appName }}</a>
      </div>
      
    </footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      appName: process.env.APP_NAME
    };
  },

    computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  
};
</script>
