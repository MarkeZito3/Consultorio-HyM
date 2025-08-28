import React from 'react';
import { useParams } from 'react-router-dom';
import jurisprudenciasData from './Jurisprudencias.json';
import * as JurisprudenciasMod from './Jurisprudencias.jsx';
import { BannerLegales } from './Banner';


function getImageJuri(name) {
  return `/src/assets/${name}`;
}

export default function JurisprudenciaDetalle() {
  const { url } = useParams();
  // Buscar el caso por url en todas las jurisprudencias
  let caso = null;
  let jurisprudenciaTitulo = '';
  (jurisprudenciasData["jurisprudencias"] || []).forEach(j => {
    const encontrado = (j.casos || []).find(c => c.url === url);
    if (encontrado) {
      caso = encontrado;
      jurisprudenciaTitulo = j.titulo;
    }
  });

  // Render dinámico del módulo de Jurisprudencias
  const DynamicJurisprudencia = JurisprudenciasMod[url];

  if (!caso && !DynamicJurisprudencia) {
    return <div className="p-8 text-center text-red-600">Noticia no encontrada.</div>;
  }

  return (
    <>
      <BannerLegales />
      <section className="animate-fade-in">
        <div className="p-8">
          {caso && (
            <div className="max-w-3xl mx-auto my-8 p-6 font-serif newspaper-clip">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>{caso.titulo}</h1>
              <h2 className="text-lg text-gray-600">{jurisprudenciaTitulo}</h2>
              <div className="text-base md:text-lg leading-relaxed mb-4 italic">{caso.subtitulo}</div>
              <div className="text-[#aaaaaa] md:text-1 leading-relaxed">{caso.fecha}</div>
              {caso.foto && (
                <img
                  src={getImageJuri(caso.foto)}
                  alt={caso.titulo}
                  className="shadow-lg rounded-lg my-4 mx-auto"
                />
              )}
            </div>
          )}
          {DynamicJurisprudencia && <DynamicJurisprudencia />}
        </div>
      </section>
    </>
  );
}