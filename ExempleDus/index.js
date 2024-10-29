document.addEventListener("DOMContentLoaded", () =>{

    document.getElementById("carregar").addEventListener("click", carregar)
});

function carregar () {
    localStorage.setItem("Client", JSON.stringify(Client));

}