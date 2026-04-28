import React from 'react'
import { getDatabase, ref, set } from "firebase/database";
import app from './firebase';

const db = getDatabase(app);

const App = () => {

  const putData = () => {
    set(ref(db, 'users/rushikesh' ), {
      id: 1,
      name: 'Rushikesh Patil',
      age: 22,
    });
  }
  return (
    <div>
      <h1>
        React Firebase App
      </h1>
      <button onClick={putData} >Put Data</button>
      
    </div>
    
  )
}

export default App