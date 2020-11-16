<template>
  <div class="myaccount">
        <Navbar>
     
   </Navbar>
    

      <div class="container">
          
        <div class="intro h-100">
            <div class="row h-100 align-items-center">
              <div class="col-md-6 ml-3 text-left">
                    <h1>Profile Settings</h1>
                    
                 <label>
                   Change Your Profile Settings Here
                 </label>
              </div>
              
            </div>
          </div>


          <div class="profile-content">

          <ul class="nav nav-pills ml-3" id="myTab" role="tablist">

            <li class="nav-item ">
              <a class="nav-link   btn-info1  " style="width:200px;" id="profile-tab" data-toggle="tab" href="#profile" role="tab"  aria-controls="profile" aria-selected="true">Profile</a>
            </li>

            <li class="nav-item ">
              <a class="nav-link  btn-info2 ml-2   " style="width:200px;" id="account-tab" data-toggle="tab" href="#account" role="tab" aria-controls="account" aria-selected="false">Account settings</a>
            </li>
           
          </ul>

            <div class="tab-content" id="myTabContent" >
                <div class="tab-pane fade show active pt-3"  id="profile" role="tabpanel" aria-labelledby="profile-tab">

                  <div  style="background:#DBDBEF;" class="pt-2 pb-2" >
                      <div  >
                        <div class="col-md-12 ">
                           <img src="/svg/personal1.svg" width="400" alt="" class="float-right pt-3 ">
                        </div>
                        <div class=" col-md-6  " >
                          <div class="form-group text-left ">
                            <h6  class="mr-sm-2" >Name :</h6>
                            <input type="text" name="" v-model="profile.name" placeholder="Full name" class="form-control">
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group text-left">
                              <h6  class="mr-sm-2" >Mobile :</h6>
                            <input type="text"  v-model="profile.phone" placeholder="Mobile" class="form-control">
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group text-left">
                              <h6  class="mr-sm-2" >Address :</h6>
                            <input type="text"  v-model="profile.address" placeholder="Address" class="form-control">
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group text-left">
                              <h6  class="mr-sm-2" >Postcode :</h6>
                            <input type="text"  v-model="profile.postCode" placeholder="Postcode" class="form-control">
                          </div>
                        </div>

                        <div class="col-md-4">
                          <div class="form-group">
                              <input type="submit" @click="updateProfile" value="Save Changes" style="width:525px;" class="btn btn-primary ">
                          </div>
                        </div>
  
               
              
                      </div>
                  </div>
                
                </div>

                <div class="tab-pane fade pt-3" id="account" role="tabpanel" aria-labelledby="account-tab">
                 
                         <div  style="background:#DBDBEF;" class="pt-2 pb-2" >
                      <div  >
                        <div class="col-md-12 ">
                           <img src="/svg/password.svg" width="450" alt="" class="float-right pt-5 ">
                        </div>
                        <div class="col-md-6">
                            <div  style="background:	#FF5050;color:white;" class="alert " >
                             <label> *Please use the Reset password email button for reseting the password. The form doens't work currently.
                             </label></div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group text-left">
                               <h6  class="mr-sm-2" >Name :</h6>
                            <input type="text"  v-model="account.name" placeholder="User name" class="form-control" disabled>
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group text-left">
                               <h6  class="mr-sm-2" >Email Address :</h6>
                            <input type="text"  v-model="account.email" placeholder="Email address" class="form-control" disabled>
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group text-left">
                             <h6  class="mr-sm-2" >New Password :</h6>
                            <input type="text"  v-model="account.password" placeholder="New password" class="form-control" disabled>
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group text-left">
                            <h6  class="mr-sm-2" > Confirm Password :</h6>
                            <input type="text" v-model="account.confirmPassword"  placeholder="Confirm password" class="form-control" disabled>
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="form-group">
                              <input type="file" @change="uploadImage" class="form-control" disabled>
                           </div>
                        </div>
                        <div  class="row pl-3 pr-3">
                        <div class="col-md-3">
                          <div class="form-group">
                              <input type="submit" value="Save Changes" class="btn btn-primary w-100">
                          </div>
                        </div>

                        <div class="col-md-3">
                          <div class="form-group">
                              <input type="button" @click="resetPassword" value="Reset Password Email" class="btn btn-success w-100">
                          </div>
                        </div>
                        </div>
                      </div>
                  </div>
                </div>

            </div>
            
          </div>

      </div>

    <Footer/>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { fb, db} from '../firebase';

export default {
  name: "Myaccount",
  components: {
    VueEditor
  },
  props: {
    msg: String
  },

  data(){
    return {
        profile: {
          name:null,
          phone:null,
          address:null,
          postcode:null
        },

        account:{
            name:null,
            email:null,
            photoUrl:null,
            emailVerified:null,
            password:null,
            confirmPassword:null,
            uid:null
        }       
    }
  },

  firestore(){
      const user = fb.auth().currentUser;
      return {
        profile: db.collection('profiles').doc(user.uid),
      }
  },
  methods:{
      resetPassword(){
          const auth = fb.auth();          

          auth.sendPasswordResetEmail(auth.currentUser.email).then(() =>  {
               Toast.fire({
                type: 'success',
                title: 'Email sent'
              })
          }).catch((error) =>  {
              console.log(error);
          });
      },

      updateProfile(){
          this.$firestore.profile.update(this.profile);
      },
      uploadImage(){}
  },
  created(){
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.myaccount
{
 
    background: radial-gradient( #e5e5f2, #F0F2F0,#b2b2d8); 
   
}
.container
{
  font-family: Comic Sans MS, cursive, sans-serif;
}
.btn-info1 {
    color: #fff;
    background-color: #040763;
    border-color: white; 
   
}
.btn-info1:hover, .btn-info1:focus, .btn-info1:active, .btn-info1.active, .open>.dropdown-toggle.btn-info1 {
    color: #ffffff;
    background-color: #4144d6;
    border-color: #fff; 
 
}
.btn-info2 {
    color: #fff;
    background-color: #040763;
    border-color: white; 
   
}
.btn-info2:hover, .btn-info2:focus, .btn-info2:active, .btn-info2.active, .open>.dropdown-toggle.btn-info2 {
    color: #ffffff;
    background-color: #4144d6;
    border-color: #ffffff; 
 
}
</style>
