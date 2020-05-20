<template>
  <div class="layout">
    <c-nav class="layout__nav" />
    <div class="layout__content">
      <c-header class="layout__header" />
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from "@/components/common/nav/Nav";
import Header from "@/components/common/header/Header";

export default {
  components: {
    "c-nav": Nav,
    "c-header": Header
  }
};
</script>

<style scoped>
.layout {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.layout__nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 8%;
  height: 100vh;
  box-sizing: border-box;
}

.layout__content {
  width: 92%;
  padding: 20px 50px;
}
</style>
