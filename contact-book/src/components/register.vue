<template>
  <div>
    <h4>Register</h4>
    <form @submit.prevent="register">
      <label for="name">Name</label>
      <div>
          <input id="name" type="text" v-model="name" required autofocus>
      </div>

      <label for="email" >E-Mail Address</label>
      <div>
          <input id="email" type="email" v-model="email" required>
      </div>

      <label for="password">Password</label>
      <div>
          <input id="password" type="password" v-model="password" required>
      </div>

      <label for="password-confirm">Confirm Password</label>
      <div>
          <input id="password-confirm" type="password" v-model="password_confirmation" required>
      </div>

      <div>
          <button v-on:click="register">Register</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
    data(){
      return {
        name : "",
        email : "",
        password : "",
        password_confirmation : "",
        is_admin : null
      }
    },
    methods: {
      register: function () {
        let data = {
          name: this.name,
          email: this.email,
          password: this.password,
          is_admin: this.is_admin
        }
        this.$http
        .post("http://localhost:3000/api/login",data)
        .then(response => {
          // (this.token = JSON.stringify(response)),
          console.log(response);
          localStorage.setItem("token", response);
          this.$router.push("/hello");
        })
        .catch(function(error) {
          console.error(error.response);
        });
      }
    }
 
};
</script>