import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Style.css";

export default function FruitDetail() {
  const { id } = useParams();
  const [fruit, setFruit] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.api-onepiece.com/v2/fruits/en/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Fruit not found");
        return res.json();
      })
      .then((data) => {
        setFruit(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="loading">Loading fruit details...</p>;
  if (!fruit) return <p>Fruit not found.</p>;

  return (
    <div className="fruit-detail">
      <h2>{fruit.name}</h2>
      <img src={fruit.image} alt={fruit.name} width="200" />
      <p>
        <strong>Type:</strong> {fruit.type}
      </p>
      <p>
        <strong>Description:</strong> {fruit.description}
      </p>
      <Link to="/fruits" className="back-link">
        ← Back to list
      </Link>
    </div>
  );
}
