const apiBaseUrl = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8080/api'

export interface LoginResponse {
  token: string
  username: string
  expiresInMs: number
}

export async function login(username: string, password: string): Promise<LoginResponse> {
  const response = await fetch(`${apiBaseUrl}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })

  if (!response.ok) {
    throw new Error(response.status === 401 ? 'Usuario o contraseña incorrectos' : 'No se pudo iniciar sesión')
  }

  return response.json() as Promise<LoginResponse>
}

export async function authFetch(path: string, options: RequestInit = {}): Promise<Response> {
  const token = localStorage.getItem('token')
  const headers = new Headers(options.headers)

  if (token) {
    headers.set('Authorization', `Bearer ${token}`)
  }

  const response = await fetch(`${apiBaseUrl}${path}`, { ...options, headers })

  if (response.status === 401) {
    clearSession()
  }

  return response
}

export function clearSession(): void {
  localStorage.removeItem('token')
  localStorage.removeItem('username')
}
