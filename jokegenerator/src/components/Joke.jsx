import React, { useState } from 'react'
import '../Joke.css';
import Button from "./Button";

const Joke = () => {
  const [joke, setJoke]=useState("");

  const fetchApi = ()=>{
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single") 
    .then((res) => res.json())
    .then((data) => setJoke(data.joke))

    console.log("Joke Generated")
  }
  return (
    <div className="joke">
      <Button callApi={fetchApi} />
    </div>
  )
}

export default Joke;