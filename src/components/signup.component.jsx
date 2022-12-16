import React from 'react'
import  {useState,setState} from 'react';

const SignUp = () => {

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "firstName"){
        setFirstName(value);
    }
    if(id === "lastName"){
        setLastName(value);
    }
    if(id === "email"){
        setEmail(value);
    }
    if(id === "password"){
        setPassword(value);
    }

}

const handleSubmit  = () => {

  console.log(firstName,lastName,email,password,'ddd');
}
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <div className='container'>
          <form>
            <h3>Sign Up</h3>

            <div className="mb-3">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                autoComplete="on"
                 value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName"
              />
            </div>

            <div className="mb-3">
              <label>Last name</label>
              <input type="text"
               className="form-control"
               placeholder="Last name" 
               autoComplete="on"
               value={lastName}  onChange = {(e) => handleInputChange(e)} id="lastName"
               />
            </div>

            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                autoComplete="on"
                value={email}  onChange = {(e) => handleInputChange(e)} id="email"
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                autoComplete="on"
                value={password}  onChange = {(e) => handleInputChange(e)} id="password"
              />
            </div>

            <div className="d-grid">
              <button type="submit"
              className="btn btn-primary" 
              onClick={()=>handleSubmit()} 
              >
                Sign Up
              </button>
            </div>
            <p className="forgot-password text-right">
              Already registered <a href="/sign-in">sign in?</a>
            </p>
          </form>
        </div>
      </div>

    </div>

  );
}

export default SignUp;
