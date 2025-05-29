import React from "react";

export default function Favoritos() {
  // Datos simulados de favoritos
  const favoritosMock = [
    { id: 1, name: "Gomu Gomu no Mi" },
    { id: 2, name: "Mera Mera no Mi" },
  ];

  return (
    <div style={{ maxWidth: 600, margin: "auto" }}>
      <h2>Frutas Favoritas</h2>
      {favoritosMock.length === 0 ? (
        <p>No tienes frutas favoritas aún.</p>
      ) : (
        <ul>
          {favoritosMock.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
