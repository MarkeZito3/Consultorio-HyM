import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import servicesData from './Services.json';

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

export function Leyes() {
  return (
    <div className='Leyes animate-fade-in'>
      <Servicios
        serviceName="Leyes"
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
      <Servicios
        serviceName="derecho_inmobiliario"
        servicesData={servicesData}
      />
    </div>
  );
}

export function Ejemplo() {
  return (
    <div className='Ejemplo animate-fade-in'>
      <Servicios
        serviceName="Ejemplo"
        servicesData={servicesData}
      />
    </div>
  );
}