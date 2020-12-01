import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import contact from "../views/contact.vue";

import Products from "../views/Products.vue";
import product from "../views/product.vue";
import Profile from "../views/Profile.vue";

import Login from "../views/Login.vue";
import myaccount from "../views/myaccount.vue";//methanai 
import Payment from "../views/Payment.vue";


import {fb} from '../firebase';

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
  path: "/product",
  name: "product",
 
  component: () =>
    import( "../views/product.vue")
  },
  {
    path: "/myaccount",
    name: "myaccount",
    meta:{requiresAuth:true},
    component: () =>
      import("../views/myaccount.vue")//menna mekei
    },
  {
    path: "/checkout",
    name: "checkout",
    meta:{requiresAuth:true},
    component: () =>
      import( "../views/Checkout.vue")
  },
  {
    path: "/admin",
    name: "admin",
    meta:{requiresAuth:true},
    component: Admin,
    children:[
   

    {
      path: "Products",
      name: "Products",
      component: Products
    },
    {
      path: "profile",
      name: "profile",
      component: Profile
    },
  
    
  ]
  },

  {
    path: "/contact",
    name: "contact",
   
    component: () =>
      import( "../views/contact.vue")
    },
    
  {
    path: "/Login",
    name: "Login",
   
    component: () =>
      import("../views/Login.vue")
    },
    {
      path: "/Payment",
      name: "Payment",
     
      component: () =>
        import( "../views/Payment.vue")
      },
   
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

router.beforeEach((to,from,next)=>{
  const requiresAuth =to.matched.some(x => x.meta.requiresAuth)
  const currentUser =fb.auth().currentUser

  if(requiresAuth && !currentUser){
    next('/Login')
  }else if (requiresAuth && currentUser){
    next()
  }else {
    next()
  }
})


