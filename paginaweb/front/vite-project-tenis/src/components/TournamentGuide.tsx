import type { GrandSlam } from '../types/GrandSlam';
import { glosario } from '../data/glosario';

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

const grandSlams: GrandSlam[] = [
  {
    id: 1,
    nombre: 'Australian Open',
    pais: 'Australia',
    ciudad: 'Melbourne',
    superficie: 'Pista dura',
    fecha: 'Enero',
    descripcion: 'Primer Grand Slam del año, conocido por su calor intenso y sus encuentros nocturnos.',
  },
  {
    id: 2,
    nombre: 'Roland Garros',
    pais: 'Francia',
    ciudad: 'París',
    superficie: 'Polvo de ladrillo',
    fecha: 'Mayo - Junio',
    descripcion: 'Único Grand Slam sobre polvo de ladrillo, premiado por su exigencia física y técnica.',
  },
  {
    id: 3,
    nombre: 'Wimbledon',
    pais: 'Reino Unido',
    ciudad: 'Londres',
    superficie: 'Césped',
    fecha: 'Junio - Julio',
    descripcion: 'El torneo de tenis más antiguo del mundo, famoso por su césped, tradición y vestimenta blanca.',
  },
  {
    id: 4,
    nombre: 'US Open',
    pais: 'Estados Unidos',
    ciudad: 'Nueva York',
    superficie: 'Pista dura',
    fecha: 'Agosto - Septiembre',
    descripcion: 'Grand Slam disputado en pista dura y reconocido por su ambiente nocturno y su público vibrante.',
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
        .tournament-card h3, .grand-slam-heading h3 { margin:0; color:#1f3227; font-family:inherit; font-size:15px; font-weight:700; line-height:1.3; }
        .tournament-card p { margin:0; color:#68766d; font-size:11px; line-height:1.45; }
        .tournament-examples { margin-top:auto !important; padding-top:7px; border-top:1px solid #edf0ec; color:#859087 !important; font-size:9px !important; }
        .grand-slam-grid { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:11px; margin-bottom:24px; }
        .grand-slam-card { overflow:hidden; border:1px solid #e5ebe4; border-radius:11px; background:#fff; box-shadow:0 4px 14px #203d2408; }
        .grand-slam-accent { height:4px; background:var(--slam-accent); }
        .grand-slam-content { display:flex; flex-direction:column; gap:8px; padding:14px; }
        .grand-slam-heading { display:flex; align-items:center; justify-content:space-between; gap:8px; }
        .grand-slam-heading span { padding:4px 7px; border-radius:20px; background:#edf4ec; color:#174c38; font-size:9px; font-weight:750; }
        .grand-slam-details { color:#64806d; font-size:9px; font-weight:700; }
        .grand-slam-content p { margin:0; color:#68766d; font-size:11px; line-height:1.45; }
        .glossary-section { margin-top:26px; }
        .glossary-section h3 { margin:0 0 12px; color:#1f3227; font-size:18px; }
        .glossary-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:10px; }
        .glossary-item { padding:12px 14px; border:1px solid #e5ebe4; border-radius:10px; background:#fff; }
        .glossary-item strong { display:block; margin-bottom:5px; color:#174c38; font-size:12px; }
        .glossary-item p { margin:0; color:#68766d; font-size:10px; line-height:1.45; }
        @media(max-width:900px) { .tournament-grid { grid-template-columns:repeat(2,minmax(0,1fr)); } }
        @media(max-width:900px) { .grand-slam-grid { grid-template-columns:repeat(2,minmax(0,1fr)); } .glossary-grid { grid-template-columns:repeat(2,minmax(0,1fr)); } }
        @media(max-width:600px) { .tournament-guide { padding-top:40px; } .tournament-grid { grid-template-columns:1fr; } .grand-slam-grid { grid-template-columns:1fr; } .glossary-grid { grid-template-columns:1fr; } .tournament-card { padding:13px; } }
      `}</style>
      <div className="section-heading">
        <div><p className="eyebrow">LOS GRAND SLAMS Y EL CIRCUITO</p><h2 id="torneos-titulo">Torneos del circuito</h2></div>
        <span className="section-number">CATEGORÍAS</span>
      </div>
      <p className="tournament-intro">Conocé los cuatro torneos más importantes y las categorías principales de los circuitos ATP y WTA.</p>
      <div className="grand-slam-grid">
        {grandSlams.map((slam) => {
          const accents: Record<string, string> = {
            'Australian Open': '#2596be',
            'Roland Garros': '#d9812c',
            Wimbledon: '#4b7f52',
            'US Open': '#3b5bdb',
          };
          return (
            <article className="grand-slam-card" key={slam.id}>
                <div className="grand-slam-accent" style={{ backgroundColor: accents[slam.nombre] }} />
              <div className="grand-slam-content">
                <div className="grand-slam-heading"><h3>{slam.nombre}</h3><span>{slam.pais}</span></div>
                <div className="grand-slam-details">{slam.ciudad} · {slam.superficie} · {slam.fecha}</div>
                <p>{slam.descripcion}</p>
              </div>
            </article>
          );
        })}
      </div>
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
      <section className="glossary-section" id="glosario" aria-labelledby="glosario-titulo">
        <h3 id="glosario-titulo">Glosario de tenis</h3>
        <div className="glossary-grid">
          {glosario.map((termino) => (
            <article className="glossary-item" key={termino.id}>
              <strong>{termino.palabra}</strong>
              <p>{termino.significado}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
