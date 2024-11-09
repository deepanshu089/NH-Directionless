
import { initializeApp } from "firebase/app";

import {getAuth, GoogleAuthProvider} from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyAyS_x-sHz4ONdQlM2JSp4blE1o3Je7rNQ",
  authDomain: "nitshacks-fe0ae.firebaseapp.com",
  projectId: "nitshacks-fe0ae",
  storageBucket: "nitshacks-fe0ae.firebasestorage.app",
  messagingSenderId: "775071091168",
  appId: "1:775071091168:web:ec3c054e61a8409a6e4385",
  measurementId: "G-BLV6HJQ07K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export {auth, provider};