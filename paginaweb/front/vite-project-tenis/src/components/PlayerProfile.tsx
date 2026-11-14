import { useEffect } from 'react';

export interface JugadorPerfil {
  nombre: string;
  pais: string;
  nacimiento: string;
  mano: string;
  imagen: string;
  ranking: number;
  circuito: 'ATP' | 'WTA';
}

interface PlayerProfileProps {
  jugador: JugadorPerfil | null;
  onClose: () => void;
}

function calcularEdad(fechaNacimiento: string): number {
  const hoy = new Date();
  const nacimiento = new Date(`${fechaNacimiento}T00:00:00`);
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  if (
    hoy.getMonth() < nacimiento.getMonth() ||
    (hoy.getMonth() === nacimiento.getMonth() && hoy.getDate() < nacimiento.getDate())
  ) edad--;
  return edad;
}

export default function PlayerProfile({ jugador, onClose }: PlayerProfileProps) {
  useEffect(() => {
    if (!jugador) return;
    const cerrarConEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', cerrarConEscape);
    return () => window.removeEventListener('keydown', cerrarConEscape);
  }, [jugador, onClose]);

  if (!jugador) return null;

  return (
    <>
      <style>{`
        .perfil-overlay { position:fixed; z-index:20; inset:0; display:grid; place-items:center; padding:20px; background:rgba(10,28,19,.68); }
        .perfil-modal { position:relative; display:grid; width:min(100%,520px); grid-template-columns:minmax(150px,.8fr) 1.2fr; overflow:hidden; border-radius:14px; background:white; box-shadow:0 18px 56px #0004; }
        .perfil-modal-image { width:100%; height:100%; min-height:250px; object-fit:cover; background:#e4ebe5; }
        .perfil-modal-info { align-self:center; padding:26px; }
        .perfil-close { position:absolute; top:9px; right:9px; display:grid; width:29px; height:29px; place-items:center; border:0; border-radius:50%; background:#f0f3ef; color:#34463a; font-size:19px; cursor:pointer; }
        .perfil-kicker { margin:0 0 6px; color:#64806d; font-size:9px; font-weight:800; letter-spacing:1.2px; }
        .perfil-modal-info h2 { margin:0 0 14px; color:#1b4332; font-size:24px; text-align:left; }
        .perfil-details { display:grid; gap:9px; margin:0; }
        .perfil-details div { display:flex; justify-content:space-between; gap:10px; padding-bottom:7px; border-bottom:1px solid #edf0ec; }
        .perfil-details dt { color:#829086; font-size:11px; }
        .perfil-details dd { margin:0; color:#304638; font-size:11px; font-weight:700; text-align:right; }
        @media (max-width:600px) {
          .perfil-modal { max-width:340px; grid-template-columns:1fr; }
          .perfil-modal-image { height:155px; min-height:0; }
          .perfil-modal-info { padding:18px; }
          .perfil-modal-info h2 { margin-bottom:10px; font-size:21px; }
        }
      `}</style>
      <div className="perfil-overlay" onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}>
        <section className="perfil-modal" role="dialog" aria-modal="true" aria-labelledby="perfil-nombre">
          <button className="perfil-close" type="button" aria-label="Cerrar perfil" onClick={onClose}>×</button>
          <img className="perfil-modal-image" src={jugador.imagen} alt={jugador.nombre} />
          <div className="perfil-modal-info">
            <p className="perfil-kicker">PERFIL · {jugador.circuito} INDIVIDUALES</p>
            <h2 id="perfil-nombre">{jugador.nombre}</h2>
            <dl className="perfil-details">
              <div><dt>Ranking</dt><dd>#{jugador.ranking}</dd></div>
              <div><dt>País</dt><dd>{jugador.pais}</dd></div>
              <div><dt>Edad</dt><dd>{calcularEdad(jugador.nacimiento)} años</dd></div>
              <div><dt>Mano hábil</dt><dd>{jugador.mano}</dd></div>
            </dl>
          </div>
        </section>
      </div>
    </>
  );
}
