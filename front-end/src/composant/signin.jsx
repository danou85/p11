import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./main.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Bouton de connexion cliqué");

    const url = "http://localhost:3001/api/v1/user/login";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Erreur du serveur : ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Données de réponse analysées :", data);
        if (data.body && data.body.token) {
          localStorage.setItem('token', data.body.token);
          navigate("/user");
        } else {
          setError("Email ou mot de passe invalide");
        }
      })
      .catch((err) => {
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
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
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
