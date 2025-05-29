import React from "react";

export default function Favoritos() {
  // Aquí podrías cargar y mostrar favoritos del usuario (mock básico)

  const favoritosMock = [
    { id: 1, name: "Gomu Gomu no Mi" },
    { id: 2, name: "Mera Mera no Mi" },
  ];

  return (
    <div style={{ maxWidth: 600, margin: "auto" }}>
      <h2>Favoritos</h2>
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
