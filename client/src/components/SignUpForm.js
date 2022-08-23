import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const SignUpForm = ( {onLogin, closeModalHandler, setShowLogin} ) => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPassword_Confirmation] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    let navigate = useNavigate()

    function handleSignup(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            username,
            password,
            password_confirmation,
            email,
            address,
            phone_number,
            is_admin: false,
          }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((user) => {
                onLogin(user)
                navigate("/menu")
            });
          } else {
            r.json().then((error) => setErrors(error.errors));
          }
        });
      }


  return (
    <div>
       <p>Create an account to leave us a review!</p>
        <form onSubmit={handleSignup}>
        <input
          placeholder="Your name"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="create a username"
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          placeholder="enter your email"
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="enter your password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          placeholder="re-enter your password"
          type="password"
          id="password_confirmation"
          value={password_confirmation}
          onChange={(e) => setPassword_Confirmation(e.target.value)}
        />

        <button id="signup-btn" type="submit">
          {isLoading ? "Loading..." : "Sign Up"}
        </button>
        <div>
          {errors.map((error) => (
            <error key={error}>{error}</error>
          ))}
        </div>
      </form>
      <p>Already have an Account?</p>
      <button id="sign-log-btn" onClick={() => setShowLogin(true)}>
            Login!
          </button>
          <button onClick={closeModalHandler}>Close</button>
    </div>
  )
}

export default SignUpForm