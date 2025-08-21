import React from 'react'
import Header from './components/Header'
import { Inicio, BannerTeam, BannerLeyes, InicioLocal, BannerDerechoInmobiliario, BannerContabilidad } from './components/Banner'
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
        <Route path="/equipo" element={
          <>
            <BannerTeam />
            <Team />
          </>
        } />
        <Route path="/leyes" element={
          <>
            <BannerLeyes />
            <Leyes />
          </>
        } />
        <Route path="/contabilidad" element={
          <>
            <BannerContabilidad />
          </>
        } />
        <Route path="/derecho_inmobiliario" element=
        {
          <>
            <BannerDerechoInmobiliario />
          </>
        } />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
