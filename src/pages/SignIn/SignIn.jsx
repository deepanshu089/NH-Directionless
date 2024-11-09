import React from 'react'
import {auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";

const SignIn = () => {
    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            if (data.user && data.user.email) {
                const userEmail = data.user.email.toLowerCase();
                localStorage.setItem("email",userEmail);
            } else {
                console.error("Error retrieving user data during sign-in.");
            }
        }
        );
    }
  return (
    <div>
      
    </div>
  )
}

export default SignIn
