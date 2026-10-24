export { authFetch, clearSession as logout } from '../services/api'

export function isLoggedIn(): boolean {
  return localStorage.getItem('token') !== null
}
