import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


const LoginForm = ({onLogin, closeModalHandler}) => { //any function or variable that is inherited from a parent must be noted here **
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    let navigate = useNavigate();


    
    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((user) => {
              onLogin(user);
              console.log(user)
              closeModalHandler();
            });
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }


  return (
    <div>
        <p>Login below to leave us a review!</p>
        <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter username"
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Enter password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">
          {isLoading ? "Loading..." : "Login"}
        </button>
        <div>
          {errors.map((error) => (
            <error key={error}>{error}</error>
          ))}
        </div>
      </form>
      <p>Don&apos;t have an Account?</p>
    </div>
  )
}

export default LoginForm;