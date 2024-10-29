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
    // psar del JSON al localStorage. 
    //obtindre de localstorage 
    // recorrer l'arrray i mostar en pantalla els elements.                
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
