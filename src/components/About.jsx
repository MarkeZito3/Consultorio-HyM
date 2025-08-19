import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center py-16 px-4">
          <div id='SobreNosotros' className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h2 className="text-3xl font-bold text-primary mb-4 header-font">Sobre Nosotros</h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem dolore expedita voluptates dicta quaerat nobis numquam, placeat, doloribus et quasi unde aliquam tenetur minima eius eligendi impedit repellat consequuntur.
            </p>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem dolore expedita voluptates dicta quaerat nobis numquam, placeat, doloribus et quasi unde aliquam tenetur minima eius eligendi impedit repellat consequuntur.
            </p>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quidem dolore expedita voluptates dicta quaerat nobis numquam, placeat, doloribus et quasi unde aliquam tenetur minima eius eligendi impedit repellat consequuntur.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="bg-secondary rounded-lg w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48 md:w-64 md:h-64">
                  <div className='transition-transform duration-300 ease-out hover:-translate-y-3'>
                    <img className="w-full h-full object-cover rounded-xl" src="https://png.pngtree.com/png-clipart/20241012/original/pngtree-free-lawyer-cliparts-png-image_16288657.png" alt="Sobre Nosotros" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-white py-2 px-6 rounded-lg shadow-lg">
                <span className="font-bold">+25 años</span> de experiencia
              </div>
            </div>
          </div>
        </div>
        {/* --- Servicios (PracticeAreas) --- */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-primary mb-4 header-font">Servicios</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Área 1 */}
              <Link to={"/leyes"} className="practice-area bg-white p-6 rounded-xl shadow-md border-l-4 border-secondary">
                <div className="flex items-start mb-4">
                  <div className="bg-primary text-white rounded-lg p-3 mr-4">
                    <i className="fas fa-balance-scale text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-primary">Leyes</h3>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur accusantium beatae neque fuga sint. Sed consequatur atque dignissimos voluptatem ex, ullam voluptates minima earum impedit cupiditate excepturi neque unde eligendi quae modi. Ea nisi quae facere hic consequatur cupiditate earum?</p>
              </Link>
              {/* Área 2 */}
              <Link to={"/contabilidad"} className="practice-area bg-white p-6 rounded-xl shadow-md border-l-4 border-secondary">
                <div className="flex items-start mb-4">
                  <div className="bg-secondary text-white rounded-lg p-3 mr-4">
                    <i className="fas fa-file-invoice-dollar text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-primary">Contabilidad</h3>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur accusantium beatae neque fuga sint. Sed consequatur atque dignissimos voluptatem ex, ullam voluptates minima earum impedit cupiditate excepturi neque unde eligendi quae modi. Ea nisi quae facere hic consequatur cupiditate earum?</p>
              </Link>
              {/* Área 3 */}
              <Link to={"/derecho_inmobiliario"} className="practice-area bg-white p-6 rounded-xl shadow-md border-l-4 border-secondary">
                <div className="flex items-start mb-4">
                  <div className="bg-secondary text-white rounded-lg p-3 mr-4">
                    <i className="fas fa-house text-xl"></i>
                  </div>
                  <h3 className="text-xl font-bold text-primary">Derecho Inmobiliario</h3>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur accusantium beatae neque fuga sint. Sed consequatur atque dignissimos voluptatem ex, ullam voluptates minima earum impedit cupiditate excepturi neque unde eligendi quae modi. Ea nisi quae facere hic consequatur cupiditate earum?</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default About
