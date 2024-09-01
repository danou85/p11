import React, { useState } from "react";
import "./main.css";

const Account = ({ transaction }) => {
  const [isOpen, setIsOpen] = useState(false);

  const formatDate = (date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <section className="account">
      {/* Conteneur pour le contenu du compte */}
      <div className="account-content-wrapper">
        {/* Titre du compte */}
        <h3 className="account-title">
          {transaction.title} ({transaction.accountNumber})
        </h3>
        {/* Montant du compte */}
        <p className="account-amount">${transaction.amount}</p>
        {/* Description du montant du compte */}
        <p className="account-amount-description">{transaction.description}</p>
        {/* Affichage conditionnel des détails de la transaction */}
        {isOpen && (
          <div className="transaction-details">
            <p>Transaction: {transaction.type}</p>
            <p>Catégorie: {transaction.category}</p>
            <p>Note: {transaction.note}</p>
            <p>Date: {formatDate(transaction.date)}</p>
          </div>
        )}
      </div>

      {/* Conteneur pour le bouton d'action */}
      <div className="account-content-wrapper cta">
        {/* Bouton pour afficher ou masquer les détails de la transaction */}
        <button
          className="transaction-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Hide transactions" : "View transactions"}
        </button>
      </div>
    </section>
  );
};

export default Account;
