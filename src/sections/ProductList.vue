<template>
  <div class="products" id="products">
      <div class="container" >
          <h1 class="text-center p-5"></h1>
          <div class="row">
              
              <div class="col-md-4 mt-2 pb-2  "  id="bgc" v-for="product in products"  v-bind:key="product.id">
                  <div class="card product-item mt-3" style="outline: 1px solid 	black;" >
                     
                        <carousel  :perPage="1" id="sl"   >
                          <slide  v-for="(image, index) in product.images"  v-bind:key="(image,index)">
                                <img :src="image"   class="card-img-top" alt="slide" width="250px">
                          </slide>
                        </carousel>
                
                        <div class="card-body" id="bgname">
                          <div class="d-flex justify-content-between  ">
                            <h6 class="card-title text-md-left col-100 text-truncate">{{ product.name }}</h6>
                            
                        </div>
                        <div  >
                           <h5 class="card-priceS float-left font-weight-bold" >{{ product.price | currency }}</h5>
                        </div>

                        
                             <add-to-cart  
                                :image="getImage(product.images)"
                                :p-id="product.id"
                                :price="product.price"
                                :name="product.name">
                            </add-to-cart>
                            
                         </div>
                       
                     
                    </div>
              </div>

          </div>
      </div>
    
  </div>
</template>

<script>
import {db} from '../firebase';

import {VueCarousel,Slide} from 'vue-carousel';


export default {
  name: "Products-list",
  props: {
    msg: String
  },

data(){
    return {
        products: [],
     
    }
  },

  methods:{

    getImage(images){
      return images[0];
    }

  },

  firestore(){
      return {
        products: db.collection('products'),
      }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .products{
        font-family: Andale Mono, monospace;



  background: url(../assets/cont.jpg) no-repeat;
    background-size:cover;
    background-position: center; 

       color: black;
    }

    #bgc{
      background: #E6E6FA;  /* fallback for old browsers */
      
    
    }

    #bgname
    {
background: #bdc3c7;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */



    }

    #sl
    {
background: #00416A;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top, #E4E5E6, #00416A);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top, #E4E5E6, #00416A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    }
</style>
