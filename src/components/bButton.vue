<template>
  <button class="button" @click="logout">{{ buttonMessage }}</button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    buttonMessage: {
      type: String,
      required: true
    }
  },
  methods: mapActions(["logout"])
};
</script>

<style>
.button {
  width: 300px;
  height: 100px;
  color: white;
  font-size: 20px;
  text-decoration: none;
  border-radius: 10px;
  background-color: black;
  cursor: pointer;
}
</style>
