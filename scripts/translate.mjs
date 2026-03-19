// Pokreni: npm run translate
// Čita HR prijevode iz src/translations.json i automatski prevodi na EN, DE, IT
// Koristi Google Translate (besplatno, bez API ključa)

import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const translationsPath = join(__dirname, '../src/translations.json')

async function translate(text, targetLang) {
  if (!text || text.trim() === '') return text
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=hr&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`
  const res = await fetch(url)
  const data = await res.json()
  return data[0].map(item => item?.[0] ?? '').join('')
}

async function translateObject(obj, targetLang) {
  const result = {}
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      result[key] = await translate(value, targetLang)
      await new Promise(r => setTimeout(r, 100)) // pauza između zahtjeva
    } else if (typeof value === 'object' && value !== null) {
      result[key] = await translateObject(value, targetLang)
    } else {
      result[key] = value
    }
  }
  return result
}

const data = JSON.parse(readFileSync(translationsPath, 'utf8'))
const hr = data.HR

const langs = [
  { code: 'en', key: 'EN' },
  { code: 'de', key: 'DE' },
  { code: 'it', key: 'IT' },
]

for (const { code, key } of langs) {
  console.log(`\nPrevodim HR → ${key}...`)
  data[key] = await translateObject(hr, code)
}

writeFileSync(translationsPath, JSON.stringify(data, null, 2), 'utf8')
console.log('\n✓ Gotovo! src/translations.json je ažuriran.')
