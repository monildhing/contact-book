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

import dashboard from './components/dashboard'
import hello from './components/HelloWorld'


export default {
  components:{
   'login': login,
    
    'dashboard':dashboard,
    
    'hello': hello,
    
  },
  
    methods: {
      
    },
   
   
  }
  


</script>
<style lang="scss">
</style>
