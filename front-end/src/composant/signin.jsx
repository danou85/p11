import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./main.css";

const SignIn = () => {
  // Utilisation des hooks pour gérer l'état des champs email, password et des erreurs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  
  // Hook pour la navigation après la connexion réussie
  const navigate = useNavigate();

  // Fonction de gestion du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire
    console.log("Bouton de connexion cliqué");

    // URL de l'API pour la connexion
    const url = "http://localhost:3001/api/v1/user/login";

    // Affiche les données qui vont être envoyées pour s'assurer qu'elles sont correctes
    console.log("Email:", email, "Password:", password);

    // Envoi de la requête POST au serveur pour la connexion
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Déclare le type de contenu comme JSON
      },
      body: JSON.stringify({ email, password }), // Convertit les données en JSON pour l'envoi
    })
      .then((res) => {
        // Vérifie si la réponse n'est pas OK (statut HTTP 200-299)
        if (!res.ok) {
          // Traite l'erreur côté serveur 
          return res.json().then((errorData) => {
            throw new Error(`Erreur du serveur : ${res.status}, ${errorData.message || 'Erreur inconnue'}`);
          });
        }
        return res.json(); // Si la réponse est OK, convertit les données en JSON
      })
      .then((data) => {
        // Vérifie si la réponse contient un token (authentification réussie)
        console.log("Données de réponse analysées :", data);
        if (data.body && data.body.token) {
          // Stocke le token dans le localStorage
          localStorage.setItem('token', data.body.token);
          // Redirige l'utilisateur vers la page "/user"
          navigate("/user");
        } else {
          // Affiche une erreur si les identifiants sont invalides
          setError("Email ou mot de passe invalide");
        }
      })
      .catch((err) => {
        // Capture toute erreur de réseau ou autre et met à jour l'état de l'erreur
        console.error("Erreur de fetch :", err);
        setError("Échec de la connexion au serveur");
      });
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Met à jour l'état email
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Met à jour l'état password
              required
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {/* Affiche le message d'erreur s'il y en a un */}
          {error && <p className="error">{error}</p>}
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default SignIn;
