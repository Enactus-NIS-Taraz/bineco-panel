<template>
  <div class="table">
    <a-table :columns="columns" :data-source="tableData" :pagination="false">
      <span slot="status" slot-scope="status">
        <a-tag v-if="status" color="green">ACTIVE</a-tag>
        <a-tag v-else color="volcano">NOT ACTIVE</a-tag>
      </span>
    </a-table>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

const columns = [
  {
    title: "Device ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Fullness",
    dataIndex: "fullness",
    key: "fullness"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    scopedSlots: { customRender: "status" }
  }
];

export default {
  data() {
    return {
      columns
    };
  },
  computed: {
    tableData() {
      return this.devices.map(device => ({
        key: device._id,
        id: device._id,
        fullness: device.fullness,
        address: device.placeName,
        status: device.isActive
      }));
    },
    ...mapGetters(["devices"])
  },
  methods: {
    ...mapActions(["fetchDevices"])
  },
  beforeMount() {
    this.fetchDevices();
  }
};
</script>
