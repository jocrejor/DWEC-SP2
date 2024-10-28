window.onload = init;

function init() {
  document.getElementById("btnLogin").addEventListener("click", login);
}

function validarCorreu() {
  const pattern = RegExp(/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/);
  const correu = document.getElementById("correu");

  if (!correu.checkValidity()) {
    if (correu.validity.valueMissing) error(correu, "Ompli el teu usuari!");
    if (correu.validity.patternMismatch) error(correu, "L'usuari no està be!");
  } else if (pattern.test(correu.value)) return true;

  return false;
}

function validarPw() {
  const pattern = RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
  );
  const pw = document.getElementById("pw");

  if (!pw.checkValidity()) {
    if (pw.validity.valueMissing) error(pw, "Ompli el teu usuari!");
    if (pw.validity.patternMismatch) error(pw, "L'usuari no està be!");
  } else if (pattern.test(pw.value)) return true;

  return false;
}

function error(element, missatge) {
  const textError = document.createTextNode(missatge);
  const elementError = document.getElementById("missatgeError");
  elementError.appendChild(textError);
  element.classList.add("error");
  element.focus();
}

function esborrarError() {
  let formulari = document.forms[0].elements;
  for (let ele of formulari) {
    ele.classList.remove("error");
  }
  document.getElementById("missatgeError").replaceChildren();
}

function login(e) {
  const data = JSON.parse(localStorage.getItem("data")) || { users: [] };
  const users = data.users;
  const email = document.getElementById("correu").value;
  const password = document.getElementById("pw").value;

  esborrarError();
  e.preventDefault();
  const user = users.find((u) => u.email == email && u.password == password);
  

  if (user) {
    if (validarCorreu() && validarPw()) {
      localStorage.setItem("currentUserRole", user.user_profile_id);
      location.href = "llistatUsuaris.html";
    }
    return true;
  } else {
    error(
      document.getElementById("correu"),
      "Login incorrecte, verifiqueu el correu i la contrasenya."
    );
    return false;
  }
}
