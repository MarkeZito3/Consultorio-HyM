import React from 'react'

function Footer() {
  return (
    <footer className="bg-dark text-white py-8 px-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-white text-primary rounded-full w-10 h-10 flex items-center justify-center mr-3">
            <i className="fas fa-balance-scale"></i>
          </div>
          <h3 className="text-xl font-bold header-font">H&M Consultoría Jurídica</h3>
        </div>
        <p className="mb-4">© 2025 H&M Consultoría Jurídica – Hernández y  Asociados. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
