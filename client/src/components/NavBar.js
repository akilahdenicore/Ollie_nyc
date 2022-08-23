import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import LoginForm from './LoginForm';

const NavBar = ({onLogin}) => {
    let navigate = useNavigate();

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then((r) => {
          if (r.ok) {
            onLogin(null);
            navigate("/");
          }
        });
      }

  return (
    <div>
        <div>
        <Link to="/" >
            <p>Home</p>
            </Link>

            <Link to="/login">
            <p>Login</p>
            </Link>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
      <LoginForm onLogin={onLogin}/>
    </div>
  )
}

export default NavBar