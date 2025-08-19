import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú hamburguesa
  const [showHeader, setShowHeader] = useState(true); // Estado para mostrar/ocultar header
  const dropdownRef = useRef(null);
  const lastScrollY = useRef(0);

  // Ocultar header al hacer scroll hacia abajo, mostrar al subir (solo celular)
  useEffect(() => {
    function handleScroll() {
      if (window.innerWidth > 600) {
        setShowHeader(true);
        return;
      }
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 40) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY.current = currentScrollY;
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className={`bg-primary text-white py-2 px-4 transition-transform duration-300
        ${showHeader ? 'translate-y-0' : '-translate-y-full'}
        fixed top-0 left-0 w-full z-50`}
      style={{ willChange: 'transform' }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-1 md:mb-0 w-full md:w-auto justify-between">
          {/* logo */}
          <Link to="/" className="flex items-center" onClick={() => {window.scrollTo(0, 0);}}>
            <div className="bg-white text-primary rounded-full w-12 h-12 flex items-center justify-center mr-3">
              {/* aquí abajo va el logo real  */}
              <i className="fas fa-balance-scale text-xl"></i>
            </div>
            <h1 className="text-2xl font-bold header-font">Estudio Jurídico H&M</h1>
          </Link>
          {/* Botón hamburguesa solo en celulares */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>
        {/* Navegación */}
        <nav className={`flex-col md:flex md:flex-row flex-wrap justify-center w-full md:w-auto transition-all duration-300 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
          <Link to="/" className="mx-3 my-1 hover:text-accent transition" onClick={() => {setIsOpen(false); window.scrollTo(0, 0);}}>Inicio</Link>
          <Link to="/" className="mx-3 my-1 hover:text-accent transition" onClick={() => {
            setIsOpen(false);
            if (window.location.pathname === "/") {
              const el = document.getElementById("SobreNosotros");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }
          }}>Sobre Nosotros</Link>
          <div className="relative mx-3 my-1" ref={dropdownRef}>
            <button
              className="hover:text-accent transition cursor-pointer flex items-center focus:outline-none"
              onClick={() => setOpen((prev) => !prev)}
              aria-haspopup="true"
              aria-expanded={open}
              type="button"
            >
              Servicios <i className="fas fa-caret-down ml-1"></i>
            </button>
            <div className={`absolute left-0 mt-2 w-44 bg-white text-primary rounded shadow-lg transition-opacity z-50 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
              <Link to="/leyes" className="block px-4 py-2 hover:bg-gray-100" onClick={() => {setOpen(false); setIsOpen(false); window.scrollTo(0, 0);}}>Leyes</Link>
              <Link to="/contabilidad" className="block px-4 py-2 hover:bg-gray-100" onClick={() => {setOpen(false); setIsOpen(false); window.scrollTo(0, 0);}}>Contabilidad</Link>
              <Link to="/derecho_inmobiliario" className="block px-4 py-2 hover:bg-gray-100" onClick={() => {setOpen(false); setIsOpen(false); window.scrollTo(0, 0);}}>Derecho Inmobiliario</Link>
            </div>
          </div>
          <Link to="/equipo" className="mx-3 my-1 hover:text-accent transition" onClick={() => {setIsOpen(false); window.scrollTo(0, 0);}}>Equipo</Link>
          <Link to="/" className="mx-3 my-1 hover:text-accent transition" onClick={() => {
            setIsOpen(false);
            if (window.location.pathname === "/") {
              const el = document.getElementById("Contacto");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }
          }}>Contacto</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header