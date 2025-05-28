// src/Compare.jsx
import { useEffect, useState } from 'react';
import './style.css';

function Compare() {
  const [fruits, setFruits] = useState([]);
  const [selected1, setSelected1] = useState('');
  const [selected2, setSelected2] = useState('');

  useEffect(() => {
    fetch('https://api.api-onepiece.com/v2/fruits/en')
      .then(res => res.json())
      .then(data => setFruits(data));
  }, []);

  const fruit1 = fruits.find(fruit => fruit.id === selected1);
  const fruit2 = fruits.find(fruit => fruit.id === selected2);

  return (
    <div className="compare-container">
      <h2 className="compare-title">Comparador de Frutas del Diablo</h2>
      <div className="selectors">
        <select value={selected1} onChange={(e) => setSelected1(e.target.value)}>
          <option value="">Selecciona Fruta 1</option>
          {fruits.map(fruit => (
            <option key={fruit.id} value={fruit.id}>{fruit.name}</option>
          ))}
        </select>
        <select value={selected2} onChange={(e) => setSelected2(e.target.value)}>
          <option value="">Selecciona Fruta 2</option>
          {fruits.map(fruit => (
            <option key={fruit.id} value={fruit.id}>{fruit.name}</option>
          ))}
        </select>
      </div>

      <div className="comparison">
        {fruit1 && fruit2 && (
          <div className="fruit-comparison">
            <div className="fruit-card">
              <h3>{fruit1.name}</h3>
              <p><strong>Tipo:</strong> {fruit1.type}</p>
              <p>{fruit1.description}</p>
            </div>
            <div className="fruit-card">
              <h3>{fruit2.name}</h3>
              <p><strong>Tipo:</strong> {fruit2.type}</p>
              <p>{fruit2.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Compare;
