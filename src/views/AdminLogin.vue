<template>
  <div class="login "  >
      
    <div class=" body ">
       
                <div class="modal-body" id="bg" style="border-radius: 10px ;color: white; ">

                        
                 <h3 class="text-center" >BUTTON.COM</h3>
                    <h4 class="text-center" >Admin Page</h4>
                      <span>  <p class="text-center" >Before Access the Admin Panel You need to Sign In First !!</p>   </span>
                   



                       

                        <div   class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">
                            
                         
                            
                             <div class="user-pic">
                        <img class="img-responsive img-rounded" src="/user.png" alt="User picture">
                           </div>
                            <div class="textbox text-left font-weight-bold "  style="margin-top:15px">
                                    
                                <label for="exampleInputEmail1"  class="float-left">Email : </label>
                              
                                   
                                <input type="email"  v-model="email"  id="exampleInputEmail1"  aria-describedby="emailHelp" placeholder="Email">
                              
                             
                            </div>
                             
                            
                            <div class="textbox text-left font-weight-bold ">
                                <label for="exampleInputPassword1" class="float-left">Password :</label>
                                <input type="password" @keyup.enter="login" v-model="password"  id="exampleInputPassword1" placeholder="Password">
                            </div>

                             <div class="form-group">
                                <button class="btn  btn-outline-success btn-block" @click="login">SIGN IN</button>
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
  
</template>

<script>

import {fb,db} from '../firebase';

    export default {
  name: "AdminLogin",
  props: {
    msg: String
  },
  data(){
      return {
               
          email:null,
          password:null
      }
  },

  methods:{
      login(){

          fb.auth().signInWithEmailAndPassword(this.email='admin@gmail.com', this.password)
                        .then(() => {
                        $('#login').modal('hide')
                          this.$router.replace('Admin');  
                        })
                        .catch(function(error) {
                            // Handle Errors here.
                            var errorCode = error.code;
                            var errorMessage = error.message;
                            if (errorCode === 'auth/wrong-password') {
                                    Swal.fire(
                                    'Incorrect Admin or Password',
                                    'Oops!  Your Admin Details is incorrect. Make sure you enter correct details.',                          
                                    'error'
                                    )
                            } else {
                                alert(errorMessage);
                            }
                            console.log(error);
                    });

      },
 

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
    height: 650px;
   background: none;
   margin-left: 330px;
   padding-top: 50px;
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
