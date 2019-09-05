<template>
  <form>
    <div class="form-group">
      <label for="name">Name</label>
      <input
        type="text"
        v-model="name"
        class="form-control"
        id="name"
        placeholder="Enter name"
      />
    </div>
    <div class="form-group">
      <label for="phone">Phone</label>
      <input
        type="text"
        v-model="phone"
        class="form-control"
        id="phone"
        placeholder="Enter phone"
      />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="email"
        v-model="email"
        class="form-control"
        id="email"
        placeholder="Enter email"
      />
    </div><div class="form-group">
      <label for="address">Address</label>
      <input
        type="text"
        v-model="address"
        class="form-control"
        id="address"
        placeholder="Enter address"
      />
    </div>

    <button v-on:click="addcontact" class="btn btn-primary">Add contact</button>
  </form>
</template>


<script>
export default {
  data() {
    return {
      name: "",
      phone:"",
      email:"",
      address:""
    };
  },
  methods: {
    addcontact: function() {
      

      this.$http
        .post("http://localhost:3000/api/addcontact", {
          name:this.name,
          phone:this.phone,
          address:this.address,
          email: this.email,
        })
        .then(()=>{
          this.$router.push("/dashboard");
        })
        .catch(function(error) {
          console.error(error.response);
        });
    }
  }
};
</script>