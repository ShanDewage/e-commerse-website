import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'

  // Your web app's Firebase configuration
  var config = {
    apiKey: "AIzaSyCza8cImcTbaZUllBtnMMqdId2N8vnzftQ",
    authDomain: "shop-fb.firebaseapp.com",
    databaseURL: "https://shop-fb.firebaseio.com",
    projectId: "shop-fb",
    storageBucket: "shop-fb.appspot.com",
    messagingSenderId: "388863856150",
    appId: "1:388863856150:web:bb7054531509c0d4b7af37",
    measurementId: "G-WWQ27Q02KW"
  };

  const fb =firebase.initializeApp(config);

  const db =firebase.firestore();

  export {fb,db}