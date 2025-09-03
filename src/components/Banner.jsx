export function Inicio() {
  return (
    <section 
      id="Inicio" 
      className="hero-bg bg-primary text-white min-h-screen flex flex-col items-center justify-center px-4 pb-10"
    >
      {/* Encabezado */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold header-font mb-6 pt-40">
          Consultores Hernández & Asociados
        </h1>
        <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
        <h2 className="text-2xl md:text-3xl font-semibold">
          Bufete de Abogados y Contadores
        </h2>
      </div>

      {/* Años de servicio */}
      <div className="text-center max-w-2xl mb-10 px-2">
        <p className="text-lg md:text-xl">
          Con{" "}
          <span className="relative inline-block px-3">
            <span className="absolute inset-0 -skew-y-3 bg-accent/80"></span>
            <span className="relative text-white font-bold">
              +35 AÑOS
            </span>
          </span>{" "}
          de experiencia escuchando, asesorando y acompañando en cada caso.
        </p>
      </div>

      {/* Especialidades */}
      <div className="text-center max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Áreas de Especialización
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <li>Auditoría</li>
          <li>Derecho Familiar</li>
          <li>Derecho Laboral</li>
          <li>Derecho Penal</li>
          <li>Derecho Tributario</li>
          <li>Defensa ante el SII</li>
          <li>Asesoría Financiera y Jurídica</li>
          <li>Declaraciones Tributarias</li>
          <li>Derecho Comercial y Civil</li>
          <li>Trámites Inmobiliarios Tributarios</li>
          <li>Servicios ante Tesorería General</li>
          <li></li>
        </ul>
      </div>
    </section>
  )
}

export function InicioLocal() {
  return (
    <section id="InicioLocal" >
      <div className="hero-bg-local bg-primary text-white py-60 px-4">
        <div className="container mx-auto text-center">
          <q className="text-3xl md:text-5xl font-bold header-font mb-7 italic">Luchando contra molinos de viento</q>
          <div className="w-24 h-1 bg-accent mx-auto my-6"></div>
          <h2 className="text-2xl md:text-3xl header-font mb-7">El ingenioso hidalgo don Quijote de la Mancha</h2>
          
          {/* <p className="max-w-3xl mx-auto text-lg">Bufet de Abogados</p> */}
        </div>
      </div>
    </section>
  )
}

export function BannerTeam() {
  return (
    <section id="BannerTeam" className="bg-secondary text-white py-40 px-4 bg-diagonal">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold header-font mb-4">Nuestro Equipo</h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
      </div>
    </section>
  )
}

export function BannerLegales() {
  return (
  <section id="BannerLegales" className="bg-secondary text-white py-40 px-4 bg-diagonal">
      <div className="container mx-auto text-center">
  <h2 className="text-2xl md:text-3xl font-bold header-font mb-4">Legales</h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
      </div>
    </section>
  )
}

export function BannerContabilidad() {
  return (
    <section id="BannerContabilidad" className="bg-secondary text-white py-40 px-4 bg-diagonal">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold header-font mb-4">Contabilidad</h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
      </div>
    </section>
  )
}

export function BannerDerechoInmobiliario() {
  return (
    <section id="BannerDerechoInmobiliario" className="bg-secondary text-white py-40 px-4 bg-diagonal">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold header-font mb-4">Derecho Inmobiliario</h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
      </div>
    </section>
  )
}