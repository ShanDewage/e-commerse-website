<template>
  <div >
    <div>
       <div>
          <nav  id="navbg"  class="navbar  navbar-expand-lg  ">
            <div class="form-inline my-2 my-lg-0 mr-auto ">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-info my-2 my-sm-0" style="color:white" type="submit">Search</button>
              </div>
    
              <form class="form-inline my-2 my-lg-0 ml-auto " >
          
              <a type="button" class=" btn btn-outline-success  mr-2 " data-toggle="modal"  data-target="#miniCart">View Bag <i class="fas fa-cart-plus"></i>
              </a>
              <mini-cart></mini-cart>
                <router-link to="/checkout"  type="button"   class="btn btn-danger my-2 my-sm-0 ml-2"  ><i class="fas fa-shopping-bag"></i> CHECKOUT </router-link>
            </form>
        </nav>
<div class="mt-1 mb-1" >
  
  <nav  id="nav2" class="navbar  navbar-expand-lg py-0 pt-1 fixed-top " style="height:80px;"  >
    <router-link to="/Home" class="navbar-brand  "  ><h1  style="margin-top:10px;text-decoration: none;font-family: Comic Sans MS;color:white;">BUTTON.COM |</h1></router-link>
      
   <ul  class="navbar-nav mr-auto " style="font-size:15px;" id="nav2color" >
      <li class="nav-item  ">
        <router-link to="/Home"   class="nav-link active " ><i class="fa fa-home" aria-hidden="true"></i> Home <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item pl-2"  >
        <router-link to="/product"  class="nav-link active " >Store</router-link>
      </li>
       <li class="nav-item pl-2"  >
        <router-link to="/contact"  class="nav-link active " >Contact</router-link>
      </li>
      <li class="nav-item pl-2" >
        <router-link to="/about"   class="nav-link active  " href="#">About</router-link>
      </li>
    
      <li class="nav-item  pl-2">
        <router-link to="/Myaccount"    class="nav-link active " v-if="!email"  >My Account </router-link>
      </li>
     

       </ul>
       <ul  class="navbar-nav ml-auto " id="nav2color">

          <li class="nav-item pr-4  " style="color:white;">
         <router-link to="/Myaccount"    class="nav-link active  " v-if="email"  >
               <h6 class=" form-inline ">  <img class="img-responsive mr-2  img-rounded" width="35px" src="/svg/pro_pic_admin.svg" alt="User picture"> {{email}} </h6>
           </router-link>
            </li>
              <li  class="nav-item ">
                <router-link to="/Login" class="btn btn-outline-primary  my-2 my-sm-0" v-if="!email"  data-toggle="modal" data-target="#login" style="margin-right:15px;" ><i class="fas fa-sign-in-alt"></i> Log In</router-link>
              </li>

              <li  class="nav-item mt-2">
                  <button  v-if="email" href="#" class="btn btn-outline-danger  my-2 my-sm-0 mr-1 " @click="logout()"> <i class="fas fa-sign-out-alt" ></i> Log Out
                     </button>
               </li>
          </ul>
       </nav>
 </div>
      </div>
         <div id="sli" style="padding-top:100px;margin-top:5px;height:550px;outline: 5px solid black;"  >
      
            <carousel-3d :height="302" :width="400" :border="1" :autoplay="true"  :autoplay-timeout="3000"    >
                  <slide  :index="0" id="slideborder" >
                  <img alt="slide" src="../assets/s.jpg"  />
                  </slide>
                  <slide   :index="1"  id="slideborder">
                  <img alt="slide" src="../assets/s1.jpg" />
                  </slide>
                  <slide  :index="2" id="slideborder">
                  <img alt="slide" src="../assets/s2.jpg" />
                  </slide>
                  <slide   :index="3"  id="slideborder">
                  <img alt="slide" src="../assets/s3.jpg" />
                  </slide>
                  <slide  :index="4" id="slideborder">
                  <img alt="slide" src="../assets/s4.jpg" />
                  </slide>
                  <slide :index="5"  id="slideborder">
                  <img alt="slide" src="../assets/s5.jpg" />
                  </slide>
                  <slide  :index="6" id="slideborder">
                  <img alt="slide" src="../assets/s6.jpg"  />
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

#slideborder
{
padding: 2px;
background: rgb(255, 255, 255);
}

#nav2color a:hover {
   color:white; 
    border-bottom: 1px solid #c3c3e5; 
}

#sli {
  margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: url(../assets/s88.jpg) no-repeat;
    background-size:cover;
    background-position: center; 
}

#navbg{
background: #232526; 
background: -webkit-linear-gradient(to left, #414345, #232526);
background: linear-gradient(to left, #414345, #232526); 

margin-top:80px;
outline: 8px solid black;
font-family: 'Lucida Sans';
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
     background-color: #ff4c4c;
    border-color: #ff4c4c; 
   
}
.btn-danger:hover, .btn-danger:focus, .btn-danger:active, .btn-danger.active, .open>.dropdown-toggle.btn-danger {
    color: #ffffff;
    background-color: #FF0000;
    border-color: #FF0000; 
 }

</style>