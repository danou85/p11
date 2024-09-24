import React from 'react';
import { NavLink } from "react-router-dom";

import argentBankLogo from './argentBankLogo.webp'; // Importez l'image
import "./main.css"; // Importez votre fichier main.css en utilisant un chemin relatif
const Logo = () => {
    return (
        <div className="logo">
            <NavLink to="/">
                <img src={argentBankLogo} alt="Logo Argent Bank" /> {/* Utilisez l'image importée ici */}
            </NavLink>
        </div>
    );
};

export default Logo;