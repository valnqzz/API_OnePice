// src/index.jsx
import { useEffect, useState } from 'react';
import { db, auth } from './firebase';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import './style.css';

function Favorites() {
  const [fruits, setFruits] = useState([]);
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('https://api.api-onepiece.com/v2/fruits/en')
      .then(res => res.json())
      .then(data => setFruits(data));
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      if (currentUser) {
        loadFavorites(currentUser.uid);
      }
    });
  }, []);

  const loadFavorites = async (uid) => {
    const q = query(collection(db, 'favorites'), where('uid', '==', uid));
    const querySnapshot = await getDocs(q);
    const favs = querySnapshot.docs.map(doc => doc.data().fruitId);
    setFavorites(favs);
  };

  const addToFavorites = async (fruitId) => {
    if (!user) {
      alert('Inicia sesión para agregar a favoritos');
      return;
    }

    if (favorites.includes(fruitId)) {
      alert('Ya está en favoritos');
      return;
    }

    await addDoc(collection(db, 'favorites'), {
      uid: user.uid,
      fruitId,
    });

    setFavorites(prev => [...prev, fruitId]);
  };

  return (
    <div className="favorites-container">
      <h1 className="title">Frutas del Diablo</h1>
      <ul className="fruit-list">
        {fruits.map(fruit => (
          <li key={fruit.id} className="fruit-item">
            <h2 className="fruit-name">{fruit.name}</h2>
            <p className="fruit-type">{fruit.type}</p>
            <button
              className={`favorite-btn ${favorites.includes(fruit.id) ? 'added' : ''}`}
              onClick={() => addToFavorites(fruit.id)}
            >
              {favorites.includes(fruit.id) ? '❤️ En favoritos' : '🤍 Agregar a favoritos'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
