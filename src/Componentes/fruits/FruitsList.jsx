import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FruitsList() {
  const [fruits, setFruits] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api.api-onepiece.com/v2/fruits/en")
      .then((res) => res.json())
      .then((data) => setFruits(data));
  }, []);

  if (fruits.length === 0) return <p>Cargando frutas...</p>;

  return (
    <div>
      <h1>Devil Fruits</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {fruits.map((fruit) => (
          <li
            key={fruit.id}
            style={{
              cursor: "pointer",
              padding: "8px",
              margin: "5px 0",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
            onClick={() => navigate(`/fruits/${fruit.id}`)}
          >
            {fruit.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
