<template>
  <nav class="nav">
    <router-link to="/user" exact class="nav__link">Account</router-link>
    <router-link to="#" class="nav__link">Sessions</router-link>
    <router-link to="#" class="nav__link">Billing</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  display: flex;
  flex-direction: column;
}

.nav__link {
  margin-top: 10px;
  font-size: 15px;
  font-weight: 400;
  color: rgb(102, 102, 102);
  transition: 100ms;
}

.nav__link.router-link-active {
  font-weight: 700;
  color: rgba(0, 0, 0, 0.85);
}
</style>
