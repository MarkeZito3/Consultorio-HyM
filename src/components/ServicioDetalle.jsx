import React from 'react';
import { useParams } from 'react-router-dom';
import servicesData from './Services.json';

function getServiceByRoute(area, ruta) {
  const areaData = servicesData[area] || [];
  return areaData.find(service => service.ruta === ruta);
}

export default function ServicioDetalle({ area }) {
  const { servicioRuta } = useParams();
  const service = getServiceByRoute(area, servicioRuta);

  if (!service) {
    return <div className="p-8 text-center text-red-600">Servicio no encontrado.</div>;
  }

  return (
    <section className="py-16 px-4 animate-fade-in">
      <div className="container mx-auto max-w-lg bg-white rounded-xl shadow-lg p-8 border-l-4 border-accent">
        <div className="flex items-center mb-4">
          <div className={`${service.color} text-white rounded-lg p-3 mr-4`}>
            <i className={`${service.icono} text-xl`}></i>
          </div>
          <h2 className="text-2xl font-bold text-primary">{service.titulo}</h2>
        </div>
        <p className="text-gray-700 leading-relaxed">{service.descripcion}</p>
      </div>
    </section>
  );
}
