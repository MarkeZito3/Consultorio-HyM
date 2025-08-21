import React, { useState } from 'react';
import servicesData from './Services.json';

function Servicios({ serviceName, servicesData, handleServiceClick, selectedService, setSelectedService }) {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-primary mb-4 header-font">Servicios</h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
        {/* Grid de servicios */}
        <div className="">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {(servicesData[serviceName] || []).map((service) => (
              <div
                key={service.id + serviceName}
                onClick={() => handleServiceClick({ ...service, area: serviceName })}
                className={`practice-area bg-white p-4 rounded-xl shadow-md border-l-4 border-secondary cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                  selectedService?.id === service.id && selectedService?.area === serviceName ? 'ring-2 ring-accent' : ''
                }`}
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
      {/* Panel de descripción flotante */}
      {selectedService && setSelectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 animate-fade-in">
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-accent max-w-md w-full relative animate-fade-in">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-2 right-2 text-accent hover:text-primary font-bold text-xl"
              aria-label="Cerrar"
            >
              ×
            </button>
            <div className="flex items-center mb-4">
              <div className={`${selectedService.color} text-white rounded-lg p-3 mr-4`}>
                <i className={`${selectedService.icono} text-xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-primary">{selectedService.titulo}</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">{selectedService.descripcion}</p>
          </div>
        </div>
      )}
    </section>
  )
} 

export function Leyes() {
  const [selectedService, setSelectedService] = useState(null);
  const handleServiceClick = (service) => {
    setSelectedService(selectedService?.id === service.id ? null : service);
  };
  return (
    <div className='Leyes animate-fade-in'>
      <Servicios
        serviceName="Leyes"
        servicesData={servicesData}
        handleServiceClick={handleServiceClick}
        selectedService={selectedService}
        setSelectedService={setSelectedService}
      />
    </div>
  );
}

export function Contabilidad() {
  const [selectedService, setSelectedService] = useState(null);
  const handleServiceClick = (service) => {
    setSelectedService(selectedService?.id === service.id ? null : service);
  };
  return (
    <div className='Contabilidad animate-fade-in'>
      <Servicios
        serviceName="Contable"
        servicesData={servicesData}
        handleServiceClick={handleServiceClick}
        selectedService={selectedService}
        setSelectedService={setSelectedService}
      />
    </div>
  );
}

export function DerechoInmobiliario() {
  const [selectedService, setSelectedService] = useState(null);
  const handleServiceClick = (service) => {
    setSelectedService(selectedService?.id === service.id ? null : service);
  };
  return (
    <div className='DerechoInmobiliario animate-fade-in'>
      <Servicios
        serviceName="DerechoInmobiliaria"
        servicesData={servicesData}
        handleServiceClick={handleServiceClick}
        selectedService={selectedService}
        setSelectedService={setSelectedService}
      />
    </div>
  );
}