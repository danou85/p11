// Assurez-vous d'importer votre fichier CSS
import React, { useState } from "react";
import "./main.css"; // Assurez-vous d'importer votre fichier CSS
import { useNavigate } from "react-router-dom";

// Composant de connexion
const SignIn = () => {
  const url = "http://localhost:3001/api/v1/user/login";
  const [email, setEmail] = useState(""); // État pour l'email
  const [password, setPassword] = useState(""); // État pour le mot de passe
  const [error, setError] = useState(null); // État pour les erreurs
  const navigate = useNavigate(); // Utilisation du hook de navigation

  // Gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password); // Affichage des valeurs saisies
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }), // Envoi des données au serveur
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.body.token); // Affichage du jeton d'authentification
        localStorage.token = data.body.token; // Stockage du jeton dans le stockage local
        navigate("/User"); // Redirection vers la page utilisateur
      })
      .catch((err) => {
        console.log(err);
        setError("Invalid email or password"); // Gestion des erreurs
      });
  };

  return (
    <main className="main bg-dark form-login">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input-wrapper">
            {/* Champ de saisie pour l'email */}
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              onInput={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            {/* Champ de saisie pour le mot de passe */}
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onInput={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            {/* Case à cocher pour se souvenir */}
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {/* Bouton de connexion */}
          <button type="submit" className="sign-in-button">
            Sign in
          </button>
        </form>
      </section>
    </main>
  );
};

export default SignIn; // Export du composant