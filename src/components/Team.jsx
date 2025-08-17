import React from 'react'
import teamData from './Team.json'

function Team() {
  return (
    <section className="py-16 bg-light px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-primary mb-4 header-font">Nuestro Equipo</h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>

        {/* Área Legal */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-secondary mb-6 flex items-center">
            <i className="fas fa-gavel mr-3"></i> Área Legal
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamData["Area Legal"].map((miembro, idx) => (
              <div key={miembro.nombre + idx} className="team-member bg-white rounded-xl overflow-hidden shadow-md">
                <div className="p-6 text-center">
                  <div className="mx-auto mb-4 team-img rounded-full w-32 h-32 flex items-center justify-center overflow-hidden bg-gray-100">
                    <img src={miembro.foto} alt={miembro.nombre} className="object-cover w-full h-full" />
                  </div>
                  <h4 className="text-xl font-bold text-primary">{miembro.nombre}</h4>
                  <p className="text-gray-600 mb-3">{miembro.rol}</p>
                  <div className="specialty bg-secondary text-white py-2 px-4 rounded-lg mt-3">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamData["Area Contable"].map((miembro, idx) => (
              <div key={miembro.nombre + idx} className="team-member bg-white rounded-xl overflow-hidden shadow-md">
                <div className="p-6 text-center">
                  <div className="mx-auto mb-4 team-img rounded-full w-32 h-32 flex items-center justify-center overflow-hidden bg-gray-100">
                    <img src={miembro.foto} alt={miembro.nombre} className="object-cover w-full h-full" />
                  </div>
                  <h4 className="text-xl font-bold text-primary">{miembro.nombre}</h4>
                  <p className="text-gray-600 mb-3">{miembro.rol}</p>
                  <div className="specialty bg-secondary text-white py-2 px-4 rounded-lg mt-3">
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
          <div className="flex justify-center">
            {teamData["Area Derecho Inmobiliario"].map((miembro, idx) => (
              <div key={miembro.nombre + idx} className="team-member bg-white rounded-xl overflow-hidden shadow-md max-w-md w-full">
                <div className="p-6 text-center">
                  <div className="mx-auto mb-4 team-img rounded-full w-32 h-32 flex items-center justify-center overflow-hidden bg-gray-100">
                    <img src={miembro.foto} alt={miembro.nombre} className="object-cover w-full h-full" />
                  </div>
                  <h4 className="text-xl font-bold text-primary">{miembro.nombre}</h4>
                  <p className="text-gray-600 mb-3">{miembro.rol}</p>
                  <div className="specialty bg-secondary text-white py-2 px-4 rounded-lg mt-3">
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
