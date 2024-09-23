import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../store/user'; // Action pour mettre à jour l'utilisateur dans le store Redux
import './main.css'; // Importation des styles CSS

const WelcomeBack = () => {
  // État local pour activer/désactiver le mode édition
  const [isEdit, setIsEdit] = useState(false);
  
  // État local pour stocker le nom d'utilisateur temporairement lors de l'édition
  const [userName, setUserName] = useState('');
  
  // Sélection de l'utilisateur à partir du store Redux
  const user = useSelector((state) => state.user.user);
  
  // Permet de dispatcher des actions vers le store Redux
  const dispatch = useDispatch();

  // useEffect est déclenché lorsque l'utilisateur change
  useEffect(() => {
    // Si un utilisateur est présent dans Redux, on met à jour l'état local `userName`
    if (user) {
      setUserName(user.userName);
    }
  }, [user]); // Se déclenche uniquement quand `user` change

  // Fonction pour gérer la soumission du formulaire et la sauvegarde du nouveau nom
  const save = (e) => {
    e.preventDefault(); // Empêche la soumission par défaut du formulaire (rechargement de page)
    
    // Requête PUT pour mettre à jour le profil utilisateur
    fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json', // Indique que l'on envoie des données au format JSON
        Authorization: `Bearer ${localStorage.getItem('token')}`, // Token pour l'authentification
      },
      body: JSON.stringify({ userName }), // Corps de la requête contenant le nouveau nom d'utilisateur
    })
      .then((res) => res.json()) // Conversion de la réponse en JSON
      .then((data) => {
        console.log('Save response:', data); // Affiche la réponse dans la console
        if (data.status === 200) { // Si la réponse est réussie (status 200)
          dispatch(setUser(data.body)); // Met à jour l'utilisateur dans le store Redux
          setIsEdit(false); // Désactive le mode édition
        } else {
          console.error('Failed to save user data'); // Affiche une erreur en cas d'échec
        }
      })
      .catch((error) => console.error('Error updating user profile:', error)); // Gère les erreurs de requête
  };

  // Si l'utilisateur n'est pas encore chargé, affiche "Loading..."
  if (!user) {
    return <div>Loading...</div>;
  }

  // Rendu de la page principale
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1 className="welcome">
          Bienvenue de retour
          <br />
          {user.userName} ! {/* Affiche le nom de l'utilisateur */}
        </h1>
        
        {/* Bouton pour activer ou désactiver le mode édition */}
        <button className="edit-button" onClick={() => setIsEdit(!isEdit)}>
          {isEdit ? 'Annuler' : 'Modifier le nom'} {/* Change le texte selon l'état */}
        </button>
        
        {/* Si le mode édition est activé, affiche le formulaire pour changer le nom */}
        {isEdit && (
          <form className="edit-form" onSubmit={save}>
            <label>
              Username:
              {/* Champ de texte pour changer le nom d'utilisateur */}
              <input
                type="text"
                value={userName} // L'état local `userName` contrôle la valeur du champ
                onChange={(e) => setUserName(e.target.value)} // Met à jour l'état quand l'utilisateur tape
              />
            </label>
            <div className="content-btn">
              <button type="submit" className="edit-button">
                Enregistrer {/* Bouton pour soumettre le formulaire et sauvegarder */}
              </button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
};

export default WelcomeBack;
