const preguntas = [
  {
    pregunta: '¿Qué muestra el ranking individual?',
    respuesta: 'Ordena a cada jugador o jugadora según sus puntos individuales. ATP y WTA llevan clasificaciones separadas.',
  },
  {
    pregunta: '¿Cómo se suman los puntos?',
    respuesta: 'Los puntos dependen del torneo y de hasta qué ronda llega cada participante. Ganar o avanzar más rondas suele otorgar más puntos.',
  },
  {
    pregunta: '¿Por qué cambia el ranking?',
    respuesta: 'Es un ranking móvil: los puntos de torneos anteriores dejan de contar al cumplirse el período y se incorporan los resultados nuevos.',
  },
  {
    pregunta: '¿Qué período contempla?',
    respuesta: 'ATP y WTA calculan sus rankings sobre un período móvil de 52 semanas, con reglas específicas para ciertos torneos.',
  },
  {
    pregunta: '¿El ranking es lo mismo que el Head to Head?',
    respuesta: 'No. El ranking ordena a cada jugador por sus puntos; el Head to Head compara los enfrentamientos entre dos jugadores.',
  },
];

export default function RankingFAQ() {
  return (
    <section aria-labelledby="ranking-faq-title">
      <style>{`
        .ranking-faq { margin-top:28px; padding:24px; border:1px solid #e2e9e2; border-radius:14px; background:#fff; }
        .ranking-faq h3 { margin:0 0 14px; color:#1b4332; font-size:20px; }
        .ranking-faq details { border-top:1px solid #edf0ec; }
        .ranking-faq summary { padding:13px 2px; color:#304638; font-size:13px; font-weight:700; cursor:pointer; }
        .ranking-faq details p { margin:0; padding:0 2px 14px; color:#68766d; font-size:12px; line-height:1.6; }
        @media(max-width:600px) { .ranking-faq { margin-top:20px; padding:18px; } .ranking-faq h3 { font-size:18px; } }
      `}</style>
      <div className="ranking-faq">
        <h3 id="ranking-faq-title">Preguntas frecuentes sobre el ranking</h3>
        {preguntas.map(({ pregunta, respuesta }) => (
          <details key={pregunta}>
            <summary>{pregunta}</summary>
            <p>{respuesta}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
