<template>
  <header class="header">
    <div class="header__item">
      <a-select value="1" class="header__select">
        <a-select-option value="1">Workplace #1</a-select-option>
        <a-select-option value="2">Workplace #2</a-select-option>
        <a-select-option value="3">Workplace #3</a-select-option>
        <a-select-option value="4">Workplace #4</a-select-option>
      </a-select>
      <a-button type="primary" class="header__create-workplace-button"
        >Join workplace</a-button
      >
    </div>
    <div class="header__item">
      <a-badge count="5" class="header__notifications">
        <a-icon type="bell" class="header__notifications-icon" />
      </a-badge>
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
import { mapMutations } from "vuex";

export default {
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
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__item {
  display: flex;
}

.header__select {
  width: 200px;
}

.header__create-workplace-button {
  margin-left: 20px;
}

.header__notifications {
  margin-right: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.header__notifications-icon {
  font-size: 26px;
}
</style>
