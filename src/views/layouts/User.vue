<template>
  <div class="user-layout">
    <side-nav class="user-layout__nav" />
    <router-view class="user-layout__content" />
  </div>
</template>

<script>
import SideNav from "@/components/user/Nav";

export default {
  components: {
    "side-nav": SideNav
  }
};
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
