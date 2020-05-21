<template>
  <nav class="nav">
    <router-link to="/" class="nav__item">
      <img src="@/assets/images/logo.svg" alt="Logo" class="nav__logo" />
    </router-link>
    <div class="nav__links">
      <router-link to="/" exact class="nav__link"
        ><a-icon type="area-chart" class="nav__icon"
      /></router-link>
      <router-link to="/devices/table" class="nav__link"
        ><a-icon type="table" class="nav__icon"
      /></router-link>
      <router-link to="/devices/map" class="nav__link"
        ><a-icon type="heat-map" class="nav__icon"
      /></router-link>
      <router-link to="#" class="nav__link"
        ><a-icon type="box-plot" class="nav__icon"
      /></router-link>
    </div>
    <div class="nav__footer">
      <router-link to="#" class="nav__link"
        ><a-icon type="logout" class="nav__icon"
      /></router-link>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  padding: 5vh 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.nav__item {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav__logo {
  width: 40%;
}

.nav__links {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav__link {
  margin-bottom: 20px;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.85);
  border-radius: 10px;
  transition: 300ms;
}

.nav__link.router-link-active,
.nav__link:hover {
  color: #ffffff;
  background-color: #1890ff;
}

.nav__icon {
  font-size: 26px;
}

.nav__footer > .nav__link {
  margin: 0;
}
</style>
