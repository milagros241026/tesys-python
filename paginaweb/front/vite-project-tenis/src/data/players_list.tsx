import { useState } from 'react';
import './jugadores.css';

interface Jugador {
  id: number;
  nombre: string;
  pais: string;
  nacimiento: string;
  mano: string;
  imagen: string;
}

const jugadores: Jugador[] = [
  {
    id: 1,
    nombre: 'Carlos Alcaraz',
    pais: 'España 🇪🇸',
    nacimiento: '2003-05-05',
    mano: 'Derecha',
    imagen: '/jugadores/alcaraz.jpg'
  },
  {
    id: 2,
    nombre: 'Jannik Sinner',
    pais: 'Italia 🇮🇹',
    nacimiento: '2001-08-16',
    mano: 'Derecha',
    imagen: '/jugadores/sinner.jpg'
  },
  {
    id: 3,
    nombre: 'Novak Djokovic',
    pais: 'Serbia 🇷🇸',
    nacimiento: '1987-05-22',
    mano: 'Derecha',
    imagen: '/jugadores/djokovic.jpg'
  },
  {
    id: 4,
    nombre: 'Alexander Zverev',
    pais: 'Alemania 🇩🇪',
    nacimiento: '1997-04-20',
    mano: 'Derecha',
    imagen: '/jugadores/zverev.jpg'
  },
  {
    id: 5,
    nombre: 'Iga Swiatek',
    pais: 'Polonia 🇵🇱',
    nacimiento: '2001-05-31',
    mano: 'Derecha',
    imagen: '/jugadores/swiatek.jpg'
  },
  {
    id: 6,
    nombre: 'Aryna Sabalenka',
    pais: 'Bielorrusia 🇧🇾',
    nacimiento: '1998-05-05',
    mano: 'Derecha',
    imagen: '/jugadores/sabalenka.jpg'
  }
];

function calcularEdad(fechaNacimiento: string): number {
  const hoy = new Date();
  const nacimiento = new Date(`${fechaNacimiento}T00:00:00`);

  let edad = hoy.getFullYear() - nacimiento.getFullYear();

  const diferenciaMeses = hoy.getMonth() - nacimiento.getMonth();

  if (
    diferenciaMeses < 0 ||
    (diferenciaMeses === 0 && hoy.getDate() < nacimiento.getDate())
  ) {
    edad--;
  }

  return edad;
}

function Jugadores() {
  const [busqueda, setBusqueda] = useState('');

  const jugadoresFiltrados = jugadores.filter((jugador) =>
    jugador.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <section className="jugadores">
      <h2>🎾 Jugadores de tenis</h2>

      <input
        type="text"
        placeholder="Buscar jugador..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="jugadores-buscador"
      />

      <div className="jugadores-contenedor">
        {jugadoresFiltrados.map((jugador) => (
          <div className="jugador-card" key={jugador.id}>

            <img
              src={jugador.imagen}
              alt={jugador.nombre}
              className="jugador-imagen"
            />

            <div className="jugador-info">
              <h3>{jugador.nombre}</h3>

              <p><strong>País:</strong> {jugador.pais}</p>

              <p>
                <strong>Edad:</strong> {calcularEdad(jugador.nacimiento)} años
              </p>

              <p><strong>Mano hábil:</strong> {jugador.mano}</p>
            </div>

          </div>
        ))}
      </div>

      {jugadoresFiltrados.length === 0 && (
        <p className="jugadores-vacio">
          No se encontraron jugadores.
        </p>
      )}
    </section>
  );
}

export default Jugadores;
