const referentes = [
  {
    nombre: 'Guillermo Vilas',
    imagen: '/vilas.png',
    dato: 'Ganó cuatro títulos individuales de Grand Slam y fue una de las grandes figuras del tenis mundial en los años 70.',
  },
  {
    nombre: 'Gabriela Sabatini',
    imagen: '/sabatini.png',
    dato: 'Conquistó el US Open de 1990 y obtuvo la medalla de plata en los Juegos Olímpicos de Seúl 1988.',
  },
  {
    nombre: 'Juan Martín del Potro',
    imagen: '/del-potro.png',
    dato: 'Fue campeón del US Open en 2009 y pieza clave en la histórica conquista argentina de la Copa Davis.',
  },
];

export default function ArgentinaTennis() {
  return (
    <section className="content-section argentina-tennis" id="argentina" aria-labelledby="argentina-titulo">
      <style>{`
        .argentina-tennis { padding-top:56px; padding-bottom:18px; }
        .argentina-intro { margin:-5px 0 18px; color:#77817a; font-size:12px; line-height:1.55; }
        .argentina-players { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:12px; }
        .argentina-player, .argentina-highlight { border:1px solid #e5ebe4; border-radius:12px; background:#fff; box-shadow:0 5px 18px #203d240a; }
        .argentina-player { overflow:hidden; }
        .argentina-player-image { display:block; width:100%; height:220px; object-fit:cover; object-position:center 25%; background:#e4ebe5; }
        .argentina-player-content { padding:17px; }
        .argentina-player h3, .argentina-highlight h3 { margin:0 0 8px; color:#1f3227; font-size:16px; font-weight:700; }
        .argentina-player p, .argentina-highlight p { margin:0; color:#68766d; font-size:11px; line-height:1.55; }
        .argentina-highlights { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:12px; margin-top:14px; }
        .argentina-highlight { overflow:hidden; }
        .argentina-highlight-accent { height:4px; background:#75a843; }
        .argentina-highlight-image { display:block; width:100%; height:230px; object-fit:cover; object-position:center 35%; background:#e4ebe5; }
        .argentina-highlight-image--contained { object-fit:contain; background:#111; }
        .argentina-highlight-content { padding:17px; }
        .argentina-label { margin:0 0 7px !important; color:#64806d !important; font-size:9px !important; font-weight:800; letter-spacing:1px; }
        @media(max-width:700px) { .argentina-players { grid-template-columns:1fr; } }
        @media(max-width:600px) { .argentina-highlights { grid-template-columns:1fr; } }
      `}</style>
      <div className="section-heading">
        <div><p className="eyebrow">HISTORIA Y PRESENTE</p><h2 id="argentina-titulo">Argentina en el tenis</h2></div>
        <span className="section-number">ARG</span>
      </div>
      <p className="argentina-intro">El tenis argentino construyó una gran tradición internacional, con campeones de Grand Slam y equipos que dejaron huella.</p>
      <div className="argentina-players">
        {referentes.map((referente) => (
          <article className="argentina-player" key={referente.nombre}>
            <img className="argentina-player-image" src={referente.imagen} alt={referente.nombre} />
            <div className="argentina-player-content">
              <h3>{referente.nombre}</h3>
              <p>{referente.dato}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="argentina-highlights">
        <article className="argentina-highlight">
          <div className="argentina-highlight-accent" />
          <img className="argentina-highlight-image" src="/argentina-davis-cup.png" alt="Equipo argentino con la Copa Davis en 2016" />
          <div className="argentina-highlight-content">
            <p className="argentina-label">COPA DAVIS</p>
            <h3>La primera conquista</h3>
            <p>En 2016, Argentina ganó por primera vez la Copa Davis al vencer a Croacia 3-2 en la final disputada en Zagreb.</p>
          </div>
        </article>
        <article className="argentina-highlight">
          <div className="argentina-highlight-accent" />
          <img className="argentina-highlight-image argentina-highlight-image--contained" src="/argentina-open-trophy.png" alt="Trofeo del Argentina Open" />
          <div className="argentina-highlight-content">
            <p className="argentina-label">TORNEO ARGENTINO</p>
            <h3>Argentina Open</h3>
            <p>Buenos Aires recibe este torneo ATP 250 sobre polvo de ladrillo, una de las citas tradicionales del calendario sudamericano.</p>
          </div>
        </article>
      </div>
    </section>
  );
}
