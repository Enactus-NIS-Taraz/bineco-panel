<template>
  <a-modal
    :visible="visible"
    @change="close"
    title="Add device"
    okText="Add"
    @ok="handleSubmit"
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
        <a-input v-model="form.fullness" type="number" />
      </a-form-model-item>
      <a-form-model-item label="Coordinates" prop="coords">
        <a-input v-model="form.coords.x" type="text" placeholder="X coords" />
        <a-input v-model="form.coords.y" type="text" placeholder="Y coords" />
      </a-form-model-item>
      <a-form-model-item label="Active" prop="isActive">
        <a-switch v-model="form.isActive" />
      </a-form-model-item>
    </a-form-model>
  </a-modal>
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
      form: {
        code: "",
        placeName: "",
        fullness: 0,
        coords: {
          x: null,
          y: null
        },
        isActive: true
      },
      rules: {}
    };
  },
  methods: {
    handleSubmit() {
      console.log("Modal is submitted");
    },
    close() {
      this.$emit("change", false);
    }
  }
};
</script>

<style></style>
