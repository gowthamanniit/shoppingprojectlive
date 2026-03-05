import './Components/style.css'
import Cart from "./Cart"
import Home from "./Home"
import React, { useState } from "react";
import axios from 'axios';
function App()
{
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const users={
      username:"",
      password:""
  }
  const [user,setUser]=useState(users)
  const inputHandler = (e) =>{
    const {name,value }= e.target;
    setUser({...user, [name]: value });
};

const errors = {
  pass: "invalid credentials!!!"
};

const handleSubmit =async (event) => {
  //Prevent page reload
  event.preventDefault();
  console.log(user)
  await axios.get("http://localhost:8099/api/user",{params:user}).then((res)=>{
          console.log(res.data)
          setIsSubmitted(true)
          }).catch((err)=>{
              if(err.response){
                console.log(err.response.data)
                  //setResult(err.response.data)
                  setErrorMessages({ name: "pass", message: errors.pass });
                  setIsSubmitted(false)
              }
              else
              {
                  //setResult({message:"something went wrong"})
                  setErrorMessages({ name: "pass", message: errors.pass });
              }
          //console.log(err)
          })


  //var { uname, pass } = document.forms[0];

  // Find user login info
  //const userData = database.find((user) => user.username === uname.value);

  // Compare user info
  /*if (userData) {
    if (userData.password !== pass.value) {
      // Invalid password
      setErrorMessages({ name: "pass", message: errors.pass });
    } else {
      setIsSubmitted(true);
    }
  } else {
    // Username not found
    setErrorMessages({ name: "uname", message: errors.uname });
  }*/
};

// Generate JSX code for error message
const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

// JSX code for login form
const renderForm = (
  <>
  <div className="title">Shopping Cart</div>
  <div className="form">
    <form onSubmit={handleSubmit}>
    <div className="title">Sign In</div>    
      <div className="input-container">
        <label>Username </label>
        <input type="text" name="username" id="username" onChange={inputHandler} placeholder="Enter User Name" required />
        {renderErrorMessage("uname")}
      </div>
      <div className="input-container">
        <label>Password </label>
        <input type="password" name="password" id="password" onChange={inputHandler} placeholder="Enter Password" required />
        {renderErrorMessage("pass")}
      </div>
      <div className="button-container">
        <input type="submit" />
      </div>
    </form>
  </div>
  </>
);
return(<div className="app">
<div className="login-form">
  {isSubmitted ? <div> <Home></Home>
    <Cart></Cart></div> : renderForm}
</div>
</div>)
   
  }
export default App