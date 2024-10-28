window.onload = main;

function main() {
  obtindreUsuaris();
  const currentUserRole = JSON.parse(localStorage.getItem("currentUserRole"));
  const newUserButton = document.getElementById("nouUsuari");
  if (currentUserRole != 1) {
    newUserButton.style.display = "none";
  } else {
    document.getElementById("nouUsuari").addEventListener("click", nouUsuari);
  }
}

function nouUsuari() {
  window.location.assign("altaUsuaris.html");
}

// Obtindre les dades
function obtindreUsuaris() {
  const data = JSON.parse(localStorage.getItem("data")) || { users: [] };
  const users = data.users;

  // recorrer l'arrray i mostar en pantalla els elements.
  users.forEach((user) => {
    crearFila(user.id, user.email, user.user_profile_id);
  });
}

function crearFila(id, email, user_profile_id) {
  const currentUserRole = JSON.parse(localStorage.getItem("currentUserRole"));
  const tableBody = document.querySelector("tbody");

  const newRow = document.createElement("tr");
  newRow.setAttribute("id", id);

  // Creació botons
  const deleteButton = document.createElement("button");
  deleteButton.addEventListener("click", () => esborrarUsuari(id));
  const modifyButton = document.createElement("button");
  deleteButton.addEventListener("click", () => modificarUsuari(id));
  deleteButton.setAttribute("id", "esborrar");
  deleteButton.classList.add("btn", "btn-primary", "btn-lg");
  modifyButton.setAttribute("id", "modificar");
  modifyButton.classList.add("btn", "btn-primary", "btn-lg");
  const innerDeleteButton = document.createTextNode("Esborrar");
  const innerModifyButton = document.createTextNode("Modificar");
  deleteButton.appendChild(innerDeleteButton);
  modifyButton.appendChild(innerModifyButton);
  const tdDeleteButton = document.createElement("td");
  const tdModifyButton = document.createElement("td");
  tdDeleteButton.appendChild(deleteButton);
  tdModifyButton.appendChild(modifyButton);

  if (currentUserRole != 1) {
    deleteButton.style.display = "none";
    modifyButton.style.display = "none";
  }

  // Creació camps
  const tdEmail = document.createElement("td");
  const tdRole = document.createElement("td");
  const innerTdEmail = document.createTextNode(email);
  const innerTdRole = document.createTextNode(user_profile_id);
  tdEmail.appendChild(innerTdEmail);
  tdRole.appendChild(innerTdRole);

  // Afegir a la taula
  newRow.appendChild(tdDeleteButton);
  newRow.appendChild(tdModifyButton);
  newRow.appendChild(tdEmail);
  newRow.appendChild(tdRole);
  tableBody.appendChild(newRow);
}

function esborrarUsuari(id) {
  const data = JSON.parse(localStorage.getItem("data")) || { users: [] };
  let indexToDelete;

  data.users.forEach((user, index) => {
    // fer les comprobacions si l'autor es pot esborrars.

    if (user.id == id && user.user_profile_id != 1) {
      indexToDelete = index;
    }
  });

  // esborrar del localstorage
  data.users.splice(indexToDelete, 1);
  localStorage.setItem("data", JSON.stringify(data));

  //Esborrar de la llista de la pàgina html ( mai recargar la pàgina)
  const rowToDelete = document.getElementById(`${id}`);
  rowToDelete.remove();
}

function modificarUsuari(id, nom, any) {
  //guardar valors al local storage
  // localStorage.setItem("modAutor", JSON.stringify(autor));

  window.location.assign("modificarAutors.html");
}
