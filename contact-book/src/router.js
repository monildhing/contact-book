
import addcontact from "./components/addcontact.vue"
import dashboard from "./components/dashboard.vue"
import hello from "./components/HelloWorld.vue"
import login from "./components/login.vue"
import register from "./components/register.vue"
import Router from 'vue-router'

import Vue from 'vue';

import editcontact from './components/editcontact.vue'

Vue.use(Router)


const router = new Router({
  // mode: "history",
  routes: [{
      path: '/hello',

      component: hello
    },
    {
      path: '/',

      component: login,
      meta: {

        requiresAuth: false
      }
    },
    // {
    //   path: '/register',

    //   component: register,
    //   meta: {
    //     guest: true
    //   }
    // },
    {
      path: '/dashboard',

      component: dashboard,
      meta: {
        requiresAuth: true
      }

    },
    // {
    //   path: '/addcontact',

    //   component: addcontact,

    // },
    // {
    //   path: '/editcontact',

    //   component: editcontact,

    // }

  ],

})
router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (localStorage.getItem("token") == null) {
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router;