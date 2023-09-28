//Create XMLHttpRequest object
function CargarDoc() {
    const xhttp = new XMLHttpRequest();
    //Definir funcion de retorno 
    xhttp.onload = function (){
        document.getElementsByClassName("TextoAjax").innerHTML = this.responseText;
    }

    // Mandar una respuesta
    xhttp.open("GET", "info.xml");
    xhttp.send();
}
