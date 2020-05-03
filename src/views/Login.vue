<template>
  <div class="form">
    <div class="form__container">
      <a-form @submit="handleSubmit" :form="form">
        <h3 class="form__heading">Вход в личный кабинет</h3>
        <a-form-item label="email">
          <a-input
            required
            v-model="email"
            type="email"
            placeholder="Email"
            v-decorator="[
              'email',
              {
                rules: [{ required: true, message: 'Please input your note!' }]
              }
            ]"
          ></a-input>
        </a-form-item>
        <a-form-item label="password">
          <a-input
            required
            v-model="password"
            type="password"
            placeholder="Password"
            v-decorator="[
              'password',
              {
                rules: [{ required: true, message: 'Please input your note!' }]
              }
            ]"
          ></a-input>
        </a-form-item>
        <a-button
          type="primary"
          html-type="submit"
          class="form-button"
          @click="handleSubmit"
        >
          Login</a-button
        >
      </a-form>
    </div>
  </div>
</template>

<script>
import { Form, Input, Button } from "ant-design-vue";
import FormItem from "ant-design-vue/lib/form/FormItem";

export default {
  components: {
    "a-form": Form,
    "a-input": Input,
    "a-button": Button,
    "a-form-item": FormItem
  },

  data() {
    return {
      email: "",
      password: "",
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" })
    };
  },
  methods: {
    // login: function() {

    // },
    handleSubmit: function(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
      let email = this.email;
      let password = this.password;
      this.$store
        .dispatch("login", { email, password })
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
.form {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/email-pattern.png");
  background-repeat: repeat;
}

.form__heading {
  font-size: 35px;
}

.form__container {
  /* width: 40vw; */
  /* height: 30vw; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-radius: 5%;
  background-color: #B5EFDF; */
  /* border: 1px solid red; */
}
</style>
