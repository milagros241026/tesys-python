const torneos = [
  {
    circuito: 'ATP',
    nivel: 'Masters 1000',
    descripcion: 'La serie regular de mayor categoría del ATP Tour. Reúne a los principales jugadores y entrega 1000 puntos al campeón.',
    ejemplos: 'Indian Wells · Miami · Monte-Carlo · Madrid · Roma · Canadá · Cincinnati · Shanghái · París',
  },
  {
    circuito: 'ATP',
    nivel: 'ATP 500',
    descripcion: 'Torneos de alto nivel que otorgan 500 puntos al campeón y se disputan durante todo el año.',
    ejemplos: 'Rotterdam · Río · Barcelona · Queen’s · Halle · Tokio · Pekín · Basilea',
  },
  {
    circuito: 'ATP',
    nivel: 'ATP 250',
    descripcion: 'Eventos del ATP Tour que otorgan 250 puntos al campeón. Son una oportunidad para sumar puntos y títulos en distintas superficies.',
    ejemplos: 'Auckland · Buenos Aires · Estoril · Gstaad · Estocolmo · Metz',
  },
  {
    circuito: 'ATP',
    nivel: 'Challenger Tour',
    descripcion: 'Circuito de desarrollo profesional. Sus torneos ayudan a jugadores a ganar experiencia y escalar posiciones para acceder al ATP Tour.',
    ejemplos: 'Categorías Challenger 50, 75, 100, 125 y 175, según los puntos máximos para el campeón.',
  },
  {
    circuito: 'WTA',
    nivel: 'WTA 1000',
    descripcion: 'La categoría regular más alta del WTA Tour. Los torneos principales entregan 1000 puntos al título.',
    ejemplos: 'Doha · Dubái · Indian Wells · Miami · Madrid · Roma · Canadá · Cincinnati · Pekín · Wuhan',
  },
  {
    circuito: 'WTA',
    nivel: 'WTA 500',
    descripcion: 'Torneos importantes del calendario femenino que entregan 500 puntos a la campeona.',
    ejemplos: 'Abu Dabi · Mérida · Charleston · Stuttgart · Queen’s · Berlín · Tokio · Ningbo',
  },
  {
    circuito: 'WTA',
    nivel: 'WTA 250',
    descripcion: 'Eventos del WTA Tour que entregan 250 puntos a la campeona y se juegan en distintos países y superficies.',
    ejemplos: 'Auckland · Hobart · Cluj-Napoca · Bogotá · Rabat · Nottingham · Osaka',
  },
  {
    circuito: 'WTA',
    nivel: 'WTA 125',
    descripcion: 'Torneos que conectan el circuito ITF con los niveles principales del WTA Tour y ofrecen puntos para progresar en el ranking.',
    ejemplos: 'Se disputan en varias regiones y superficies a lo largo de la temporada.',
  },
  {
    circuito: 'ATP · WTA',
    nivel: 'Finales de temporada',
    descripcion: 'Competiciones de cierre de año reservadas para los mejores clasificados de cada circuito. Se juegan con fase de grupos y eliminatorias.',
    ejemplos: 'Nitto ATP Finals · WTA Finals',
  },
];

export default function TournamentGuide() {
  return (
    <section className="content-section tournament-guide" id="torneos" aria-labelledby="torneos-titulo">
      <style>{`
        .tournament-guide { padding-top:48px; padding-bottom:20px; }
        .tournament-intro { margin:-6px 0 14px; color:#77817a; font-size:11px; line-height:1.5; }
        .tournament-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:11px; }
        .tournament-card { display:flex; flex-direction:column; gap:8px; padding:14px; border:1px solid #e5ebe4; border-radius:11px; background:#fff; box-shadow:0 4px 14px #203d2408; }
        .tournament-meta { display:flex; align-items:center; justify-content:space-between; gap:10px; }
        .tournament-tour { color:#64806d; font-size:9px; font-weight:800; letter-spacing:1px; }
        .tournament-tier { padding:4px 7px; border-radius:20px; background:#edf4ec; color:#174c38; font-size:9px; font-weight:750; }
        .tournament-card h3 { margin:0; color:#1f3227; font-size:15px; }
        .tournament-card p { margin:0; color:#68766d; font-size:11px; line-height:1.45; }
        .tournament-examples { margin-top:auto !important; padding-top:7px; border-top:1px solid #edf0ec; color:#859087 !important; font-size:9px !important; }
        @media(max-width:900px) { .tournament-grid { grid-template-columns:repeat(2,minmax(0,1fr)); } }
        @media(max-width:600px) { .tournament-guide { padding-top:40px; } .tournament-grid { grid-template-columns:1fr; } .tournament-card { padding:13px; } }
      `}</style>
      <div className="section-heading">
        <div><p className="eyebrow">MÁS ALLÁ DE LOS GRAND SLAMS</p><h2 id="torneos-titulo">Torneos del circuito</h2></div>
        <span className="section-number">CATEGORÍAS</span>
      </div>
      <p className="tournament-intro">Los Grand Slams ya tienen su propia información. Acá podés conocer las demás categorías principales de los circuitos ATP y WTA.</p>
      <div className="tournament-grid">
        {torneos.map((torneo) => (
          <article className="tournament-card" key={`${torneo.circuito}-${torneo.nivel}`}>
            <div className="tournament-meta"><span className="tournament-tour">{torneo.circuito}</span><span className="tournament-tier">{torneo.nivel}</span></div>
            <h3>{torneo.nivel}</h3>
            <p>{torneo.descripcion}</p>
            <p className="tournament-examples"><strong>Ejemplos:</strong> {torneo.ejemplos}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
