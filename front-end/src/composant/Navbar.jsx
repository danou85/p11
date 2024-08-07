import React from 'react';
import { Link } from 'react-router-dom';
import logo from './argentBankLogo.png'; // Ajustez le chemin selon la structure de votre projet
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './main.css'; // Assurez-vous d'importer le fichier CSS si vous avez des styles spécifiques

const NavBar = () => {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo} // Utilisation de l'import pour la source de l'image
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
      <i className="fa-solid fa-user-circle"></i>
        <Link className="main-nav-item" to="/Login">
          
          Sign In
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;