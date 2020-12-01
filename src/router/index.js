import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import contact from "../views/contact.vue";

import Products from "../views/Products.vue";
//import product from "../views/product.vue";
import Profile from "../views/Profile.vue";

import Login from "../views/Login.vue";
<<<<<<< HEAD
import myaccount from "../views/myaccount.vue";//methanai 
=======
import myaccount from "../views/myaccount.vue";
>>>>>>> da3ce47270e417b0893ec02541df50fd8c747413
import Payment from "../views/Payment.vue";
import AdminLogin from "../views/AdminLogin.vue";


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
    path: "/AdminLogin",
    name: "AdminLogin",
   
    component: () =>
      import( "../views/AdminLogin.vue")
    },
      
  {
    path: "/myaccount",
    name: "myaccount",
    meta:{requiresAuth:true},
    component: () =>
<<<<<<< HEAD
      import("../views/myaccount.vue")//menna mekei
=======
      import("../views/myaccount.vue")
>>>>>>> da3ce47270e417b0893ec02541df50fd8c747413
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
    meta:{reqAuth:true},
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


router.beforeEach((to,from,next)=>{
  const reqAuth =to.matched.some(x => x.meta.reqAuth)
  const currentUser =fb.auth().currentUser

  if(reqAuth && !currentUser){
    next('/AdminLogin')
  }else if (reqAuth && currentUser){
    next()
  }else {
    next()
  }
})


