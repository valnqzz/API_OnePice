import React, { useState } from "react";

export default function Registro() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones básicas
    if (!nombre.trim()) {
      setMensaje("Por favor ingresa tu nombre");
      return;
    }
    if (!email.trim()) {
      setMensaje("Por favor ingresa tu correo electrónico");
      return;
    }
    if (password.length < 6) {
      setMensaje("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    if (password !== confirmPassword) {
      setMensaje("Las contraseñas no coinciden");
      return;
    }

    // Aquí agregarías lógica para enviar datos al backend / API
    setMensaje(`¡Registro exitoso! Bienvenido, ${nombre}.`);
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 10 }}>
          <label>
            Nombre completo:
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              style={{ width: "100%", padding: 6 }}
              placeholder="Tu nombre completo"
            />
          </label>
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>
            Correo electrónico:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: "100%", padding: 6 }}
              placeholder="ejemplo@correo.com"
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
              placeholder="Mínimo 6 caracteres"
            />
          </label>
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>
            Confirmar contraseña:
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={{ width: "100%", padding: 6 }}
              placeholder="Repite tu contraseña"
            />
          </label>
        </div>
        <button type="submit" style={{ padding: "8px 16px" }}>
          Registrarse
        </button>
      </form>
      {mensaje && <p style={{ marginTop: 10 }}>{mensaje}</p>}
    </div>
  );
}
