# React kurs

Hei og velkommen til introduksjonskurs i React del 2!

## Installer
* [git](https://git-scm.com/downloads)
* [node](https://nodejs.org/en/download/)
* [vscode](https://code.visualstudio.com/download) (eller en annen code-editor)

## Kom igang!
* `git clone https://github.com/react-kurs/dag2.git`
* `cd dag2`
* `npm run setup` (installer alt i alle mapper på 3-6 min)
* `code .` (for å åpne mappen i Visual studio code, hvis kommandoen er aktivert)

> Alternativ kan man bruke Gitpod! [Trykk her for å komme i gang med Gitpod](https://gitpod.io/#https://github.com/react-kurs/dag2)

## Intro
Dette repoet inneholder foiler for teamene `useEffect()` og bruk av `http`-klienter med javaScript sin innebygde HTTP-klient `fetch()`.
Beskrivelser av temaene ligger i `README.md` filene, som leses best ved å navigere på [github](https://github.com/react-kurs/dag2).

Kurset fra [dag1](https://github.com/react-kurs/dag1) kombinert med foilene fra dette repoet gir utgangspunktet for å leke seg med pokemon APIet fra [https://pokeapi.co]. I dette kurset skal vi bygge en **Pokemon Fusion** applikasjon!

Hvis det er visse tema som ikke sitter helt, og du gjerne vil ha en liten oppdatering, anbefaler vi å gå på [React sin dokumentasjon](https://reactjs.org/docs/getting-started.html) eller se på temaene fra [forrige del 1](https://github.com/react-kurs/dag1s).

Repoet følger samme mappe-struktur slik som forrige del.

```bash
.
├── 00-recap
│   ├── 00-solution
│   ├── README.md
│   ├── node_modules
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   └── src
├── 01-use-effect
│   ├── README.md
│   ├── node_modules
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   └── src
├── 02-http
│   ├── README.md
│   ├── node_modules
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   └── src
├── 03-pokemon-project
│   ├── README.md
│   ├── example-solution
│   ├── node_modules
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   └── src
├── README.md
└── package.json
```


* For å starte et av prosjektene gjør vi følgende:  `cd 0X-"placeholdernavn"` og kjør `npm run start` / `npm start`.
  * Eksempelvis `cd 00-recap` fulgt av `npm run start`
  * Prosjektet skal nå kjøre på `localhost:3000` (alternativt `127.0.0.1:3000`)
* Trykk `Ctrl` `c` for å avslutte programmet.

## Foiler
#### 00 [Recap](00-recap/README.md)
#### 01 [useEffect-hook](01-use-effect/README.md)
#### 02 [Http clients](02-http/README.md)

<br>

# Prosjektbeskrivelse av Pokemon Fusion

###  [Pokemon project](03-pokemon-project/README.md)