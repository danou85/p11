import React, { useState, useEffect } from "react";
import "./main.css";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../store/user";

const WelcomeBack = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [userName, setUserName] = useState("");
  const [error, setError] = useState(null);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  // Fonction pour sauvegarder les modifications du nom d'utilisateur
  const save = async (e) => {
    e.preventDefault();
    setIsEdit(false);
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ userName }),
      });
      const data = await response.json();
      if (response.ok) {
        dispatch(setUser(data.body));
      } else {
        setError("Erreur lors de la mise à jour du nom d'utilisateur");
      }
    } catch (error) {
      setError("Erreur lors de la mise à jour du nom d'utilisateur");
    }
  };

  // Effet pour charger les informations utilisateur lors du premier rendu
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();
        if (response.ok) {
          dispatch(setUser(data.body));
        } else {
          console.error("Erreur lors du chargement des données utilisateur");
        }
      } catch (error) {
        console.error("Erreur lors du chargement des données utilisateur");
      }
    };

    fetchUser();
  }, [dispatch]);

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1 className="welcome">
          Bienvenue de retour
          <br />
          {user?.userName} !
        </h1>
        <button className="edit-button" onClick={() => setIsEdit(!isEdit)}>
          {isEdit ? "Annuler" : "Modifier le nom"}
        </button>
        {isEdit && (
          <div className="edit-info">
            <p>
              Prénom: <input type="text" value={user?.firstName} disabled />
            </p>
            <p>
              Nom: <input type="text" value={user?.lastName} disabled />
            </p>
          </div>
        )}
        {isEdit && (
          <form className="edit-form" onSubmit={save}>
            <label>
              Nom d'utilisateur:
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </label>
            <div className="content-btn">
              <button type="submit" className="edit-button">
                Enregistrer
              </button>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>
        )}
      </div>
    </main>
  );
};

export default WelcomeBack;
