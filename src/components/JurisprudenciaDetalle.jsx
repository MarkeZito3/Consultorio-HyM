import React from 'react';
import { useParams } from 'react-router-dom';
import jurisprudenciasData from './Jurisprudencias.json';
import Header from './Header';
import Footer from './Footer';
// Si tienes un Banner específico para leyes, impórtalo aquí:
// import BannerLeyes from './BannerLeyes';

function getImageJuri(name) {
  return `/src/assets/Jurisprudencias/${name}`;
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

  if (!caso) {
    return <div className="p-8 text-center text-red-600">Noticia no encontrada.</div>;
  }

  return (
    <>
      <Header />
      {/* <BannerLeyes /> Si tienes un banner especial para leyes, descomenta esto */}
      <section className="py-8 px-2 animate-fade-in">
        <div className="container mx-auto max-w-2xl bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">{caso.titulo}</h1>
          <h2 className="text-lg text-gray-600 mb-4">{jurisprudenciaTitulo}</h2>
          {caso.foto && <img src={getImageJuri(caso.foto)} alt={caso.titulo} className="w-full h-auto rounded mb-4" />}
          <div className="text-base md:text-lg leading-relaxed mb-4">{caso.descripcion}</div>
          {/* Si hay más campos en el caso, agrégalos aquí */}
        </div>
      </section>
      <Footer />
    </>
  );
}