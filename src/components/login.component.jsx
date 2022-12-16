import React, { Component } from 'react'
import { useNavigate } from "react-router-dom"



 class Login extends Component {
  constructor(props){
    super(props)

    this.state = {
      mobileNumber: '',
      pass: '',
      remember: false,
      isValid: true,
      message: '',
      validPassword: false,

  }

  }



  handleLogin = (e) => {

  
    e.preventDefault();
    const { mobileNumber, remember } = this.state;
    if (remember) {
        // save in local storage
        localStorage.setItem('FHI_admin_mobile', mobileNumber);
        sessionStorage.removeItem('FHI_admin_mobile');
    } else {
        // save in session storage
        localStorage.removeItem('FHI_admin_mobile');
        sessionStorage.setItem('FHI_admin_mobile', mobileNumber);
    }

    this.props.navigate("/");


}

handleMobile = (e) => {
    var pattern = new RegExp(/^[0-9\b]+$/);
    const reg = /^[0]?[6789]\d{9}$/;
    if (e.target.value !== '') {
        if (!pattern.test(e.target.value)) {
            document.getElementById('mobileNumber').value = '';
            this.setState({ mobileNumber: '' });
            this.setState({ isValid: false });
            this.setState({ message: "Please enter only number." });
        }
        else {
            if (reg.test(e.target.value)) {
                this.setState({ isValid: true, message: "", mobileNumber: e.target.value });
            } else {
                this.setState({ isValid: false, message: "Please enter valid mobile number.", mobileNumber: e.target.value });
            }
        }
    } else {
        this.setState({ isValid: true, message: "", mobileNumber: '' });
    }
}

handlePassword = (e) => {
    this.setState({ pass: e.target.value });
    if (e.target.value === '968686') {
        this.setState({ validPassword: true })
    } else {
        this.setState({ validPassword: false })
    }
}

handleRemember = (e) => {
    e.target.checked ? this.setState({ remember: true }) : this.setState({ remember: false });
}

  render() {

    const { mobileNumber, pass, isValid, validPassword } = this.state;
   
    return (
      <div className="auth-wrapper">
      <div className="auth-inner">
      <div className='container'>
        <form onSubmit={this.handleLogin}>
          <h3>Sign In</h3>

          <div className="mb-3">
            <label>Email address</label>
            <input
            id='name'
              type="name"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label>Mobile</label>
            <input
            id='mobileNumber'
              type="mobile"
              className="form-control"
              placeholder="10 digit..."
              name="mobile" onChange={this.handleMobile}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={this.handlePassword} 
            />
          </div>

          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1" onChange={this.handleRemember}>
                Remember me
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button 
               className={mobileNumber.length > 0 && isValid && pass.length > 0 && validPassword ? "main_btn" : "main_btn_disabled"} 
               disabled={mobileNumber.length > 0 && isValid && pass.length > 0 && validPassword ? false : true}
            >
              Submit
            </button>
          </div>
          {/* <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p> */}
          <p className="forgot-password text-right">
            Not a member ? <a href="/sign-up">Signup now</a>
          </p>
        </form>
      </div>
      </div>
      </div>
      

    )
  }
}

const withRouter = WrappedComponent => props => {
    const navigate = useNavigate();
    // etc... other react-router-dom v6 hooks

    return (
        <WrappedComponent
            {...props}
            navigate={navigate}
        // etc...
        />
    );
};

export default withRouter(Login)