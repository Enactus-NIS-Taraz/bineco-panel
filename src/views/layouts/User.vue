<template>
  <div class="user-layout">
    <nav class="user-layout__nav">This is nav</nav>
    <router-view class="user-layout__content" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.user-layout {
  width: 100%;
  display: flex;
  box-sizing: border-box;
}

.user-layout__nav {
  width: 20%;
}

.user-layout__content {
  width: 80%;
}
</style>
