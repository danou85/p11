import { createSlice } from "@reduxjs/toolkit";

// Création d'un slice appelé "user" avec Redux Toolkit.
// Un slice contient la logique Redux pour une partie spécifique de l'état global.
export const userSlice = createSlice({
  // Nom du slice. Ce nom est utilisé comme préfixe pour les actions générées automatiquement.
  name: "user",

  // État initial du slice. Ici, l'état initial est défini avec une propriété "user" initialement à null.
  initialState: {
    user: null,
  },

  // Réducteurs (reducers) définis pour ce slice. Un réducteur est une fonction qui détermine
  // comment l'état change en réponse à une action.
  reducers: {
    // Le réducteur "setUser" permet de mettre à jour la valeur de "user" dans l'état.
    // Il prend deux arguments : l'état actuel et l'action (contenant "payload").
    // Le "payload" est la donnée transmise lors de l'appel de l'action "setUser".
    setUser: (state, { payload }) => {
      state.user = payload;  // Mise à jour de l'état avec la valeur du payload.
    },
  },
});

// Exportation de l'action "setUser" pour pouvoir la dispatcher ailleurs dans l'application.
export const { setUser } = userSlice.actions;

// Exportation du réducteur par défaut. Celui-ci sera utilisé pour configurer le store Redux.
export default userSlice.reducer;
