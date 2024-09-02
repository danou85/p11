import React, { useEffect } from "react"; // Importez React et useEffect depuis le module 'react'
import Footer from "../composant/footer.jsx"; // Importez le composant Footer depuis le chemin spécifié
import Account from "../composant/accounts.jsx"; // Importez le composant Account depuis le chemin spécifié
import Navbar from "../composant/Navbar.jsx"; // Importez le composant Navbar depuis le chemin spécifié
import "./user.jsx"; // Importez la feuille de style 'User.js' (bien que cela semble inutilisé)
import WelcomeBack from "../composant/reconnexion.jsx";
import { setUser } from "../store/user.jsx"; // Importez la fonction 'setUser' depuis le magasin 'user.js'
import { useDispatch } from "react-redux"; // Importez le crochet 'useDispatch' depuis le module 'react-redux'

const User = () => {
  const dispatch = useDispatch(); // Initialisez une fonction de dispatch à l'aide du crochet 'useDispatch'
  const transactions = [
    {
      id: 1,
      amount: 100,
      accountNumber: 123456789,
      description: "Dépôt",
      title: "Compte chèque",
      type: "deposit",
      category: "salary",
      note: "Salaire du mois de septembre",
      date: new Date("2024-09-15"), // Exemple de date en septembre
    },
    {
      id: 2,
      amount: -50,
      accountNumber: 123456789,
      description: "Retrait",
      title: "Compte chèque",
      type: "withdrawal",
      category: "food",
      note: "Achat de nourriture",
      date: new Date("2024-09-10"), // Exemple de date en septembre
    },
    {
      id: 3,
      amount: 100,
      accountNumber: 123456789,
      description: "Dépôt",
      title: "Compte épargne",
      type: "deposit",
      category: "salary",
      note: "Salaire du mois de septembre",
      date: new Date("2024-08-05"), // Exemple de date en août
    },
  ];

  useEffect(() => { // Utilisez le crochet 'useEffect'
    console.log(localStorage); // Affichez le contenu de l'objet 'localStorage'
    if (localStorage.token) { // Vérifiez si un 'token' existe dans le 'localStorage'
      fetch("http://localhost:3001/api/v1/user/profile", { // Effectuez une requête HTTP à l'URL spécifiée
        method: "POST", // Utilisez la méthode POST
        headers: {
          Authorization: `Bearer ${localStorage.token}`, // Définissez l'en-tête 'Authorization' avec la valeur du token
        },
        body: null, // Aucun corps de requête n'est fourni
      })
        .then((response) => response.json()) // Analysez la réponse en tant que JSON
        .then((data) => {
          console.log(data); // Affichez les données reçues du serveur
          dispatch(setUser(data.body)); // Envoyez l'action 'setUser' avec les données de l'utilisateur
        })
        .catch((error) => console.log(error)); // Gérez les éventuelles erreurs survenues lors de la requête
    } else {
      window.location = "/login"; // Redirigez vers la page de connexion si aucun token n'est trouvé
    }
  });

  return (
    <div>
      <Navbar /> {/* Rendez le composant Navbar */}
      <main className="main bg-dark page-user">
        {transactions.map((transaction) => {
          return <Account key={transaction.id} transaction={transaction} />; // Rendez le composant Account pour chaque transaction
        })}
      </main>
      <Footer /> {/* Rendez le composant Footer */}
    </div>
  );
};

export default User; // Exportez le composant User