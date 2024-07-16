import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./main.css";

const Login = () => {
  return (
    <div className="login">
      <ul>
        <NavLink to="/Login" className="main-nav-item">
          <li>
            <FontAwesomeIcon icon={faUserCircle} className="fa-icon" />
            sign in
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Login;
