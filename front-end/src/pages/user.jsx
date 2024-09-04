import React, { useEffect } from "react"; // Importation des hooks React pour gérer le cycle de vie des composants.
import Logo from "../composant/logo.jsx"; // Importation du composant Logo.
import Account from "../composant/accounts.jsx"; // Importation du composant Account pour afficher les transactions.
import Footer from "../composant/footer.jsx"; // Importation du composant Footer.
import Navbar from "../composant/Navbar.jsx"; // Importation du composant Navbar.
import WelcomeBack from "../composant/reconnexion.jsx"; // Importation du composant WelcomeBack pour le message de reconnexion.
import { setUser } from "../store/user.jsx"; // Importation de l'action setUser depuis le slice user.
import { useDispatch } from "react-redux"; // Importation du hook useDispatch pour dispatcher des actions Redux.
import "./pages.css"; // Importation des styles CSS pour la page.

const User = () => {
  const dispatch = useDispatch(); // Initialisation du dispatch pour envoyer des actions à Redux.

  // Définition d'une liste de transactions fictives pour l'affichage sur la page.
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
      date: new Date("2024-09-15"),
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
      date: new Date("2024-09-10"),
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
      date: new Date("2024-08-05"),
    },
  ];

  // useEffect est utilisé pour effectuer des actions secondaires après le rendu du composant.
  useEffect(() => {
    console.log(localStorage); // Affichage du contenu de localStorage pour le débogage.
    if (localStorage.token) { // Vérification de la présence du token dans localStorage.
      fetch("http://localhost:3001/api/v1/user/profile", { // Requête pour obtenir les informations du profil utilisateur.
        method: "POST", 
        headers: {
          Authorization: `Bearer ${localStorage.token}`, // Envoi du token d'authentification dans les en-têtes.
        },
        body: null, // Aucune donnée n'est envoyée dans le corps de la requête.
      })
        .then((response) => response.json()) // Conversion de la réponse en JSON.
        .then((data) => {
          console.log(data); // Affichage des données reçues pour le débogage.
          dispatch(setUser(data.body)); // Dispatch de l'action setUser avec les données reçues pour mettre à jour l'état global.
        })
        .catch((error) => console.log("Erreur lors de la récupération des données:", error)); // Gestion des erreurs.
    } else {
      window.location = "/login"; // Redirection vers la page de login si le token n'est pas présent.
    }
  }, [dispatch]); // Ajout de dispatch comme dépendance pour éviter des appels multiples.

  return (
    <div>
      <Logo /> {/* Affichage du composant Logo */}
      <Navbar /> {/* Affichage du composant Navbar */}
      <div className="user">
        <WelcomeBack /> {/* Affichage du message de bienvenue */}
        <main className="main bg-dark page-user">
          {/* Boucle sur la liste des transactions et affichage de chaque transaction avec le composant Account */}
          {transactions.map((transaction) => (
            <Account key={transaction.id} transaction={transaction} />
          ))}
        </main>
      </div>
      <Footer /> {/* Affichage du composant Footer */}
    </div>
  );
};

export default User; // Exportation du composant User par défaut.
