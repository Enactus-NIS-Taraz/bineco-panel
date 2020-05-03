<template>
  <div class="main">
    <b-header></b-header>
    <h1>Профиль пользователя</h1>
    <b-button buttonMessage="Выход"></b-button>
  </div>
</template>

<script>
import Header from "../components/Header";
import bButton from "../components/bButton";

export default {
  components: {
    "b-header": Header,
    "b-button": bButton
  }
};
</script>

<style></style>
