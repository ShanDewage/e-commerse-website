<template>
  <div class="products">
      <div class="container">
          
        <div class="intro h-100">
            <div class="row h-100 text-left">
              <div class="col-md-6 ">
                    <h3 >Products Page</h3>
                
                 <label>
                 Shop Items with Name and Price
                 </label>
              </div>
                  <div class="col-md-2 float-right ">
                  <img src="" class="pr-2" alt="" >
              </div>
              
            </div>
          </div>

          <hr>

          <div class="product-test ">


            <h3 class="d-inline-block float-left">Products list</h3>
            <button @click="addNew" class="btn btn-primary float-right">Add Product</button>

            <div class="table-responsive ">
              
                <table class="table">
                  <thead>
                    <tr>
                      <th class="text-left">Name</th>
                      <th >Price</th>
                      <th >Modify</th>
                    </tr>
                  </thead>

                  <tbody>
                      <tr v-for="product in products"  v-bind:key="product.id">
                        <td class="text-left">
                          {{product.name}}
                        </td>

                        <td >
                          {{product.price}}
                        </td>

                        <td >

                          <button class="btn btn-primary float-right" style="width:100px;" @click="editProduct(product)">Edit</button>
                          <button class="btn btn-danger mr-2 float-right" style="width:100px;" @click="deleteProduct(product)">Delete</button>
                        </td>

                      </tr>


                  </tbody>
                </table>
            </div>

          </div>
      </div>

      <!-- Modal -->
      <div class="modal fade" id="product" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header" style="background:black;color:white;">
              <h5 class="modal-title" id="editLabel"> Product Add / Edit</h5>
              <button type="button" class="close" style="color:white;font-size:30px;" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

                <div class="row text-left">
                  <!-- main product -->
                  <div class="col-md-8">
                    <div class="form-group">
                      <input type="text" placeholder="Product Name" v-model="product.name" class="form-control">
                    </div>

                    <div class="form-group">
                      <vue-editor v-model="product.description"></vue-editor>
                    </div>
                  </div>
                  <!-- product sidebar -->
                  <div class="col-md-4">
                    <h3 class="display-6">Product Details</h3>
                    <hr>

                    <div class="form-group">
                      <input type="text" placeholder="Product Price" v-model="product.price" class="form-control">
                    </div>

                    <div class="form-group">
                      <input type="text" @keyup.188="addTag" placeholder="Product Tags" v-model="tag" class="form-control">
                      
                      <div  class="d-flex">
                        <p v-for="tag in product.tags"  v-bind:key="tag">
                            <span class="p-1">{{tag}}</span>
                        </p>

                      </div>
                    </div>


                    <div class="form-group">
                      <label for="product_image" class="float-left">Product Images</label>
                      <input type="file" @change="uploadImage" class="form-control">
                    </div>

                    <div class="form-group d-flex">
                      <div class="p-1" v-for="(image, index) in product.images"  v-bind:key="(image,index)">
                          <div class="img-wrapp">
                              <img :src="image" alt="" width="80px">
                              <span class="delete-img" @click="deleteImage(image,index)">X</span>
                          </div>
                      </div>
                    </div>

                  </div>
                </div>




            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary " style="width:250px;" data-dismiss="modal">Close</button>
              <button @click="addProduct()" type="button" class="btn btn-primary " style="width:250px;" v-if="modal == 'new'">Save changes</button>
              <button @click="updateProduct()" type="button" class="btn btn-primary "  style="width:250px;"  v-if="modal == 'edit'">Apply Changes</button>
            </div>
          </div>
        </div>
      </div>


    
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { fb, db} from '../firebase';

export default {
  name: "Products",
  components: {
    VueEditor
  },
  props: {
    msg: String
  },

  data(){
    return {
        products: [],
        product: {
          name:null,
          description:null,
          price:null,
          tags:[],
          images:[]
        },
        activeItem:null,
        modal: null,
        tag: null
    }
  },

  firestore(){
      return {
        products: db.collection('products'),
      }
  },
  methods:{

    deleteImage(img,index){

      let image = fb.storage().refFromURL(img);

      this.product.images.splice(index,1);

      image.delete().then(function() {
        console.log('image deleted');
      }).catch(function(error) {
        // Uh-oh, an error occurred!
        console.log('an error occurred');
      });

    },

    addTag(){
       this.product.tags.push(this.tag);
       this.tag = "";
    },
    uploadImage(e){

      if(e.target.files[0]){
        
          let file = e.target.files[0];
    
          var storageRef = fb.storage().ref('products/'+ Math.random() + '_'  + file.name);
    
          let uploadTask  = storageRef.put(file);
    
          uploadTask.on('state_changed', (snapshot) => {
            
          }, (error) => {
            // Handle unsuccessful uploads
          }, () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.product.images.push(downloadURL);
            });

          });

      }




    },

    reset(){
      this.product = {
          name:null,
          description:null,
          price:null,
          tags:[],
          images:[]
      }
    },

    addNew(){
        this.modal = 'new';
        this.reset();
        $('#product').modal('show');
    },
    updateProduct(){
        this.$firestore.products.doc(this.product.id).update(this.product);
          Toast.fire({
            type: 'success',
            title: 'Updated  successfully'
          })

           $('#product').modal('hide');
    },

    editProduct(product){
      this.modal = 'edit';
      this.product = product;
      $('#product').modal('show');
    },


    deleteProduct(doc){


      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {

          this.$firestore.products.doc(doc.id).delete()

          Toast.fire({
            type: 'success',
            title: 'Deleted  successfully'
          })

        
        }
      })


        
    },
    readData(){

      
     
    },
    addProduct(){
      
      this.$firestore.products.add(this.product);
      
          Toast.fire({
            type: 'success',
            title: 'Product created successfully'
          })

      $('#product').modal('hide');
    }

  
  },
  created(){
  

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.img-wrapp{
  position: relative;
}
.img-wrapp span.delete-img{
    position: absolute;
    top: -14px;
    left: -2px;
}
.img-wrapp span.delete-img:hover{
  cursor: pointer;
}
.container
{
   font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

</style>
