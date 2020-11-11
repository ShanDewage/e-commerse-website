<template>
  <div class="about" >
    <Navbar>
     
   </Navbar>
   <div style="font-family:Comic Sans MS, cursive, sans-serif;text-align: justify;">
    <div class="abou"   >
      <div id="aboubody" style="color:white; padding:50px; border: 5px solid white ; border-radius: 50px 50px; text-shadow:  2px;">
    <h1>About Us </h1>
  
  <h4 >BUTTON IS AN ONLINE FAST FASHION<br> RETAILER. WE DESIGN, PRODUCE,
     AND <br>SELL OUR PRODUCTS GLOBALLY AND <br> EXCLUSIVELY ON BUTTON.COM</h4>
      </div>
  </div>
  
  <div class="row " style=" border: inset;margin:15px; border: 10px solid #DCDCDC ;  border-radius: 100px 20px;background-image: linear-gradient(to top, #ebc0fd 0%, #d9ded8 100%);">
    <div class="column" style="margin-left:50px;padding-left:55px;">
    <h2>THE PRODUCT</h2>
    <p >Every. Detail. Matters. When it comes to quality, our Technical Designers look at every 
      trim, stitch and measurement to ensure the perfect fit. Meeting our quality and price standards
       means having a dedicated Production Team which works closely with our manufacturers. Together,
        our Design,
       Tech Design and Production teams are able to produce a garment from sketch in less than 8 weeks.</p>
  </div>
  <div class="column" >
   <img style="width:400px;border: outset;border: 5px solid #ffffff; border-radius: 20px 50px;margin-left:90px;" alt="slide" src="../assets/e.jpg" />
    
  </div>
  
</div>


  <div  style=" border: ridge;margin:15px; border: 10px solid #DCDCDC ;height:500px;"  >
  <video width="600" style="border: outset;border: 5px solid #DCDCDC; border-radius: 20px 20px;margin-left:350px;margin-top:70px;" controls >
    <source src="../assets/v1.mp4" type="video/mp4">
     
  </video>
   
  </div>
  

 <div class="row " style=" border: inset;margin:15px; border: 10px solid #DCDCDC ;  border-radius: 50px 20px;background-image: linear-gradient(to top, #ebc0fd 0%, #d9ded8 100%);">
  <div class="column">
   <img style="width:400px;border: outset;border: 5px solid #ffffff; border-radius: 20px 50px;margin-left:80px" alt="slide" src="../assets/h1.jpg" />
    
  </div>
  <div class="column" >
    <h2>THE PRODUCT</h2>
    <p >Every. Detail. Matters. When it comes to quality, our Technical Designers look at every 
      trim, stitch and measurement to ensure the perfect fit. Meeting our quality and price standards
       means having a dedicated Production Team which works closely with our manufacturers. Together,
        our Design,
       Tech Design and Production teams are able to produce a garment from sketch in less than 8 weeks.</p>
  </div>
</div>
<div >
  <video width="500px" style="border: outset;border: 5px solid #DCDCDC; border-radius: 50px 50px;margin-left:450px;margin-top:50px;" controls >
   
     <source src="../assets/v2.mp4" type="video/mp4">
  </video>
  </div>
<div class="row" style="margin-top:50px;">
 <img style="width:400px;border: inset;border: 5px solid #DCDCDC; border-radius:20px 50px;margin-left:250px;"  src="../assets/a2.jpg" />


   <img style="width:400px;border: outset;border: 5px solid #DCDCDC; border-radius: 50px 20px;margin-left:100px;"  src="../assets/a1.jpg" />
</div>

 <div class="row " style=" border: inset;margin:15px; border: 10px solid #DCDCDC ;margin-top:50px;  border-radius: 50px 20px;background-image: linear-gradient(to top, #ebc0fd 0%, #d9ded8 100%);">
  <div class="column" >
   <img style="width:400px;border: outset;border: 5px solid #ffffff; border-radius: 20px 50px;margin-left:100px;" src="../assets/a3.jpg" />
    
  </div>
  <div class="column" style="padding-right:55px;">
    <h2>THE PRODUCT</h2>
    <p >Every. Detail. Matters. When it comes to quality, our Technical Designers look at every 
      trim, stitch and measurement to ensure the perfect fit. Meeting our quality and price standards
       means having a dedicated Production Team which works closely with our manufacturers. Together,
        our Design,
       Tech Design and Production teams are able to produce a garment from sketch in less than 8 weeks.</p>
  </div>
</div>
   </div>
  <Footer/>

  </div>
  
  
</template>


<style scoped lang="scss" >
.abou {
 
  padding: 50px;
  text-align: center;
 
  color: black;
  font-family:"Lucida Console", Monaco, monospace;
  
 
};


* {
  
  box-sizing: border-box;
 
}

#aboubody{
background: #2b5876;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #4e4376, #2b5876);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #4e4376, #2b5876); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}



/* Create two equal columns that floats next to each other */
.column {
  float: left;
  width: 600px;
  padding: 10px;
  
  height: 300px; /* Should be removed. Only for demonstration */
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}



@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
  }
}
</style>