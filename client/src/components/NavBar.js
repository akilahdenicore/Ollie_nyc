import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import LoginForm from './LoginForm';

const NavBar = ({onLogin, user}) => {
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

      const openModalHandler = () => {
        document.querySelector(".loginSignupModal").style.display = "flex";
      };
//if not logged in user will see this navbar
      if (!user) {
        return (
        <div>
        <Link to="/" >
          <p>Home</p>
          </Link>
        <Link to="/menu">
          <p>Menu</p>
          </Link>
          <a href="https://resy.com/cities/ny/ollie?date=2022-08-22&seats=2" target="_blank" rel="noopener noreferrer">Resy</a>
          <Link to="/#contact"><p>Contact</p> 
          </Link>
        <button onClick={openModalHandler}>Login</button>
      </div>
        )
      }
//if user is logged in will render this version of navbar
      return (
        <div>
        <Link to="/" >
          <p>Home</p>
          </Link>
        <Link to="/menu">
          <p>Menu</p>
          </Link>
          <a href="https://resy.com/cities/ny/ollie?date=2022-08-22&seats=2" target="_blank" rel="noopener noreferrer">Resy</a>
          
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
      )
}

export default NavBar