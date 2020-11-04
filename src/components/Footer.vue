<template>

<footer id="foot" class="page-footer font-small stylish-color-dark " style="margin-top:15px;margin-bottom:5px;outline: 9px solid black; ">

    <div class="container text-center text-md-left">

     <div class="row" style="height:220px;">
       

       <div class="col-md-4 mx-auto" style="text-align: justify;">

      <router-link to="/about" style="color:white; text-decoration: none;"  >  <h3 class="font-weight-bold text-uppercase mt-1 mb-3" style="color:Silver;" >About Us</h3></router-link>
        <p style="color:white; " class="text-muted">BUTTON IS AN ONLINE FAST FASHION RETAILER. WE DESIGN, PRODUCE, AND SELL OUR PRODUCTS GLOBALLY AND
          EXCLUSIVELY ON BUTTON.COM</p>
 <router-link to="/Home" ><h1 style="margin-top:10px; font-family: Garamond;color:white;font-size:45px;outline: 1px solid black;" class="btn text-muted " >BUTTON</h1></router-link>
      </div>
      

     
      <div class="col-md-3 mx-auto"  style="color:Silver;">

      <h5 class="font-weight-bold text-uppercase mt-1 mb-3 col-md-11 mx-auto " >Contact Us</h5>

        <ul class="list-group text-muted  col-md-10 mx-auto"  >
          <li class="row" >
            <img  src="../assets/mail.png" class="img" />
            <h6 class="h6pad">BUTTON@GMAIL.COM</h6>
          </li>
          <li class="row">
            <img  src="../assets/whatsapp.png" class="img" />
            <h6 class="h6pad">077-000 0000</h6>
          </li>
          <li class="row" >
            <img  src="../assets/phone.png" class="img" />
            <h6 class="h6pad">0112-000 000</h6>
          </li>
          <li class="row" >
            <img  src="../assets/phone.png" class="img" />
            <h6 class="h6pad">0113-000 000</h6>
          </li>
        </ul>
      </div>
   

      
    
      <div class="col-md-2 mx-auto"  style="color:Silver;">
        <h5 class="font-weight-bold text-uppercase mt-1 mb-3  col-md-12 mx-auto">Address</h5>

        <ul class="list-group text-muted col-md-6 mx-auto"  >
          <li class="row">
            <h6 >NO.07,</h6>
          </li>
          <li  class="row">
            <h6 >PITIPANA,</h6>
          </li>
          <li  class="row">
             <h6 >HOMAGAMA.</h6>
          </li>
         
        </ul>
      </div>
      
     

      <div class="col-md-2 mx-auto" style="color:Silver;">
        <h5 class="font-weight-bold text-uppercase mt-1 mb-3">follow us</h5>

        <ul class="list-unstyled" style="margin-left:40px;">
          <li>
             <img  src="../assets/goo.png"  style="width:40px;height:38px;"/>
          </li>
          <li>
            <img  src="../assets/facebook.png" style="width:40px;height:40px;margin-top:5px;" />
          <li>
             <img  src="../assets/insta.png" style="width:40px;height:40px;margin-top:5px;" />
          </li>
          <li>
            <img  src="../assets/whatsapp.png" style="width:40px;height:40px;margin-top:5px;" />
          </li>
           <li class="list-inline-item">
              <img  src="../assets/twitter.png" style="width:40px;height:40px;margin-top:5px;"/>
             </li>
        </ul>
      </div>
    </div>  
    
  </div>
 <svg height="30" width="600" style="margin-top:20px;">
  <g fill="none" stroke="white">
    <path stroke-width="1" d="M5 20 l2150 0" />
    
  </g>
 
</svg>
 
 

<div class="footer-copyright text-center py-3" style="color:white;">© 2020 Copyright :
    <a href=""> BUTTON.COM</a>
  </div>
 

</footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#foot{

background: #232526;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


font-family:Comic Sans MS, cursive, sans-serif;

}

.row{
  padding-top: 10px;
}

.h6pad{
  margin-left:14px;
}

.img{
  width:20px;height:20px;margin-left:14px;
}
</style>
