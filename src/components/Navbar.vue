<template>
  <div >

    
    <div>
     
       <div   >
 <nav style="outline: 9px solid black;" id="navbg"  class="navbar custom-nav  navbar-expand-lg navbar-dark bg-dark">
  <router-link to="/Home" class="navbar-brand  "  ><h3  style="margin-top:10px;text-decoration: none;font-family: Comic Sans MS;">BUTTON</h3></router-link>
   
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

<div  >
  <div  class="collapse navbar-collapse   " id="navbarSupportedContent">
    <ul id="navbar" class="nav  nav-justified" >
      <li class="nav-item ">
        <router-link to="/Home"  style="width:123px" class="nav-link active" ><i class="fa fa-home" aria-hidden="true"></i> Home <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item"  >
        <router-link to="/product"  style="width:123px" class="nav-link active " >Store</router-link>
      </li>
       <li class="nav-item"  >
        <router-link to="/contact"  style="width:123px" class="nav-link active " >Contact Us</router-link>
      </li>
      <li class="nav-item" >
        <router-link to="/about"  style="width:123px" class="nav-link active  " href="#">About</router-link>
      </li>
    
     
    </ul>
    
    
    <form class="form-inline my-2 my-lg-0  " style="padding-left:110px;">
        <router-link to="/Login" class="btn btn-outline-primary  my-2 my-sm-0"  data-toggle="modal" data-target="#login" style="margin-right:15px;" >Log In</router-link>
        <mini-cart></mini-cart>
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" style="color:white" type="submit">Search</button>
        <router-link to="/checkout"  type="button"  style="width:123px" class="btn btn-danger my-2 my-sm-0 ml-3"  >CHECKOUT </router-link>
              
    </form>
         
  </div>

  </div>
  
</nav>
<div class="mt-1 mb-1" >
  
  <nav  id="nav2" class="navbar navbar-expand-lg py-0 pt-1 " style="height:25px;"  >
    
   <ul  class="navbar-nav ml-auto " id="nav2color" >
     <li class="nav-item " style="color:white;">
           <h6 class=""> {{email}} </h6>
     </li>
      <li class="nav-item ">
        <router-link to="/Myaccount"   style="width:123px" class="nav-link active py-0" >My Account </router-link>
      </li>
      <li class="nav-item"  >
         <a type="button" class=" nav-link active py-0 " data-toggle="modal"  style="width:123px" data-target="#miniCart">View Bag <i class="fas fa-cart-plus"></i>
       </a>
       
      </li>
       <li>
           <a href="#" @click="logout()">
            <i class="fa fa-power-off"></i>
           <span>Logout</span>
             </a>
        </li>
      
    
     
    </ul>
  </nav>
 </div>
      </div>

   
              
    <div id="sli" style="padding-top:70px;margin-top:0px;height:450px;outline: 5px solid black;"  >
      
 <carousel-3d :autoplay="true"  :autoplay-timeout="3000"  >
      <slide  :index="0">
       <img alt="slide" src="../assets/s.jpg" />
      </slide>
      <slide   :index="1">
       <img alt="slide" src="../assets/s1.jpg" />
      </slide>
       <slide  :index="2">
       <img alt="slide" src="../assets/s2.jpg" />
      </slide>
       <slide   :index="3">
       <img alt="slide" src="../assets/s3.jpg" />
      </slide>
      <slide  :index="4">
       <img alt="slide" src="../assets/s4.jpg" />
      </slide>
      <slide :index="5">
       <img alt="slide" src="../assets/s5.jpg" />
      </slide>
      <slide  :index="6">
       <img alt="slide" src="../assets/s6.jpg" />
      </slide>
     
    </carousel-3d>
    </div>
   

     </div>
  </div>
  
</template>

<script>


import {Carousel3d,Slide} from 'vue-carousel-3d';
import {fb} from '../firebase';

export default {
  name: "Navbar",
  props: {
    msg: String
  },
  components:{Carousel3d,Slide},

   
  data(){
      return{
          name:null,
          email:null,
      }
  },

  methods:{
     
      logout(){
          fb.auth().signOut()
          .then(() => {
              this.$router.replace('/home');
          })
          .catch((err) =>{
              console.log(err);
          });
      }
  },

  created(){
      let user = fb.auth().currentUser;
      this.email = user.email;

  }

};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#navbar {
  overflow: hidden;
  
  
  
}


#navbar a {
  float: left;
  display: block;
  color: white;
  text-align: center;
 
  font-size: 17px;
border-radius: 10px;
  outline-style: hidden;
 font-family: cursive;
 font-weight: bolder;
   
}

#nav2color a 
{

  display: block;
  color: white;
  text-align: center;
 
 
 
}

#nav2color a:hover {
   color:white; 
    border-bottom: 1px solid #c3c3e5;

 
}

#sli {
  background: #0f0c29;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


}

#navbg{
background: #232526;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


margin-top:9px;
}

#navbar a:hover {
background: #536976;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #292E49, #536976);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #292E49, #536976); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

 
}

#nav2{
  background: 		black	;
  font-family: cursive;
 
}

.btn-danger {
    color: #fff;
    background-color: #FF0000;
    border-color: white; 
   
}
.btn-danger:hover, .btn-danger:focus, .btn-danger:active, .btn-danger.active, .open>.dropdown-toggle.btn-danger {
    color: #ffffff;
    background-color: #ff4c4c;
    border-color: #FF0000; 
 
}


</style>

