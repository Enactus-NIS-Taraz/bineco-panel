<template>
  <a-modal
    :visible="visible"
    @change="close"
    title="Add device"
    okText="Add"
    @ok="handleSubmit"
    :confirm-loading="loading"
  >
    <a-form-model
      :model="form"
      :rules="rules"
      ref="form"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 16 }"
    >
      <a-form-model-item label="Device code" prop="code">
        <a-input
          v-model="form.code"
          type="text"
          placeholder="Device activator code"
          disabled
        />
      </a-form-model-item>
      <a-form-model-item label="Address" prop="placeName">
        <a-input
          v-model="form.placeName"
          type="text"
          placeholder="Human readable address"
        />
      </a-form-model-item>
      <a-form-model-item label="Fullness" prop="fullness">
        <a-input
          v-model="form.fullness"
          type="number"
          min="0"
          max="1"
          step="0.1"
        />
      </a-form-model-item>
      <a-form-model-item style="margin: 0" label="X coords" prop="xCoords">
        <a-input v-model="form.xCoords" type="text" placeholder="X coords" />
      </a-form-model-item>
      <a-form-model-item label="Y coords" prop="yCoords">
        <a-input v-model="form.yCoords" type="text" placeholder="Y coords" />
        <a-button @click="setCurrentLocation">Set current position</a-button>
      </a-form-model-item>
      <a-form-model-item label="Active" prop="isActive">
        <a-switch v-model="form.isActive" />
      </a-form-model-item>
    </a-form-model>
  </a-modal>
</template>

<script>
import { createDevice } from "@/requests/devices";
import { mapActions } from "vuex";

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
      loading: false,
      form: {
        code: "",
        placeName: "",
        fullness: 0,
        xCoords: null,
        yCoords: null,
        isActive: true
      },
      rules: {
        placeName: [
          {
            required: true,
            message: "Please enter device address",
            trigger: "blur"
          }
        ],
        fullness: [
          {
            required: true,
            message: "Please enter default fullness",
            trigger: "blur"
          }
        ],
        xCoords: [
          {
            required: true,
            message: "Please set location coordinates",
            trigger: "blur"
          }
        ],
        yCoords: [
          {
            required: true,
            message: "Please set location coordinates",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit() {
      if (this.isValid()) {
        const device = {
          location: [this.form.xCoords, this.form.yCoords],
          fullness: this.form.fullness,
          isActive: this.form.isActive,
          placeName: this.form.placeName
        };
        this.loading = true;
        createDevice(device)
          .then(() => {
            this.fetchDevices().then(() => (this.loading = false));
          })
          .catch(() => (this.loading = false))
          .finally(this.close);
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
    },
    ...mapActions(["fetchDevices"])
  }
};
</script>

<style></style>
