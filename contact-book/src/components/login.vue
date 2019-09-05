<template>
  <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input
        type="email"
        v-model="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      />
      <small
        id="emailHelp"
        class="form-text text-muted"
      >We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input
        type="password"
        v-model="password"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="Password"
      />
    </div>

    <button v-on:click="loginUser" class="btn btn-primary">Submit</button>
  </form>
</template>


<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      token: ""
    };
  },
  methods: {
    loginUser: function() {
      console.log(this.email, this.password);
      // this.$router.push("/");

      this.$http
        .post("http://localhost:3000/api/login", {
          email: this.email,
          password: this.password
        })
        .then(response => {
          // (this.token = JSON.stringify(response)),
          console.log(response);
          localStorage.setItem("token", response);
          this.$router.push("/dashboard");
        })
        .catch(function(error) {
          console.error(error.response);
        });
    }
  }
};
</script>