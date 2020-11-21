import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap';
import 'popper.js';
import './assets/app.scss';


import {fb} from './firebase';
import jQuery from 'jquery';
import VueFirestore from 'vue-firestore'

require('firebase/firestore')



Vue.use(VueFirestore, {
  key: 'id',         // the name of the property. Default is '.key'.
  enumerable: true  //  whether it is enumerable or not. Default is true.
})


import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

import { KinesisContainer, KinesisElement } from 'vue-kinesis'

Vue.component('kinesis-container', KinesisContainer)
Vue.component('kinesis-element', KinesisElement)

import VueAnime from 'vue-animejs';

Vue.use(VueAnime)


//$sign
import Vue2Filters from 'vue2-filters'
Vue.use(Vue2Filters)

import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'
Vue.use(SequentialEntrance);


Vue.use(VueFirestore)

window.$ = window.jQuery=jQuery;

import store from './store.js';

Vue.component('Navbar',require('./components/Navbar.vue').default);
Vue.component('Footer',require('./components/Footer.vue').default);
Vue.component('add-to-cart', require('./components/AddToCart.vue').default);
Vue.component('products-list', require('./sections/ProductList.vue').default);
Vue.component('mini-cart', require('./components/MiniCart.vue').default);

Vue.config.productionTip = false;


//delete ms alert
import Swal from 'sweetalert2';
window.Swal =Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

window.Toast = Toast;



import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

library.add(faCamera)

const camera = icon({ prefix: 'fas', iconName: 'camera' })

let app='';

fb.auth().onAuthStateChanged(function(user){

  if(!app){
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");

  }

});