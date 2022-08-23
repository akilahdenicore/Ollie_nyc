import React, { useState } from 'react';
import "../styles/loginPage.css";
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const LoginPage = ( {onLogin} ) => {
    const [showLogin, setShowLogin] = useState(true);
    // const [showSignUp, setShowSignUp] = useState(false);

    const closeModalHandler = () => {
      document.querySelector(".loginSignupModal").style.display = "none";
    };

  return (
    <div className="loginSignupModal">
      <h3>Welcome to Ollie !</h3>
      {showLogin ? (
      <div>
      <LoginForm onLogin={onLogin} closeModalHandler={closeModalHandler}/>
      <button id="sign-log-btn" onClick={() => setShowLogin(false)}>
      Sign up!
      </button>
      </div>
      ) : (<div>
        <SignUpForm onLogin={onLogin}/>
        <p>Already have an account?</p>
          <button id="sign-log-btn" onClick={() => setShowLogin(true)}>
            Login!
          </button>
      </div>)}
    
    <button onClick={closeModalHandler}>Close</button>
    </div>
  )
}

export default LoginPage;