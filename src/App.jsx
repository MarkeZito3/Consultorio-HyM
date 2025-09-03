import React from 'react'
import Header from './components/Header'
import { Inicio, BannerTeam, BannerLegales, InicioLocal, BannerDerechoInmobiliario, BannerContabilidad } from './components/Banner'
import About from './components/About'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Legales, Contabilidad, DerechoInmobiliario, Ejemplo } from './components/Services-pages'
import ServicioDetalle from './components/ServicioDetalle';
import PreguntasFrecuentes from './components/PreguntasFrecuentes'
import JurisprudenciaDetalle from './components/JurisprudenciaDetalle';
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <Router>
      <SpeedInsights />
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Inicio/>
            <About />
            <InicioLocal/>
            <PreguntasFrecuentes/>
            <Contact />
          </>
        } />
        <Route path="/equipo" element={
          <>
            <BannerTeam />
            <Team />
          </>
        } />
        {/* Legales y detalle */}
        <Route path="/legales" element={
          <>
            <BannerLegales />
            <Legales />
          </>
        } />
        <Route path="/legales/:servicioRuta" element={
          <>
            <BannerLegales />
            <ServicioDetalle area="Legales" />
          </>
        } />
        <Route path="/legales/:servicioRuta/:url" element={
          <>
            <JurisprudenciaDetalle />
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
