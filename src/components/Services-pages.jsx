import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import servicesData from './Services.json';
import ElizabethImg from '../assets/team/Elizabeth.png';

function Servicios({ serviceName, servicesData }) {
  const navigate = useNavigate();
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-primary mb-4 header-font">Servicios</h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
        {/* Grid de servicios */}
        <div className="">
          <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {(servicesData[serviceName] || []).map((service) => (
              <div
                key={service.id + serviceName}
                onClick={() => navigate(`/${serviceName.toLowerCase()}/${service.ruta}`)}
                className={`practice-area bg-white p-4 rounded-xl shadow-md border-l-4 border-secondary cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`${service.color} text-white rounded-lg p-3 mb-3`}>
                    <i className={`${service.icono} text-xl`}></i>
                  </div>
                  <h3 className="text-sm lg:text-base font-bold text-primary">{service.titulo}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Componente banner para Elizabeth Morales Gajardo
function BannerElizabeth() {

  return (
    <div className="bg-[#f9fafb] border-b border-gray-100 py-16 px-4 mb-12">
      <div className="container mx-auto flex flex-col items-center space-between">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-center text-primary mb-4 header-font">
            Especialista en Derecho Inmobiliario
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Foto de Elizabeth - Estilo Apple */}
          <div className="flex-shrink-0">
            <div className="relative">
              <img 
                src={ElizabethImg} 
                alt="Elizabeth Morales Gajardo" 
                className="w-40 h-40 rounded-3xl object-cover"
              />
            </div>
          </div>
          
          {/* Información y descripción - Estilo minimalista */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-2xl font-bold text-primary mb-6 header-font">
              Elizabeth Morales Gajardo
            </h2>
            
            {/* Credenciales en grid minimalista */}
            <div className="grid grid-cols-2 gap-4 mb-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Contadora General</p>
                <div className="w-8 h-0.5 bg-primary mx-auto lg:mx-0"></div>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Especialista Laboral</p>
                <div className="w-8 h-0.5 bg-primary mx-auto lg:mx-0"></div>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Especialista Tributaria</p>
                <div className="w-8 h-0.5 bg-primary mx-auto lg:mx-0"></div>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Habilitada en Derecho</p>
                <div className="w-8 h-0.5 bg-primary mx-auto lg:mx-0"></div>
              </div>
            </div>
            
            <p className="mb-8 leading-relaxed max-w-lg lg:mx-0">
              Especialista en el ámbito inmobiliario con amplia experiencia 
              en asesoría contable, tributaria y legal para el sector inmobiliario.
            </p>
            
            {/* botón de whatsapp */}
            <a
              href="https://wa.me/56974793920?text=Hola%2C%20mi%20consulta%20es..."
              target="_blank"
              rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded"
            >
              <i className="fab fa-whatsapp text-2xl"></i>
              <span>
                +56 9 7479 3920
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Legales() {
  return (
  <div className='Legales animate-fade-in'>
      <Servicios
  serviceName="Legales"
        servicesData={servicesData}
      />
    </div>
  );
}

export function Contabilidad() {
  return (
    <div className='Contabilidad animate-fade-in'>
      <Servicios
        serviceName="Contabilidad"
        servicesData={servicesData}
      />
    </div>
  );
}

export function DerechoInmobiliario() {
  return (
    <div className='DerechoInmobiliario animate-fade-in'>
      <BannerElizabeth />
      <Servicios
        serviceName="derecho_inmobiliario"
        servicesData={servicesData}
      />
    </div>
  );
}