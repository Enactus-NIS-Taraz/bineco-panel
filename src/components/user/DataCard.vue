<template>
  <div class="data-card">
    <h3 class="data-card__title">{{ title }}</h3>
    <p class="data-card__description">{{ description }}</p>
    <a-input type="text" class="data-card__input" v-model="value" />
    <footer class="data-card__footer">
      <p class="data-card__footer-description">{{ footerDescription }}</p>
      <a-button type="primary">Save</a-button>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    defaultValue: String,
    footerDescription: String
  },
  data() {
    return {
      value: this.defaultValue
    };
  }
};
</script>

<style scoped>
.data-card {
  border-radius: 10px;
  border: 1px solid #e2e2e2;
}

.data-card__title {
  margin: 15px 0 0 30px;
  font-size: 18px;
  font-weight: 500;
}

.data-card__description,
.data-card__input {
  margin-left: 30px;
}

.data-card__description {
  margin-top: 15px;
}

.data-card__input {
  width: 300px;
}

.data-card__footer {
  height: 70px;
  margin-top: 20px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fafafa;
}

.data-card__footer-description {
  margin: 0;
}
</style>
