const promesas = [
  {
    nombre: 'João Fonseca',
    pais: 'Brasil',
    circuito: 'ATP',
    logro: 'Ganó el US Open junior en 2023 y las Next Gen ATP Finals en 2024.',
  },
  {
    nombre: 'Rafael Jódar',
    pais: 'España',
    circuito: 'ATP',
    logro: 'Fue campeón individual junior del US Open en 2024 y avanza en el circuito profesional.',
  },
  {
    nombre: 'Mirra Andreeva',
    pais: 'Rusia',
    circuito: 'WTA',
    logro: 'Debutó en el circuito profesional a los 15 años y se destacó muy joven entre las mejores del WTA Tour.',
  },
  {
    nombre: 'Iva Jovic',
    pais: 'Estados Unidos',
    circuito: 'WTA',
    logro: 'Conquistó el título individual junior del US Open en 2024 y dio el salto al circuito profesional.',
  },
];

export default function RisingStars() {
  return (
    <section className="content-section rising-stars" id="promesas" aria-labelledby="promesas-titulo">
      <style>{`
        .rising-stars { padding-top:56px; padding-bottom:18px; }
        .rising-stars-intro { margin:-5px 0 18px; color:#77817a; font-size:12px; line-height:1.55; }
        .rising-stars-grid { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:12px; }
        .rising-star-card { display:flex; flex-direction:column; gap:11px; padding:16px; border:1px solid #e5ebe4; border-radius:12px; background:#fff; box-shadow:0 5px 18px #203d240a; }
        .rising-star-meta { display:flex; align-items:center; justify-content:space-between; gap:8px; }
        .rising-star-country { color:#64806d; font-size:10px; font-weight:700; }
        .rising-star-circuit { padding:4px 7px; border-radius:20px; background:#edf4ec; color:#174c38; font-size:9px; font-weight:800; }
        .rising-star-card h3 { margin:0; color:#1f3227; font-size:16px; font-weight:700; }
        .rising-star-card p { margin:0; color:#68766d; font-size:11px; line-height:1.55; }
        @media(max-width:900px) { .rising-stars-grid { grid-template-columns:repeat(2,minmax(0,1fr)); } }
        @media(max-width:600px) { .rising-stars-grid { grid-template-columns:1fr; } }
      `}</style>
      <div className="section-heading">
        <div><p className="eyebrow">LAS NUEVAS GENERACIONES</p><h2 id="promesas-titulo">Tenistas promesas</h2></div>
        <span className="section-number">ATP · WTA</span>
      </div>
      <p className="rising-stars-intro">Jóvenes figuras que ya dejaron su marca en el tenis juvenil y empiezan a destacar en el circuito profesional.</p>
      <div className="rising-stars-grid">
        {promesas.map((jugador) => (
          <article className="rising-star-card" key={jugador.nombre}>
            <div className="rising-star-meta">
              <span className="rising-star-country">{jugador.pais}</span>
              <span className="rising-star-circuit">{jugador.circuito}</span>
            </div>
            <h3>{jugador.nombre}</h3>
            <p>{jugador.logro}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
