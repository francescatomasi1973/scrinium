# Scheda del dataset: [titolo]

| Voce | Valore |
| --- | --- |
| Titolo | [titolo del dataset] |
| Curatore | [nome] |
| Data | [data dell'ultima modifica] |
| Record | [N] oggetti, [N] testi, [N] collegamenti |
| Copertura temporale | [dal … al …] |
| Licenza dei dati | [licenza] |
| Formato | JavaScript (dati.js), esportabile in JSON |

## I campi

| Campo | Tipo | Obbligatorio | Si applica a | Vocabolario o regola |
| --- | --- | --- | --- | --- |
| id | testo | sì | tutti | [schema degli identificativi] |
| tipo | vocabolario | sì | tutti | oggetto, testo |
| titolo | testo | sì | tutti | [regola] |
| autore | testo | no | tutti | [regola] |
| anno | numero | sì | tutti | negativo per le date a.C. |
| datazione | testo | no | tutti | [regola] |
| luogo | testo | no | tutti | [regola] |
| tipologia | vocabolario | sì | tutti | [elenco dei valori ammessi] |
| soggetti | lista | no | tutti | [vocabolario] |
| descrizione | testo | sì | tutti | testo libero |
| licenza | vocabolario | sì | tutti | [elenco] |
| testo | testo lungo | sì | testi | [edizione di riferimento] |

## I collegamenti

| Tipo | Significato |
| --- | --- |
| evoca | il testo nomina o descrive l'oggetto |
| illustra | l'oggetto raffigura un tema o un passo del testo |
| motivo | testo e oggetto condividono un motivo |
| contesto | testo e oggetto condividono un contesto storico o culturale |

## Fonti e criteri

[Da dove vengono i dati, come li hai controllati, che cosa hai lasciato fuori e perché.]
