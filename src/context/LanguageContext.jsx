import { createContext, useContext, useState } from 'react'

const translations = {
  HR: {
    nav: {
      home: 'Početna',
      projects: 'Projekti',
      contact: 'Kontakt',
      welcome: 'Dobrodošli',
    },
    hero: {
      available: 'dostupna za projekte',
      title: 'Pravo mjesto',
      title_accent: 'za izradu',
      title_end: 'weba',
      cta_contact: 'Kontaktiraj me',
      cta_projects: 'Pogledaj projekte',
      photo: 'foto',
      cv_updated: 'ažurirano',
    },
    about: {
      label: '— o meni',
      title: 'Gradim stvari koje',
      title_italic: 'zaista rade.',
      p1: 'Strastvena sam oko izrade weba — od prvih skica do objave gotovog projekta. Volim kada tehnologija i dizajn rade zajedno bez kompromisa.',
      p2: 'Fokusirana sam na moderan web razvoj, ali uvijek gledam širu sliku — korisničko iskustvo, performanse i kod koji je lako čitati i nadograđivati.',
    },
    projects: {
      label: '— moji radovi',
      title: 'Projekti',
      open: 'Otvori projekt',
      dogs_label: '— hobiji',
      dogs_title: 'Psi',
      dogs_soon: 'Stranica u izradi — uskoro dostupno.',
    },
    hobbies: {
      label: '— hobiji',
      title: 'Web',
      title_italic: 'projekti',
      coming_soon: 'Uskoro...',
    },
    contact: {
      label: '— kontakt',
      title: 'Imamo projekt?',
      title_italic: 'Pišimo se.',
      phone_label: 'Telefon',
      social_label: 'Društvene mreže',
      cv_label: 'CV',
      footer_rights: 'Sva prava pridržana.',
      footer_made: 'Napravljeno s React + Tailwind',
    },
  },
  EN: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      contact: 'Contact',
      welcome: 'Welcome',
    },
    hero: {
      available: 'available for projects',
      title: 'The right place',
      title_accent: 'to build',
      title_end: 'your website',
      cta_contact: 'Contact me',
      cta_projects: 'View projects',
      photo: 'photo',
      cv_updated: 'updated',
    },
    about: {
      label: '— about me',
      title: 'I build things that',
      title_italic: 'actually work.',
      p1: 'I am passionate about web development — from the first sketches to deploying the finished project. I love when technology and design work together without compromise.',
      p2: 'Focused on modern web development, but always looking at the bigger picture — user experience, performance, and code that is easy to read and extend.',
    },
    projects: {
      label: '— my work',
      title: 'Projects',
      open: 'Open project',
      dogs_label: '— hobbies',
      dogs_title: 'Dogs',
      dogs_soon: 'Page in progress — coming soon.',
    },
    hobbies: {
      label: '— hobbies',
      title: 'Web',
      title_italic: 'projects',
      coming_soon: 'Coming soon...',
    },
    contact: {
      label: '— contact',
      title: 'Got a project?',
      title_italic: "Let's talk.",
      phone_label: 'Phone',
      social_label: 'Social media',
      cv_label: 'CV',
      footer_rights: 'All rights reserved.',
      footer_made: 'Built with React + Tailwind',
    },
  },
  DE: {
    nav: {
      home: 'Startseite',
      projects: 'Projekte',
      contact: 'Kontakt',
      welcome: 'Willkommen',
    },
    hero: {
      available: 'verfügbar für Projekte',
      title: 'Der richtige Ort',
      title_accent: 'für Ihre',
      title_end: 'Website',
      cta_contact: 'Kontaktiere mich',
      cta_projects: 'Projekte ansehen',
      photo: 'Foto',
      cv_updated: 'aktualisiert',
    },
    about: {
      label: '— über mich',
      title: 'Ich baue Dinge, die',
      title_italic: 'wirklich funktionieren.',
      p1: 'Ich bin leidenschaftlich an der Webentwicklung — von den ersten Skizzen bis zur Bereitstellung des fertigen Projekts. Ich liebe es, wenn Technologie und Design ohne Kompromisse zusammenarbeiten.',
      p2: 'Fokussiert auf moderne Webentwicklung, aber immer mit Blick auf das große Ganze — Benutzererfahrung, Performance und Code, der leicht zu lesen und zu erweitern ist.',
    },
    projects: {
      label: '— meine Arbeiten',
      title: 'Projekte',
      open: 'Projekt öffnen',
      dogs_label: '— Hobbys',
      dogs_title: 'Hunde',
      dogs_soon: 'Seite in Bearbeitung — demnächst verfügbar.',
    },
    hobbies: {
      label: '— Hobbys',
      title: 'Web',
      title_italic: 'Projekte',
      coming_soon: 'Demnächst...',
    },
    contact: {
      label: '— Kontakt',
      title: 'Haben Sie ein Projekt?',
      title_italic: 'Schreiben Sie mir.',
      phone_label: 'Telefon',
      social_label: 'Soziale Medien',
      cv_label: 'Lebenslauf',
      footer_rights: 'Alle Rechte vorbehalten.',
      footer_made: 'Erstellt mit React + Tailwind',
    },
  },
  IT: {
    nav: {
      home: 'Home',
      projects: 'Progetti',
      contact: 'Contatto',
      welcome: 'Benvenuti',
    },
    hero: {
      available: 'disponibile per progetti',
      title: 'Il posto giusto',
      title_accent: 'per creare',
      title_end: 'il tuo sito',
      cta_contact: 'Contattami',
      cta_projects: 'Vedi progetti',
      photo: 'foto',
      cv_updated: 'aggiornato',
    },
    about: {
      label: '— su di me',
      title: 'Costruisco cose che',
      title_italic: 'funzionano davvero.',
      p1: "Sono appassionata di sviluppo web — dai primi schizzi al deployment del progetto finito. Amo quando tecnologia e design lavorano insieme senza compromessi.",
      p2: "Focalizzata sullo sviluppo web moderno, ma guardo sempre al quadro generale — esperienza utente, performance e codice facile da leggere ed estendere.",
    },
    projects: {
      label: '— i miei lavori',
      title: 'Progetti',
      open: 'Apri progetto',
      dogs_label: '— hobby',
      dogs_title: 'Cani',
      dogs_soon: 'Pagina in costruzione — disponibile a breve.',
    },
    hobbies: {
      label: '— hobby',
      title: 'Web',
      title_italic: 'progetti',
      coming_soon: 'Prossimamente...',
    },
    contact: {
      label: '— contatto',
      title: 'Hai un progetto?',
      title_italic: 'Scriviamoci.',
      phone_label: 'Telefono',
      social_label: 'Social media',
      cv_label: 'CV',
      footer_rights: 'Tutti i diritti riservati.',
      footer_made: 'Realizzato con React + Tailwind',
    },
  },
}

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
