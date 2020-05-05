<template>
  <div>
    <c-header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/common/header/Header";

export default {
  components: {
    "c-header": Header
  }
};
</script>

<style></style>
