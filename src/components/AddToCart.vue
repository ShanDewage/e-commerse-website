<template>
  <div class="add-to-cart">
   
        <button class="btn btn-danger float-left btn-sm btn-lg btn-block" @click="addToCart"><i class="fa fa-shopping-bag" aria-hidden="true"></i> Add to Bag </button>
    
  </div>
</template>

<script>
export default {
  name: "add-to-cart",
  props: {
    name: String,
    price: String,
    image: String,
    pId: String
  },

  data(){
      return {
          item :{
            productName: this.name,
            productImage: this.image,
            productPrice: this.price,
            productId: this.pId,
            productQuantity: 1,
          }

      }
  },
  methods:{
    addToCart(){
      $('#miniCart').modal('show');
      this.$store.commit('addToCart', this.item)
    }

  }

};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
