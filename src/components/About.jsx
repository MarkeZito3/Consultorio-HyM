import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import servicesData from './Services.json'

function About() {
  const [selectedService, setSelectedService] = useState(null)

  // Ordenar las áreas como pide el usuario
  const areaOrder = ["Leyes", "Contable", "DerechoInmobiliaria"];
  const allServices = areaOrder.flatMap(area =>
    (servicesData[area] || []).map(service => ({ ...service, area }))
  );

  const handleServiceClick = (service) => {
    setSelectedService(selectedService?.id === service.id ? null : service)
  }

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center py-16 px-4">
          <div id='SobreNosotros' className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h2 className="text-3xl font-bold text-primary mb-4 header-font">Sobre Nosotros</h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem dolore expedita voluptates dicta quaerat nobis numquam, placeat, doloribus et quasi unde aliquam tenetur minima eius eligendi impedit repellat consequuntur.
            </p>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem dolore expedita voluptates dicta quaerat nobis numquam, placeat, doloribus et quasi unde aliquam tenetur minima eius eligendi impedit repellat consequuntur.
            </p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem dolore expedita voluptates dicta quaerat nobis numquam, placeat, doloribus et quasi unde aliquam tenetur minima eius eligendi impedit repellat consequuntur.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Círculo para Willi Hernández Orellana */}
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-secondary shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img 
                    className="w-full h-full object-cover" 
                    src="" 
                    alt="Willi Hernández Orellana" 
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-accent text-white py-2 px-4 rounded-lg shadow-lg text-sm font-semibold">
                  Willi Hernández Orellana
                </div>
              </div>
              
              {/* Círculo para Elizabeth Morales */}
              <div className="relative">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-secondary shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://via.placeholder.com/300x300/E24A90/FFFFFF?text=Elizabeth+Morales" 
                    alt="Elizabeth Morales" 
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-accent text-white py-2 px-4 rounded-lg shadow-lg text-sm font-semibold">
                  Elizabeth Morales
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
            <div className="">
              <h3 className="text-2xl font-bold text-primary mb-4 header-font">Leyes</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {(servicesData["Leyes"] || []).map((service) => (
                  <div
                    key={service.id + "Leyes"}
                    onClick={() => handleServiceClick({ ...service, area: "Leyes" })}
                    className={`practice-area bg-white p-4 rounded-xl shadow-md border-l-4 border-secondary cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                      selectedService?.id === service.id && selectedService?.area === "Leyes" ? 'ring-2 ring-accent' : ''
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
              <h3 className="text-2xl font-bold text-primary mb-4 header-font">Contabilidad</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {(servicesData["Contable"] || []).map((service) => (
                  <div
                    key={service.id + "Contable"}
                    onClick={() => handleServiceClick({ ...service, area: "Contable" })}
                    className={`practice-area bg-white p-4 rounded-xl shadow-md border-l-4 border-secondary cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                      selectedService?.id === service.id && selectedService?.area === "Contable" ? 'ring-2 ring-accent' : ''
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
              <h3 className="text-2xl font-bold text-primary mb-4 header-font">Derecho Inmobiliario</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {(servicesData["DerechoInmobiliaria"] || []).map((service) => (
                  <div
                    key={service.id + "DerechoInmobiliaria"}
                    onClick={() => handleServiceClick({ ...service, area: "DerechoInmobiliaria" })}
                    className={`practice-area bg-white p-4 rounded-xl shadow-md border-l-4 border-secondary cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                      selectedService?.id === service.id && selectedService?.area === "DerechoInmobiliaria" ? 'ring-2 ring-accent' : ''
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
            {/* Panel de descripción eliminado de aquí */}
          </div>
        </section>
        {/* Panel de descripción flotante */}
        {selectedService && (
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
      </div>
    </section>
  )
}

export default About
