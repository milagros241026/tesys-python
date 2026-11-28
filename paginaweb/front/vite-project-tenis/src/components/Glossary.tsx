import { useState } from 'react';
import { glosario } from '../data/glosario';

function normalizarTexto(texto: string): string {
  return texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('es');
}

export default function Glossary() {
  const [busqueda, setBusqueda] = useState('');
  const termino = normalizarTexto(busqueda.trim());
  const terminosFiltrados = glosario.filter(({ palabra, significado }) =>
    normalizarTexto(palabra).includes(termino)
    || normalizarTexto(significado).includes(termino)
  );

  return (
    <section className="content-section glossary-section" id="glosario" aria-labelledby="glosario-titulo">
      <style>{`
        .glossary-section { padding-top:56px; padding-bottom:18px; }
        .glossary-section h2 { margin:0 0 14px; color:#1f3227; font-size:24px; }
        .glossary-search { display:block; width:100%; max-width:460px; margin:0 0 16px; }
        .glossary-search input { width:100%; min-height:42px; padding:0 12px; border:1px solid #dce5dc; border-radius:8px; background:#fff; color:#203b2c; font:inherit; font-size:12px; }
        .glossary-search input:focus-visible { outline:2px solid #4b8a68; outline-offset:2px; }
        .glossary-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:10px; }
        .glossary-item { padding:12px 14px; border:1px solid #e5ebe4; border-radius:10px; background:#fff; }
        .glossary-item strong { display:block; margin-bottom:5px; color:#174c38; font-size:12px; }
        .glossary-item p { margin:0; color:#68766d; font-size:10px; line-height:1.45; }
        .glossary-empty { grid-column:1 / -1; margin:0; padding:20px; border:1px solid #e5ebe4; border-radius:10px; background:#fff; color:#68766d; font-size:12px; text-align:center; }
        @media(max-width:900px) { .glossary-grid { grid-template-columns:repeat(2,minmax(0,1fr)); } }
        @media(max-width:600px) { .glossary-grid { grid-template-columns:1fr; } }
      `}</style>
      <div className="section-heading">
        <div><p className="eyebrow">TÉRMINOS DEL JUEGO</p><h2 id="glosario-titulo">Glosario de tenis</h2></div>
      </div>
      <label className="glossary-search">
        <span className="sr-only">Buscar en el glosario</span>
        <input
          type="search"
          value={busqueda}
          onChange={(event) => setBusqueda(event.target.value)}
          placeholder="Buscar término o explicación..."
        />
      </label>
      <div className="glossary-grid">
        {terminosFiltrados.length === 0 ? (
          <p className="glossary-empty" role="status">No se encontraron términos.</p>
        ) : terminosFiltrados.map((termino) => (
          <article className="glossary-item" key={termino.id}>
            <strong>{termino.palabra}</strong>
            <p>{termino.significado}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
