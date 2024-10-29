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
    let trEli= document.createElement("tr");
    let tdEli= document.createElement("td");
    let btnEli= document.createElement("button");
    let btnTxtEli= document.createTextNode("Esborrar");
    btnEli.className="btn btn-primary btn-lg";
    btnEli.addEventListener("click", () => esborrar(ele.id))
    btnEli.appendChild(btnTxtEli);
    tdEli.appendChild(btnEli);
    trEli.appendChild(tdEli);


    let tdMod= document.createElement("td");
    let btnMod= document.createElement("button");
    let btnTxtMod= document.createTextNode("Modificar");
    btnMod.className="btn btn-primary btn-lg";
    btnMod.addEventListener("click", () => modificar(ele.id))
    btnMod.appendChild(btnMod);
    tdMod.appendChild(btnMod);
    

    files.appendChild(trEli);

}

function esborrar (id){
    // fer les comprobacions si l'autor es pot esborrars. 
        console.log(id)
    // esborrar del localstorage


    //Esborrar de la llista de la pàgina html ( mai recargar la pàgina)


}

    function modificar (id,nom,any) {
        //guardar valors al local storage 
        localStorage.setItem("modAutor",JSON.stringify(autor));
        
        window.location.assign("modificarAutors.html");
    }
