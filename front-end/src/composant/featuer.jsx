import React from 'react';
import chatIcon from './icon-chat.webp';   // Image au format webp
import moneyIcon from './icon-money.webp'; // Assurez-vous que cette image est bien en .webp
import securityIcon from './icon-security.webp';
import "./main.css"; // Importez votre fichier main.css

// Import du composant réutilisable FeatureItem
import FeatureItem from './featureItem';

const Features = () => {
  return (
    <section className="features">
      {/* Élément de fonctionnalité pour le chat */}
      <FeatureItem 
        icon={chatIcon}
        title="You are our #1 priority"
        description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
      />
      
      {/* Élément de fonctionnalité pour les économies */}
      <FeatureItem 
        icon={moneyIcon}
        title="More savings means higher rates"
        description="The more you save with us, the higher your interest rate will be!"
      />
      
      {/* Élément de fonctionnalité pour la sécurité */}
      <FeatureItem 
        icon={securityIcon}
        title="Security you can trust"
        description="We use top of the line encryption to make sure your data and money is always safe."
      />
    </section>
  );
};

export default Features;
