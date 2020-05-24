<template>
  <a-modal :visible="visible" @change="$emit('change', false)"></a-modal>
</template>

<script>
export default {
  model: {
    prop: "visible",
    event: "change"
  },
  props: {
    visible: Boolean
  }
};
</script>

<style></style>
