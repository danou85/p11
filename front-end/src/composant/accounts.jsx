import React, { useState } from "react";
import "./main.css";

const Account = ({ transaction }) => {
  const [isOpen, setIsOpen] = useState(false);

  const formatDate = (date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">
          {transaction.title} ({transaction.accountNumber})
        </h3>
        <p className="account-amount">${transaction.amount}</p>
        <p className="account-amount-description">{transaction.description}</p>
        {isOpen && (
          <div>
            <p>Transaction: {transaction.type}</p>
            <p>Catégorie: {transaction.category}</p>
            <p>Note: {transaction.note}</p>
            <p>Date: {formatDate(transaction.date)}</p>
          </div>
        )}
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Hide transactions" : "View transactions"}
        </button>
      </div>
    </section>
  );
};

export default Account;