import React, { use, useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from './firebase';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

const auth = getAuth(app);

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user){
        setUser(user)
      }else{
        console.log("You are logged out")
        setUser(null)
      }
    })
  },[]);


  if(user=== null){
    return(
      <div className="App">
        <SignUp />
        <SignIn />
      </div>
    )
  }

  return (
    <div className="App">
      <h1>Hello {user.email}</h1>
      <button onClick={()=>signOut(auth)}>Logout</button>
    </div>
  )
}

export default App