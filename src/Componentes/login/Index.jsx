// src/Login.jsx
import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './firebase';
import './style.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [mode, setMode] = useState('login'); // o 'register'

  const handleAuth = async (e) => {
    e.preventDefault();

    try {
      if (mode === 'register') {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        setUser(userCredential.user);
        alert('Usuario registrado');
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        setUser(userCredential.user);
        alert('Sesión iniciada');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    alert('Sesión cerrada');
  };

  return (
    <div className="login-container">
      {user ? (
        <div>
          <p>Bienvenido, {user.email}</p>
          <button onClick={handleLogout} className="auth-btn logout">Cerrar sesión</button>
        </div>
      ) : (
        <form onSubmit={handleAuth} className="auth-form">
          <h2>{mode === 'login' ? 'Iniciar sesión' : 'Registrarse'}</h2>
          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="auth-btn">{mode === 'login' ? 'Entrar' : 'Registrarse'}</button>
          <p onClick={() => setMode(mode === 'login' ? 'register' : 'login')} className="switch-mode">
            {mode === 'login' ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
          </p>
        </form>
      )}
    </div>
  );
}

export default Login;
