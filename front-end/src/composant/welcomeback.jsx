import React, { useState } from "react";
import "./main.css";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../store/user.jsx";

const WelcomeBack = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [userName, setUserName] = useState("");
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const save = (e) => {
    e.preventDefault();
    setIsEdit(false);
    fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ userName }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(setUser(data.body));
      });
  };

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
          <div>
            <p>
              Firstname: <input type="text" value={user?.firstName} disabled />
            </p>
            <p>
              Lastname: <input type="text" value={user?.lastName} disabled />
            </p>
          </div>
        )}
        {isEdit && (
          <form className="edit-form" onSubmit={(e) => save(e)}>
            Username:
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <div className="content-btn">
              <button type="submit" className="edit-button">
                Enregistrer
              </button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
};

export default WelcomeBack;