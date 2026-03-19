# My Portfolio

Biografska web stranica napravljena s React + Tailwind CSS + Vite.

## Pokretanje projekta

```bash
# 1. Instaliraj pakete
npm install

# 2. Pokreni dev server
npm run dev
```

Stranica će biti dostupna na: http://localhost:5173

## Što gdje mijenjati

### Početna stranica (`src/pages/Home.jsx`)
- **Ime** — promijeni `Ime Prezime` na svoje ime
- **Inicijali** — promijeni `IP` na svoje inicijale (Navbar + placeholder slika)
- **Opis** — uredi paragrafe u Hero i "O meni" sekciji
- **Statistike** — promijeni brojeve i opise (3+, 20+...)
- **Email** — zamijeni `ime@email.com` s pravim mailom
- **Telefon** — zamijeni `+385 91 123 4567` s pravim brojem
- **Slika** — u Hero sekciji postoji `<div>` s inicijalima — zamijeni s `<img src="..." />` svojom slikom

### Tech stack tagovi
U sekciji "O meni" ima niz:
```js
['React', 'Node.js', 'JavaScript', 'Tailwind CSS', 'Git']
```
Dodaj/ukloni tehnologije po potrebi.

### Boje (`tailwind.config.js`)
```js
colors: {
  cream: '#F5F0E8',   // pozadina
  ink: '#1A1A1A',     // tekst
  accent: '#C84B31',  // crvena naglasna boja
  muted: '#8A8070',   // sivi tekst
  surface: '#EDEAD8', // sekundarna pozadina
}
```

### Projekti (`src/pages/Projekti.jsx`)
Dodaj projekt u niz `projekti`:
```js
{
  id: 4,
  naziv: 'Naziv projekta',
  opis: 'Kratki opis...',
  url: 'https://link-do-projekta.com',
  tag: 'React',
}
```
Svaki blok se otvara u novom tabu (`target="_blank"`).

## Build za produkciju

```bash
npm run build
```

Generirani fajlovi su u `/dist` folderu — to uploadaš na hosting.
