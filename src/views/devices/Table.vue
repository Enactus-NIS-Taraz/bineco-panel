<template>
  <div class="table">
    <a-table :columns="columns" :data-source="data">
      <span slot="status" slot-scope="status">
        <a-tag :color="status === 'full' ? 'volcano' : 'green'">{{
          status.toUpperCase()
        }}</a-tag>
      </span>
    </a-table>
  </div>
</template>
<script>
const columns = [
  {
    title: "Owner",
    dataIndex: "owner",
    key: "owner"
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

const data = [
  {
    key: "1",
    owner: "sayazhan.onlassyn@mail.ru",
    fullness: 0.3,
    address: "New York No. 1 Lake Park",
    status: "full"
  },
  {
    key: "2",
    owner: "sayazhan.onlassyn@mail.ru",
    fullness: 0.5,
    address: "London No. 1 Lake Park",
    status: "empty"
  },
  {
    key: "3",
    owner: "sayazhan.onlassyn@mail.ru",
    fullness: 0.6,
    address: "Sidney No. 1 Lake Park",
    status: "full"
  }
];

export default {
  data() {
    return {
      data,
      columns
    };
  }
};
</script>
