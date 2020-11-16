<template>
  <div class="product" >
   
     
   <Navbar/>
  
      <products-list></products-list>
 
     <Footer/>
  </div>
  
</template>
<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Hero from "@/components/Hero.vue";
import Products from "@/sections/Products.vue";

import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,Hero,Products,Navbar
  }
};
</script>

