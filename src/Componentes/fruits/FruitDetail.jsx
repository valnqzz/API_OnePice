import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function traducirTipo(tipo) {
  const tipos = {
    Paramecia: "Paramecia",
    Zoan: "Zoan",
    Logia: "Logia",
  };
  return tipos[tipo] || tipo;
}

function traducirDescripcion(desc, nombre) {
  if (!desc) return "";

  if (nombre === "Gomu Gomu no Mi") {
    return "La Gomu Gomu no Mi, también conocida como la Fruta Goma-Goma, es una fruta del tipo Paramecia que otorga al cuerpo del usuario las propiedades de la goma, convirtiéndolo en un Hombre de Goma (ゴム人間, Gomu Ningen). Fue un tesoro que Shanks y su tripulación robaron de un convoy del Gobierno Mundial protegido por el CP9, pero que fue comido accidentalmente por Monkey D. Luffy.";
  }

  if (desc.includes("mass to be varied")) {
    return "Permite que la masa del usuario varíe entre el peso de una pluma y 10 toneladas. El volumen del usuario no cambia.";
  }

  if (desc.includes("allows the user to become invisible")) {
    return "Permite al usuario volverse invisible.";
  }

  // Traducción genérica si no se reconoce la descripción
  return desc;
}

export default function FruitDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [fruit, setFruit] = useState(null);

  useEffect(() => {
    fetch("https://api.api-onepiece.com/v2/fruits/en")
      .then((res) => res.json())
      .then((data) => {
        const encontrada = data.find((f) => f.id.toString() === id);
        setFruit(encontrada);
      });
  }, [id]);

  if (!fruit) return <p>Cargando detalle de la fruta...</p>;

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        maxWidth: "600px",
        margin: "20px auto",
      }}
    >
      <h2>{fruit.name}</h2>
      <p>
        <strong>Tipo:</strong> {traducirTipo(fruit.type)}
      </p>
      <p>
        <strong>Descripción:</strong> {traducirDescripcion(fruit.description, fruit.name)}
      </p>

      <button
        onClick={() => navigate(-1)}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Go Back
      </button>
    </div>
  );
}
