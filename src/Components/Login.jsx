import React, {useState} from "react";
import "./login.css";

const Login = () => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const click = (e) => {
        e.preventDefault();
        let objtobesend={}
        objtobesend.name=username
        objtobesend.password=password
        console.log(objtobesend)

        // try {
        //     const result=loginFunction()
        // } catch (error) {
            
        // }
    }
  return (
    <>
      <div className="body">
        <div className=" login1">
          <h1>Login </h1>
          <form onSubmit={click}>
            <div className="formlogin">
              <div className="Uname">
                <label htmlFor="">Username</label>
                <input type="text" onChange={e => setUserName(e.target.value)} autoComplete required/>
                <span><p style={{color:"red" ,fontSize:"10px"}}>wrong Username</p></span>
              </div>
              <div className="password">
                <label htmlFor="">Password</label>
                <input type="password" onChange={e => setPassword(e.target.value)}  autoComplete required/>
                <span><p style={{color:"red" ,fontSize:"10px"}}>wrong Password</p></span>
              </div>
            </div>
            <div className="btnlo">
              <input className="inputLo" type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
