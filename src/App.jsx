import React from 'react'
import Header from './components/Header'
import Inicio from './components/Inicio'
import InicioLocal from './components/InicioLocal'
import About from './components/About'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Leyes, Contabilidad } from './components/Services-pages'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Inicio/>
            <About />
            <InicioLocal/>
            <Contact />
          </>
        } />
        <Route path="/equipo" element={<Team />} />
        <Route path="/leyes" element={
          <>
            <Leyes />
          </>
        } />
        <Route path="/contabilidad" element={<div className='Contabilidad'><h2 className="text-3xl font-bold text-primary mb-4 header-font">Contabilidad</h2><p>Contenido de Contabilidad...</p></div>} />
        <Route path="/derecho_inmobiliario" element={<div className='DerechoInmobiliario'><h2 className="text-3xl font-bold text-primary mb-4 header-font">Derecho Inmobiliario</h2><p>Contenido de Derecho Inmobiliario...</p></div>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
