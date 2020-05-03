<template>
  <div class="form">
    <div class="form__container">
      <a-form-model
        :rules="rules"
        :model="form"
        @submit="handleSubmit"
        ref="ruleForm"
      >
        <h3 class="form__heading">Вход в личный кабинет</h3>
        <a-form-model-item label="email" ref="email" prop="email">
          <a-input
            required
            v-model="form.email"
            type="email"
            placeholder="Email"
          ></a-input>
        </a-form-model-item>
        <a-form-model-item label="password" ref="password" prop="password">
          <a-input
            required
            v-model="form.password"
            type="password"
            placeholder="Password"
          ></a-input>
        </a-form-model-item>
        <a-button
          type="primary"
          html-type="submit"
          class="form-button"
          @click="handleSubmit"
          >Login</a-button
        >
      </a-form-model>
    </div>
  </div>
</template>

<script>
import { Input, Button } from "ant-design-vue";
import { FormModel } from "ant-design-vue";
import FormItem from "ant-design-vue/lib/form-model/FormItem";

export default {
  components: {
    "a-form-model": FormModel,
    "a-input": Input,
    "a-button": Button,
    "a-form-model-item": FormItem
  },

  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      rules: {
        email: [
          { required: true, message: "Please input email", trigger: "blur" }
        ],
        password: [
          { required: true, message: "Please input password", trigger: "blur" }
        ]
      }
    };
  },

  methods: {
    handleSubmit: function(e) {
      e.preventDefault();
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          let email = this.form.email;
          let password = this.form.password;
          this.$store
            .dispatch("login", { email, password })
            .then(() => this.$router.push("/profile"))
            .catch(err => console.log(err));
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  created() {
    if (this.$store.getters.isLoggedIn) {
      this.$router.push("/profile");
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
