import React from 'react';

// Composant réutilisable FeatureItem
const FeatureItem = ({ icon, title, description }) => {
    if (!icon || !title || !description) {
        return null; // Retourne null si une des valeurs est absente, ce qui signifie que rien ne sera rendu
      }
  return (
    <div className="feature-item">
      {/* Icône de fonctionnalité */}
      <img src={icon} alt={`${title} Icon`} className="feature-icon" />
      {/* Titre de l'élément de fonctionnalité */}
      <h3 className="feature-item-title">{title}</h3>
      {/* Description de la fonctionnalité */}
      <p>{description}</p>
    </div>
  );
};
export default FeatureItem;