import React from "react";
import "./registration.css";

const Registration = () => {
    const click = (e) => {
        e.preventDefault();
        console.log("clicked")
    }
  return (
    <>
      <div className="reg">
        <div className="register">
            <h1>Registration Form</h1>
          <form onSubmit={click}>
            <div className="formd">
              <div className="">
                <label htmlFor="">Your Name</label>
                <input type="text"  />
              </div>
              <div className="">
                <label htmlFor="">Eslfslfjsfjsfjlsmail</label>
                <input type="text"  />
              </div>
              <div className="">
                <label htmlFor=""> Password</label>
                <input type="Password"  />
              </div>
              <div className="">
                <label htmlFor="">Confirm Password</label>
                <input type="Password"  />
              </div>
              </div>
              <div className="registerbtn">
              <input  type="submit" value="Login" />
            </div>
            
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
