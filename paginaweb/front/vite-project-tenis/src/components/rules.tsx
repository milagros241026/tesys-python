import { reglas } from '../data/rules';

export default function Reglas() {
  return (
    <section className="content-section rules-section" id="reglas" aria-labelledby="reglas-titulo">
      <style>{`
        .rules-section { padding-top:56px; padding-bottom:18px; }
        .rules-intro { margin:-5px 0 18px; color:#77817a; font-size:12px; line-height:1.55; }
        .rules-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:12px; }
        .rules-card { align-self:start; overflow:hidden; border:1px solid #e5ebe4; border-radius:12px; background:#fff; box-shadow:0 5px 18px #203d240a; }
        .rules-card summary { display:flex; min-height:54px; align-items:center; justify-content:space-between; gap:12px; padding:15px 17px; color:#1f3227; font-size:14px; font-weight:700; cursor:pointer; list-style:none; }
        .rules-card summary::-webkit-details-marker { display:none; }
        .rules-card summary::after { color:#4b8a68; content:"+"; font-size:20px; font-weight:500; line-height:1; }
        .rules-card[open] summary { color:#174c38; }
        .rules-card[open] summary::after { content:"-"; }
        .rules-card summary:focus-visible { outline:2px solid #4b8a68; outline-offset:-3px; }
        .rules-description { margin:0; padding:0 17px 17px; color:#68766d; font-size:12px; line-height:1.65; }
        @media(max-width:900px) { .rules-grid { grid-template-columns:repeat(2,minmax(0,1fr)); } }
        @media(max-width:600px) { .rules-grid { grid-template-columns:1fr; } }
      `}</style>
      <div className="section-heading">
        <div><p className="eyebrow">APRENDE A JUGAR</p><h2 id="reglas-titulo">Reglas básicas del tenis</h2></div>
        <span className="section-number">EL JUEGO</span>
      </div>
      <p className="rules-intro">Una guía rápida para entender cómo se cuentan los puntos y qué hace falta para ganar.</p>
      <div className="rules-grid">
        {reglas.map((regla) => (
          <details className="rules-card" key={regla.id}>
            <summary>{regla.titulo}</summary>
            <p className="rules-description">{regla.descripcion}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
