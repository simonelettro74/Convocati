const players = [
"Avella Mattia",
"Bastianello Mattia",
"Belebsir Ibrahim",
"Bongiovi Alessandro",
"Borgo Federico",
"Cavalletto Andrea",
"Cesarato Christopher",
"Crivellaro Mattia",
"Dante Nicolo",
"Faggian Mario",
"Ferrandes Davide",
"Gabbatore Emanuele",
"Grigoletto Filippo",
"Irrera Luca",
"Lando Lorenzo",
"Meneghin Andrew",
"Olejniczak Denis",
"Paiano Francesco",
"Picello Davide",
"Pitarresi Antonio",
"Rocco Pietro",
"Sartori Alessandro",
"Signorelli Francesco",
"Signorelli Mattia",
"Siscanu Matteo",
"Spinello Alberto"
];
const tableBody = document.querySelector("#players-table tbody");
const counter = document.getElementById("counter");

function updateCounter() {
  const count = document.querySelectorAll(".enabled").length;
  counter.textContent = `Giocatori convocati: ${count}`;
}

function createRow(name) {
  const row = document.createElement("tr");
  const cell = document.createElement("td");
  cell.classList.add("disabled");

  const label = document.createElement("span");
  label.textContent = name;

  const toggle = document.createElement("input");
  toggle.type = "checkbox";
  toggle.addEventListener("change", () => {
    cell.classList.toggle("enabled", toggle.checked);
    cell.classList.toggle("disabled", !toggle.checked);
    updateCounter();
  });

  cell.appendChild(label);
  cell.appendChild(toggle);
  row.appendChild(cell);
  return row;
}

players.forEach(name => {
  tableBody.appendChild(createRow(name));
});

function copySelected() {
  const selected = Array.from(document.querySelectorAll(".enabled span"))
    .map(el => el.textContent)
    .join("\n");
  navigator.clipboard.writeText(selected)
    .then(() => alert("Nomi copiati negli appunti!"))
    .catch(() => alert("Errore nella copia."));
}

function resetAll() {
  document.querySelectorAll("#players-table input[type='checkbox']").forEach(cb => {
    cb.checked = false;
    cb.dispatchEvent(new Event("change"));
  });
}
