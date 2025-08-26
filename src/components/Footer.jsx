import React from 'react'
import logosimple from '../assets/logo-simple.svg';

function Footer() {
  return (
    <footer className="bg-dark text-white py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Contacto */}
        <div className='flex justify-start text-left flex-col items-start text-sm'>
          <h4 className="text-lg font-bold mb-2">Contacto</h4>
          <div className="mb-2">
            <i className="fas fa-map-marker-alt mr-2"></i>
            Calle Sargento Aldea 2651 A<br />San Javier, Región del Maule. Chile
          </div>
          <div className="mb-2">
            <i className="fas fa-phone-alt mr-2"></i>
            +56 9 96577506<br /><i className="fas fa-phone-alt mr-2"></i>+56 9 74793920
          </div>
          <div>
            <i className="fas fa-envelope mr-2"></i>
            willyhern@gmail.com<br /><i className="fas fa-envelope mr-2"></i>consultoreshernandezyasociados@gmail.com
          </div>
        </div>
                
        {/* Derechos */}
        <div className="flex flex-col items-center justify-center text-sm">
          <img src={logosimple} alt="Logo simple" className="w-16 h-16 mb-4 object-contain" style={{ filter: 'invert(1)' }} />
          <h3 className="text-xl font-bold header-font mb-4">Consultores Hernández & Asociados</h3>
          <p className="mb-4">© 2025 Consultores Hernández & Asociados - H&M. Todos los derechos reservados.</p>
        </div>
        
        {/* Redes Sociales */}
        <div className="flex flex-col items-center justify-center text-sm">
          <div className="flex justify-center space-x-4 mb-2">
            <a href="https://www.facebook.com/willi.a.orellana/" className="text-gray-400 hover:text-white transition" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://cl.linkedin.com/in/willi-antonio-hern%C3%A1ndez-orellana-22038448" className="text-gray-400 hover:text-white transition" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.instagram.com/willyhernandezorellana/" className="text-gray-400 hover:text-white transition" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
          <span className="text-xs text-gray-400">Síguenos en redes sociales</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
