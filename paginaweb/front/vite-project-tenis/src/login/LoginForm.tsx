;
import { useState, type FormEvent } from 'react'

interface LoginResponse {
  token: string;
  username: string;
  expiresInMs: number;
}

interface LoginFormProps {
  onLoginSuccess: (username: string) => void;
}

export default function LoginForm({ onLoginSuccess }: LoginFormProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        setError('Usuario o contraseña incorrectos');
        return;
      }

      const data: LoginResponse = await response.json();

      // Guardamos el token para usarlo en próximas peticiones.
      // localStorage es simple pero queda expuesto a XSS; para algo
      // más serio se usaría una cookie httpOnly seteada por el backend.
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', data.username);

      onLoginSuccess(data.username);
    } catch (err) {
      setError('No se pudo conectar con el servidor');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 320, margin: '0 auto' }}>
      <h2>Iniciar sesión</h2>

      <div style={{ marginBottom: 12 }}>
        <label htmlFor="username">Usuario</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ width: '100%', padding: 8 }}
        />
      </div>

      <div style={{ marginBottom: 12 }}>
        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: '100%', padding: 8 }}
        />
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit" disabled={loading} style={{ width: '100%', padding: 10 }}>
        {loading ? 'Ingresando...' : 'Ingresar'}
      </button>
    </form>
  );
}
