<template>
  <div class="main">
    <data-card
      title="Your Name"
      description="Please enter your full name, or a display name you are comfortable with."
      defaultValue="Sayazhan Onglassyn"
      footerDescription="Please use 32 characters at maximum."
    />
  </div>
</template>

<script>
import DataCard from "@/components/user/DataCard";

export default {
  components: {
    "data-card": DataCard
  }
};
</script>

<style></style>
