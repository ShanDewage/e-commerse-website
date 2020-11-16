<template>
  <div class="login "  >
        <Navbar>
     
   </Navbar>
    <div class=" body ">
       
                <div class="modal-body" id="bg" style="border-radius: 10px ;color: white; ">


                        <ul class="nav nav-fill nav-pills mb-3" style=" font-size: 16px;" id="pills-tab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active  btn-outline-success" id="pills-home-tab" data-toggle="pill" href="#pills-login" role="tab" aria-controls="pills-login" aria-selected="true">SIGN IN</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link  btn-outline-success" id="pills-register-tab" data-toggle="pill" href="#pills-register" role="tab" aria-controls="pills-register" aria-selected="false">SIGN UP</a>
                            </li>

                          

                        </ul>
                       

                        <div   class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">
                            
                            <h6 class="text-center" >Welcome back! Sign in to checkout faster.</h6>
                            
                             <div class="user-pic">
                        <img class="img-responsive img-rounded" src="/user.png" alt="User picture">
                           </div>
                            <div class="textbox text-left font-weight-bold "  style="margin-top:15px">
                                    
                                <label for="exampleInputEmail1"  class="float-left">Email : </label>
                              
                                   
                                <input type="email"  v-model="email"  id="exampleInputEmail1"  aria-describedby="emailHelp" placeholder="Email">
                              
                             
                            </div>
                              <small class="form-text text-left" style="color:silver;">*We'll never share your email with anyone else.</small>
                            
                            <div class="textbox text-left font-weight-bold ">
                                <label for="exampleInputPassword1" class="float-left">Password :</label>
                                <input type="password" @keyup.enter="login" v-model="password"  id="exampleInputPassword1" placeholder="Password">
                            </div>

                             <div class="form-group">
                                <button class="btn  btn-outline-success btn-block" @click="login">SIGN IN</button>
                            </div>

                        </div>
                        <div class="tab-pane fade"  id="pills-register" role="tabpanel" aria-labelledby="pills-register-tab">
                            
                             <h6 class="text-center">New to Button? Create an account to make shopping and checkout easier. #ShopButton now</h6>
                             <div class="col-md-12 ">
                           <img src="/svg/shopping.svg" width="200" alt="" class="float-center pt-3 ">
                        </div>
                            <div class="form-group textbox text-left font-weight-bold  " style="margin-top:15px">
                                <label for="name " class="float-left" >Your Name :</label>
                                <input type="text" v-model="name"  id="name" placeholder="Enter Your Name Here">
                            </div>

                              
                           

                            <div class="form-group textbox text-left font-weight-bold">
                                <label for="email" class="float-left">Email :</label>
                                <input type="email"  v-model="email"  id="email" aria-describedby="emailHelp" placeholder="Enter Email Address">
                            </div>
                            <div class="form-group  textbox text-left font-weight-bold">
                                <label for="password" class="float-left">Password :</label>
                                <input type="password" v-model="password"  id="password" placeholder="Enter Password">
                            </div>

                            <div class="form-group">
                                <button  class="btn  btn-outline-success btn-block" @click="register">SIGN UP</button>
                            </div>

                        </div>
                        </div>
                      <svg height="20" width="200" >
                        <g fill="none" stroke="white">
                         <path stroke-width="2" d="M5 5 l2150 0" />
    
                        </g></svg>
 
                </div>
                </div>
            <Footer>
     
   </Footer>
            </div>
  
</template>

<script>

import {fb,db} from '../firebase';

    export default {
  name: "Login",
  props: {
    msg: String
  },
  data(){
      return {
          name:null,        
          email:null,
          password:null
      }
  },

  methods:{
      login(){

          fb.auth().signInWithEmailAndPassword(this.email, this.password)
                        .then(() => {
                        $('#login').modal('hide')
                          this.$router.replace('home');  
                        })
                        .catch(function(error) {
                            // Handle Errors here.
                            var errorCode = error.code;
                            var errorMessage = error.message;
                            if (errorCode === 'auth/wrong-password') {
                                alert('Wrong password.');
                            } else {
                                alert(errorMessage);
                            }
                            console.log(error);
                    });

      },
      register(){
            fb.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then((user) => {
                    $('#login').modal('hide')
                    
                    db.collection("profiles").doc(user.user.uid).set({
                        name: this.name
                    })
                    .then(function() {
                        console.log("Document successfully written!");
                    })
                    .catch(function(error) {
                        console.error("Error writing document: ", error);
                    });

                    this.$router.replace('home');
                })
                .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });
      }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img {
    margin-top: 15px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  
};

#bg{


 font-family:Comic Sans MS, cursive, sans-serif;
}
.login
{
 
    background: radial-gradient( #e5e5f2, #F0F2F0,#b2b2d8); 
   
}

.body
{
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: url(../assets/zz.jpeg) no-repeat;
    background-size:cover;
    

}
.modal-body{
    width: 700px;
    height: 800px;
   background: none;
   margin-left: 330px;
   padding-top: 150px;
    color: white;

}


.textbox
{
    width:100%;
    overflow: hidden;
    font-size: 20px;
    padding: 8px 0;
    margin: 8px 0;
    border-bottom: 1px solid #4caf50 ;
      background: none;
}

.textbox i{
    width:26px;
    float: left;
    text-align: center;
}
.textbox input{
    border: none;
    outline: none;
    background: none;
    color: white;
    font-size: 18px;
    width: 50%;
    float: left;
    margin: 0 10px;
}

.btn
{
    width: 100%;
    background: none;
    border:  2px solid #4caf50 ;
    color: white;
    padding: 5px;
    font-size: 18px;
    cursor:pointer;
    margin: 12px 0;
}

</style>
