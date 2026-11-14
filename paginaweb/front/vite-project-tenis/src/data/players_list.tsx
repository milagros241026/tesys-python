import { useMemo, useState } from 'react';
import './jugadores.css';

interface Jugador {
  id: number;
  nombre: string;
  pais: string;
  nacimiento: string;
  mano: string;
  imagen: string;
  ranking: number;
  circuito: 'ATP' | 'WTA';
}

const jugadores: Jugador[] = [
  {
    id: 1,
    nombre: 'Carlos Alcaraz',
    pais: 'España 🇪🇸',
    nacimiento: '2003-05-05',
    mano: 'Derecha',
    imagen: '/jugadores/alcaraz.jpg',
    ranking: 3,
    circuito: 'ATP'
  },
  {
    id: 2,
    nombre: 'Jannik Sinner',
    pais: 'Italia 🇮🇹',
    nacimiento: '2001-08-16',
    mano: 'Derecha',
    imagen: '/jugadores/sinner.jpg',
    ranking: 2,
    circuito: 'ATP'
  },
  {
    id: 3,
    nombre: 'Novak Djokovic',
    pais: 'Serbia 🇷🇸',
    nacimiento: '1987-05-22',
    mano: 'Derecha',
    imagen: '/jugadores/djokovic.jpg',
    ranking: 12,
    circuito: 'ATP'
  },
  {
    id: 4,
    nombre: 'Alexander Zverev',
    pais: 'Alemania 🇩🇪',
    nacimiento: '1997-04-20',
    mano: 'Derecha',
    imagen: '/jugadores/zverev.jpg',
    ranking: 1,
    circuito: 'ATP'
  },
  {
    id: 5,
    nombre: 'Iga Swiatek',
    pais: 'Polonia 🇵🇱',
    nacimiento: '2001-05-31',
    mano: 'Derecha',
    imagen: '/jugadores/swiatek.jpg',
    ranking: 9,
    circuito: 'WTA'
  },
  {
    id: 6,
    nombre: 'Aryna Sabalenka',
    pais: 'Bielorrusia 🇧🇾',
    nacimiento: '1998-05-05',
    mano: 'Derecha',
    imagen: '/jugadores/sabalenka.jpg',
    ranking: 2,
    circuito: 'WTA'
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
  const [jugadorAId, setJugadorAId] = useState(1);
  const [jugadorBId, setJugadorBId] = useState(2);

  const jugadorA = jugadores.find((jugador) => jugador.id === jugadorAId) ?? jugadores[0];
  const jugadorB = jugadores.find((jugador) => jugador.id === jugadorBId) ?? jugadores[1];

  const enfrentamientos = useMemo(() => {
    const pairIds = [jugadorA.id, jugadorB.id].sort((a, b) => a - b);
    const semilla = pairIds[0] * 17 + pairIds[1] * 31;
    const torneos = ['Roland Garros', 'Wimbledon', 'US Open', 'Masters 1000'];
    const superficies = ['Polvo de ladrillo', 'Césped', 'Dura'];
    return Array.from({ length: 5 }, (_, index) => {
      const ganador = (semilla + index * 7) % 2 === 0 ? jugadorA : jugadorB;
      const perdedor = ganador.id === jugadorA.id ? jugadorB : jugadorA;
      const anio = 2025 - index;
      return {
        id: `${pairIds.join('-')}-${index}`,
        torneo: torneos[(semilla + index) % torneos.length],
        superficie: superficies[(semilla + index * 2) % superficies.length],
        fecha: `${String(12 - index * 2).padStart(2, '0')}/06/${anio}`,
        ganador: ganador.nombre,
        perdedor: perdedor.nombre,
        marcador: index % 2 === 0 ? '6-4, 7-5' : '7-6, 3-6, 6-3',
      };
    });
  }, [jugadorA, jugadorB]);

  const victoriasA = enfrentamientos.filter((partido) => partido.ganador === jugadorA.nombre).length;
  const victoriasB = enfrentamientos.length - victoriasA;

  const jugadoresFiltrados = jugadores.filter((jugador) =>
    jugador.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <section className="jugadores">
      <style>{`
        .h2h-panel { margin-top:56px; padding:30px; border:1px solid #e2e9e2; border-radius:16px; background:#fff; box-shadow:0 8px 30px rgba(23,76,56,.06); }
        .h2h-heading { display:flex; align-items:end; justify-content:space-between; gap:16px; margin-bottom:24px; }
        .h2h-heading h2 { margin:4px 0 0; color:#1b4332; text-align:left; }
        .h2h-eyebrow { margin:0; color:#64806d; font-size:10px; font-weight:800; letter-spacing:1.5px; }
        .h2h-tour { color:#859087; font-size:10px; font-weight:750; letter-spacing:1px; }
        .h2h-selectors { display:grid; grid-template-columns:1fr auto 1fr; align-items:end; gap:20px; max-width:760px; margin:0 auto 24px; }
        .h2h-selectors label { display:grid; gap:8px; color:#657168; font-size:11px; font-weight:700; }
        .h2h-selectors select { width:100%; min-height:44px; padding:0 12px; border:1px solid #dce5dc; border-radius:8px; background:#fbfcfa; color:#203b2c; font-size:13px; }
        .h2h-vs { padding-bottom:13px; color:#92a097; font-size:11px; font-weight:800; }
        .h2h-scoreboard { display:grid; grid-template-columns:1fr auto 1fr; align-items:center; gap:18px; padding:22px; border-radius:12px; background:#f2f6f1; }
        .h2h-player { display:flex; min-width:0; align-items:center; gap:14px; }
        .h2h-player img { width:62px; height:62px; flex:0 0 auto; border-radius:50%; background:#dfe8df; object-fit:cover; }
        .h2h-player div { display:grid; gap:6px; }
        .h2h-player span { color:#829086; font-size:9px; font-weight:800; letter-spacing:1px; }
        .h2h-player strong { color:#1d3929; font-size:15px; }
        .h2h-player-right { justify-content:flex-end; text-align:right; }
        .h2h-record { display:flex; align-items:center; gap:13px; color:#78857c; font-size:10px; }
        .h2h-record strong { color:#174c38; font-size:29px; letter-spacing:-1px; }
        .h2h-table-wrap { overflow-x:auto; margin-top:24px; }
        .h2h-table { width:100%; border-collapse:collapse; text-align:left; white-space:nowrap; }
        .h2h-table th { padding:11px 13px; border-bottom:1px solid #e7ece7; color:#869188; font-size:9px; font-weight:800; letter-spacing:.8px; text-transform:uppercase; }
        .h2h-table td { padding:14px 13px; border-bottom:1px solid #eff2ee; color:#59675e; font-size:12px; }
        .h2h-table tr:last-child td { border-bottom:0; }
        .h2h-table .h2h-winner { color:#174c38; font-weight:750; }
        .h2h-note { margin:18px 0 0; color:#879188; font-size:10px; line-height:1.5; }
        .jugador-ranking { display:inline-flex; align-items:center; gap:6px; margin:0 0 10px; padding:5px 8px; border-radius:6px; background:#edf4ec; color:#174c38; font-size:11px; font-weight:750; }
        .jugador-ranking small { color:#77877a; font-size:9px; font-weight:700; }
        .h2h-ranking { color:#6e7e72; font-size:10px; font-weight:700; }
        @media (max-width:600px) {
          .h2h-panel { margin-top:38px; padding:20px 15px; }
          .h2h-heading { align-items:start; }
          .h2h-heading h2 { font-size:25px; }
          .h2h-tour { max-width:85px; text-align:right; line-height:1.5; }
          .h2h-selectors { grid-template-columns:1fr 25px 1fr; gap:8px; }
          .h2h-selectors select { padding:0 7px; font-size:11px; }
          .h2h-scoreboard { gap:8px; padding:15px 10px; }
          .h2h-player { gap:7px; }
          .h2h-player img { width:40px; height:40px; }
          .h2h-player span { font-size:7px; }
          .h2h-player strong { font-size:11px; }
          .h2h-record { gap:5px; font-size:8px; }
          .h2h-record strong { font-size:21px; }
        }
      `}</style>
      <h2>🎾 Jugadores de tenis</h2>

      <input
        type="text"
        placeholder="Buscar jugador..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="jugadores-buscador"
      />

      <p style={{ margin: '0 0 14px', color: '#859087', fontSize: 11 }}>
        Rankings individuales ATP y WTA · actualización: 9 de noviembre de 2026
      </p>
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
              <p className="jugador-ranking">#{jugador.ranking} <small>{jugador.circuito} · Individuales</small></p>

              <p><strong>País:</strong> {jugador.pais}</p>

              <p>
                <strong>Edad:</strong> {calcularEdad(jugador.nacimiento)} años
              </p>

              <p><strong>Mano hábil:</strong> {jugador.mano}</p>
            </div>

          </div>
        ))}
      </div>

      <section className="h2h-panel" id="h2h" aria-labelledby="h2h-titulo">
        <div className="h2h-heading">
          <div><p className="h2h-eyebrow">CARA A CARA</p><h2 id="h2h-titulo">Head to Head</h2></div>
          <span className="h2h-tour">ATP TOUR · WTA TOUR</span>
        </div>

        <div className="h2h-selectors">
          <label>Jugador 1
            <select value={jugadorAId} onChange={(event) => {
              const id = Number(event.target.value);
              setJugadorAId(id);
              if (id === jugadorBId) setJugadorBId(jugadorAId);
            }}>
              {jugadores.map((jugador) => <option key={jugador.id} value={jugador.id}>#{jugador.ranking} {jugador.circuito} · {jugador.nombre}</option>)}
            </select>
          </label>
          <span className="h2h-vs">VS</span>
          <label>Jugador 2
            <select value={jugadorBId} onChange={(event) => {
              const id = Number(event.target.value);
              setJugadorBId(id);
              if (id === jugadorAId) setJugadorAId(jugadorBId);
            }}>
              {jugadores.map((jugador) => <option key={jugador.id} value={jugador.id}>#{jugador.ranking} {jugador.circuito} · {jugador.nombre}</option>)}
            </select>
          </label>
        </div>

        <div className="h2h-scoreboard">
          <div className="h2h-player"><img src={jugadorA.imagen} alt="" /><div><span>{jugadorA.circuito} · INDIVIDUALES</span><strong>{jugadorA.nombre}</strong><small className="h2h-ranking">Puesto #{jugadorA.ranking}</small></div></div>
          <div className="h2h-record"><strong>{victoriasA}</strong><span>Victorias</span><strong>{victoriasB}</strong></div>
          <div className="h2h-player h2h-player-right"><div><span>{jugadorB.circuito} · INDIVIDUALES</span><strong>{jugadorB.nombre}</strong><small className="h2h-ranking">Puesto #{jugadorB.ranking}</small></div><img src={jugadorB.imagen} alt="" /></div>
        </div>

        <div className="h2h-table-wrap">
          <table className="h2h-table">
            <thead><tr><th>Fecha</th><th>Torneo</th><th>Superficie</th><th>Ganador</th><th>Resultado</th></tr></thead>
            <tbody>{enfrentamientos.map((partido) => <tr key={partido.id}>
              <td>{partido.fecha}</td><td>{partido.torneo}</td><td>{partido.superficie}</td><td className="h2h-winner">{partido.ganador}</td><td>{partido.marcador}</td>
            </tr>)}</tbody>
          </table>
        </div>
        <p className="h2h-note">Rankings individuales consultados el 9 de noviembre de 2026. La tabla de enfrentamientos sigue siendo una demostración con resultados de ejemplo.</p>
      </section>

      {jugadoresFiltrados.length === 0 && (
        <p className="jugadores-vacio">
          No se encontraron jugadores.
        </p>
      )}
    </section>
  );
}

export default Jugadores;
