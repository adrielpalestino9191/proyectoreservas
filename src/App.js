import React, { useState } from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

function App() {
  const [correo, setCorreo] = useState("");
  const [pwd, setPwd] = useState("");
  const [mensaje, setMensaje] = useState("");

  async function iniciarSesion() {
    try {
      await createUserWithEmailAndPassword(auth, correo, pwd);
      setMensaje("Usuario creado correctamente en Firebase");

      await signInWithEmailAndPassword(auth, correo, pwd);
      setMensaje("Usuario logueado correctamente");
    } catch (error) {
      setMensaje(error.message);
    }
  }

  return (
    <div className="App">

      <label>Crear un usuario e iniciar sesión</label>
      <input
        type="email"
        placeholder="Ingresa tu correo"
        onChange={(e) => setCorreo(e.target.value)}
      />
      <input
        type="password"
        placeholder="Ingresa la contraseña"
        onChange={(e) => setPwd(e.target.value)}
      />
      <label>{mensaje}</label>
      <button type="button" onClick={iniciarSesion}>Crear usuario</button>
    </div>
  );
}

export default App;
