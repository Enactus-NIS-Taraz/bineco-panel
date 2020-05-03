<template>
  <header class="header">
    <div class="nav-bar">
      <router-link class="nav-bar__link" to="/profile">Профиль</router-link>
      <router-link class="nav-bar__link" to="/map">Карта</router-link>
      <router-link class="nav-bar__link" to="/catalog">каталог</router-link>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
.header {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
}

.nav-bar {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.nav-bar__link {
  font-size: 20px;
  color: white;
  text-decoration: none;
}
</style>
