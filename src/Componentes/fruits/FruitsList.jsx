import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Style.css";

export default function FruitsList() {
  const [fruits, setFruits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.api-onepiece.com/v2/fruits/en")
      .then((res) => res.json())
      .then((data) => {
        setFruits(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p className="loading">Loading fruits...</p>;
  if (!fruits.length) return <p>No fruits found.</p>;

  return (
    <div className="fruits-list">
      <h2>Devil Fruits List</h2>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            <Link to={`/fruits/${fruit.id}`}>{fruit.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
