window.onload = main;


function main() {

document.getElementById("nouClient").addEventListener("click",nouClient);

obtindreClients();
    }

function nouClient(){
    window.location.assign("altaClient.html");
}

// Obtindre les dades
function obtindreClients() {
    //obtindre de localstorage 
    let clients = JSON.parse(localStorage.getItem("Client"))
    clients.forEach(element => {
        afegirLinia(element)
        
    });
    // recorrer l'arrray i mostar en pantalla els elements.                
}
function afegirLinia(ele){
    let files = document.getElementById("files");
    let trEle= document.createElement("tr");
    let tdEle= document.createElement("td");
    let btnEle= document.createElement("button")
    let btnTxt=

}

function esborrar (id){
    // fer les comprobacions si l'autor es pot esborrars. 

    // esborrar del localstorage


    //Esborrar de la llista de la pàgina html ( mai recargar la pàgina)


}

    function modificar (id,nom,any) {
        //guardar valors al local storage 
        localStorage.setItem("modAutor",JSON.stringify(autor));
        
        window.location.assign("modificarAutors.html");
    }
