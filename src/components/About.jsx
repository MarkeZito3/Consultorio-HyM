import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ElizabethImg from '../assets/team/Elizabeth.png'
import WilliHernandezImg from '../assets/team/WilliHernandez.png'
import brbImg from '../assets/bienes-raices-banner.webp'
import cbImg from '../assets/contabilidad-banner.webp'
import lbImg from '../assets/legales-banner.webp'

function About() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center py-16 px-4">
          <div id='SobreNosotros' className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h2 className="text-3xl font-bold text-primary mb-4 header-font">¿Quienes Somos?</h2>
            <p className="text-gray-700 mb-4">
              Somos CONSULTORES HERNANDEZ & ASOCIADOS, una firma liderada por Willi Hernandez Orellana y Elizabeth Morales. Nos dedicamos a ofrecer soluciones legales y contables integrales, con un compromiso inquebrantable hacia la excelencia y la satisfacción del cliente.
            </p>
            <p className="text-gray-700 mb-4">
              Estamos ubicados en San Javier de Loncomilla, y nuestros abogados y contadores están especializados en auditoría, contabilidad y defensa en Derecho Tributario, Laboral, Penal, Familia, Comercial, Civil y Migratorio. Además, brindamos asesoría financiera y jurídica personalizada, cubriendo sus necesidades.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Círculo para Willi Hernández Orellana */}
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-secondary shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img 
                    className="w-full h-full object-cover" 
                    src={WilliHernandezImg} 
                    alt="Willi Hernández Orellana" 
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-accent dark:text-dark py-2 px-4 rounded-lg shadow-lg text-sm font-bold">
                  Willi Hernández Orellana
                </div>
              </div>

              {/* Círculo para Elizabeth Morales Gajardo */}
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-secondary shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img 
                    className="w-full h-full object-cover" 
                    src={ElizabethImg} 
                    alt="Elizabeth Morales Gajardo" 
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-accent dark:text-dark py-2 px-4 rounded-lg shadow-lg text-sm font-bold">
                  Elizabeth Morales Gajardo
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* --- Servicios (PracticeAreas) --- */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-primary mb-4 header-font">Servicios</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
            {/* Grid de servicios */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <Link to="/legales" className="practice-area bg-primary text-white rounded-lg shadow-md p-8 text-lg flex flex-col justify-between items-center min-h-[340px] relative overflow-hidden" onClick={() => {window.scrollTo(0, 0);}}>
                <img src={lbImg} alt="Legales" className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" />
                <h2 className='font-semibold relative z-10'>Legales</h2>
                <p className="mt-2 text-sm text-gray-200 relative z-10">
                  Nuestro equipo de abogados especializados brinda asesoría personalizada, representación legal y soluciones efectivas para proteger sus derechos e intereses.
                </p>
              </Link>
              <Link to="/contabilidad" className="practice-area bg-primary text-white rounded-lg shadow-md p-8 text-lg flex flex-col justify-between items-center min-h-[340px] relative overflow-hidden" onClick={() => {window.scrollTo(0, 0);}}>
                <img src={cbImg} alt="Contabilidad" className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" />
                <h2 className='font-semibold relative z-10'>Contabilidad</h2>
                <p className="mt-2 text-sm text-gray-200 relative z-10">
                  Servicios contables profesionales para empresas y particulares.
                </p>
              </Link>
              <Link to="/derecho_inmobiliario" className="practice-area bg-primary text-white rounded-lg shadow-md p-8 text-lg flex flex-col justify-between items-center min-h-[340px] relative overflow-hidden" onClick={() => {window.scrollTo(0, 0);}}>
                <img src={brbImg} alt="Derecho Inmobiliario" className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" />
                <h2 className='font-semibold relative z-10'>Derecho Inmobiliario</h2>
                <p className="mt-2 text-sm text-gray-200 relative z-10">
                  Ofrecemos asesoría integral en derecho inmobiliario y propiedad raíz.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default About
