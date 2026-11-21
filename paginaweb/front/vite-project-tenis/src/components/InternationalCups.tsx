const copas = [
  {
    nombre: 'Copa Davis',
    categoria: 'TENIS MASCULINO · EQUIPOS NACIONALES',
    color: '#315f91',
    imagen: '/davis-cup.png',
    historia: 'Se disputa desde 1900 y es una de las competiciones internacionales por equipos más tradicionales del tenis.',
    descripcion: 'Selecciones nacionales masculinas representan a sus países en eliminatorias organizadas por la Federación Internacional de Tenis (ITF).',
  },
  {
    nombre: 'Billie Jean King Cup',
    categoria: 'TENIS FEMENINO · EQUIPOS NACIONALES',
    color: '#8b4b78',
    imagen: '/billie-jean-king-cup.png',
    historia: 'Creada en 1963 como Federation Cup, adoptó su nombre actual en 2020 en honor a Billie Jean King.',
    descripcion: 'La principal competición internacional por equipos del tenis femenino, organizada por la Federación Internacional de Tenis (ITF).',
  },
];

export default function InternationalCups() {
  return (
    <section className="content-section international-cups" id="copas" aria-labelledby="copas-titulo">
      <style>{`
        .international-cups { padding-top:56px; padding-bottom:18px; }
        .international-cups-intro { margin:-5px 0 16px; color:#77817a; font-size:12px; line-height:1.55; }
        .international-cups-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:14px; }
        .international-cup-card { overflow:hidden; border:1px solid #e5ebe4; border-radius:12px; background:#fff; box-shadow:0 5px 18px #203d240a; }
        .international-cup-accent { height:5px; }
        .international-cup-image { display:block; width:100%; height:230px; object-fit:contain; background:#e4ebe5; }
        .international-cup-content { display:grid; gap:11px; padding:19px; }
        .international-cup-category { margin:0; color:#64806d; font-size:9px; font-weight:800; letter-spacing:1px; }
        .international-cup-content h3 { margin:0; color:#1f3227; font-size:19px; font-weight:700; }
        .international-cup-history { margin:0; color:#174c38; font-size:11px; font-weight:650; line-height:1.5; }
        .international-cup-description { margin:0; color:#68766d; font-size:12px; line-height:1.6; }
        @media(max-width:600px) { .international-cups-grid { grid-template-columns:1fr; } .international-cup-content { padding:16px; } }
      `}</style>
      <div className="section-heading">
        <div><p className="eyebrow">SELECCIONES NACIONALES</p><h2 id="copas-titulo">Copas internacionales</h2></div>
        <span className="section-number">ITF</span>
      </div>
      <p className="international-cups-intro">Dos grandes torneos donde las selecciones representan a sus países en el escenario internacional.</p>
      <div className="international-cups-grid">
        {copas.map((copa) => (
          <article className="international-cup-card" key={copa.nombre}>
            <div className="international-cup-accent" style={{ backgroundColor: copa.color }} />
            <img className="international-cup-image" src={copa.imagen} alt={`Trofeo de ${copa.nombre}`} />
            <div className="international-cup-content">
              <p className="international-cup-category">{copa.categoria}</p>
              <h3>{copa.nombre}</h3>
              <p className="international-cup-history">{copa.historia}</p>
              <p className="international-cup-description">{copa.descripcion}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
