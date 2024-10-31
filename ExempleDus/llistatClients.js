window.onload = main;


function main() {

document.getElementById("nouClient").addEventListener("click",nouClient);

obtindreClients();
    }

function nouClient(){
    window.location.assign("./altaClient.html");
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
    let trfila= document.createElement("tr");
    let tdEli= document.createElement("td");
    let btnEli= document.createElement("button");
    let btnTxtEli= document.createTextNode("Esborrar");
    btnEli.className="btn btn-primary btn-lg";
    btnEli.addEventListener("click", () => esborrar(ele.id))
    btnEli.appendChild(btnTxtEli);
    tdEli.appendChild(btnEli);
    trfila.appendChild(tdEli);


    let tdMod= document.createElement("td");
    let btnMod= document.createElement("button");
    let btnTxtMod= document.createTextNode("Modificar");
    btnMod.className="btn btn-primary btn-lg";
    btnMod.addEventListener("click", () => modificar(ele.id))
    btnMod.appendChild(btnTxtMod);
    tdMod.appendChild(btnMod);
    trfila.appendChild(tdMod);
    
    let tdVis= document.createElement("td");
    let btnVis= document.createElement("button");
    let btnTxtVis= document.createTextNode("Visualitzar");
    btnVis.className="btn btn-primary btn-lg";
    btnVis.addEventListener("click", () => modificar(ele.id))
    btnVis.appendChild(btnTxtVis);
    tdVis.appendChild(btnVis);
    trfila.appendChild(tdVis);

    let tdId= document.createElement("td");
    let idTxt= document.createTextNode(ele.id);
    tdId.appendChild(idTxt);
    trfila.appendChild(tdId);

    let tdNom= document.createElement("td");
    let nomTxt= document.createTextNode(ele.name);
    tdNom.appendChild(nomTxt);
    trfila.appendChild(tdNom);

    let tdNif= document.createElement("td");
    let nifTxt= document.createTextNode(ele.nif);
    tdNif.appendChild(nifTxt);
    trfila.appendChild(tdNif);


    let tdTel= document.createElement("td");
    let telTxt= document.createTextNode(ele.phone);
    tdTel.appendChild(telTxt);
    trfila.appendChild(tdTel);

    let tdEma= document.createElement("td");
    let emaTxt= document.createTextNode(ele.email);
    tdEma.appendChild(emaTxt);
    trfila.appendChild(tdEma);

    files.appendChild(trfila);

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
        
        window.location.assign("modificarClient.html");
    }
