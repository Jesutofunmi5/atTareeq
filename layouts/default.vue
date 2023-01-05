<template>
  <div>
    <Sidebar />
    <Navbar />
    
    <Nuxt />
   
  </div>
</template>

<script>

import Navbar from '~/components/inc/Navbar.vue';
import Sidebar from '~/components/inc/Sidebar.vue';
import Header from '~/components/inc/Header.vue';

export default {
  name: 'default',
  components: {
    Navbar,
    Sidebar,
    Header
  }
};
</script>
