import { useState } from 'react'
import LoginForm from './login/LoginForm'
import { clearSession } from './services/api'

function App() {
  const [username, setUsername] = useState<string | null>(() =>
    localStorage.getItem('username'),
  )

  const handleLoginSuccess = (loggedUsername: string) => {
    setUsername(loggedUsername)
  }

  const handleLogout = () => {
    clearSession()
    setUsername(null)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg sm:p-10">
        {username ? (
          <div className="text-center">
            <h1 className="mb-2 text-3xl font-bold text-gray-800">
              ¡Bienvenido, {username}!
            </h1>
            <p className="mb-6 text-gray-500">Iniciaste sesión correctamente.</p>
            <button
              onClick={handleLogout}
              className="rounded-lg border border-gray-300 px-4 py-2 font-medium text-gray-700 transition hover:bg-gray-50"
            >
              Cerrar sesión
            </button>
          </div>
        ) : (
          <LoginForm onLoginSuccess={handleLoginSuccess} />
        )}
      </div>
    </div>
  )
}

export default App
