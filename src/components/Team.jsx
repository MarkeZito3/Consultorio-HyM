import React from 'react'
import teamData from './Team.json'

function Team() {
  return (
    <section className="py-16 bg-light px-4">
      <div className="container mx-auto">
        
        {/* Área Legal */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-secondary mb-6 flex items-center">
            <i className="fas fa-gavel mr-3"></i> Área Legal
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamData["Area Legal"].map((miembro, idx) => (
              <div key={miembro.nombre + idx} className="team-member rounded-xl overflow-hidden shadow-md relative group min-h-[450px] flex items-center justify-center" style={{background: 'linear-gradient(#6B4D3633, #41342B)'}}>
                <div 
                  className="absolute inset-0 bg-center bg-cover group-hover:opacity-60 transition-opacity duration-300"
                  style={{ backgroundImage: `url(${miembro.foto})` }}
                ></div>
                <div className="relative z-10 w-full text-center flex flex-col items-center justify-center h-full">
                  <h4 className="text-xl font-bold text-primary drop-shadow mb-1">{miembro.nombre}</h4>
                  <p className="text-gray-700 font-semibold drop-shadow mb-3">{miembro.rol}</p>
                  <div className="specialty bg-secondary text-white py-2 px-4 rounded-lg mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm">Especialidades:</p>
                    <p className="font-medium">{miembro.especialidades.join(' • ')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Área Contable */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-secondary mb-6 flex items-center">
            <i className="fas fa-calculator mr-3"></i> Área Contable
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamData["Area Contable"].map((miembro, idx) => (
              <div key={miembro.nombre + idx} className="team-member rounded-xl overflow-hidden shadow-md relative group min-h-[450px] flex items-center justify-center" style={{background: 'linear-gradient(#6B4D3633, #41342B)'}}>
                <div 
                  className="absolute inset-0 bg-center bg-cover group-hover:opacity-60 transition-opacity duration-300"
                  style={{ backgroundImage: `url(${miembro.foto})` }}
                ></div>
                <div className="relative z-10 w-full text-center flex flex-col items-center justify-center h-full">
                  <h4 className="text-xl font-bold text-primary drop-shadow mb-1">{miembro.nombre}</h4>
                  <p className="text-gray-700 font-semibold drop-shadow mb-3">{miembro.rol}</p>
                  <div className="specialty bg-secondary text-white py-2 px-4 rounded-lg mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm">Especialidades:</p>
                    <p className="font-medium">{miembro.especialidades.join(' • ')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Área de Derecho Inmobiliario */}
        <div>
          <h3 className="text-2xl font-semibold text-secondary mb-6 flex items-center">
            <i className="fas fa-home mr-3"></i> Área de Derecho Inmobiliario
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamData["Area Derecho Inmobiliario"].map((miembro, idx) => (
              <div key={miembro.nombre + idx} className="team-member rounded-xl overflow-hidden shadow-md max-w-md w-full relative group min-h-[460px] flex items-center justify-center" style={{background: 'linear-gradient(#6B4D3633, #41342B)'}}>
                <div 
                  className="absolute inset-0 bg-center bg-cover group-hover:opacity-60 transition-opacity duration-300"
                  style={{ backgroundImage: `url(${miembro.foto})` }}
                ></div>
                <div className="relative z-10 w-full text-center flex flex-col items-center justify-center h-full">
                  <h4 className="text-xl font-bold text-primary drop-shadow mb-1">{miembro.nombre}</h4>
                  <p className="text-gray-700 font-semibold drop-shadow mb-3">{miembro.rol}</p>
                  <div className="specialty bg-secondary text-white py-2 px-4 rounded-lg mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm">Especialidades:</p>
                    <p className="font-medium">{miembro.especialidades.join(' • ')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
