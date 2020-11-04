import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import contact from "../views/contact.vue";
import Overview from "../views/Overview.vue";
import Products from "../views/Products.vue";
import product from "../views/product.vue";
import Profile from "../views/Profile.vue";
import Orders from "../views/Orders.vue";

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
    import(/* webpackChunkName: "about" */ "../views/product.vue")
  },
  {
    path: "/checkout",
    name: "checkout",
  
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
      path: "Overview",
      name: "Overview",
      component: Overview
    },

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
    {
      path: "orders",
      name: "orders",
      component: Orders
    },
    
    
   

  ]
  },

  {
    path: "/contact",
    name: "contact",
   
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/contact.vue")
    }
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
    next('/home')
  }else if (requiresAuth && currentUser){
    next()
  }else {
    next()
  }
})


