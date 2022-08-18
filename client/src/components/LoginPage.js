import React, { useState } from 'react'
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const LoginPage = ( {onLogin} ) => {
    const [showLogin, setShowLogin] = useState(true);


  return (
    <div>
        {showLogin ? (
        <div>
          <h1>Welcome to Ollie !</h1>
          <p>Login below</p>
          <LoginForm onLogin={onLogin} />
          <p>Don't have an Account?</p>
          <button onClick={() => setShowLogin(false)}>
            Sign up!
          </button>
        </div>
      ) : (
        <div>
          <h1>Sign Up Below!</h1>
          <SignUpForm onLogin={onLogin} />
          <p>Already have an account?</p>
          <button onClick={() => setShowLogin(true)}>
            Login!
          </button>
        </div>
      )}
    </div>
  )
}

export default LoginPage