<template>
  <div class="payment">
       <Navbar></Navbar>
<div>
        <h2 class="mt-5">Pay Here !!</h2>
<p></p>
<div class="row ">
     <div class="col-4 ">
    <div class="container ">
        
    

      <hr>
      <h4 class=" text-left pl-5" > Total <span class="price" style="color:red"><b> {{ this.$store.getters.totalPrice | currency }}</b></span></h4>

           <hr> 
    </div>
  </div>
  <div class="col-7">
    <div class="conPay">
      <form >
      
        <div class="row">
          <div class="col-6 text-left">
            <h3>Billing Address</h3>
            <label for="fname"><i class="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="John M. Doe">
            <label for="email"><i class="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" placeholder="john@example.com">
            <label for="adr"><i class="fas fa-address-card"></i> Address</label>
            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street">
            <label for="city"><i class="fas fa-university"></i> City</label>
            <input type="text" id="city" name="city" placeholder="New York">

            <div class="row">
              <div class="col-50">
                <label for="state">State</label>
                <input type="text" id="state" name="state" placeholder="NY">
              </div>
              <div class="col-50">
                <label for="zip">Zip</label>
                <input type="text" id="zip" name="zip" placeholder="10001">
              </div>
            </div>
          </div>

          <div class="col-6 text-left">
            <h3>Payment</h3>
            <label for="fname">Accepted Cards</label>
            <div class="icon-container">  
              <i class="fab fa-cc-visa " style="color:navy;"></i>
              <i class="fab fa-cc-amex ml-2" style="color:blue;"></i>
             <i class="fab fa-cc-mastercard ml-2" style="color:red;"></i>
              <i class="fab fa-cc-discover ml-2" style="color:orange;"></i>
            </div>
            <label for="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname" placeholder="John More Doe">
            <label for="ccnum">Credit Card Number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444">
            <label for="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="September">
            <div class="row">
              <div class="col-50">
                <label for="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="2018">
              </div>
              <div class="col-50">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="352">
              </div>
            </div>
          </div>
          
        </div>
        <label>
          <input type="checkbox" checked="checked" name="sameadr"> Shipping address same as billing
        </label>
        <input type="submit" value="Pay" class="btnPay">
      </form>
    </div>
  </div>
 
</div>

        </div>
          <Footer/>
        </div>

</template>



<style>
.payment
{
 
    background: radial-gradient( #e5e5f2, #F0F2F0,#b2b2d8); 
}
.container{
     font-family: Comic Sans MS, cursive, sans-serif;
}






.col-25 {
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
}

.col-50 {
  -ms-flex: 50%; /* IE10 */
  flex: 50%;
}

.col-75 {
  -ms-flex: 75%; /* IE10 */
  flex: 75%;
}

.col-25,
.col-50,
.col-75 {
  padding: 0 16px;
}

.conPay {
  background-color: #f2f2f2;
  padding: 5px 20px 15px 20px;
  border: 1px solid lightgrey;
  border-radius: 3px;
  margin-bottom: 50px;
  margin-top: 50px;
}

input[type=text] {
  width: 100%;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

label {
  margin-bottom: 10px;
  display: block;
}

.icon-container {
  margin-bottom: 20px;
  padding: 7px 0;
  font-size: 24px;
 
}

.btnPay {
  background-color: #fd0404;
  color: white;
  padding: 12px;
  margin: 10px 0;
  border: none;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  font-size: 17px;
}

.btnPay:hover {
  background-color: #e94040;
}



hr {
  border: 1px solid lightgrey;
}

span.price {
  float: right;
  color: grey;
}




</style>

