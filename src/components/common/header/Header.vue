<template>
  <header class="header">
    <router-link to="/">
      <logo class="header__logo" />
    </router-link>
    <nav class="header__nav">
      <router-link to="/" class="header__nav-link">Home</router-link>
      <router-link to="/devices/table" class="header__nav-link"
        >Table</router-link
      >
      <router-link to="/devices/map" class="header__nav-link">Map</router-link>
    </nav>
    <div>
      <a-dropdown>
        <a-avatar size="large" icon="user" />
        <a-menu slot="overlay">
          <a-menu-item>
            <router-link to="/user/profile">My profile</router-link>
          </a-menu-item>
          <a-menu-item>
            <router-link to="#">Settings</router-link>
          </a-menu-item>
          <a-menu-divider />
          <a-menu-item>
            <a href="javascript:;" @click="handleLogout">Logout</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </header>
</template>

<script>
import Logo from "@/components/common/logo/Logo";
import { mapMutations } from "vuex";

export default {
  components: {
    logo: Logo
  },
  methods: {
    handleLogout() {
      this.logout();
      this.$router.push("/auth/login");
    },
    ...mapMutations(["logout"])
  }
};
</script>

<style scoped>
.header {
  height: 80px;
  width: 80%;
  margin: auto;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #c3c3c3;
}

.header__nav {
  width: 40%;
}

.header__nav-link {
  margin-right: 30px;
  font-size: 16px;
}
</style>
