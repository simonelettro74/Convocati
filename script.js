const players = [
  "Bastianello Mattia",
  "Bongiovi Alessandro",
  "Bozzato Matteo",
  "Cerasuolo Luca",
  "Cesarato Christopher",
  "Chellin Alessandro",
  "Crivellaro Mattia",
  "Faggian Mario",
  "Favero Nicola",
  "Gabbatore Emanuele",
  "Lando Lorenzo",
  "Luise Leone",
  "Olejniczak Denis",
  "Paiano Francesco",
  "Palese Marco",
  "Paulino Marcus",
  "Pattaro Tommaso",
  "Picello Davide",
  "Rafi Ismail",
  "Ramon Pietro",
  "Rocco Pietro",
  "Siscanu Matteo",
  "Zanardi Nicolo",
  "Zecchin Manuel"
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
