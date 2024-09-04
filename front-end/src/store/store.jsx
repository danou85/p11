import { configureStore } from "@reduxjs/toolkit";  // Importation de la fonction configureStore depuis Redux Toolkit.
import userReducer from "./user";  // Importation du réducteur user depuis le fichier "user".

// Création et configuration du store Redux. 
// Le store est l'objet central dans Redux qui contient l'état global de l'application.
export default configureStore({
  // Définition des réducteurs pour le store.
  reducer: {
    // Associe le réducteur "user" à une clé du même nom dans l'état global.
    // L'état de "user" sera géré par le réducteur importé de "./user".
    user: userReducer,
  },
});
