// components/Login/Login.tsx
import { useState, FormEvent } from 'react';
import './Login.css';

interface LoginProps {
  onLoginSuccess: (usuario: string) => void;
}

function Login({ onLoginSuccess }: LoginProps) {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!usuario || !password) {
      setError('Completá usuario y contraseña.');
      return;
    }

    setError('');
    onLoginSuccess(usuario);
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h2 className="login__title">Ingresar</h2>

      <input
        className="login__input"
        type="text"
        placeholder="Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />

      <input
        className="login__input"
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p className="login__error">{error}</p>}

      <button className="login__button" type="submit">
        Entrar
      </button>
    </form>
  );
}

export default Login;