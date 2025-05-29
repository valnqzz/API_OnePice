import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulación simple de autenticación
    if (email === "usuario@ejemplo.com" && password === "123456") {
      setMensaje("¡Ingreso exitoso!");
    } else {
      setMensaje("Credenciales incorrectas");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 10 }}>
          <label>
            Correo electrónico:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: "100%", padding: 6 }}
            />
          </label>
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>
            Contraseña:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: "100%", padding: 6 }}
            />
          </label>
        </div>
        <button type="submit" style={{ padding: "8px 16px" }}>
          Entrar
        </button>
      </form>
      {mensaje && <p style={{ marginTop: 10 }}>{mensaje}</p>}
    </div>
  );
}
