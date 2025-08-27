import React, { useState } from 'react';
import preguntas from './PreguntasFrecuentes.json';

function PreguntasFrecuentes() {
  const [abierta, setAbierta] = useState(null);

  const toggle = idx => setAbierta(abierta === idx ? null : idx);

  return (
    <section id="PreguntasFrecuentes" className="PreguntasFrecuentes py-12 px-4" style={{ background: 'var(--color-primary, #050A30)' }}>
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center header-font">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {preguntas.map((item, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden shadow-md bg-white/10">
              <button
                className="w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center text-white font-semibold text-lg hover:bg-primary/80 transition-colors"
                onClick={() => toggle(idx)}
                aria-expanded={abierta === idx}
              >
                {item.pregunta}
                <span className={`fas fa-angle-right ml-2 transition-transform ${abierta === idx ? 'rotate-90' : ''}`}></span>
              </button>
              <div
                className={`px-6 pb-4 text-white text-base transition-all duration-300 ease-in-out ${abierta === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                // style={{ background: 'var(--color-secondary, #222779)' }}
              >
                {item.respuesta}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PreguntasFrecuentes;
