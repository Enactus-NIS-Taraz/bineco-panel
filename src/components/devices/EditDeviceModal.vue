<template>
  <a-modal
    :visible="visible"
    @change="close"
    title="Edit device"
    okText="Change"
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
      <a-form-model-item label="Address" prop="placeName">
        <a-input
          v-model="form.placeName"
          type="text"
          placeholder="Human readable address"
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
import { editDevice } from "@/requests/devices";
import { mapActions } from "vuex";

export default {
  model: {
    prop: "visible",
    event: "change"
  },
  props: {
    visible: Boolean,
    device: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      loading: false,
      deviceId: this.device.id,
      form: {
        placeName: this.device.address,
        xCoords: this.device.location[0],
        yCoords: this.device.location[1],
        isActive: this.device.status
      },
      rules: {
        placeName: [
          {
            required: true,
            message: "Please enter device address",
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
        this.loading = true;
        const device = {
          placeName: this.form.placeName,
          isActive: this.form.isActive,
          location: [this.form.xCoords, this.form.yCoords]
        };
        editDevice(this.deviceId, device)
          .then(() => this.fetchDevices().then(() => (this.loading = false)))
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
