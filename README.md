# Tech-talent.nu

Landingspagina voor [tech-talent.nu](https://tech-talent.nu), het vacatureplatform voor de Kop van Noord-Holland en omstreken. Dit is fase 1: een teaser tot de opening op **26 november 2026, 09:00 uur** (Nederlandse tijd).

## Techniek

- [Next.js](https://nextjs.org) (App Router) op [Vercel](https://vercel.com)
- TypeScript, React en Tailwind CSS
- Geen database. Fase 1 bewaart niets; MongoDB is pas nodig als er accounts, vacatures of inschrijvingen bij komen.

## Lokaal

```bash
npm install
npm run dev
```

De pagina staat daarna op [http://localhost:3000](http://localhost:3000).

```bash
npm test
npm run lint
npm run build
```

## Live zetten op Vercel

De code staat in `bothedevelopersagency/tech-talent`.

1. Importeer die repository in Vercel. `vercel.json` zet het framework op Next.js. Dat is nodig omdat het project is aangemaakt toen de repository nog leeg was; zonder die instelling serveert Vercel alleen `public/` en geeft elke url een 404.
2. Koppel het domein `tech-talent.nu` in het Vercel-project.
3. Zet de DNS van het domein naar Vercel.
4. Zet vóór 26 november 2026 de omgevingsvariabele `LAUNCH_REDIRECT_URL` op het adres van de server die daarna het platform draait, bijvoorbeeld `https://app.tech-talent.nu`.

Na dat tijdstip stuurt de site elk bezoek door naar dat adres (HTTP 307). Zonder die variabele blijft de landingspagina staan en meldt de klok dat het platform geopend is.

De knoppen voor werkgevers en professionals gebruiken `NEXT_PUBLIC_EMPLOYER_URL` en `NEXT_PUBLIC_CANDIDATE_URL`. Zolang die leeg zijn, verwijzen de knoppen naar de aftelklok. Een wijziging van een `NEXT_PUBLIC_`-variabele vraagt een nieuwe deploy.

Om de landingspagina ná de opening nog te bekijken: open `/?preview=landing`. Dat zet een cookie voor veertien dagen en slaat de doorverwijzing over.

## Inhoud

De tekst, het logo, de twee foto’s en de logo’s van Olof Schuur, Luitjes Elektrotechniek en Damen Shiprepair komen uit de aangeleverde ontwerpen.
