import React from 'react';
import chatIcon from './icon-chat.png';
import moneyIcon from './icon-money.png';
import securityIcon from './icon-security.png';
import "./main.css"; // Importez votre fichier main.css en utilisant un chemin relatif

const Features = () => {
  return (
    <section className="features">
      {/* Élément de fonctionnalité pour le chat */}
      <div className="feature-item">
        {/* Icône de fonctionnalité pour le chat */}
        <img src={chatIcon} alt="Chat Icon" className="feature-icon" />
        {/* Titre de l'élément de fonctionnalité */}
        <h3 className="feature-item-title">You are our #1 priority</h3>
        {/* Description de la fonctionnalité */}
        <p>
          Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes.
        </p>
      </div>
      
      {/* Élément de fonctionnalité pour les économies */}
      <div className="feature-item">
        {/* Icône de fonctionnalité pour les économies */}
        <img src={moneyIcon} alt="Money Icon" className="feature-icon" />
        {/* Titre de l'élément de fonctionnalité */}
        <h3 className="feature-item-title">More savings means higher rates</h3>
        {/* Description de la fonctionnalité */}
        <p>
          The more you save with us, the higher your interest rate will be!
        </p>
      </div>
      
      {/* Élément de fonctionnalité pour la sécurité */}
      <div className="feature-item">
        {/* Icône de fonctionnalité pour la sécurité */}
        <img src={securityIcon} alt="Security Icon" className="feature-icon" />
        {/* Titre de l'élément de fonctionnalité */}
        <h3 className="feature-item-title">Security you can trust</h3>
        {/* Description de la fonctionnalité */}
        <p>
          We use top of the line encryption to make sure your data and money
          is always safe.
        </p>
      </div>
    </section>
  );
};

export default Features;
