export { authFetch, clearSession, clearSession as logout, SESSION_CLEARED_EVENT } from '../services/api'

export function isLoggedIn(): boolean {
  const expiresAt = Number(localStorage.getItem('expiresAt'))
  return localStorage.getItem('token') !== null
    && Number.isFinite(expiresAt)
    && expiresAt > Date.now()
}
