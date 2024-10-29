document.addEventListener("DOMContentLoaded", () =>{

    document.getElementById("carregar").addEventListener("click", carregar)
});

function carregar () {
    localStorage.setItem("clients", JSON.stringify(Client));

}