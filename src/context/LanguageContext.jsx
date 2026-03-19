import { createContext, useContext, useState } from 'react'
import translations from '../translations.json'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('HR')
  const t = translations[lang]
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
