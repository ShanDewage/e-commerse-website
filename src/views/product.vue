<template>
  <div class="product" id="bgc">
   
     
   <Navbar/>
  
      <products-list></products-list>
      <login/>
     <Footer/>
  </div>
  
</template>
<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Hero from "@/components/Hero.vue";
import Products from "@/sections/Products.vue";
import Login from "@/components/Login.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,Hero,Products,Login,Navbar
  }
};
</script>

<style>
    #bgc{
        

background: radial-gradient( #E6E6FA, #F0F2F0,#000C40); 
    }
</style>