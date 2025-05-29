import React, { createContext, useState } from 'react';

export const FavoritosContext = createContext();

export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);

  const agregarFavorito = (fruta) => {
    setFavoritos((prev) => 
      prev.find(f => f.id === fruta.id) ? prev : [...prev, fruta]
    );
  };

  const quitarFavorito = (id) => {
    setFavoritos((prev) => prev.filter(f => f.id !== id));
  };

  const estaEnFavoritos = (id) => {
    return favoritos.some(f => f.id === id);
  };

  const toggleFavorito = (fruta) => {
    estaEnFavoritos(fruta.id) ? quitarFavorito(fruta.id) : agregarFavorito(fruta);
  };

  return (
    <FavoritosContext.Provider value={{ 
      favoritos, 
      agregarFavorito, 
      quitarFavorito, 
      estaEnFavoritos, 
      toggleFavorito 
    }}>
      {children}
    </FavoritosContext.Provider>
  );
};