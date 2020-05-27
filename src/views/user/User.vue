<template>
  <div class="user">
    <data-card
      class="user__data-card"
      title="Your Name"
      description="Please enter your full name, or a display name you are comfortable with."
      defaultValue="Sayazhan Onglassyn"
      footerDescription="Please use 32 characters at maximum."
    />
    <data-card
      class="user__data-card"
      title="Your Email"
      description="Please enter the email address you want to use to log in with BinEco Dashboard."
      defaultValue="test@mail.ru"
      footerDescription="We will email you to verify the change."
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

<style scoped>
.user__data-card {
  margin-bottom: 20px;
}
</style>
