import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./main.css"; // Assurez-vous que le fichier CSS est importé

const Login = () => {
  return (
    <div className="main-nav">
      <ul className="main-nav-list">
        {/* Lien de navigation pour la page de connexion */}
        <li>
          <NavLink to="/Login" className="main-nav-item">
            {/* Icône de connexion */}
            <FontAwesomeIcon icon={faUserCircle} className="main-nav-icon" />
            Sign In
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Login;
