import React, { useEffect } from "react";
import Logo from "../composant/logo.jsx";
import Account from "../composant/accounts.jsx";
import Footer from "../composant/footer.jsx";
import Navbar from "../composant/Navbar.jsx";
import WelcomeBack from "../composant/reconnexion.jsx";
import { setUser } from "../store/user.jsx";
import { useDispatch } from "react-redux";
import "./pages.css";

const User = () => {
  const dispatch = useDispatch();

  const transactions = [  // Notez la variable correcte
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

  useEffect(() => {
    console.log(localStorage);
    if (localStorage.token) {
      fetch("http://localhost:3001/api/v1/user/profile", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
        body: null,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          dispatch(setUser(data.body));
        })
        .catch((error) => console.log("Erreur lors de la récupération des données:", error));
    } else {
      window.location = "/login";
    }
  }, [dispatch]);  // Ajoutez dispatch comme dépendance pour éviter des appels multiples

  return (
    <div>
      <Logo/>
      <Navbar />
      <div className="user">
      <WelcomeBack/>
      <main className="main bg-dark page-user">
        {transactions.map((transaction) => (
          <Account key={transaction.id} transaction={transaction} />
        ))}
      </main>
      </div>
      <Footer />
    </div>
  );
};

export default User;
