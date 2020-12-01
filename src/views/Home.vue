<template>

  <div id="bgmain"  >
    <Navbar>
     
   </Navbar>

   
 
 
  <div class="home container" id="conIn" >
     
   <div style="text-align:center; ">

  <kinesis-container>
           
              <kinesis-element :strength="10"  class="txt">
               WELCOME TO BUTTON!!
              </kinesis-element>
              <kinesis-element :strength="10" class="txt2">
               YOU ARE CURRENTLY ON OUR ONLINE SHOPPING SITE.
              </kinesis-element>

        
          </kinesis-container>

            <kinesis-container>
           
            
  <kinesis-element :strength="10"  >
             <div class="row " style="padding-left:100px; display: inline-block;  margin-top: 10px; " >
               <div id="img"  >
              <img   src="../assets/an1.gif"   style="width:30%" />
            </div>
            
             <div id="img"  >
              <img   src="../assets/an5.gif"   alt="Snow" style="width:30%" />
            </div>
             <div  id="img" >
              <img  src="../assets/an6.gif"  alt="Snow" style="width:30%" />
            </div>
             <div  id="img"  >
              <img  src="../assets/an7.gif"  alt="Snow" style="width:30%" />
            </div>
             <div  id="img" >
              <img src="../assets/an8.gif"  alt="Snow" style="width:30%" />
            </div>
             <div  id="img" >
              <img src="../assets/an9.gif"  alt="Snow" style="width:30%" />
            </div>
             <div  id="img" >
              <img  src="../assets/an2.gif"  alt="Snow" style="width:30%" />
            </div>
            
             <div  id="img" >
              <img src="../assets/an4.gif"  alt="Snow" style="width:30%" />
            </div>
        
          </div>
              
               </kinesis-element>
        
          </kinesis-container>

</div>
  
          

<!-- The App Section -->
<div class="container" id="cont1" >
  <div class="row">
    <div class="column-66"  style="margin-top:90px;">
      <h1 class="xlarge-font"><b>NEW ARRIVALS  </b></h1>
      <h1 class="large-font" style="color:MediumSeaGreen;"><b></b></h1>
      <p style="padding-left:20px;text-align: justify;  font-family:Lucida Sans;font-size:18px;"><span style="font-size:30px; ">Fall styles from </span>the size-inclusive brand are here.See what's new at BUTTON now,buy  clothes in kid's,Men's and Women's fashion-forward decor to top-selling, award-winning brands like ARMANI, FENDI,BURBERRY,LOUIS VUITTON and more.</p>
   <div style="margin-top:30px">
    
      <a href="product" style="background-color:#4B0082; color: white;" class="button  " >SHOP NOW</a>
     </div>
    </div>
    <div class="column-33">
        <img  width="335" height="471"  src="../assets/l1.jpg" />
    </div>
  </div>
</div>

<!-- Clarity Section -->
<div class="container" id="cont2" >
  <div class="row">
    <div class="column-33">
      <img  width="335" height="471"  src="../assets/l2.jpg" />
    </div>
    <div class="column-66"  style="margin-top:80px;">
      <h1  style="font-size:55px"><b>LEARN MORE ABOUT US</b></h1>
      
      <h1 class="large-font" style="color:red;"><b>BUTTON, WHO?</b></h1>
      <p style=" font-family:Lucida Sans;font-size:18px;"><span style="font-size:24px">Button is an online </span>   fast fashion retailer.we design, produce,and sell our products globally and exclusively on BUTTON.COM</p>
        <div style="margin-top:30px">
        
          <a href="About" style="background-color:#C71585; color: white;" class="button  " >Read More</a>
    </div>
    </div>
  </div>
</div>

<!-- The App Section -->
<div class="container" id="cont3">
  <div class="row">

     <div>
  <sequential-entrance fromTop  autoplay="true" delay="3000"   autoplay-timeout="3000"  >
  
           <div id="imgbot" class="ml-1"  >
                <img alt="slide" src="../assets/clothes/d4.jpg" width="300"  />
            </div>
             <div  id="imgbot" class="ml-4" >
               <img alt="slide" src="../assets/clothes/f4.jpg" width="300"  />
            </div>
             <div  id="imgbot" class="ml-4"  >
                 <img alt="slide" src="../assets/clothes/b4.jpg" width="300px" height="10px"  />
            </div>
              <div  id="imgbot" class="ml-1 mt-4"  >
                 <img alt="slide" src="../assets/clothes/a3.jpg" width="300"  />
            </div>
              <div  id="imgbot" class="ml-4 mt-4"  >
                 <img alt="slide" src="../assets/clothes/h4.jpg" width="300"  />
            </div>
              <div  id="imgbot" class="ml-4 mt-4"  >
                 <img alt="slide" src="../assets/clothes/j4.jpg" width="300"  />
            </div>


  </sequential-entrance>

   </div>
  
  </div>
</div>

  
     

    
  </div>
   <Footer/>
  </div>

    
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Hero from "@/components/Hero.vue";
import Products from "@/sections/Products.vue";


import {fb} from '../firebase';

export default {
  name: "Home",
  components: {
    HelloWorld,Hero,Products
  },

  

  
};
</script>

<style>
* {
  box-sizing:border-box;
}



body {
  margin: 0;

}

#cont3
{
   margin-top:15px;
   outline: 4px solid 		#E04B00;
  background: url(../assets/sl2.jpg) no-repeat;
    background-size:cover;
    background-position:center; 
  
   
}

.container {
  padding: 64px;
  
}

.row:after {
  content: "";
  display: table;
  clear: both
}
#img {
    display: inline-block;
  margin-left: 0;
  margin-right: 0;
 
}

#imgbot {
    display: inline-block;
  margin-left: 0;
  margin-right: 0;
  outline: 5px solid rgb(255, 255, 255);
}

.column-66 {
  float: left;
  width: 66.66666%;
  padding: 20px;
}


.column-33 {
  float: left;
  width: 33.33333%;
  padding: 20px;
}

.large-font {
  font-size: 48px;
}

.xlarge-font {
  font-size: 64px
}

.txt{
  font-size: 50px;
  	color : #212F3D  ;
font-weight: bold;
   letter-spacing: 5px;
}
.txt2{
  font-size: 28px;
  	color:#154360   ;
   margin-top: 20px;
   letter-spacing: 3px;
}

.button {
  border: none;
  color: white;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  background-color: #4CAF50;
  border-radius: 4px;
  text-align: center;

}

img {
  display: block;
  height: auto;
  max-width: 100%;
}


#conIn
{
 margin-top:15px;
 margin-bottom:20px;

font-family:Comic Sans MS, cursive, sans-serif; 


    font-family: sans-serif;
  
    background: url(../assets/bg10.jpg) no-repeat;
    background-size:cover;
    background-position:center; 

  outline: 2px solid 	#000;
   
 

}

#bgmain
{

    background: url(../assets/bg9.jpg) no-repeat;
    background-size:cover;
    background-position:center; 
  
}
#cont1
{
   background: url(../assets/conta22.jpg) no-repeat;
    background-size:cover;
    background-position:bottom; 
    margin-top:50px;
    outline: 4px solid 	#000080;
    
}

#cont2
{
   background: url(../assets/conta1.jpg) no-repeat;
    background-size:cover;
    background-position:center; 
  
   

    margin-top:15px;
    outline: 4px solid 	#800080;
}

</style>
