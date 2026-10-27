# Scheda del dataset: [titolo del catalogo]

<!-- La scheda del dataset è la carta d'identità dei tuoi dati: dice a chi vuole
     riusarli che cosa contengono, come sono organizzati, da dove vengono e con
     quale licenza. Sostituisci tutto ciò che è tra parentesi quadre.
     Un esempio già compilato è nel file dataset-esempio.md. -->

## 1. Informazioni generali

| Voce | Valore |
| --- | --- |
| Titolo | [lo stesso di CATALOGO.titolo in dati.js] |
| Curatore | [il tuo nome] |
| Data | [data dell'ultima modifica dei dati] |
| Record | [N] oggetti, [N] testi, [N] collegamenti |
| Copertura temporale | [anno più antico] – [anno più recente] |
| Copertura geografica | [i luoghi della collezione] |
| Licenza dei dati | [la stessa di CATALOGO.licenzaDati] |
| Immagini | [N] record con immagine; [fonti e licenze delle immagini] |
| Formato | JavaScript (dati.js); i record sono oggetti con campi e valori |
| Indirizzo | [https://nomeutente.github.io/nome-repository/] |

## 2. I campi

<!-- Una riga per ogni campo che usi in dati.js. Parti dallo schema progettato
     nella lezione 6. Nella colonna "Vocabolario o regola" scrivi come si compila
     il campo: l'elenco dei valori ammessi, oppure la regola che hai seguito. -->

| Campo | Tipo | Obbligatorio | Si applica a | Vocabolario o regola |
| --- | --- | --- | --- | --- |
| id | testo | sì | tutti | [es. OGG-0001 per gli oggetti, TXT-0001 per i testi] |
| tipo | vocabolario | sì | tutti | oggetto, testo |
| titolo | testo | sì | tutti | [titolo proprio o attribuito] |
| autore | testo | no | tutti | [forma del nome: es. «Nome Cognome», oppure bottega o ambito] |
| anno | numero | sì | tutti | anno di riferimento; negativo per le date a.C. |
| datazione | testo | no | tutti | [come scrivi le date incerte: es. «metà del XVI secolo»] |
| luogo | testo | no | tutti | [luogo di produzione o luogo associato] |
| tipologia | vocabolario | sì | tutti | [elenco completo dei valori ammessi] |
| materia | testo | no | oggetti | [regola] |
| forma | testo | no | testi | [regola] |
| soggetti | lista | no | tutti | [da dove prendi i soggetti] |
| descrizione | testo | sì | tutti | testo libero, [quante righe] |
| licenza | vocabolario | sì | tutti | [elenco delle licenze usate] |
| testo | testo lungo | sì | testi | [edizione da cui hai trascritto] |
| immagine | testo | no | tutti | percorso del file nella cartella immagini/, es. immagini/cartolina-01.jpg |
| alt | testo | sì, se c'è l'immagine | tutti | che cosa si vede nell'immagine, in una frase |
| crediti | testo | sì, se c'è l'immagine | tutti | fonte e licenza dell'immagine |

## 3. I collegamenti

| Tipo | Significato | Quanti |
| --- | --- | --- |
| evoca | il testo nomina o descrive l'oggetto | [N] |
| illustra | l'oggetto raffigura un tema o un passo del testo | [N] |
| motivo | testo e oggetto condividono un motivo | [N] |
| contesto | testo e oggetto condividono un contesto storico o culturale | [N] |

## 4. Fonti e criteri

<!-- Qualche riga in prosa: da dove vengono le informazioni, come le hai
     controllate, che cosa hai lasciato fuori e perché, quali limiti hanno i dati. -->

[Fonti, criteri di scelta, controlli fatti, limiti dei dati.]
