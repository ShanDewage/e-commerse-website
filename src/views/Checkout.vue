<template>
  <div class="chekout">
       <Navbar></Navbar>

        <div class="container mt-4 pt-5">

            <div class="row">

                <div class="col-md-8 text-md-left"  >
                   <h2 class=" ml-4 font-weight-bold">YOUR ITEMS</h2>
                     <ul>
                        <li v-for="item in this.$store.state.cart"  style="outline: 1px solid 	black;background:#F0F8FF;"  class="media pt-3 mt-3" v-bind:key="item.id">
                        <img :src="item.productImage" width="100px"  class="align-self-center mr-3 ml-3 mb-3" alt="">
                        <div class="media-body ml-0">
                            <h5 class="mt-1 font-weight-bold">{{item.productName}} 

                                <button type="button" class="close  mt-0 mr-3" style=" font-size: 30px;" data-dismiss="modal" aria-label="Close">
                          <span class='float-right' @click="$store.commit('removeFromCart',item)">&times;</span>

                      </button>
                        </h5>
                           
                            <h6 class="mt-3"  style="color:red;">{{item.productPrice | currency}}</h6>
                            <h6 class="mt-3" style="color:#2F4F4F;">Quantity : {{item.productQuantity }}</h6>
                        </div>
                        </li>

                    </ul>
                   
                
                <form>
             
                    
                    </form>
                </div>
            </div>
        </div>
          <Footer/>
        </div>

</template>

<style>
.chekout
{
 
    background: radial-gradient( #e5e5f2, #F0F2F0,#b2b2d8); 
}
.container{
     font-family: Comic Sans MS, cursive, sans-serif;
}
</style>

