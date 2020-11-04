<template>
  <div class="login "  >
        <!-- Modal -->
        <div   class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="loginTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div style="border-radius:  10px ;" class="modal-content">

                <div class="modal-body" id="bg" style="border-radius: 10px ;color: white; ">


                        <ul class="nav nav-fill nav-pills mb-3" style=" font-size: 16px;" id="pills-tab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active  btn-outline-primary" id="pills-home-tab" data-toggle="pill" href="#pills-login" role="tab" aria-controls="pills-login" aria-selected="true">SIGN IN</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link  btn-outline-primary" id="pills-register-tab" data-toggle="pill" href="#pills-register" role="tab" aria-controls="pills-register" aria-selected="false">SIGN UP</a>
                            </li>

                          

                        </ul>
                       

                        <div   class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">
                            
                            <h6 class="text-center" >Welcome back! Sign in to checkout faster.</h6>
                            
                             <div class="user-pic">
                        <img class="img-responsive img-rounded" src="/user.png" alt="User picture">
                           </div>
                            <div class="form-group text-left font-weight-bold "  style="margin-top:15px">
                                    
                                <label for="exampleInputEmail1" style=" font-size: 16px;">Email : </label>
                              
                                   
                                <input type="email" v-model="email" class="form-control" id="exampleInputEmail1"  aria-describedby="emailHelp" placeholder="Email">
                                <small class="form-text " style="color:silver;">*We'll never share your email with anyone else.</small>
                             
                            </div>
                            <div class="form-group text-left font-weight-bold ">
                                <label for="exampleInputPassword1" style=" font-size: 16px;">Password :</label>
                                <input type="password" @keyup.enter="login" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                            </div>

                             <div class="form-group">
                                <button class="btn  btn-outline-primary btn-block" @click="login">SIGN IN</button>
                            </div>

                        </div>
                        <div class="tab-pane fade"  id="pills-register" role="tabpanel" aria-labelledby="pills-register-tab">
                            
                             <h6 class="text-center">New to Button? Create an account to make shopping and checkout easier. #ShopButton now</h6>
                             
                            <div class="form-group text-left font-weight-bold  " style="margin-top:15px">
                                <label for="name " style=" font-size: 16px;" >Your Name :</label>
                                <input type="text" v-model="name" class="form-control" id="name" placeholder="Your Name">
                            </div>

                              
                           

                            <div class="form-group text-left font-weight-bold">
                                <label for="email" style=" font-size: 16px;">Email :</label>
                                <input type="email"  v-model="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email">
                            </div>
                            <div class="form-group text-left font-weight-bold">
                                <label for="password" style=" font-size: 16px;">Password :</label>
                                <input type="password" v-model="password" class="form-control" id="password" placeholder="Password">
                            </div>

                            <div class="form-group">
                                <button  class="btn  btn-outline-primary btn-block" @click="register">SIGN UP</button>
                            </div>

                        </div>
                        </div>
                      <svg height="20" width="200" >
                        <g fill="none" stroke="white">
                         <path stroke-width="2" d="M5 5 l2150 0" />
    
                        </g></svg>
 
                </div>
           
            </div>
        </div>
        </div>
    
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
                          this.$router.replace('admin');  
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

                    this.$router.replace('admin');
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
background: #E6DADA;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top, #274046, #E6DADA);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top, #274046, #E6DADA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

 font-family:Comic Sans MS, cursive, sans-serif;
}


</style>
