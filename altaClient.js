window.onload = iniciar;

function iniciar() {

    document.getElementById("btnGravar").addEventListener("click", validar, false);

}

function validarNom() {
    
    return true;

}


function validarNeix() {
    return true;
}



function validar(e) {
    esborrarError();
    e.preventDefault();
    if (validarNom() && 
        validarNeix()) {

        enviarFormulari();
        return true;

    } else {
        return false;
    }
}




function error(element, missatge) {
    const textError = document.createTextNode(missatge);
    const elementError = document.getElementById("missatgeError")
    elementError.appendChild(textError)
    element.classList.add( "error" )
    element.focus();
}

function esborrarError() {
    
    let formulari = document.forms[0].elements;
        for (let ele of formulari) {
            ele.classList.remove("error")
        }    
    document.getElementById("missatgeError").replaceChildren(); 

}

// enviar dades
function enviarFormulari() {
    // Grabar al localStorage

    setTimeout(function (){
        document.getElementById("nom").value="";
        document.getElementById("anynaix").value=0;

    },1000);
}