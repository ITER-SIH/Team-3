import React from 'react'
import '../styles/Login.css';

const Login = () => {
  return (
    <>
    <div className="container">
        <h2 className="t-center">Login</h2>
        <htmlForm action="">
            <div className="inputDiv">
                <label htmlFor="name" className="username">Username</label>
                <div className="userArea">
                    <i className="fa-solid fa-user"></i><input type="text" name="name" id="name"
                        placeholder="Type your username"/>
                </div>
                <hr/>
            </div>
            <div className="inputDiv">
                <label htmlFor="password" className="username">Password</label>
                <div className="userArea">
                    <i className="fa-solid fa-key"></i><input type="password" name="password" id="password"
                        placeholder="Type your password"/>
                </div>
                <hr/>
            </div>

            <span className="htmlForgotPassword">htmlForgot password?</span>
            <button className="btn">Login</button>
            <div className="htmlFormBottom">
                <p>Or Sign Up using</p>
                <ul className="flexUl">
                    <a href="https://www.faceboook.com" target="_blank">
                        <li><i className="fa-brands fa-facebook-f"></i></li>
                    </a>
                    <a href="https://www.twitter.com" target="_blank">
                        <li><i className="fa-brands fa-twitter"></i></li>
                    </a>
                    <a href="https://www.google.com" target="_blank">
                        <li><i className="fa-brands fa-google"></i></li>
                    </a>
                </ul>
                <p className="signUp">Or Sign Up using</p>
                <p id="signUp">SIGN UP</p>
            </div>
            </htmlForm>
            </div>
           
    </>
  )
}

export default Login