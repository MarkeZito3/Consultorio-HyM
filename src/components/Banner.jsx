export function Inicio() {
  
  // const [yearsCount, yearsRef] = useCountUp(35, 1500)
  
  return (
    <section id='Inicio' className="hero-bg flex flex-col justify-evenly bg-primary text-white px-4">
      <div className="text-center pt-40 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold header-font mb-7">Consultores Hernández & Asociados</h1>
        <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
        <h2 className="text-2xl md:text-3xl font-bold header-font mb-7">Willi Hernández Orellana</h2>
        {/* <p className="max-w-3xl mx-auto text-lg">
          Auditoria, Contabilidades, Defensa en Derecho Tributario,Derecho Laboral, Derecho Penal, Derecho Familia, Derecho Comercial, Derecho Civil, Vif Asesoría Financieras, Jurídicas
          Profesionales: Contadores Generales, Contadores Auditores,Ingeniero Comercial, Abogados, Magíster en Dirección Financiera, Magíster en Derecho Tributario, Doctorando en Derecho, Magíster  en Derecho  Penal, Diplomado en  Mediación familiar, Diplomado en Derecho Penal parte General y Diplomado en Derecho Penal parte Especial, Diplomado en Litigación Penal estratégica, Diplomado en Tributario, Diplomado en Derecho Laboral, Perito tributario  de las corte de Chile,   experto en Tributación, Diplomado en Economía y Finanzas, Diplomado en Remuneraciones Laborales, profesor Universitario, diplomado en inteligencia artificial. 
        </p> */}
        <p className="max-w-3xl mx-auto text-lg">Bufet de Abogados y Contadores</p>
      </div>
      <div className='flex flex-col md:flex-row w-full mx-auto text-center pb-20'>
        <div className="anosServicios flex w-full md:w-1/3 order-1 md:order-3 justify-center md:justify-end mb-6 md:mb-0">
          <span className='text-4x1 md:text-5-1'>con 
            <span className='relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-accent/80 mx-2 px-3'>
              <span className='relative text-white dark:text-dark font-bold'>+35 AÑOS</span>
            </span>
            de servicios escuchando, asesorardo y acompañando en cada caso
          </span>
        </div>
        <h2 className='mejoresAbogados w-full md:w-1/3 text-4xl md:text-5-1 pt-20 order-2 md:order-1'>Asesórate con los mejores <b>Abogados</b> y <b>Contadores</b> en casos diversos como:</h2>
        <div className="w-full md:w-1/3 order-3 md:order-2"></div>
      </div>
      <div className="especialidades text-center  overflow-hidden relative" style={{height: '2.5rem'}}>
        <div className="marquee whitespace-nowrap inline-block" style={{animation: 'marquee 30s linear infinite'}}>
          Auditoría • Derecho Tributario, Laboral, Penal, Familiar, Comercial y Civil • Asesoría Financiera y Jurídica • Contaduría General • Declaraciones Tributarias • Defensa ante el SII • Trámites Inmobiliarios Tributarios • Servicios ante Tesorería General • 
        </div>
      </div>
    </section>
  )
}

export function InicioLocal() {
  return (
    <section id='Inicio' className="hero-bg-local bg-primary text-white py-60 px-4">
      <div className="container mx-auto text-center">
        {/* <h1 className="text-4xl md:text-5xl font-bold header-font mb-7">Consultorio Hernandes & Asociados</h1>
        <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
        <h2 className="text-2xl md:text-3xl font-bold header-font mb-7">Willi Hernández Orellana</h2> */}
        <q className="max-w-3xl mx-auto text-lg italic">
          Luchando contra molinos de viento - Don Quijote de la Mancha
        </q>
        {/* <p className="max-w-3xl mx-auto text-lg">Bufet de Abogados</p> */}
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

export function BannerLeyes() {
  return (
    <section id="BannerLeyes" className="bg-secondary text-white py-40 px-4 bg-diagonal">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold header-font mb-4">Leyes</h2>
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