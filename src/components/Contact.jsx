import React from 'react'

function Contact() {
  return (
    <section id='Contacto' className="py-16 bg-primary text-white px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 header-font">Contacto</h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="contact-card bg-secondary rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Dirección</h3>
            <p>Calle Sargento Aldea 2651 A</p>
            <p>San Javier, Región del Maule. Chile</p>
          </div>
          
          <div className="contact-card bg-secondary rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Teléfonos</h3>
            <p>+56 9 96577506</p>
            <p>+56 9 74793920</p>
          </div>
          
          <div className="contact-card bg-secondary rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">
              <i className="fas fa-envelope"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Correos</h3>
            <p>willyhern@gmail.com</p>
            <p>@gmail.com</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-xl mb-6">En H&M Consultoría Jurídica estamos para escucharte, asesorarte y acompañarte en cada paso.</p>
          <p className="text-2xl font-bold">Tu tranquilidad legal es nuestra misión.</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
