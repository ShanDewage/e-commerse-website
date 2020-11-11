<template>
  <div class="chekout">
       <Navbar></Navbar>

        <div class="container mt-5 pt-5">

            <div class="row">

                <div class="col-md-8">
                   <h4 class="py-4">Checkout page</h4>
                     <ul>
                        <li v-for="item in this.$store.state.cart" class="media" v-bind:key="item.id">
                        <img :src="item.productImage" width="100px" class="align-self-center mr-3" alt="">
                        <div class="media-body">
                            <h5 class="mt-0">{{item.productName}}

                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span class='float-right' @click="$store.commit('removeFromCart',item)">&times;</span>

                      </button>

                            </h5>
                            <p class="mt-0">{{item.productPrice | currency}}</p>
                            <p class="mt-0">Quantity : {{item.productQuantity }}</p>
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

