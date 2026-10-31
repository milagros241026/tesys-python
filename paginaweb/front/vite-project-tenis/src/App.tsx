import { useState } from 'react'
import { LogOut, Trophy, Users, Sparkles } from 'lucide-react'
import LoginForm from './login/LoginForm'
import Curiosidades from './components/curiosidades'
import Jugadores from './data/players_list'
import { clearSession } from './services/api'
import './App.css'

function App() {
  const [username, setUsername] = useState<string | null>(() =>
    localStorage.getItem('username'),
  )

  const handleLoginSuccess = (loggedUsername: string) => setUsername(loggedUsername)

  const handleLogout = () => {
    clearSession()
    setUsername(null)
  }

  if (!username) {
    return (
      <main className="login-page">
        <div className="login-brand" aria-label="Tenis Club">
          <span className="brand-mark"><Trophy size={22} /></span>
          <span>Tenis<span className="brand-light">Club</span></span>
        </div>
        <div className="login-card">
          <p className="eyebrow">TU ESPACIO DE TENIS</p>
          <LoginForm onLoginSuccess={handleLoginSuccess} />
        </div>
        <p className="login-footnote">Una comunidad para quienes viven el tenis.</p>
      </main>
    )
  }

  return (
    <div className="dashboard">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Tenis Club, inicio">
          <span className="brand-mark"><Trophy size={20} /></span>
          <span>Tenis<span className="brand-light">Club</span></span>
        </a>
        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#inicio">Inicio</a>
          <a href="#curiosidades">Curiosidades</a>
          <a href="#jugadores">Jugadores</a>
        </nav>
        <div className="profile-menu">
          <span className="avatar">{username.charAt(0).toUpperCase()}</span>
          <span className="profile-name">{username}</span>
          <button className="logout-button" onClick={handleLogout} aria-label="Cerrar sesión" title="Cerrar sesión">
            <LogOut size={18} />
          </button>
        </div>
      </header>

      <main id="inicio">
        <section className="welcome-hero">
          <div className="hero-copy">
            <p className="eyebrow"><Sparkles size={14} /> BIENVENIDO A TENIS CLUB</p>
            <h1>El tenis se vive<br />en cada detalle.</h1>
            <p className="hero-description">Explorá historias que inspiran y conocé a las figuras que hacen grande este deporte.</p>
            <a className="hero-link" href="#jugadores">Conocer jugadores <span aria-hidden="true">→</span></a>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="court-line court-line-one" />
            <div className="court-line court-line-two" />
            <div className="tennis-ball" />
            <span className="hero-art-caption">EL JUEGO<br />EMPIEZA ACÁ</span>
          </div>
        </section>

        <section className="dashboard-intro" aria-label="Explorá Tenis Club">
          <div><span className="intro-icon"><Sparkles size={18} /></span><div><strong>Una curiosidad nueva</strong><p>Descubrí lo inesperado del tenis</p></div></div>
          <div><span className="intro-icon"><Users size={18} /></span><div><strong>Grandes figuras</strong><p>Conocé a tus jugadores favoritos</p></div></div>
          <div><span className="intro-icon"><Trophy size={18} /></span><div><strong>Pasión por el juego</strong><p>Todo el mundo del tenis, en un lugar</p></div></div>
        </section>

        <section id="curiosidades" className="content-section curiosity-section">
          <div className="section-heading">
            <div><p className="eyebrow">PARA LOS CURIOSOS</p><h2>Un dato para sorprenderte</h2></div>
            <span className="section-number">01 / 02</span>
          </div>
          <Curiosidades />
        </section>

        <section id="jugadores" className="content-section players-section">
          <div className="section-heading">
            <div><p className="eyebrow">ENCUENTRA TU FAVORITO</p><h2>Las figuras de la cancha</h2></div>
            <span className="section-number">02 / 02</span>
          </div>
          <Jugadores />
        </section>
      </main>

      <footer className="site-footer"><a className="brand footer-brand" href="#inicio"><span className="brand-mark"><Trophy size={16} /></span><span>Tenis<span className="brand-light">Club</span></span></a><span>Hecho para disfrutar cada punto.</span></footer>
    </div>
  )
}

export default App
