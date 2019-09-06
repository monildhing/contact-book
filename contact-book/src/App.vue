<template>
   <div >
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> 
    </div> -->
    <router-view></router-view>
  </div>
</template>
<script>
import login from './components/login'
import register from './components/register'
import dashboard from './components/dashboard'
import hello from './components/HelloWorld'
import logout from './components/logout'
import addcontact from './components/addcontact'
import editcontact from './components/editcontact'

export default {
  components:{
   'login': login,
    'register':register,
    'dashboard':dashboard,
    'logout':logout,
    'hello': hello,
    'addcontact':addcontact,
    'editcontact':editcontact
  },
  
    methods: {
      
    },
   
   
  }
  


</script>
<style lang="scss">
</style>
