/* =====================================================================
   DATI DELLA COLLEZIONE
   ---------------------------------------------------------------------
   Questo è il file che cambi per costruire il tuo catalogo.
   Il codice in app.js legge questi dati e li trasforma in pagine:
   non serve modificarlo per far funzionare il kit.

   Regole per scrivere i dati:
   - ogni record sta tra parentesi graffe { } e i record sono separati
     da una virgola;
   - i testi vanno tra virgolette doppie "..."; il testo integrale di
     un'opera va tra apici inversi `...`, così può andare a capo;
   - "anno" è un numero, senza virgolette (negativo per le date a.C.);
   - "tipo" vale "oggetto" oppure "testo";
   - "soggetti" è una lista tra parentesi quadre: ["a", "b"].

   I dati di esempio vengono da Scrinium: gli oggetti sono fittizi,
   i testi sono di pubblico dominio.
   ===================================================================== */

/* Informazioni sul catalogo: compaiono nell'intestazione e nel piè di pagina. */
const CATALOGO = {
  titolo: "Scrinium, kit di esempio",
  sottotitolo: "Otto oggetti e quattro testi, collegati tra loro",
  curatore: "[Il tuo nome]",
  licenzaDati: "CC0 1.0",
  indirizzoBase: "https://[nomeutente].github.io/[nome-repository]/"
};

/* I record: oggetti e testi insieme. */
const RECORD = [
  {
    id: "OGG-0001",
    tipo: "oggetto",
    titolo: "Piatto istoriato con Apollo e Dafne",
    autore: "Bottega faentina",
    anno: 1525,
    datazione: "1520–1530 circa",
    luogo: "Faenza",
    tipologia: "Ceramica",
    materia: "Maiolica dipinta in policromia",
    soggetti: ["mitologia","Ovidio","metamorfosi"],
    descrizione: "Piatto da pompa con la metamorfosi di Dafne in alloro, tratta dalle Metamorfosi di Ovidio; tesa decorata a grottesche su fondo blu.",
    licenza: "CC BY 4.0"
  },
  {
    id: "OGG-0004",
    tipo: "oggetto",
    titolo: "Astrolabio planisferico",
    autore: "Officina veneziana",
    anno: 1560,
    datazione: "metà del XVI secolo",
    luogo: "Venezia",
    tipologia: "Strumento scientifico",
    materia: "Ottone fuso e inciso",
    soggetti: ["astronomia","navigazione","misura del tempo"],
    descrizione: "Strumento con madre, tre timpani per diverse latitudini e rete a punte fiammate che indica le stelle fisse.",
    licenza: "CC BY-SA 4.0"
  },
  {
    id: "OGG-0008",
    tipo: "oggetto",
    titolo: "Velluto con motivo a melagrana",
    autore: "Manifattura genovese",
    anno: 1490,
    datazione: "fine del XV secolo",
    luogo: "Genova",
    tipologia: "Tessile",
    materia: "Velluto di seta cesellato",
    soggetti: ["melagrana","abbigliamento","commercio"],
    descrizione: "Teletta con grande motivo a melagrana entro losanghe; cimose originali conservate su un lato.",
    licenza: "CC BY 4.0"
  },
  {
    id: "OGG-0009",
    tipo: "oggetto",
    titolo: "Carta nautica del Mediterraneo",
    autore: "Scuola cartografica veneziana",
    anno: 1450,
    datazione: "metà del XV secolo",
    luogo: "Venezia",
    tipologia: "Cartografia",
    materia: "Inchiostri e colori su pergamena",
    soggetti: ["navigazione","Mediterraneo","porti"],
    descrizione: "Portolano con reticolo di linee di rombo, toponimi costieri in rosso e nero e rose dei venti.",
    licenza: "CC BY 4.0"
  },
  {
    id: "OGG-0010",
    tipo: "oggetto",
    titolo: "Globo celeste",
    autore: "",
    anno: 1690,
    datazione: "fine del XVII secolo",
    luogo: "Roma",
    tipologia: "Strumento scientifico",
    materia: "Fusi a stampa su sfera di cartapesta, legno tornito",
    soggetti: ["astronomia","costellazioni"],
    descrizione: "Globo con le figure delle costellazioni e montatura a quattro gambe con cerchio orizzontale in legno.",
    licenza: "CC BY-SA 4.0"
  },
  {
    id: "OGG-0016",
    tipo: "oggetto",
    titolo: "Pannello a tarsia con veduta prospettica",
    autore: "Bottega urbinate",
    anno: 1478,
    datazione: "1475–1480 circa",
    luogo: "Urbino",
    tipologia: "Arredo",
    materia: "Legni di essenze diverse intarsiati",
    soggetti: ["prospettiva","città ideale"],
    descrizione: "Veduta architettonica con loggiato e armadio a sportelli socchiusi, resa con legni chiari e scuri.",
    licenza: "Pubblico dominio"
  },
  {
    id: "OGG-0020",
    tipo: "oggetto",
    titolo: "Orologio da tasca con cassa smaltata",
    autore: "Manifattura torinese",
    anno: 1820,
    datazione: "1820 circa",
    luogo: "Torino",
    tipologia: "Oreficeria",
    materia: "Oro, smalto, vetro",
    soggetti: ["misura del tempo","ornamento"],
    descrizione: "Cassa in smalto blu con corona di perle; quadrante con numeri romani.",
    licenza: "CC BY 4.0"
  },
  {
    id: "OGG-0021",
    tipo: "oggetto",
    titolo: "Pianta prospettica della città",
    autore: "Incisore romano",
    anno: 1702,
    datazione: "inizio del XVIII secolo",
    luogo: "Roma",
    tipologia: "Grafica",
    materia: "Acquaforte e bulino su carta",
    soggetti: ["città","topografia"],
    descrizione: "Pianta a volo d’uccello con legenda numerata di chiese e palazzi.",
    licenza: "Pubblico dominio"
  },
  {
    id: "TXT-0004",
    tipo: "testo",
    titolo: "Orlando furioso, canto I, ottava 1",
    autore: "Ludovico Ariosto",
    anno: 1532,
    datazione: "edizione definitiva 1532",
    luogo: "Ferrara",
    tipologia: "Poema",
    forma: "Ottava rima",
    soggetti: ["cavalleria","amore","guerra"],
    descrizione: "Protasi del poema: le donne, i cavalieri, le armi e gli amori al tempo della guerra tra Mori e Franchi.",
    licenza: "Pubblico dominio",
    testo: `Le donne, i cavallier, l'arme, gli amori,
le cortesie, l'audaci imprese io canto,
che furo al tempo che passaro i Mori
d'Africa il mare, e in Francia nocquer tanto,
seguendo l'ire e i giovenil furori
d'Agramante lor re, che si diè vanto
di vendicar la morte di Troiano
sopra re Carlo imperator romano.`
  },
  {
    id: "TXT-0007",
    tipo: "testo",
    titolo: "L’infinito",
    autore: "Giacomo Leopardi",
    anno: 1819,
    datazione: "1819",
    luogo: "Recanati",
    tipologia: "Lirica",
    forma: "Idillio in endecasillabi sciolti",
    soggetti: ["infinito","silenzio","paesaggio"],
    descrizione: "Dalla siepe che esclude l’orizzonte nasce l’immaginazione di spazi interminati.",
    licenza: "Pubblico dominio",
    testo: `Sempre caro mi fu quest'ermo colle,
e questa siepe, che da tanta parte
dell'ultimo orizzonte il guardo esclude.
Ma sedendo e mirando, interminati
spazi di là da quella, e sovrumani
silenzi, e profondissima quiete
io nel pensier mi fingo; ove per poco
il cor non si spaura. E come il vento
odo stormir tra queste piante, io quello
infinito silenzio a questa voce
vo comparando: e mi sovvien l'eterno,
e le morte stagioni, e la presente
e viva, e il suon di lei. Così tra questa
immensità s'annega il pensier mio:
e il naufragar m'è dolce in questo mare.`
  },
  {
    id: "TXT-0009",
    tipo: "testo",
    titolo: "Pianto antico",
    autore: "Giosue Carducci",
    anno: 1871,
    datazione: "1871",
    luogo: "Bologna",
    tipologia: "Lirica",
    forma: "Strofe di settenari",
    soggetti: ["lutto","infanzia","natura"],
    descrizione: "Il melograno rinverdito e il figlio perduto: il contrasto tra la natura che rinasce e la morte.",
    licenza: "Pubblico dominio",
    testo: `L'albero a cui tendevi
la pargoletta mano,
il verde melograno
da' bei vermigli fior,

nel muto orto solingo
rinverdì tutto or ora
e giugno lo ristora
di luce e di calor.

Tu fior de la mia pianta
percossa e inaridita,
tu de l'inutil vita
estremo unico fior,

sei ne la terra fredda,
sei ne la terra negra;
né il sol più ti rallegra
né ti risveglia amor.`
  },
  {
    id: "TXT-0010",
    tipo: "testo",
    titolo: "X Agosto",
    autore: "Giovanni Pascoli",
    anno: 1896,
    datazione: "1896",
    luogo: "San Mauro Pascoli",
    tipologia: "Lirica",
    forma: "Quartine di decasillabi e novenari",
    soggetti: ["lutto","stelle","famiglia"],
    descrizione: "La notte di san Lorenzo e il pianto di stelle sull’uccisione del padre.",
    licenza: "Pubblico dominio",
    testo: `San Lorenzo, io lo so perché tanto
di stelle per l'aria tranquilla
arde e cade, perché sì gran pianto
nel concavo cielo sfavilla.

Ritornava una rondine al tetto:
l'uccisero: cadde tra spini;
ella aveva nel becco un insetto:
la cena dei suoi rondinini.

Ora è là, come in croce, che tende
quel verme a quel cielo lontano;
e il suo nido è nell'ombra, che attende,
che pigola sempre più piano.

Anche un uomo tornava al suo nido:
l'uccisero: disse: Perdono;
e restò negli aperti occhi un grido:
portava due bambole in dono.

Ora là, nella casa romita,
lo aspettano, aspettano in vano:
egli immobile, attonito, addita
le bambole al cielo lontano.

E tu, Cielo, dall'alto dei mondi
sereni, infinito, immortale,
oh! d'un pianto di stelle lo inondi
quest'atomo opaco del Male!`
  }
];

/* I collegamenti tra un testo e un oggetto.
   tipo: "evoca", "illustra", "motivo" oppure "contesto".
   passo: una frase copiata esattamente dal testo (facoltativa).
   nota: la motivazione, sempre obbligatoria. */
const COLLEGAMENTI = [
  { testo: "TXT-0009", oggetto: "OGG-0008", tipo: "motivo",
    passo: "il verde melograno",
    nota: "Il melograno, simbolo di fecondità e di rinascita, è il motivo del velluto rinascimentale; in Carducci rinverdisce mentre il figlio giace nella terra." },
  { testo: "TXT-0010", oggetto: "OGG-0010", tipo: "motivo",
    passo: "pianto di stelle",
    nota: "Il cielo stellato come spazio da misurare per la scienza e come luogo del pianto cosmico per il poeta." },
  { testo: "TXT-0004", oggetto: "OGG-0009", tipo: "evoca",
    passo: "d'Africa il mare",
    nota: "La traversata dei Mori evocata nella protasi corrisponde allo spazio mediterraneo descritto dai portolani." },
  { testo: "TXT-0007", oggetto: "OGG-0016", tipo: "motivo",
    passo: "dell'ultimo orizzonte",
    nota: "La siepe che chiude lo sguardo e la prospettiva che lo costruisce: due rappresentazioni dello spazio e del suo limite." }
];
