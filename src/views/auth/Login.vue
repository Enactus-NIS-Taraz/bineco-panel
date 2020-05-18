<template>
  <section class="login">
    <a-form-model class="login__form">
      <a-form-model
        :rules="rules"
        :model="form"
        @submit="handleSubmit"
        ref="form"
      >
        <h3 class="login__heading">Вход в личный кабинет</h3>
        <a-form-model-item label="Email" ref="email" prop="email">
          <a-input required v-model="form.email" placeholder="Email"></a-input>
        </a-form-model-item>
        <a-form-model-item label="Password" ref="password" prop="password">
          <a-input
            required
            v-model="form.password"
            type="password"
            placeholder="Password"
          ></a-input>
        </a-form-model-item>
        <a-button type="primary" html-type="submit" class="form-button"
          >Login</a-button
        >
      </a-form-model>
    </a-form-model>
  </section>
</template>

<script>
export default {
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
      if (this.isFormValid()) {
        const { email, password } = this.form;
        this.$store
          .dispatch("login", { email, password })
          .then(() => this.$router.push("/"));
      }
    },
    isFormValid() {
      let isValid = false;
      this.$refs.form.validate(valid => (isValid = valid));
      return isValid;
    }
  }
};
</script>

<style scoped>
.login {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login__form {
  width: 30%;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.login__heading {
  font-size: 25px;
}

@media all and (max-width: 1300px) {
  .login__form {
    width: 40%;
  }
}

@media all and (max-width: 900px) {
  .login__form {
    width: 60%;
  }
}

@media all and (max-width: 600px) {
  .login__form {
    width: 80%;
  }
}

@media all and (max-width: 400px) {
  .login__form {
    width: 90%;
  }
}
</style>
