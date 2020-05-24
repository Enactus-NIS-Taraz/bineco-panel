<template>
  <div class="table">
    <a-table :columns="columns" :data-source="tableData" :pagination="false">
      <span slot="status" slot-scope="status">
        <a-tag v-if="status" color="green">ACTIVE</a-tag>
        <a-tag v-else color="volcano">NOT ACTIVE</a-tag>
      </span>
      <span slot="controls" slot-scope="record" class="table__controls">
        <a-icon type="edit" class="table__icon table__icon_edit" />
        <a-icon
          @click="showDeleteConfirm(record.id)"
          type="delete"
          class="table__icon table__icon_delete"
        />
      </span>
    </a-table>
    <a-row class="table__footer">
      <a-button type="primary">Add device</a-button>
    </a-row>
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
  },
  {
    key: "controls",
    scopedSlots: { customRender: "controls" }
  }
];

export default {
  data() {
    return {
      columns,
      requestInterval: null
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
    showDeleteConfirm(deviceId) {
      this.$confirm({
        title: "Are you sure delete this device?",
        content: "You will be able to connect device later using its code",
        okText: "Delete",
        okType: "danger",
        onOk: () => this.deleteDevice(deviceId).then(() => this.fetchDevices())
      });
    },
    ...mapActions([
      "fetchDevices",
      "fetchDevicesWithoutProgress",
      "deleteDevice"
    ])
  },
  beforeMount() {
    this.fetchDevices();
  },
  mounted() {
    const interval = 5000;
    this.requestInterval = setInterval(
      this.fetchDevicesWithoutProgress,
      interval
    );
  },
  beforeDestroy() {
    clearInterval(this.requestInterval);
  }
};
</script>

<style scoped>
.table__controls {
  display: flex;
}

.table__icon {
  display: block;
  margin-left: 10px;
  cursor: pointer;
}

.table__icon_edit {
  color: #faad14;
}

.table__icon_delete {
  color: #f5222d;
}

.table__footer {
  margin-top: 20px;
}
</style>
