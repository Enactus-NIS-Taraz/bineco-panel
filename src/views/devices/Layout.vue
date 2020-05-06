<template>
  <div>
    <c-header />
    <div class="layout-container">
      <a-menu v-model="currentRoute" mode="horizontal" class="tabs">
        <a-menu-item key="/devices/map">
          <router-link to="/devices/map/" class="tabs__link">
            <a-icon type="appstore" />Map
          </router-link>
        </a-menu-item>
        <a-menu-item key="/devices/table">
          <router-link to="/devices/table" class="tabs__link">
            <a-icon type="ordered-list" />Table
          </router-link>
        </a-menu-item>
      </a-menu>
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/header/Header";

export default {
  components: {
    "c-header": Header
  },
  data() {
    return {
      currentRoute: [this.$router.currentRoute.path]
    };
  }
};
</script>

<style scoped>
.layout-container {
  width: 80%;
  margin: auto;
}

.tabs {
  margin-top: 30px;
}
</style>
