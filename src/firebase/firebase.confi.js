
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// require('dotenv').config()



const firebaseConfig = {
  apiKey: "AIzaSyCdAhx-NJePg-NU_pbUkVGlT11_RrFQx5I",
  authDomain: "brand-shop-f1cff.firebaseapp.com",
  projectId: "brand-shop-f1cff",
  storageBucket: "brand-shop-f1cff.appspot.com",
  messagingSenderId: "450423533885",
  appId: "1:450423533885:web:4cb982ee3cfc64ab37d554"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)