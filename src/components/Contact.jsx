import React from 'react'

function Contact() {
  return (
    <section id='Contacto' className="py-16 bg-primary text-white px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 header-font">Contacto</h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
        
        {/* Sección de contacto eliminada, ahora en el Footer */}
        <div className="flex flex-col items-center mt-12">
          <div className="flex items-center mb-6 gap-4 flex-wrap justify-center">
            <span className="text-xl font-semibold">Contáctanos vía WhatsApp:</span>
            <a
              href="https://wa.me/56996577506?text=Hola%2C%20mi%20consulta%20es..."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center gap-2 transition"
            >
              <i className="fab fa-whatsapp text-2xl"></i>
              <span>
                +56 9 9657 7506 <span className="text-sm font-normal italic">(Willi)</span>
              </span>
            </a>
            <a
              href="https://wa.me/56974793920?text=Hola%2C%20mi%20consulta%20es..."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center gap-2 transition"
            >
              <i className="fab fa-whatsapp text-2xl"></i>
              <span>
                +56 9 7479 3920 <span className="text-sm font-normal italic">(Elizabeth)</span>
              </span>
            </a>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-center">¿Dónde Estamos?</h3>
            <p>Estamos <b>San Javier de Loncomilla</b>, ubicados a media cuadra subiendo desde la <b>Plaza de Armas</b> por la calle <b>Sargento Aldéa</b>.</p> 
            <div></div>
          </div >
          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3858.2748371277344!2d-71.73473424765531!3d-35.59296456220838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDM1JzM1LjYiUyA3McKwNDQnMDMuMSJX!5e0!3m2!1ses-419!2sus!4v1755788295862!5m2!1ses-419!2sus"
            width="100%"
            height="450"
            style={{ marginTop: "16px", border: 0, maxWidth: '600px', width: '100%' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación en Google Maps"
          ></iframe>
        </div>
        <div className="mt-12 text-center">
          <p className="text-xl mb-6">En <b>Consultores Hernández y Asociados</b> estamos para escucharte, asesorarte y acompañarte en cada paso.</p>
          <p className="text-3xl font-bold">Tu tranquilidad legal es nuestra misión.</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
