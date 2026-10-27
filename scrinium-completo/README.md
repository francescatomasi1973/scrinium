# Scrinium, versione completa

Il catalogo completo usato come modello nel corso: un solo file, `index.html`, di circa 1.800 righe,
senza librerie esterne. È il percorso avanzato per il progetto d'esame, in alternativa al kit.

## Che cosa contiene in più rispetto al kit

- catalogo con filtri a faccette, conteggi e istogramma per secolo;
- lettore dei testi con numeri di verso e profilo lessicale;
- pagina Esplora: cronologia, mappa, tipologie e soggetti, lessico, concordanze, rete dei collegamenti;
- pagina Dataset: schema dei campi con completezza, tabella dei record, esportazioni CSV, JSON e RDF
  (CIDOC-CRM e LRMoo, oppure Dublin Core);
- modulo Contribuisci e collegamenti aggiunti dagli utenti.

## Dove sono i dati

Tutto è in `index.html`. Cerca queste righe (i numeri sono indicativi):

| Che cosa | Cerca | Riga |
| --- | --- | --- |
| Luoghi con coordinate (per la mappa) | `const LUOGHI` | 340 |
| Oggetti | `const OGGETTI` | 349 |
| Testi integrali | `const TESTI` | 374 |
| Schema dei campi (pagina Dataset) | `const SCHEMA` | 527 |
| Vocabolari di tipologie, generi, licenze | `const TIPI_OGG` | 546 |
| Tipi di collegamento | `const LINK_TYPES` | 1357 |
| Collegamenti curati | `const LINKS_CURATED` | 1368 |
| Indirizzo base degli URI RDF | `const BASE` | 1519 |

Per usarlo con la tua collezione sostituisci i record di `OGGETTI` e `TESTI`, aggiungi i tuoi luoghi
in `LUOGHI`, adatta `TIPI_OGG` e `SCHEMA` e scrivi i tuoi `LINKS_CURATED`. Cambia `BASE` con l'indirizzo
del tuo sito, per esempio `https://nomeutente.github.io/nome-repository/`.
Testi e intestazioni della pagina sono nel codice HTML in testa al file e nelle funzioni `page…`.

## Da sapere

- Su claude.ai le schede e i collegamenti aggiunti dagli utenti finiscono in un archivio condiviso.
  Su GitHub Pages quell'archivio non c'è: il sito funziona lo stesso, ma i contributi restano salvati
  solo nel browser di chi li inserisce, e la pagina Contribuisci lo dice.
- La documentazione completa del progetto (architettura, modello dei dati, collegamenti, RDF)
  è il modello per la tua documentazione tecnica.
- Lavora un passo alla volta e ricarica la pagina dopo ogni modifica: un errore in un record
  (una virgola, una virgolette) blocca tutto il catalogo. La console del browser (F12) indica la riga.
