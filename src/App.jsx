import React from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import Login from './components/login.component'
import SignUp from './components/signup.component'
import Main from './components/Main.component'
import Profile from './components/model/Profile'

function App(props) {

  const Navigate = useNavigate();

  if (window.location.pathname !== '/login') {
    if (!localStorage.getItem('FHI_admin_mobile') && !sessionStorage.getItem('FHI_admin_mobile')) {
      window.location.href = '/login'
    }
  }

  if (window.location.pathname === '/') {
    window.location.href = '/home'
  }
  return (
    <>
      {(!localStorage.getItem('FHI_admin_mobile') && !sessionStorage.getItem('FHI_admin_mobile')) ?
      
          <Routes>
            <Route path='/login' element={<Login />} />
          </Routes>
        


        :
        <>

          <Routes>
            {/* <Route exact path="/" render={() => {
              return (
                // user_id ?
                <Navigate to="/home" />
                // :
                // <Redirect to="/login" />
              )
            }} /> */}
            {/* <Route exact path="/" element={<Login />} />
                <Route path="/sign-in" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} /> */}
            <Route path='/home' element={<Main />} />
            <Route path="*" element={<p>Path not resolved</p>} />
            <Route path='/profile' element={<Profile/>}/>
          </Routes>


        </>
      }

    </>

  );
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
export default withRouter(App)
