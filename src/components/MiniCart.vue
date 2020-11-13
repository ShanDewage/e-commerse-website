<template>
  <div class="mini-cart">
   
        <!-- Modal -->
        <div class="modal fade" id="miniCart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header" id="title" >
                <h5 class="modal-title font-weight-bold" id="exampleModalLabel">My Bag</h5>
                <button type="button" style=" color: white;font-size: 30px;" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true"  >&times;</span>
                </button>
              </div>
              <div class="modal-body text-md-left " style="background:#F0F8FF;">
                  <ul >
                    <li v-for="item in this.$store.state.cart" class="media pt-3" v-bind:key="item.id" >
                      <img :src="item.productImage" width="100px" style="outline: 1px solid 	black;" class="align-self-center mr-3 " alt="">
                      <div class="media-body">
                        <h5 class="mt-1 font-weight-bold">{{item.productName}}
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span class='float-right' @click="$store.commit('removeFromCart',item)">&times;</span>

                      </button>
                          
                        </h5>
                        <h6 class="mt-0" style="color:red;">{{item.productPrice | currency}}</h6>
                        <h6 class="mt-0"  style="color:#2F4F4F;">Quantity : {{item.productQuantity }}</h6>
                      </div>
                    </li>

                  </ul>
              </div>
              <div class="modal-footer " >
                <button type="button" class="btn btn-success  " data-dismiss="modal"  @click="product">Continue Shopping</button>
                <button type="button" class="btn btn-primary " @click="checkout">Checkout</button>
              </div>
            </div>
          </div>
        </div>

    
  </div>
</template>

<script>
export default {
  name: "MiniCart",
  props: {
    msg: String
  },
  methods:{

    checkout(){
      $('#miniCart').modal('hide')
      this.$router.push('/checkout')  
    },
        product(){
      $('#miniCart').modal('hide')
      this.$router.push('/product')  
    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#miniCart
{
   font-family: Courier New, monospace;
}

#title
{
  background: black;
  color: white;
 
}
.modal-footer
{
  background: #bdc3c7;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


}

</style>
