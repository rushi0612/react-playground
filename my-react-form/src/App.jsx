
import { useState } from "react"
import './App.css'

function App() {
  const [firstName, setFirstName]=useState("");
  const [lastName, setLastName]=useState("");
  const [email, setEmail]=useState("");
  const [contact, setContact]=useState("");
  const [gender, setGender]=useState("");
  const [subjects, setSubject]=useState({
      english: true, 
      maths: false,
      physics: false,
  });
  const [resume, srtResume]=useState("");
  const [url, setUrl]=useState("");
  const [selectedOption, setSelectedOption]=useState("");
  const [about, setAbout] = useState("");

  return (
      <div className="App">
          <h1>Form in React</h1>
          <fieldset>
            <form action="" method="get">
               <label for="firstname">First Name*</label>
               <input type="text" name="firstname" id="firstname"  
               value={firstName} onChange={(e)=>setFirstName(e.target.value)}  
               placeholder="Enter First Name" required/>

               <label for="lastname">Last Name*</label>
               <input type="text" name="lastname" id="lastname"
               value={lastName} onChange={(e)=>setLastName(e.target.value)}  
               placeholder="Enter Last Name" required/>

               <label for="email">Enter Email*</label>
               <input type="email" name="email" id="email"  
               value={email} onChange={(e)=>setEmail(e.target.value)} 
               placeholder="Enter Email" required/>

               <label for="tel">Contact*</label>
               <input type="tel" name="contact" id="contact"  
               value={email} onChange={(e)=>setContact(e.target.value)} 
               placeholder="Enter Mobile Number" required/>

              <label for="gender">Gender*</label>
              <input type="radio" name="gender" value="male" id="male" 
                 checked={gender === "male"}  
                 onChange={(e) => setGender(e.target.value)} />Male

              <input type="radio" name="gender" value="female" id="female" 
                 checked={gender === "female"}  
                 onChange={(e) => setGender(e.target.value)} />Female 

              <input type="radio" name="gender" value="other" id="other" 
                 checked={gender === "other"}  
                 onChange={(e) => setGender(e.target.value)} />Other 
              

            </form>
          </fieldset>
    </div>
  )
}

export default App
