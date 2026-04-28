import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from './firebase';
import SignUp from './pages/SignUp';

const auth = getAuth(app);

const App = () => {

  const signupUser = () => {
    createUserWithEmailAndPassword(auth, "rushi@gmail.com", "rushi123").then(value=>console.log(value))
  }

  return (
    <div>
      <SignUp />
    </div>
    
  )
}

export default App