# Schema della collezione

La scheda del dataset: i campi di ogni record, con tipo, obbligo, ambito, regola di compilazione e corrispondenza in Dublin Core e in CIDOC-CRM e LRMoo.
È la stessa tabella del file `schema.csv`, scritta in Markdown.

| Campo | Tipo | Obbligatorio | Si applica a | Vocabolario o regola | Dublin Core | CIDOC-CRM e LRMoo |
| --- | --- | --- | --- | --- | --- | --- |
| `id` | testo | sì | tutti | OGG-0000 per gli oggetti, TXT-0000 per i testi | `dc:identifier` | URI della risorsa: `res:<id>` |
| `tipo` | vocabolario | sì | tutti | oggetto, testo | `dc:type` | determina la classe: `crm:E22_Human-Made_Object` (oggetto), `lrmoo:F2_Expression` (testo) |
| `classe_rdf` | vocabolario | sì | tutti | crm:E22_Human-Made_Object per gli oggetti, lrmoo:F2_Expression per i testi | — | `rdf:type` |
| `titolo` | testo | sì | tutti | titolo proprio per i testi; titolo attribuito per gli oggetti | `dc:title` | `crm:P102_has_title` |
| `autore` | testo | no | tutti | «Nome Cognome»; per gli oggetti bottega, officina o manifattura; vuoto se ignoto | `dc:creator` | oggetti: `crm:P108i_was_produced_by` > `crm:E12_Production` > `crm:P14_carried_out_by;` testi: `lrmoo:R17i_was_created_by` > `lrmoo:F28_Expression_Creation` > `crm:P14_carried_out_by` |
| `anno` | numero | sì | tutti | anno di riferimento; per le date incerte l'anno centrale | `dc:date` | `crm:P4_has_time-span` dell'evento di produzione o di creazione |
| `datazione` | testo | no | tutti | formule di cronologia ICCD: «metà del XVI secolo» | `dc:date` | `crm:P4_has_time-span` > `crm:E52_Time-Span,` con la formula come etichetta |
| `luogo` | testo | no | tutti | luogo di produzione o luogo associato all'opera | `dc:coverage` | `crm:P7_took_place_at` dell'evento di produzione o di creazione |
| `tipologia` | vocabolario | sì | tutti | oggetti: Arredo, Cartografia, Ceramica, Grafica, Oreficeria, Strumento scientifico, Tessile; testi: Lirica, Poema | `dc:type` | `crm:P2_has_type` |
| `materia` | testo | no | oggetti | materia e tecnica secondo il vocabolario ICCD | `dc:format` | `crm:P45_consists_of;` `crm:P32_used_general_technique` |
| `forma` | testo | no | testi | forma metrica: «Sonetto», «Ottava rima», «Strofe di settenari» | — | `crm:P2_has_type` (forma metrica) |
| `soggetti` | lista | no | tutti | da 2 a 3 parole chiave in minuscolo | `dc:subject` | oggetti: `crm:P62_depicts;` testi: `crm:P129_is_about` |
| `descrizione` | testo | sì | tutti | una o due frasi | `dc:description` | `crm:P3_has_note` |
| `licenza` | vocabolario | sì | tutti | Pubblico dominio, CC BY 4.0, CC BY-SA 4.0 | `dc:rights` | `crm:P104_is_subject_to` > `crm:E30_Right` |
| `testo` | testo lungo | sì | testi | trascrizione da edizioni di pubblico dominio; un verso per riga | — | `crm:P190_has_symbolic_content` |
| `immagine` | testo | no | tutti | percorso del file nella cartella immagini/ | — | `crm:P138i_has_representation` |
| `alt` | testo | sì, se c'è l'immagine | tutti | una frase che descrive che cosa si vede | — | `crm:P3_has_note` della rappresentazione |
| `crediti` | testo | sì, se c'è l'immagine | tutti | fonte e licenza dell'immagine | — | `crm:P104_is_subject_to` della rappresentazione |

Il simbolo > indica un passaggio attraverso un evento: per esempio l'autore di un oggetto è collegato all'evento di produzione (`crm:E12_Production`), non direttamente all'oggetto.
