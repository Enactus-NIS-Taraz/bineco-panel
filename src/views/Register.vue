<template>
  <div>
    <h4>Register</h4>
    <form @submit.prevent="register">
      <label for="firstName">Name</label>
      <div>
        <input
          id="firstName"
          type="text"
          v-model="firstName"
          required
          autofocus
        />
      </div>

      <label for="lastName">lastName</label>
      <div>
        <input
          id="lastName"
          type="text"
          v-model="lastName"
          required
          autofocus
        />
      </div>

      <label for="email">E-Mail Address</label>
      <div>
        <input id="email" type="email" v-model="email" required />
      </div>

      <label for="password">Password</label>
      <div>
        <input id="password" type="password" v-model="password" required />
      </div>

      <!-- <label for="password-confirm">Confirm Password</label>
      <div>
        <input
          id="password-confirm"
          type="password"
          v-model="password_confirmation"
          required
        />
      </div> -->

      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
      // password_confirmation: ""
    };
  },
  methods: {
    register: function() {
      let data = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      };
      this.$store
        .dispatch("register", data)
        .then(() => this.$router.push("/"))
        .catch(err => console.log(err));
    }
  }
};
</script>
