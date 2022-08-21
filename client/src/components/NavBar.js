import React from 'react'
import { Link, useNavigate } from "react-router-dom";

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
            <Link to="/products">
            <p>Menu</p>
            </Link>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default NavBar