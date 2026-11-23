# Esercizio 2: una scheda, tutti i formati del modulo 2

Una pagina sola, scritta solo in HTML e CSS, senza JavaScript, che raccoglie quello che si è visto nel modulo 2 a partire da un testo: *Pianto antico* di Giosue Carducci.

| Sezione della pagina | Lezione | Che cosa mostra |
| --- | --- | --- |
| La scheda | 6 | I metadati descrittivi e il testo, con i versi numerati dal CSS; lo schema e i dati completi da scaricare |
| Dublin Core | 7 | La corrispondenza campo per campo e il file XML, da vedere o scaricare |
| Edizione TEI | 8 | L'edizione nel browser, l'XML sorgente e il CSS da scaricare |
| Profilo lessicale | 8 | Parole, forme, varietà lessicale, parole frequenti, concordanze |
| Collegamenti in RDF | 9 | Il grafo dei collegamenti in SVG e le triple in Turtle, da scaricare |

## I file

| File | Che cosa contiene |
| --- | --- |
| `index.html` | La pagina |
| `stile.css` | Lo stile della pagina |
| `dati/schema.csv` | La scheda del dataset: i campi, con tipo, obbligo, vocabolario, Dublin Core e CIDOC-CRM/LRMoo |
| `dati/collezione.csv` | I dati completi in CSV, con la classe RDF di ogni record |
| `dati/collezione.json` | I dati completi in JSON, con i collegamenti |
| `dati/pianto-antico-dc.xml` | La scheda in Dublin Core |
| `dati/collegamenti.ttl` | La scheda e i collegamenti in RDF (Turtle) |
| `tei/pianto-antico.xml` | L'edizione XML/TEI |
| `tei/pianto-antico.css` | Il foglio di stile dell'edizione |

## Come si usa

Apri `index.html` nel browser. Le parti che si aprono e si chiudono usano l'elemento `<details>`; i file si scaricano con l'attributo `download` dei link. Il download e l'edizione TEI con il suo stile funzionano sul sito pubblicato su GitHub Pages; aprendo i file dal computer alcuni browser, come Chrome, mostrano il file invece di scaricarlo e non applicano il CSS all'XML.

Per il tuo esercizio: sostituisci *Pianto antico* con un testo o un oggetto della tua collezione, e i dati di esempio con i tuoi.
