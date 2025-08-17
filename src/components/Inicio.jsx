import React from 'react'

function Inicio() {
  return (
    <section id='Inicio' className="hero-bg bg-primary text-white py-40 px-4 bg-diagonal">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold header-font mb-7">H&M Consultoría Jurídica</h1>
        <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
        <h2 className="text-2xl md:text-3xl font-bold header-font mb-7">Willi Hernández y Asociados</h2>
        <p className="max-w-3xl mx-auto text-lg">
          Consultoría Jurídica, Tributaria e Inmoviliaria 
        </p>
      </div>
    </section>
  )
}

export default Inicio
