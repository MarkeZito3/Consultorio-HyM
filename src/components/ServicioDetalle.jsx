import React from 'react';
import { useParams } from 'react-router-dom';
import servicesData from './Services.json';
import { Link } from 'react-router-dom'
import jurisprudenciasData from './Jurisprudencias.json';
// import { despido_injustificado_municipalidad_san_javier } from './Jurisprudencias.jsx';

function getServiceByRoute(area, ruta) {
  // Busca el servicio en el área correspondiente
  const areaData = servicesData[area] || [];
  return areaData.find(service => service.ruta === ruta);
}

function getJuriById(id_ley) {
  // Devuelve todas las jurisprudencias que tengan la misma id_ley
  const areaData = jurisprudenciasData["jurisprudencias"] || [];
  return areaData.filter(j => j.id_ley === id_ley);
}

function getPagesCasesById(id_ley) {
  // Retorna un jsx de todos los casos de jurisprudencias que tenga 

}

function getImage(name) {
  return `/src/assets/services/${name}`
}
function getImageJuri(name) {
  return `/src/assets/${name}`
}

export default function ServicioDetalle({ area }) {
  const { servicioRuta } = useParams();
  const service = getServiceByRoute(area, servicioRuta);
  const juri = getJuriById(service ? service.id : null);

  if (!service) {
    return <div className="p-8 text-center text-red-600">Servicio no encontrado.</div>;
  }

  // Filtrar jurisprudencias relacionadas si corresponde
  let jurisprudenciasRelacionadas = [];
  if (area === "Legales" && service.id) {
    const jurisprudencia = (jurisprudenciasData["jurisprudencias"] || []).find(j => j.id_ley === service.id);
    if (jurisprudencia && jurisprudencia.casos && jurisprudencia.casos.length > 0) {
      jurisprudenciasRelacionadas = jurisprudencia.casos;
    }
  }

  return (
    <>
      <section className="py-8 px-2 animate-fade-in">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className={`description w-full md:pr-10 mb-6 md:mb-0${service.foto && service.foto !== '' ? ' md:w-2/3' : ''}`}>
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
      {area === "Legales" && Array.isArray(juri) && juri.length > 0 && juri.some(j => j.casos && j.casos.length > 0) ? (
        <section className="py-8 px-2 animate-fade-in">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 header-font">Jurisprudencias Relacionadas</h2>
            <div className="w-24 h-1 bg-accent mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {juri.flatMap((jur, jIdx) =>
                (jur.casos || []).map((caso, idx) => (
                  <Link 
                    key={caso.url || `${jIdx}-${idx}`}
                    to={`${window.location.pathname}/${caso.url}`}
                    className="practice-area bg-primary text-white rounded-lg shadow-md p-8 text-lg"
                    onClick={() => {window.scrollTo(0, 0);}}
                  >
                    <img
                      src={getImageJuri(caso.foto)}
                      alt={caso.titulo}
                    />
                    <h2 className='font-semibold'>{caso.titulo}</h2>
                  </Link>
                ))
              )}
            </div>
          </div>
        </section>
      ) : <div></div>}
    </>
  );
}
