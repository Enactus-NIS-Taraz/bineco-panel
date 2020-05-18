<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["isLoggedIn"])
  },
  created() {
    // this.$http.interceptors.response.use(undefined, function(err) {
    //   return new Promise(function() {
    //     if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
    //       this.$store.dispatch("logout");
    //     }
    //     throw err;
    //   });
    // });
  }
};
</script>

<style></style>
