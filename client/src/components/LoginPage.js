import React, { useState } from 'react'
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

//set and create state for button clicked 
// if user=false && buttonClicked=false 
//return login
// else if user=false && buttonClicked=true
// return signup 
// else user=true
// return <> empty div 


const LoginPage = ( {onLogin} ) => {
    const [showLogin, setShowLogin] = useState(true);
    // const [showSignUp, setShowSignUp] = useState(false);
     
    
  
  

  return (
    <div>

      {/* if (!user && !buttonClicked)
    return { 
      (<div>
        <LoginForm onLogin={onLogin} setShowLogin={setShowLogin} />
      </div>)
     } else if ( !user && buttonClicked===true) 
     return {
      (<div>
        <SignUpForm onLogin={onLogin}/>
      </div>)
     } else {
      return {
        <div></div>
      }
     } */}

        {/* {showLogin ? (
        <div>
          <div className="hiding">
            <h1>Welcome to Ollie !</h1>
            <p>Login below to leave us a review!</p>
            <LoginForm onLogin={onLogin} setShowLogin={setShowLogin} />
            <p>Don't have an Account?</p>
            <button onClick={() => showSignUp(true)}>
              Sign up here!
            </button>
          </div>
          <div className="hiding">
            <h1>Sign Up Below!</h1>
            <SignUpForm onLogin={onLogin} />
            <p>Already have an account?</p>
            <button onClick={() => showSignUp(true)}>
              Login!
            </button>
          </div>
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
      )} */}
    </div>
  )
}

export default LoginPage;