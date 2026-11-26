# Scrinium: materiali per il progetto d'esame

Questi materiali servono per costruire il progetto del corso di informatica umanistica: un piccolo catalogo digitale di una collezione a scelta, con oggetti e testi collegati tra loro, pubblicato su GitHub Pages e documentato.

## slide

La cartella `Slide/` è il materiale didattico del corso.

## esercizi

La cartella `Esercizi/` raccoglie l'elenco degli esercizi d'esame e dei lavori in aula.

## applicazione Web
Ci sono due cartelle con la stessa applicazione Web "Scrinium" con due diversi gradi di complessità. Per l'esame si sceglie **una sola** delle due modalità. E' preferibile lavorare al **kit**.

| Cartella | Percorso | Per chi |
| --- | --- | --- |
| `kit-scrinium` | Base | Per tutti: è quella usata negli esercizi in aula |
| `scrinium-completo` | Avanzato | Per chi vuole lavorare sul catalogo completo, con più funzioni e requisiti un po' più ampi |

## kit-scrinium: il percorso base

Una versione ridotta di Scrinium, divisa in cartelle: lo stile in `stile/`, i dati e la scheda del dataset in `dati/`, il codice in `js/`, le immagini in `immagini/`, le edizioni XML/TEI in `tei/`. Nella cartella principale del kit restano la pagina e la documentazione.

| File | Che cosa contiene | Lo modifichi? |
| --- | --- | --- |
| `index.html` | La struttura della pagina e la pagina di presentazione | Sì: scrivi la presentazione della tua collezione |
| `stile/stile.css` | Colori, caratteri, impaginazione | Sì: colori e caratteri |
| `dati/dati.js` | Le informazioni sul catalogo, i record (oggetti e testi), i collegamenti | Sì: è il cuore del tuo progetto |
| `dati/dataset.md` | Modello della scheda del dataset | Sì: lo compili |
| `dati/dataset-esempio.md` | La scheda del dataset compilata con i dati di esempio | No: è un modello da imitare |
| `js/app.js` | Il codice, in nove blocchi commentati in italiano | Poco: se aggiungi un campo o un tipo di collegamento |
| `immagini/` | Le immagini dei record, facoltative; contiene un disegno di esempio e le istruzioni | Sì: le tue immagini, di cui puoi dimostrare i diritti |
| `tei/` | L'edizione XML/TEI di Pianto antico con il suo foglio di stile CSS | Sì: le edizioni dei tuoi testi, se le fai |
| `README.md` | Modello del README del tuo progetto | Sì: lo compili |
| `diario.md` | Modello del diario di progetto | Sì: una riga a ogni lezione |

Il sito ha una pagina di presentazione e tre sezioni: il catalogo con ricerca e filtri, con la scheda di ogni record (immagine, metadati, dati in RDF); la pagina Dati con tutti i record, il link alla scheda del dataset e l'esportazione in JSON, CSV e Turtle; i collegamenti tra testi e oggetti, in tabella e in RDF. Un'etichetta nel catalogo segnala Pianto antico, l'unico testo con edizione XML/TEI: la sua scheda la mostra, da leggere nel browser o scaricare. Il piè di pagina porta al repository su GitHub. Le immagini sono facoltative: dove mancano compare un segnaposto; dove ci sono servono una descrizione (alt) e i crediti con fonte e licenza.

## scrinium-completo: il percorso avanzato

Il catalogo completo usato come modello in tutto il corso, in un unico file.

| File | Che cosa contiene | Lo modifichi? |
| --- | --- | --- |
| `index.html` | Tutto il sito: circa 1.800 righe di HTML, CSS e JavaScript | Sì: i dati, i vocabolari, i testi della pagina |
| `README.md` | Guida: indica in quali righe si trovano oggetti, testi, luoghi, schema e collegamenti | No: è una guida da seguire |
| `dataset.md` | Modello della scheda del dataset | Sì: lo compili |
| `diario.md` | Modello del diario di progetto | Sì: una riga a ogni lezione |

In più rispetto al kit ci sono i filtri a faccette, la mappa, il lettore dei testi con il profilo lessicale, le concordanze, la rete dei collegamenti, la pagina Dataset e l'esportazione RDF secondo CIDOC-CRM e LRMoo. Su GitHub Pages il sito funziona senza l'archivio condiviso di claude.ai: le schede aggiunte dagli utenti restano salvate nel browser di chi le inserisce, e la documentazione deve chiarire questo aspetto.

## Come si usa

1. Scegli la cartella del tuo percorso e scaricala sul tuo computer.
2. Lavora su homepage, dati e stile.
3. Compila diario, README, esercizi e scheda del dataset.
4. Carica tutti i file in un repository GitHub e attiva GitHub Pages.

Nulla vieta di creare un'intera applicazione Web ex novo, basta che rispetti i requisiti descritti e che, chi presenta, sia in grado di spiegare, anche a livello di codice, le scelte fatte. 

All'esame non si consegna nulla prima: si mostra tutto all'orale, dal proprio repository e si arriva con URL dell'applicazione.

## Per orientarsi

- [Scrinium](https://francescatomasi1973.github.io/scrinium/scrinium-completo/): il sito di esempio ovvero il catalogo completo, da esplorare.
- [Kit scrinium](https://francescatomasi1973.github.io/scrinium/kit-scrinium/): la versione ridotta per l'esame
- [Dai dati al codice: la mappa del kit](https://francescatomasi1973.github.io/scrinium/kit-scrinium/mappa-kit.html): mostra quali campi di `dati.js` usa ogni blocco di `app.js` e dove compaiono nella pagina.
  
Gli oggetti di esempio sono fittizi; i testi sono di pubblico dominio.
