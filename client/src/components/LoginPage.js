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
      {showLogin ? (
      <div>
      <LoginForm onLogin={onLogin} closeModalHandler={closeModalHandler} setShowLogin={setShowLogin}/>
      </div>
      ) : (<div>
        <SignUpForm onLogin={onLogin} closeModalHandler={closeModalHandler} setShowLogin={setShowLogin}/>
      </div>)}
    </div>
  )
}

export default LoginPage;