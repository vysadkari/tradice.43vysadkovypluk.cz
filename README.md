Zdrojové kódy pro web [Tradice výsadkářů](https://tradice.43vysadkovypluk.cz/). Kód je psaný v [Next.js](https://nextjs.org/) a TypeScriptu, pro nasazení se exportuje do statického HTML.

## Spuštění

1. Stáhnout repozitář
2. Nainstalovat závislosti: `yarn`
   - Vyžaduje nainstalovaný [yarn](https://yarnpkg.com/getting-started/install)
3. Spustit vývojový server: `yarn dev`
4. Otevřít adresu [http://localhost:3000](http://localhost:3000)

## Export

Nenasazuje se aplikace v Next.js, ale pouze výsledný HTML export. Ten se vytvoří pomocí dvojice příkazů:

```
yarn build
yarn export
```

Výsledek bude poté uložen ve složce `out`, jejíž obsah je možné nahrát na FTP.
