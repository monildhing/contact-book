<template>
  <!-- Login Working -->
  <!-- <form>
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
  </form>-->
  <!--Modal: Login / Register Form-->
  <div>
    <div
      class="modal fade"
      id="modalLRForm"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog cascading-modal" role="document">
        <!--Content-->
        <div class="modal-content">
          <!--Modal cascading tabs-->
          <div class="modal-c-tabs">
            <!-- Nav tabs -->
            <ul class="nav nav-tabs md-tabs tabs-2 light-blue darken-3" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#panel7" id="lbut" role="tab">
                  <i class="fas fa-user mr-1"></i>
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#panel9" role="tab" id="rbut1">
                  <i class="fas fa-user-plus mr-1"></i>
                  Forgot
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#panel8" role="tab" id="rbut">
                  <i class="fas fa-user-plus mr-1"></i>
                  Register
                </a>
              </li>
            </ul>

            <!-- Tab panels -->
            <div class="tab-content">
              <!--Panel 7-->
              <div class="tab-pane fade in show active" id="panel7" role="tabpanel">
                <!--Body-->
                <div class="modal-body mb-1">
                  <div class="md-form form-sm mb-5">
                    <i class="fas fa-envelope prefix"></i>
                    <label data-error="wrong" data-success="right" for="modalLRInput10">Email</label>
                    <input
                      type="email"
                      v-model="email"
                      id="modalLRInput10"
                      class="form-control form-control-sm validate"
                    />
                  </div>

                  <div class="md-form form-sm mb-4">
                    <i class="fas fa-lock prefix"></i>
                    <label data-error="wrong" data-success="right" for="modalLRInput11">Password</label>
                    <input
                      type="password"
                      id="modalLRInput11"
                      v-model="password"
                      class="form-control form-control-sm validate"
                    />
                  </div>
                  <div class="text-center mt-2">
                    <button
                      class="btn btn-info"
                      @click="loginUser"
                      data-dismiss="modal"
                      data-backdrop="static"
                    >
                      Log in
                      <i class="fas fa-sign-in ml-1"></i>
                    </button>
                  </div>
                </div>
                <!--Footer-->
                <div class="modal-footer">
                  <div class="options text-center text-md-right mt-1">
                    <p>
                      Not a member?
                      <a data-toggle="tab" href="#panel8" class="blue-text">Sign Up</a>
                    </p>
                    <p>
                      Forgot
                      <a data-toggle="tab" href="#panel9" class="blue-text">Password?</a>
                    </p>
                  </div>
                  <button
                    type="button"
                    class="btn btn-outline-info waves-effect ml-auto"
                    data-dismiss="modal"
                    data-backdrop="static"
                  >Close</button>
                </div>
              </div>
              <!--/.Panel 7-->

              <!--Panel 8-->
              <div class="tab-pane fade" id="panel8" role="tabpanel">
                <!--Body-->
                <div class="modal-body">
                  <div class="md-form form-sm mb-5">
                    <i class="fas fa-envelope prefix"></i>
                    <label data-error="wrong" data-success="right" for="modalLRInput12">Your Name</label>
                    <input
                      type="text"
                      id="modalLRInput121"
                      v-model="Rname"
                      class="form-control form-control-sm validate"
                    />
                  </div>
                  <div class="md-form form-sm mb-5">
                    <i class="fas fa-envelope prefix"></i>
                    <label data-error="wrong" data-success="right" for="modalLRInput12">Your email</label>
                    <input
                      type="email"
                      id="modalLRInput122"
                      v-model="Remail"
                      class="form-control form-control-sm validate"
                    />
                  </div>

                  <div class="md-form form-sm mb-5">
                    <i class="fas fa-lock prefix"></i>
                    <label
                      data-error="wrong"
                      data-success="right"
                      for="modalLRInput133"
                    >Your password</label>
                    <input
                      type="password"
                      id="modalLRInput133"
                      v-model="Rpassword"
                      class="form-control form-control-sm validate"
                    />
                  </div>

                  <div class="md-form form-sm mb-4">
                    <i class="fas fa-lock prefix"></i>
                    <label
                      data-error="wrong"
                      data-success="right"
                      for="modalLRInput144"
                    >Repeat password</label>
                  </div>
                  <input
                    type="password"
                    v-model="Rpassword_confirmation"
                    id="modalLRInput144"
                    class="form-control form-control-sm validate"
                  />

                  <div class="text-center form-sm mt-2">
                    <button class="btn btn-info" @click="registerbn" data-dismiss="modal">
                      Sign up
                      <!-- <i class="fas fa-sign-in ml-1"></i> -->
                    </button>
                  </div>
                </div>
                <!--Footer-->
                <div class="modal-footer">
                  <div class="options text-right">
                    <p class="pt-1">
                      Already have an account?
                      <a
                        data-toggle="tab"
                        href="#panel7"
                        class="blue-text"
                      >Log In</a>
                    </p>
                  </div>
                  <button
                    type="button"
                    class="btn btn-outline-info waves-effect ml-auto"
                    data-dismiss="modal"
                  >Close</button>
                </div>
              </div>
              <!--/.Panel 8-->

              <!--Panel 9-->
              <div class="tab-pane fade " id="panel9" role="tabpanel">
                <!--Body-->
                <div class="modal-body mb-1">
                  <div class="md-form form-sm mb-5">
                    <i class="fas fa-envelope prefix"></i>
                    <label data-error="wrong" data-success="right" for="modalLRInput10">Email</label>
                    <input
                      type="email"
                      v-model="femail"
                      id="modalLRInput10"
                      class="form-control form-control-sm validate"
                    />
                  </div>

                  <div class="text-center mt-2">
                    <button
                      class="btn btn-info"
                      @click="forgot(femail)"
                      data-dismiss="modal"
                      data-backdrop="static"
                    >
                      Forgot
                      <i class="fas fa-sign-in ml-1"></i>
                    </button>
                  </div>
                </div>
                <!--Footer-->
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-outline-info waves-effect ml-auto"
                    data-dismiss="modal"
                    data-backdrop="static"
                  >Close</button>
                </div>
              </div>
              <!--/.Panel 9-->
            </div>
          </div>
        </div>
        <!--/.Content-->
      </div>
    </div>
    <!--Modal: Login / Register Form-->

    <div class="text-center">
      <a
        href
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#modalLRForm"
        id="Launch"
      >Launch LogIn/Register</a>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      token: "",
      Rname: "",
      Remail: "",
      Rpassword: "",
      Rpassword_confirmation: "",
      femail: ""
    };
  },
  methods: {
    registerbn: function() {
      let data = {
        name: this.Rname,
        email: this.Remail,
        password: this.Rpassword
      };

      localStorage.setItem("user", this.Remail);
      this.$http
        .post("http://192.1.200.61:3000/api/register", data)
        .then(response => {
          // (this.token = JSON.stringify(response)),
          console.log(response);
          localStorage.setItem("token", response);
          this.$router.push("/dashboard");
          this.$toaster.success("Registered Successfully");
        })
        .catch(function(error) {
          console.error(error.response);
          this.$toaster.error("Invalid Username or details.");
        });
    },
    forgot: function(femail) {
      console.log(femail);
      Name;

      this.$http
        .post("http://192.1.200.61:3000/api/forgot", { femail })
        .then(response => {
          this.$toaster.success("Email sent to registered mail");
        });
    },
    loginUser: function() {
      console.log(this.email, this.password);
      // this.$router.push("/");
      localStorage.setItem("user", this.email);
      // localStorage.setItem("password",this,password)
      this.$http
        .post("http://192.1.200.61:3000/api/login", {
          email: this.email,
          password: this.password
        })
        .then(response => {
          // (this.token = JSON.stringify(response)),
          console.log(response);
          localStorage.setItem("token", response);
          this.$router.push("/dashboard");
          this.$toaster.success("Lgged in");
        })
        .catch(function(error) {
          this.$toaster.error("Invalid Username or Password.");
          console.error(error.response);
        });
    }
  }
};
</script>
<style scoped>
#Launch {
  margin-top: 250px;
}
#lbut {
  margin-right: 5px;
  background-color: rgb(103, 192, 103);
}
#rbut {
  background-color: rgb(103, 192, 103);
  margin-left: 5px;
}
#rbut1 {
  background-color: rgb(103, 192, 103);
  /* margin-left: 5px; */
}

</style>