<template>
  <yandex-map :settings="settings" :coords="coords" :zoom="zoom" class="map">
    <ymap-marker
      v-for="device in devices"
      :key="device._id"
      :markerId="device._id"
      marker-type="Placemark"
      :hint-content="device.isActive ? 'Active' : 'Inactive'"
      :coords="device.location"
      :balloon="{
        header: 'Device ID: ' + device._id,
        body: 'Fullness: ' + device.fullness,
        footer: 'Adress: ' + device.placeName
      }"
      :icon="{ color: markerColor(device.fullness) }"
    />
  </yandex-map>
</template>

<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";
import config from "@/config/config";
import { mapActions, mapGetters } from "vuex";

const settings = {
  apiKey: config.ymapApiKey,
  lang: "ru_RU",
  coordorder: "latlong",
  version: "2.1"
};

export default {
  components: {
    yandexMap,
    ymapMarker
  },
  data() {
    return {
      settings,
      coords: [42.881309040491736, 71.3762154736328],
      zoom: 12
    };
  },
  computed: {
    ...mapGetters(["devices"])
  },
  methods: {
    ...mapActions(["fetchDevices"]),
    markerColor(fullness) {
      if (fullness < 30) {
        return "green";
      } else if (fullness > 30 && fullness < 60) {
        return "yellow";
      } else {
        return "red";
      }
    }
  },
  beforeMount() {
    this.fetchDevices();
  }
};
</script>

<style scoped>
.map {
  height: 65vh;
}
</style>
