<template>
  <form>

    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" v-model="name" class="form-control" id="name">
    </div>
    <div class="form-group">
      <label for="phone">Phone</label>
      <input type="text" v-model="phone" class="form-control" id="phone" />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" v-model="email" class="form-control" id="email" />
    </div>
    <div class="form-group">
      <label for="address">Address</label>
      <input type="text" v-model="address" class="form-control" id="address" />
    </div>

    <button v-on:click="updatecontact" class="btn btn-primary">Update contact</button>
  </form>
</template>

<script>
import { bus } from "../main";

export default {
  name: "Child",
  data() {
    return {
      contact: [],
      name: "",
      phone: "",
      address: "",
      email: ""
    };
  },
  created() {
    console.log('EDIT');
    
    bus.$on('detail',(data)=>{
      console.log(data);
      
      this.contact = data
    })
  },
  methods: {
    updatecontact: function() {
      console.log(this.contact)
      this.$http
        .post("http://localhost:3000/api/updatecontact", {
          name: this.name,
          phone: this.phone,
          address: this.address,
          email: this.email
        })
        .then(() => {
          this.$router.push("/dashboard");
        })
        .catch(function(error) {
          console.error(error.response);
        });
    },
    createdat(contact) {
      this.contact=contact
  },
  }
};
</script>