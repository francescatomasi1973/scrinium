# Scrinium: materiali per il progetto d'esame

Questi materiali servono per costruire il progetto del corso di informatica umanistica: un piccolo catalogo digitale di una collezione a scelta, con oggetti e testi collegati tra loro, pubblicato su GitHub Pages e documentato.

Ci sono due cartelle, una per ciascun percorso. Si sceglie **una sola** delle due.

| Cartella | Percorso | Per chi |
| --- | --- | --- |
| `kit-scrinium` | Base | Per tutti: è quella usata negli esercizi in aula |
| `scrinium-completo` | Avanzato | Per chi vuole lavorare sul catalogo completo, con più funzioni e requisiti un po' più ampi |

## kit-scrinium: il percorso base

Una versione ridotta di Scrinium, divisa in file con un compito ciascuno. Si adatta alla propria collezione cambiando soprattutto i dati.

| File | Che cosa contiene | Lo modifichi? |
| --- | --- | --- |
| `index.html` | La struttura della pagina e la pagina di presentazione | Sì: scrivi la presentazione della tua collezione |
| `stile.css` | Colori, caratteri, impaginazione | Sì: colori e caratteri |
| `dati.js` | Le informazioni sul catalogo, i record (oggetti e testi), i collegamenti | Sì: è il cuore del tuo progetto |
| `app.js` | Il codice, in dieci blocchi commentati in italiano | No: si legge e si capisce |
| `README.md` | Modello del README del tuo progetto | Sì: lo compili |
| `dataset.md` | Modello della scheda del dataset | Sì: lo compili |
| `dataset-esempio.md` | La scheda del dataset compilata con i dati di esempio | No: è un modello da imitare |
| `diario.md` | Modello del diario di progetto | Sì: una riga a ogni lezione |

Il sito mostra una pagina di presentazione, il catalogo con ricerca e filtri, la scheda di ogni record con i dati in RDF, una cronologia e l'elenco dei collegamenti tra testi e oggetti.

## scrinium-completo: il percorso avanzato

Il catalogo completo usato come modello in tutto il corso, in un unico file.

| File | Che cosa contiene | Lo modifichi? |
| --- | --- | --- |
| `index.html` | Tutto il sito: circa 1.800 righe di HTML, CSS e JavaScript | Sì: i dati, i vocabolari, i testi della pagina |
| `README.md` | Guida: indica in quali righe si trovano oggetti, testi, luoghi, schema e collegamenti | No: è una guida da seguire |
| `dataset.md` | Modello della scheda del dataset | Sì: lo compili |
| `diario.md` | Modello del diario di progetto | Sì: una riga a ogni lezione |

In più rispetto al kit ci sono i filtri a faccette, la mappa, il lettore dei testi con il profilo lessicale, le concordanze, la rete dei collegamenti, la pagina Dataset e l'esportazione RDF secondo CIDOC-CRM e LRMoo. Su GitHub Pages il sito funziona senza l'archivio condiviso di claude.ai: le schede aggiunte dagli utenti restano salvate nel browser di chi le inserisce, e la documentazione deve dirlo.

## Come si usa

1. Scegli la cartella del tuo percorso e scaricala sul tuo computer.
2. Lavora su homepage, dati e stile.
3. Compila diario, README e scheda del dataset.
4. 4. Carica tutti i file in un repository GitHub e attiva GitHub Pages: Settings, poi Pages, poi Deploy from a branch, ramo main, cartella / (root).

All'esame non si consegna nulla prima: si mostra tutto all'orale, dal proprio repository.

## Per orientarsi

- [Scrinium](https://francescatomasi1973.github.io/scrinium/scrinium-completo/): il sito di esempio ovvero il catalogo completo, da esplorare.
- [Kit scrinium](https://francescatomasi1973.github.io/scrinium/kit-scrinium/): la versione ridotta per l'esame
- [Dai dati al codice: la mappa del kit](https://francescatomasi1973.github.io/scrinium/kit-scrinium/mappa-kit.html): mostra quali campi di `dati.js` usa ogni blocco di `app.js` e dove compaiono nella pagina.
  
Gli oggetti di esempio sono fittizi; i testi sono di pubblico dominio.
