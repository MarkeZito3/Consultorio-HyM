import teamData from './Team.json'

function getImage(name) {
  return `/assets/team/${name}`
}

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
                  style={{ backgroundImage: miembro.foto ? `url(${getImage(miembro.foto)})` : undefined }}
                ></div>

                {/* NUEVO: Imagen sin fondo que aparece al hacer hover */}
                {miembro.foto_bgless && (
                  <img
                    src={getImage(miembro.foto_bgless)}
                    alt={miembro.nombre}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all pointer-events-none z-5"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10 pointer-events-none"></div>
                <div className="relative z-20 w-full flex flex-col items-center justify-end h-full pb-6">
                  <div className="specialty bg-secondary text-white py-2 px-4 rounded-lg mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm">Especialidades:</p>
                    <p className="font-medium">{miembro.especialidades.join(' • ')}</p>
                  </div>
                  <h4 className="text-xl font-bold text-white drop-shadow mb-1">{miembro.nombre}</h4>
                  <p className="text-white drop-shadow mb-3 mx-6 text-xs">{miembro.rol}</p>
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
                  style={{ backgroundImage: miembro.foto ? `url(${getImage(miembro.foto)})` : undefined }}
                ></div>

                {/* NUEVO: Imagen sin fondo que aparece al hacer hover */}
                {miembro.foto_bgless && (
                  <img
                    src={getImage(miembro.foto_bgless)}
                    alt={miembro.nombre}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all pointer-events-none z-5"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10 pointer-events-none"></div>
                <div className="relative z-20 w-full flex flex-col items-center justify-end h-full pb-6">
                  <div className="specialty bg-secondary text-white py-2 px-4 rounded-lg mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm">Especialidades:</p>
                    <p className="font-medium">{miembro.especialidades.join(' • ')}</p>
                  </div>
                  <h4 className="text-xl font-bold text-white drop-shadow mb-1">{miembro.nombre}</h4>
                  <p className="text-white drop-shadow mb-3 mx-6 text-xs">{miembro.rol}</p>
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
              <div
                key={miembro.nombre + idx}
                className="team-member rounded-xl overflow-hidden shadow-md relative group min-h-[450px] flex items-center justify-center"
                style={{ background: 'linear-gradient(#6B4D3633, #41342B)' }}
              >
                <div
                  className="absolute inset-0 bg-center bg-cover group-hover:opacity-60 transition-opacity duration-300"
                  style={{ backgroundImage: `url(${getImage(miembro.foto)})` }}
                ></div>

                {/* Imagen sin fondo que aparece al hacer hover */}
                {miembro.foto_bgless && (
                  <img
                    src={getImage(miembro.foto_bgless)}
                    alt={miembro.nombre}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all pointer-events-none z-5"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10 pointer-events-none"></div>
                <div className="relative z-20 w-full flex flex-col items-center justify-end h-full pb-6">
                  <div className="specialty bg-secondary text-white py-2 px-4 rounded-lg mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm">Especialidades:</p>
                    <p className="font-medium">{miembro.especialidades.join(' • ')}</p>
                  </div>
                  <h4 className="text-xl font-bold text-white drop-shadow mb-1">{miembro.nombre}</h4>
                  <p className="text-white drop-shadow mb-3 mx-6 text-xs">{miembro.rol}</p>
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