<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>VueTube</span>
        
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
      >
        <span class="mr-2">Login</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },

  mounted(){
    this.$store.dispatch('loadVideos');
  },
  data: () => ({
    //
  }),
};
</script>
