<template>
  <a-modal
    :visible="visible"
    @change="close"
    title="Edit device"
    okText="Change"
    @ok="handleSubmit"
    :confirm-loading="loading"
  ></a-modal>
</template>

<script>
export default {
  model: {
    prop: "visible",
    event: "change"
  },
  props: {
    visible: Boolean
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    handleSubmit() {
      if (this.isValid()) {
        console.log("Submitting");
      }
    },
    close() {
      this.$emit("change", false);
    },
    isValid() {
      let isValid = false;
      this.$refs.form.validate(valid => (isValid = valid));
      return isValid;
    },
    setCurrentLocation() {
      navigator.geolocation.getCurrentPosition(position => {
        this.form.xCoords = position.coords.latitude;
        this.form.yCoords = position.coords.longitude;
      });
    }
  }
};
</script>

<style></style>
