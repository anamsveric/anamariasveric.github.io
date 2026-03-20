import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Hobbies from './pages/Hobbies'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookieBanner from './components/CookieBanner'
import { LanguageProvider } from './context/LanguageContext'

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <CookieBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projekti" element={<Projects />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/hobiji" element={import.meta.env.DEV ? <Hobbies /> : <Navigate to="/" replace />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </LanguageProvider>
  )
}
