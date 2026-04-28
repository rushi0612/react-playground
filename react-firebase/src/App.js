import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from './firebase';

const auth = getAuth(app);

const App = () => {

  const signupUser = () => {
    createUserWithEmailAndPassword(auth, "rushi@gmail.com", "rushi123").then(value=>console.log(value))
  }

  return (
    <div>
      <h1>
        React Firebase App
      </h1>
      <button onClick={signupUser} >Create User</button>
      
    </div>
    
  )
}

export default App