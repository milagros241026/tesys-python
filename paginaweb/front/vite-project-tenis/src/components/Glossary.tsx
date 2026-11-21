import { glosario } from '../data/glosario';

export default function Glossary() {
  return (
    <section className="content-section glossary-section" id="glosario" aria-labelledby="glosario-titulo">
      <style>{`
        .glossary-section { padding-top:56px; padding-bottom:18px; }
        .glossary-section h2 { margin:0 0 14px; color:#1f3227; font-size:24px; }
        .glossary-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:10px; }
        .glossary-item { padding:12px 14px; border:1px solid #e5ebe4; border-radius:10px; background:#fff; }
        .glossary-item strong { display:block; margin-bottom:5px; color:#174c38; font-size:12px; }
        .glossary-item p { margin:0; color:#68766d; font-size:10px; line-height:1.45; }
        @media(max-width:900px) { .glossary-grid { grid-template-columns:repeat(2,minmax(0,1fr)); } }
        @media(max-width:600px) { .glossary-grid { grid-template-columns:1fr; } }
      `}</style>
      <div className="section-heading">
        <div><p className="eyebrow">TÉRMINOS DEL JUEGO</p><h2 id="glosario-titulo">Glosario de tenis</h2></div>
      </div>
      <div className="glossary-grid">
        {glosario.map((termino) => (
          <article className="glossary-item" key={termino.id}>
            <strong>{termino.palabra}</strong>
            <p>{termino.significado}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
