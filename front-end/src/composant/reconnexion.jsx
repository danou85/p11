import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../store/user';
import './main.css';

const WelcomeBack = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [userName, setUserName] = useState('');
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      setUserName(user.userName);
    }
  }, [user]);

  const save = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ userName }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Save response:', data);
        if (data.status === 200) {
          dispatch(setUser(data.body));
          setIsEdit(false);
        } else {
          console.error('Failed to save user data');
        }
      })
      .catch((error) => console.error('Error updating user profile:', error));
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1 className="welcome">
          Bienvenue de retour
          <br />
          {user.userName} !
        </h1>
        <button className="edit-button" onClick={() => setIsEdit(!isEdit)}>
          {isEdit ? 'Annuler' : 'Modifier le nom'}
        </button>
        {isEdit && (
          <form className="edit-form" onSubmit={save}>
            <label>
              Username:
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
          </form>
        )}
      </div>
    </main>
  );
};

export default WelcomeBack;
