import React, { useState, useEffect } from "react";
import "./Style.css";

export default function Compare() {
  const [frutas, setFrutas] = useState([]);
  const [fruta1, setFruta1] = useState(null);
  const [fruta2, setFruta2] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("https://api.api-onepiece.com/v2/fruits/en")
      .then((res) => res.json())
      .then((data) => {
        setFrutas(data);
        setCargando(false);
      })
      .catch((err) => {
        console.error("Error cargando frutas:", err);
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <div className="loading">Cargando frutas...</div>;
  }

  return (
    <div className="compare-container">
      <h2 className="compare-title">Comparar Frutas del Diablo</h2>
      
      <div className="selectors">
        <select 
          onChange={(e) => setFruta1(frutas.find(f => f.id == e.target.value))}
          value={fruta1?.id || ""}
        >
          <option value="">Selecciona primera fruta</option>
          {frutas.map(fruta => (
            <option key={fruta.id} value={fruta.id}>{fruta.name}</option>
          ))}
        </select>

        <select 
          onChange={(e) => setFruta2(frutas.find(f => f.id == e.target.value))}
          value={fruta2?.id || ""}
        >
          <option value="">Selecciona segunda fruta</option>
          {frutas.map(fruta => (
            <option key={fruta.id} value={fruta.id}>{fruta.name}</option>
          ))}
        </select>
      </div>

      {fruta1 && fruta2 && (
        <div className="comparison">
          <div className="fruit-comparison">
            <div className="fruit-card">
              <h3>{fruta1.name}</h3>
              <img src={fruta1.image} alt={fruta1.name} />
              <p><strong>Tipo:</strong> {fruta1.type}</p>
              <p><strong>Descripción:</strong> {fruta1.description}</p>
            </div>

            <div className="fruit-card">
              <h3>{fruta2.name}</h3>
              <img src={fruta2.image} alt={fruta2.name} />
              <p><strong>Tipo:</strong> {fruta2.type}</p>
              <p><strong>Descripción:</strong> {fruta2.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}