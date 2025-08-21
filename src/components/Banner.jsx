import React from 'react'

export function Inicio() {
  return (
    <section id='Inicio' className="hero-bg bg-primary text-white py-60 px-4 bg-diagonal">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold header-font mb-7">Consultores Hernández & Asociados</h1>
        <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
        <h2 className="text-2xl md:text-3xl font-bold header-font mb-7">Willi Hernández Orellana</h2>
        {/* <p className="max-w-3xl mx-auto text-lg">
          Auditoria, Contabilidades, Defensa en Derecho Tributario,Derecho Laboral, Derecho Penal, Derecho Familia, Derecho Comercial, Derecho Civil, Vif Asesoría Financieras, Jurídicas
          Profesionales: Contadores Generales, Contadores Auditores,Ingeniero Comercial, Abogados, Magíster en Dirección Financiera, Magíster en Derecho Tributario, Doctorando en Derecho, Magíster  en Derecho  Penal, Diplomado en  Mediación familiar, Diplomado en Derecho Penal parte General y Diplomado en Derecho Penal parte Especial, Diplomado en Litigación Penal estratégica, Diplomado en Tributario, Diplomado en Derecho Laboral, Perito tributario  de las corte de Chile,   experto en Tributación, Diplomado en Economía y Finanzas, Diplomado en Remuneraciones Laborales, profesor Universitario, diplomado en inteligencia artificial. 
        </p> */}
        <p className="max-w-3xl mx-auto text-lg">Bufet de Abogados</p>
      </div>
    </section>
  )
}

export function InicioLocal() {
  return (
    <section id='Inicio' className="hero-bg-local bg-primary text-white py-60 px-4">
      <div className="container mx-auto text-center">
        {/* <h1 className="text-4xl md:text-5xl font-bold header-font mb-7">Consultorio Hernandes & Asociados</h1>
        <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
        <h2 className="text-2xl md:text-3xl font-bold header-font mb-7">Willi Hernández Orellana</h2> */}
        <q className="max-w-3xl mx-auto text-lg italic">
          Luchando contra molinos de viento - Don Quijote de la Mancha
        </q>
        {/* <p className="max-w-3xl mx-auto text-lg">Bufet de Abogados</p> */}
      </div>
    </section>
  )
}

export function BannerTeam() {
  return (
    <section id="BannerTeam" className="bg-secondary text-white py-40 px-4 bg-diagonal">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold header-font mb-4">Nuestro Equipo</h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
      </div>
    </section>
  )
}

export function BannerLeyes() {
  return (
    <section id="BannerLeyes" className="bg-secondary text-white py-40 px-4 bg-diagonal">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold header-font mb-4">Leyes</h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
      </div>
    </section>
  )
}

export function BannerContabilidad() {
  return (
    <section id="BannerContabilidad" className="bg-secondary text-white py-40 px-4 bg-diagonal">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold header-font mb-4">Contabilidad</h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
      </div>
    </section>
  )
}

export function BannerDerechoInmobiliario() {
  return (
    <section id="BannerDerechoInmobiliario" className="bg-secondary text-white py-40 px-4 bg-diagonal">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold header-font mb-4">Derecho Inmobiliario</h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
      </div>
    </section>
  )
}