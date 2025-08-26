import React from 'react';
import { useParams } from 'react-router-dom';
import servicesData from './Services.json';
import jurisprudenciasData from './Jurisprudencias.json';

function getServiceByRoute(area, ruta) {
  const areaData = servicesData[area] || [];
  return areaData.find(service => service.ruta === ruta);
}

function getImage(name) {
  return `/src/assets/services/${name}`
}

function jurisprudencias( service ){
  
  let toasLasJurisprudencias = jurisprudenciasData["jurisprudencias"]
  for (let i = 0; i < toasLasJurisprudencias.length; i++) {
    if ( toasLasJurisprudencias[i].idServicio === service.id ) {
      console.log(toasLasJurisprudencias[i].id_ley);
    }
  }
  return 0;
}

export default function ServicioDetalle({ area }) {
  const { servicioRuta } = useParams();
  const service = getServiceByRoute(area, servicioRuta);

  if (!service) {
    return <div className="p-8 text-center text-red-600">Servicio no encontrado.</div>;
  }

  return (
    <>
      <section className="py-8 px-2 animate-fade-in">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="description w-full md:w-2/3 md:pr-10 mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <div className={`${service.color} text-white rounded-lg p-3 mr-4`}>
                <i className={`${service.icono} text-xl`}></i>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-primary">{service.titulo}</h1>
            </div>
            <p className="text-base md:text-lg leading-relaxed">{service.descripcion}</p>
          </div>
          {service.foto && service.foto !== "" && (
            <div className="photo w-full md:w-1/3 flex justify-center">
              <img 
                src={getImage(service.foto)} 
                alt={service.titulo} 
                className="max-w-[820px] w-full h-auto rounded-xl shadow-md object-cover"
              />
            </div>
          )}
        </div>
      </section>
      {area === "Legales" && (
        <section className="py-8 px-2 animate-fade-in">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 header-font">Jurisprudencias Relacionadas</h2>
            <div className="w-24 h-1 bg-accent mb-6"></div>
            <ul className="list-disc list-inside">
              {/* agregar jurisprudencias xd */}
              
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
