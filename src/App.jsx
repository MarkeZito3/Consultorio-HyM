import React from 'react'
import Header from './components/Header'
import { Inicio, BannerTeam, BannerLeyes, InicioLocal, BannerDerechoInmobiliario, BannerContabilidad } from './components/Banner'
import About from './components/About'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Leyes, Contabilidad, DerechoInmobiliario, Ejemplo } from './components/Services-pages'
import ServicioDetalle from './components/ServicioDetalle';

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
        <Route path="/equipo" element={
          <>
            <BannerTeam />
            <Team />
          </>
        } />
        {/* Leyes y detalle */}
        <Route path="/leyes" element={
          <>
            <BannerLeyes />
            <Leyes />
          </>
        } />
        <Route path="/leyes/:servicioRuta" element={
          <>
            <BannerLeyes />
            <ServicioDetalle area="Leyes" />
          </>
        } />
        {/* Contabilidad y detalle */}
        <Route path="/Contabilidad" element={
          <>
            <BannerContabilidad />
            <Contabilidad />
          </>
        } />
        <Route path="/Contabilidad/:servicioRuta" element={
          <>
            <BannerContabilidad />
            <ServicioDetalle area="Contabilidad" />
          </>
        } />
        {/* Derecho Inmobiliario y detalle */}
        <Route path="/derecho_inmobiliario" element={
          <>
            <BannerDerechoInmobiliario />
            <DerechoInmobiliario />
          </>
        } />
        <Route path="/derecho_inmobiliario/:servicioRuta" element={
          <>
            <BannerDerechoInmobiliario />
            <ServicioDetalle area="derecho_inmobiliario" />
          </>
        } />
        {/* Ejemplo y detalle */}
        <Route path="/ejemplo" element={
          <>
            <BannerContabilidad />
            <Ejemplo />
          </>
        } />
        <Route path="/ejemplo/:servicioRuta" element={
          <>
            <BannerContabilidad />
            <ServicioDetalle area="Ejemplo" />
          </>
        } />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
