# Scheda del dataset: Scrinium, kit di esempio

<!-- Esempio compilato con i dati di esempio del kit. Usalo come modello. -->

## 1. Informazioni generali

| Voce | Valore |
| --- | --- |
| Titolo | Scrinium, kit di esempio |
| Curatore | [nome del docente o dello studente] |
| Data | ottobre 2026 |
| Record | 8 oggetti, 4 testi, 4 collegamenti |
| Copertura temporale | 1450 – 1896 |
| Copertura geografica | Italia: Faenza, Venezia, Genova, Roma, Urbino, Torino, Ferrara, Recanati, Bologna, San Mauro Pascoli |
| Licenza dei dati | CC0 1.0 |
| Formato | JavaScript (dati.js); i record sono oggetti con campi e valori |
| Indirizzo | https://[nomeutente].github.io/[nome-repository]/ |

## 2. I campi

| Campo | Tipo | Obbligatorio | Si applica a | Vocabolario o regola |
| --- | --- | --- | --- | --- |
| id | testo | sì | tutti | OGG-0000 per gli oggetti, TXT-0000 per i testi; ripresi da Scrinium |
| tipo | vocabolario | sì | tutti | oggetto, testo |
| titolo | testo | sì | tutti | titolo proprio per i testi; titolo attribuito per gli oggetti |
| autore | testo | no | tutti | «Nome Cognome» per gli autori; «Bottega», «Officina» o «Manifattura» seguiti dal luogo per gli oggetti; vuoto se ignoto (1 oggetto) |
| anno | numero | sì | tutti | anno di riferimento; per le date incerte l'anno centrale |
| datazione | testo | no | tutti | formule di cronologia ICCD: «metà del XVI secolo», «1475–1480 circa» |
| luogo | testo | no | tutti | luogo di produzione per gli oggetti, luogo associato all'opera o all'autore per i testi |
| tipologia | vocabolario | sì | tutti | oggetti: Arredo, Cartografia, Ceramica, Grafica, Oreficeria, Strumento scientifico, Tessile; testi: Lirica, Poema |
| materia | testo | no | oggetti | materia e tecnica secondo il vocabolario ICCD |
| forma | testo | no | testi | forma metrica: «Sonetto», «Ottava rima», «Strofe di settenari» |
| soggetti | lista | no | tutti | da 2 a 3 parole chiave in minuscolo |
| descrizione | testo | sì | tutti | una o due frasi |
| licenza | vocabolario | sì | tutti | Pubblico dominio, CC BY 4.0, CC BY-SA 4.0 |
| testo | testo lungo | sì | testi | trascrizione da edizioni di pubblico dominio; un verso per riga, una riga vuota tra le strofe |

## 3. I collegamenti

| Tipo | Significato | Quanti |
| --- | --- | --- |
| evoca | il testo nomina o descrive l'oggetto | 1 |
| illustra | l'oggetto raffigura un tema o un passo del testo | 0 |
| motivo | testo e oggetto condividono un motivo | 3 |
| contesto | testo e oggetto condividono un contesto storico o culturale | 0 |

## 4. Fonti e criteri

Gli oggetti sono fittizi: titoli, attribuzioni e descrizioni sono stati scritti per mostrare il funzionamento del catalogo e non descrivono beni reali. I testi sono reali e di pubblico dominio: incipit o componimenti brevi di Ariosto, Leopardi, Carducci e Pascoli. Sono stati scelti testi e oggetti che si possono collegare tra loro per un motivo comune (il melograno, il cielo stellato, lo spazio e il suo limite) o per un riferimento esplicito (il mare tra Africa ed Europa). Limiti: le date incerte sono ridotte a un solo anno, quindi nella cronologia «1475–1480 circa» diventa 1478 e perde la sua cautela; i luoghi non hanno coordinate.
