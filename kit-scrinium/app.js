/* =====================================================================
   IL CODICE DEL CATALOGO
   ---------------------------------------------------------------------
   Questo file legge i dati di dati.js e costruisce le pagine.
   È diviso in blocchi numerati: ogni blocco fa una sola cosa.
   Per usare il kit con la tua collezione non devi cambiarlo; puoi
   però modificare le etichette e, se vuoi, provare a cambiare un
   blocco alla volta.
   ===================================================================== */


/* ---------------------------------------------------------------------
   BLOCCO 1 — Strumenti di base
   Piccole funzioni usate da tutti gli altri blocchi.
   --------------------------------------------------------------------- */

// Rende sicuro un testo prima di inserirlo nella pagina
// (trasforma < > & " in simboli che il browser mostra e non esegue).
function esc(testo) {
  return String(testo ?? "")
    .replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// Toglie accenti e maiuscole, così "Città" e "citta" si trovano a vicenda.
function norm(testo) {
  return String(testo ?? "").normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Trova un record a partire dal suo identificativo.
function trovaRecord(id) {
  return RECORD.find(r => r.id === id);
}

// Scrive l'anno in modo leggibile: -800 diventa "800 a.C.".
function annoLeggibile(anno) {
  return anno < 0 ? `${-anno} a.C.` : String(anno);
}


/* ---------------------------------------------------------------------
   BLOCCO 2 — I tipi di collegamento
   Come si legge ogni relazione, a seconda della scheda da cui la guardi.
   Se aggiungi un tipo in dati.js, aggiungilo anche qui.
   --------------------------------------------------------------------- */

const TIPI = {
  evoca:    { nome: "Il testo evoca l’oggetto",   daTesto: "evoca",                    daOggetto: "è evocato in" },
  illustra: { nome: "L’oggetto illustra il testo", daTesto: "è illustrato da",          daOggetto: "illustra" },
  motivo:   { nome: "Motivo condiviso",            daTesto: "condivide un motivo con",  daOggetto: "condivide un motivo con" },
  contesto: { nome: "Stesso contesto",             daTesto: "condivide il contesto con", daOggetto: "condivide il contesto con" }
};


/* ---------------------------------------------------------------------
   BLOCCO 3 — Ricerca e filtri
   Lo "stato" ricorda che cosa ha scelto il lettore; la funzione
   filtra() restituisce solo i record che rispettano tutte le scelte.
   --------------------------------------------------------------------- */

const stato = { parola: "", tipo: "", tipologia: "" };

function filtra() {
  const parola = norm(stato.parola);
  return RECORD.filter(r => {
    // 1. la parola cercata deve comparire in titolo, autore, descrizione, soggetti o testo
    const dove = norm([r.titolo, r.autore, r.descrizione, (r.soggetti || []).join(" "), r.testo].join(" "));
    if (parola && !dove.includes(parola)) return false;
    // 2. se è scelta una collezione, il record deve appartenerle
    if (stato.tipo && r.tipo !== stato.tipo) return false;
    // 3. se è scelta una tipologia, il record deve averla
    if (stato.tipologia && r.tipologia !== stato.tipologia) return false;
    return true;
  }).sort((a, b) => a.anno - b.anno);
}

// Conta quanti record ci sono per ogni tipologia: serve al menu del filtro.
function contaTipologie() {
  const conteggi = {};
  for (const r of RECORD) {
    conteggi[r.tipologia] = (conteggi[r.tipologia] || 0) + 1;
  }
  return conteggi;
}


/* ---------------------------------------------------------------------
   BLOCCO 4 — Le schede del catalogo
   immagineHTML() mostra l'immagine di un record, o un segnaposto;
   schedaHTML() trasforma un record in una scheda;
   mostraRisultati() mette nella pagina le schede dei record filtrati.
   --------------------------------------------------------------------- */

// L'immagine del record con il suo testo alternativo (alt).
// Se il campo immagine è vuoto, mostra un segnaposto: la tipologia
// per gli oggetti, il primo verso o la prima riga per i testi.
function immagineHTML(r) {
  if (r.immagine) {
    return `<img src="${esc(r.immagine)}" alt="${esc(r.alt)}">`;
  }
  const scritta = r.tipo === "testo" ? (r.testo || "").split("\n")[0] : r.tipologia;
  return `<div class="segnaposto ${r.tipo}" role="img" aria-label="Immagine non disponibile">
            <span>${esc(scritta)}</span></div>`;
}

function schedaHTML(r) {
  const collezione = r.tipo === "testo" ? "Testo" : "Oggetto";
  return `
    <article class="scheda ${r.tipo}">
      <a class="miniatura" href="#/record/${esc(r.id)}" tabindex="-1">${immagineHTML(r)}</a>
      <p class="etichetta">${collezione}, ${esc(r.tipologia)}</p>
      <h3><a href="#/record/${esc(r.id)}">${esc(r.titolo)}</a></h3>
      <p>${esc(r.autore || "Autore non identificato")}</p>
      <p class="tenue">${esc(r.datazione || annoLeggibile(r.anno))}, ${esc(r.luogo)}</p>
    </article>`;
}

function mostraRisultati() {
  const trovati = filtra();
  const contenitore = document.querySelector("#risultati");
  document.querySelector("#conteggio").textContent =
    `${trovati.length} ${trovati.length === 1 ? "record" : "record"} su ${RECORD.length}`;
  if (trovati.length === 0) {
    contenitore.innerHTML = `
      <div class="vuoto">
        <p><strong>Nessun record corrisponde a questa ricerca.</strong></p>
        <p>Prova una parola più breve o togli uno dei filtri.</p>
      </div>`;
    return;
  }
  contenitore.innerHTML = trovati.map(schedaHTML).join("");
}

function mostraCatalogo() {
  const tipologie = contaTipologie();
  const opzioni = Object.keys(tipologie).sort().map(t =>
    `<option value="${esc(t)}" ${stato.tipologia === t ? "selected" : ""}>${esc(t)} (${tipologie[t]})</option>`
  ).join("");
  document.querySelector("#pagina").innerHTML = `
    <h1>Catalogo</h1>
    <div class="filtri" role="search">
      <label>Cerca <input id="parola" type="search" value="${esc(stato.parola)}" placeholder="una parola, un autore, un luogo"></label>
      <label>Collezione
        <select id="tipo">
          <option value="">Tutte</option>
          <option value="oggetto" ${stato.tipo === "oggetto" ? "selected" : ""}>Oggetti</option>
          <option value="testo" ${stato.tipo === "testo" ? "selected" : ""}>Testi</option>
        </select>
      </label>
      <label>Tipologia
        <select id="tipologia"><option value="">Tutte</option>${opzioni}</select>
      </label>
    </div>
    <p id="conteggio" class="tenue"></p>
    <div id="risultati" class="griglia" aria-live="polite"></div>`;

  // Ogni volta che il lettore scrive o sceglie, aggiorna lo stato e i risultati.
  document.querySelector("#parola").addEventListener("input", e => { stato.parola = e.target.value; mostraRisultati(); });
  document.querySelector("#tipo").addEventListener("change", e => { stato.tipo = e.target.value; mostraRisultati(); });
  document.querySelector("#tipologia").addEventListener("change", e => { stato.tipologia = e.target.value; mostraRisultati(); });
  mostraRisultati();
}


/* ---------------------------------------------------------------------
   BLOCCO 5 — La scheda di un record
   Mostra l'immagine con la didascalia, tutti i metadati, il testo
   integrale (per i testi), i collegamenti e i dati RDF.
   --------------------------------------------------------------------- */

function mostraRecord(id) {
  const r = trovaRecord(id);
  if (!r) {
    document.querySelector("#pagina").innerHTML = `<p>Questo record non esiste. <a href="#/catalogo">Torna al catalogo</a>.</p>`;
    return;
  }
  // I metadati: una riga per campo, solo se il campo è compilato.
  const campi = [
    ["Identificativo", r.id], ["Autore o ambito", r.autore], ["Datazione", r.datazione],
    ["Luogo", r.luogo], ["Tipologia", r.tipologia], ["Materia e tecnica", r.materia],
    ["Forma", r.forma], ["Soggetti", (r.soggetti || []).join(", ")], ["Licenza", r.licenza]
  ];
  const metadati = campi.filter(c => c[1]).map(c => `<dt>${c[0]}</dt><dd>${esc(c[1])}</dd>`).join("");

  // L'immagine con la didascalia: i crediti dicono fonte e licenza.
  const figura = `<figure class="figura">${immagineHTML(r)}
    ${r.immagine ? `<figcaption>${esc(r.crediti || "Crediti da indicare")}</figcaption>` : ""}</figure>`;

  // Il testo integrale, verso per verso, con i passi collegati evidenziati.
  const testo = r.tipo === "testo" ? `<div class="testo">${testoConPassi(r)}</div>` : "";

  document.querySelector("#pagina").innerHTML = `
    <p class="tenue"><a href="#/catalogo">Catalogo</a> / ${esc(r.id)}</p>
    <h1>${esc(r.titolo)}</h1>
    <p class="descrizione">${esc(r.descrizione)}</p>
    <div class="dettaglio">
      <div>${figura}${testo}<dl>${metadati}</dl></div>
      <div>
        <h2>Collegamenti</h2>${collegamentiDi(r)}
        <h2>Dati RDF</h2><pre>${esc(turtle(r))}</pre>
      </div>
    </div>`;
}

// Sottolinea nel testo i passi citati nei collegamenti (vedi BLOCCO 6).
function testoConPassi(r) {
  let html = esc(r.testo);
  for (const c of COLLEGAMENTI.filter(c => c.testo === r.id && c.passo)) {
    const passo = esc(c.passo);
    html = html.replace(passo, `<a class="passo" href="#/record/${esc(c.oggetto)}">${passo}</a>`);
  }
  return html.split("\n").map(riga => riga.trim() ? `<span class="verso">${riga}</span>` : `<span class="stacco"></span>`).join("");
}


/* ---------------------------------------------------------------------
   BLOCCO 6 — I collegamenti
   collegamentiDi() elenca i collegamenti di un record;
   mostraCollegamenti() elenca tutti i collegamenti del catalogo.
   --------------------------------------------------------------------- */

function collegamentiDi(r) {
  const propri = COLLEGAMENTI.filter(c => c.testo === r.id || c.oggetto === r.id);
  if (propri.length === 0) return `<p class="tenue">Nessun collegamento.</p>`;
  return "<ul class=\"collegamenti\">" + propri.map(c => {
    const altro = trovaRecord(r.tipo === "testo" ? c.oggetto : c.testo);
    const frase = r.tipo === "testo" ? TIPI[c.tipo].daTesto : TIPI[c.tipo].daOggetto;
    return `<li><strong>${frase}</strong> <a href="#/record/${esc(altro.id)}">${esc(altro.titolo)}</a>
            <br><span class="tenue">${esc(c.nota)}</span></li>`;
  }).join("") + "</ul>";
}

function mostraCollegamenti() {
  const righe = COLLEGAMENTI.map(c => {
    const t = trovaRecord(c.testo), o = trovaRecord(c.oggetto);
    return `<tr><td><a href="#/record/${esc(t.id)}">${esc(t.titolo)}</a></td>
                <td>${TIPI[c.tipo].daTesto}</td>
                <td><a href="#/record/${esc(o.id)}">${esc(o.titolo)}</a></td>
                <td>${esc(c.nota)}</td></tr>`;
  }).join("");
  document.querySelector("#pagina").innerHTML = `
    <h1>Collegamenti</h1>
    <p class="tenue">Ogni collegamento unisce un testo e un oggetto, con una motivazione.</p>
    <div class="tabella"><table>
      <tr><th>Testo</th><th>Relazione</th><th>Oggetto</th><th>Motivazione</th></tr>${righe}
    </table></div>`;
}


/* ---------------------------------------------------------------------
   BLOCCO 7 — I dati: tabella, esportazione, RDF
   mostraDati() presenta i dati come dati: tutti i record in una
   tabella e l'esportazione in JSON e CSV. turtle() scrive un record in Turtle, con Dublin Core
   e CIDOC-CRM: non devi scrivere RDF a mano, devi saperlo leggere.
   --------------------------------------------------------------------- */

function turtle(r) {
  const id = "<" + CATALOGO.indirizzoBase + "id/" + r.id + ">";
  const classe = r.tipo === "testo" ? "lrmoo:F2_Expression" : "crm:E22_Human-Made_Object";
  const righe = [
    `${id} a ${classe} ;`,
    `    dcterms:title "${r.titolo.replace(/"/g, '\\"')}"@it ;`,
    r.autore ? `    dcterms:creator "${r.autore}" ;` : null,
    `    dcterms:date "${r.anno}" ;`,
    `    dcterms:spatial "${r.luogo}" ;`,
    `    dcterms:type "${r.tipologia}"@it ;`,
    ...(r.soggetti || []).map(s => `    dcterms:subject "${s}"@it ;`),
    `    dcterms:rights "${r.licenza}" .`
  ].filter(Boolean);
  // Le relazioni: ogni collegamento diventa una tripla.
  for (const c of COLLEGAMENTI.filter(c => c.testo === r.id || c.oggetto === r.id)) {
    righe.push(`<${CATALOGO.indirizzoBase}id/${c.testo}> dcterms:relation <${CATALOGO.indirizzoBase}id/${c.oggetto}> .`);
  }
  return righe.join("\n");
}


// I record in formato CSV: una riga per record, una colonna per campo.
function comeCSV() {
  // Le colonne: tutti i campi usati nei record, tranne il testo integrale.
  const campi = [];
  for (const r of RECORD) for (const c of Object.keys(r)) if (!campi.includes(c) && c !== "testo") campi.push(c);
  const cella = v => {
    const t = Array.isArray(v) ? v.join("; ") : String(v ?? "");
    return /[",\n]/.test(t) ? `"${t.replace(/"/g, '""')}"` : t;
  };
  return [campi.join(","), ...RECORD.map(r => campi.map(c => cella(r[c])).join(","))].join("\n");
}

function mostraDati() {
  const righeRecord = RECORD.map(r => `<tr><td><a href="#/record/${esc(r.id)}">${esc(r.id)}</a></td>
      <td>${esc(r.titolo)}</td><td>${esc(r.tipo)}</td><td>${esc(r.tipologia)}</td>
      <td>${esc(r.anno)}</td><td>${esc(r.luogo)}</td><td>${r.immagine ? "sì" : "no"}</td></tr>`).join("");
  document.querySelector("#pagina").innerHTML = `
    <h1>Dati</h1>
    <p class="tenue">I dati del catalogo così come sono scritti in dati.js. La descrizione dei campi è nella scheda del dataset.</p>
    <h2>Tutti i record</h2>
    <div class="tabella"><table><tr><th>ID</th><th>Titolo</th><th>Tipo</th><th>Tipologia</th><th>Anno</th><th>Luogo</th><th>Immagine</th></tr>${righeRecord}</table></div>
    <h2>Esporta</h2>
    <p><button type="button" id="formatoJSON">JSON</button> <button type="button" id="formatoCSV">CSV</button>
       <button type="button" id="copia">Copia</button></p>
    <textarea id="esportati" readonly aria-label="Dati esportati"></textarea>`;
  const area = document.querySelector("#esportati");
  document.querySelector("#formatoJSON").addEventListener("click", () => { area.value = JSON.stringify(RECORD, null, 2); });
  document.querySelector("#formatoCSV").addEventListener("click", () => { area.value = comeCSV(); });
  document.querySelector("#copia").addEventListener("click", () => { area.select(); navigator.clipboard?.writeText(area.value); });
  area.value = JSON.stringify(RECORD, null, 2);
}


/* ---------------------------------------------------------------------
   BLOCCO 8 — Navigazione tra le pagine
   L'indirizzo dopo il # dice quale pagina mostrare:
   #/                -> presentazione (scritta in index.html)
   #/catalogo        -> catalogo
   #/record/OGG-0001 -> scheda di un record
   #/collegamenti    -> elenco dei collegamenti
   #/dati            -> i dati: record ed esportazione
   --------------------------------------------------------------------- */

function mostraPagina() {
  const percorso = location.hash.replace("#/", "").split("/");
  if (percorso[0] === "catalogo") mostraCatalogo();
  else if (percorso[0] === "record") mostraRecord(percorso[1]);
  else if (percorso[0] === "collegamenti") mostraCollegamenti();
  else if (percorso[0] === "dati") mostraDati();
  else mostraPresentazione();
  window.scrollTo(0, 0);
}

// Copia nella pagina il modello scritto in index.html e lo completa con i dati.
function mostraPresentazione() {
  const pagina = document.querySelector("#pagina");
  pagina.innerHTML = document.querySelector("#modello-presentazione").innerHTML;
  // I testi presi da CATALOGO (titolo, sottotitolo, curatore, licenza)
  pagina.querySelectorAll("[data-campo]").forEach(el => { el.textContent = CATALOGO[el.dataset.campo]; });
  // I numeri della collezione
  const conta = {
    oggetti: RECORD.filter(r => r.tipo === "oggetto").length,
    testi: RECORD.filter(r => r.tipo === "testo").length,
    collegamenti: COLLEGAMENTI.length
  };
  pagina.querySelectorAll("[data-conta]").forEach(el => { el.textContent = conta[el.dataset.conta]; });
  // L'inizio di uno dei testi, scelto a caso, con il link alla sua scheda
  const testi = RECORD.filter(r => r.tipo === "testo");
  const riquadro = pagina.querySelector("#incipit");
  if (riquadro && testi.length) {
    const t = testi[Math.floor(Math.random() * testi.length)];
    const righe = t.testo.split("\n").filter(riga => riga.trim()).slice(0, 3);
    riquadro.innerHTML = `<p class="versi">${righe.map(esc).join("<br>")}</p>
      <p class="tenue">${esc(t.autore)}, <a href="#/record/${esc(t.id)}">${esc(t.titolo)}</a></p>`;
  }
}


/* ---------------------------------------------------------------------
   BLOCCO 9 — Avvio
   All'apertura scrive titolo e piè di pagina, poi mostra la pagina
   giusta; a ogni cambio di indirizzo la ridisegna.
   --------------------------------------------------------------------- */

document.querySelector("#titolo").textContent = CATALOGO.titolo;
document.querySelector("#sottotitolo").textContent = CATALOGO.sottotitolo;
document.querySelector("#piede").textContent =
  `A cura di ${CATALOGO.curatore}. Dati con licenza ${CATALOGO.licenzaDati}. Costruito con il kit di Scrinium.`;
document.title = CATALOGO.titolo;
window.addEventListener("hashchange", mostraPagina);
mostraPagina();
