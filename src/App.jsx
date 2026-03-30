import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function ScrollReset() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

import Navbar from './components/Navbar'
import BackgroundDecor from './components/BackgroundDecor'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookieBanner from './components/CookieBanner'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <div className="relative min-h-screen bg-white">
      <BackgroundDecor />
      <ScrollReset />
      <Navbar />
      <CookieBanner />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-meni" element={<About />} />
        <Route path="/projekti" element={<Projects />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  )
}
