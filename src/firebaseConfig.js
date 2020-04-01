  
import * as Firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDapMBGyH_vyx2mFtqAg9jGW1b-XA9Fc4A",
    authDomain: "kyushu-8b5f7.firebaseapp.com",
    databaseURL: "https://kyushu-8b5f7.firebaseio.com",
    projectId: "kyushu-8b5f7",
    storageBucket: "kyushu-8b5f7.appspot.com",
    messagingSenderId: "153005328956",
    appId: "1:153005328956:web:2fb9cf559e3185dbbd9139",
    measurementId: "G-BV187CG55X"
  };

export const firebase = Firebase.initializeApp(firebaseConfig);