$(document).ready(function(){
    //Al ejecutar Formulario
    $(".Formulario").submit(function(){

        var datosFormulario = $(this).serialize();

        $.get("/InicioSesion", datosFormulario, procesarDatos);

        return false;

    });

    function procesarDatos(datos_devueltos){

        if(datos_devueltos == 'autorizado')
    }
})