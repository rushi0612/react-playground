import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase";

const auth = getAuth(app);

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signInUser = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(value=>alert("Login successful")).catch(err=>console.log(err))
    }

  return (
    <div className="signin-page">
        <h1>Sign In Page</h1>
        <label>Email</label>
        <input type="email" required onChange={e => setEmail(e.target.value)} value={email} placeholder="Enter Your Email" />
        <br /><br />
        <label>Password</label>
        <input type="password" required onChange={e => setPassword(e.target.value)} value={password} placeholder="Enter Your Password" />
        <br /><br />
        <button onClick={signInUser}>Sign In</button>

    </div>
  )
}

export default SignIn