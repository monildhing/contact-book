<template>
  <div>
    <!-- <div v-for="alpha in alphabets">{{alpha}}</div> -->
    <!-- Toggle Update Contact -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Edit Contact</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" v-model="editedContact.name" class="form-control" id="name" />
              </div>
              <div class="form-group">
                <label for="phone">Phone</label>
                <input type="text" v-model="editedContact.phone" class="form-control" id="phone" />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" v-model="editedContact.email" class="form-control" id="email" />
              </div>
              <div class="form-group">
                <label for="address">Address</label>
                <input
                  type="text"
                  v-model="editedContact.address"
                  class="form-control"
                  id="address"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button
              type="button"
              class="btn btn-primary"
              v-on:click="save(editedContact)"
            >Save changes</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Toogle ADD Contact -->
    <div
      class="modal fade"
      id="exampleModal1"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Contact</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" v-model="addContact.name" class="form-control" id="name" />
              </div>
              <div class="form-group">
                <label for="phone">Phone</label>
                <input type="text" v-model="addContact.phone" class="form-control" id="phone" />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" v-model="addContact.email" class="form-control" id="email" />
              </div>
              <div class="form-group">
                <label for="address">Address</label>
                <input type="text" v-model="addContact.address" class="form-control" id="address" />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button
              type="button"
              class="btn btn-primary"
              v-on:click="addcontact(addContact)"
            >Save changes</button>
          </div>
        </div>
      </div>
    </div>
<!-- 
    Contact info modal -->
        <div
      class="modal fade"
      id="exampleModal2"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel2"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel"><i class="fa fa-id-card" aria-hidden="true"></i>Contact Info</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h6><i class="fas fa-user-circle"></i>Name:{{editedContact.name}}</h6>
              <h6><i class="fas fa-phone-alt"></i>{{editedContact.phone}}</h6>
              <h6><i class="fas fa-envelope-open-text"></i>{{editedContact.email}}</h6>
              <h6><i class="fas fa-home"></i>{{editedContact.address}}</h6>
          </div>
          
        </div>
      </div>
    </div>

    <!-- Contact Dashboard -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><i class="fa fa-address-book" aria-hidden="true"></i>Contactbook</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
       <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal1"
        ><i class="fa fa-user-plus" aria-hidden="true"></i></button>
      </li>
      <li class="nav-item">    
        <button  class="btn btn-primary" v-on:click="logout"><i class="fa fa-sign-out" aria-hidden="true"></i>Logout</button>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="search"  >
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    <div class="header">
      <!-- <a href="#default" class="logo">contact-book</a>
      <div class="header-right">
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal1"
        >Add Contact</button>
        <!-- <a v-on:click="addContact">Add Contact</a> -->
        <!-- <a v-on:click="logout">Logout</a>
        <input type="text" v-model="search" placeholder="search contact" /> -->
        <!-- <button @click="filteredContacts">click</button> -->
      <!-- </div> --> 
    </div>
    <br />
    <div class="main">
      <br />
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Address</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="contact in filterContacts" data-toggle="modal" data-target="#exampleModal2" v-on:click="editContact(contact)">
              <td>
                <strong class="contact-name">{{contact.name}}</strong>
              </td>
              <td>{{contact.phone}}</td>
              <td>{{contact.email}}</td>
              <td>{{contact.address}}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  v-on:click="editContact(contact)"
                ><i class="fa fa-pencil-square-o" aria-hidden="true"></i>Edit</button>
                <button class="btn btn-primary" v-on:click="deleteContact(contact._id)"><i class="fa fa-trash" aria-hidden="true"></i>Delete</button>
                <!-- <button class="btn-c" v-on:click="editContact(contact)">Edit</button> -->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "dashboard",
  data() {
    return {
      
      contacts: [],
      search: "",
      contact: {
        name: "",
        phone: "",
        address: "",
        email: ""
      },
      editedContact: {
        name: "",
        phone: "",
        address: "",
        email: "",
        uemail:''
      },
      addContact: {
        name: "",
        phone: "",
        address: "",
        email: "",
        uemail:""
      },
      sortDirection: "ASC",
      // alphabets:['A','B','C','D','E','F','G','H','I','J','K']
    };
  },

  created() {
    this.getContacts();
       
  },

  computed: {
    filterContacts: function() {
      console.log(this.contacts,"filter");
      
      return this.contacts.filter(c => {
        return c.name.match(this.search);
      });
    }
  },
  methods: {
    sortCompaniesByName: function() {
      this.contacts.sort(
        function(a, b) {
          if (this.sortDirection == "ASC") {
            return a.name == b.name ? 0 : a.name > b.name ? 1 : -1;
          }

          if (this.sortDirection == "DESC") {
            return a.name == b.name ? 0 : a.name < b.name ? 1 : -1;
          }
        }.bind(this)
      );
    },
    deleteContact: function(id) {
      console.log(id);
      let url = "http://localhost:3000/api/delete/" + id;
      this.$http.delete(url).then(() => {
        this.getContacts();
        // this.$http
        // .get("http://localhost:3000/api/getcontact")
        // .then(function(data) {
        //   console.log(data.body);
        //   this.contacts = data.body;import {bus} from "../main"
        // });
      });
    },
    editContact: function(econtact) {
      econtact.uemail=localStorage.getItem("user")
      console.log(econtact);
      this.editedContact = econtact;
    },
    save: function(editcontact) {
      console.log(editcontact, "Save");

      this.$http
        .post("http://localhost:3000/api/updatecontact", { editcontact })
        .then(data => {
          console.log(data);

          this.$router.push("/dashboard");
        })
        .catch(function(error) {
          console.error(error.response);
        });
    },
    logout: function() {
      localStorage.removeItem("token");
      this.$router.push("/");
    },
    addcontact: function(addContact) {
      console.log(addContact);
      addContact.uemail=localStorage.getItem("user");
      this.$http
        .post("http://localhost:3000/api/addcontact", {
          addContact
        })
        .then((data) => {
           window.location.reload();
        })
        .catch(function(error) {
          console.error(error.response);
        });
    },
    getContacts: function() {
      let uemai=localStorage.getItem("user");
      this.$http
        .get("http://localhost:3000/api/getcontact/"+uemai)
        .then(function(data) {
          console.log(data.body.contact,"get data");
          this.contacts = data.body.contact;
        });
    },
    showsearch() {
      console.log(this.search);
    }
  }
};
</script>