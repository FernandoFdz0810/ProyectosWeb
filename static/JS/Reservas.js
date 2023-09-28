$(document).ready(function(){
    $("#Actividad").on('change', function(){
        var Actividad = $(this).val();

        if(Actividad == "Senderismo"){
            $(".SubActividad-Senderismo").css("display", "block");
            $(".SubActividad-Caballo").css("display", "none");
            $(".SubActividad-Piragüismo").css("display", "none");
            $(".SubActividad-Paintball").css("display", "none");
            $("#NPersonas").attr({
                "min" : 1,
                "max" : 15
            });

        }
    
        if(Actividad == "Montar a Caballo"){
            $(".SubActividad-Senderismo").css("display", "none");
            $(".SubActividad-Caballo").css("display", "block");
            $(".SubActividad-Piragüismo").css("display", "none");
            $(".SubActividad-Paintball").css("display", "none");
            $("#NPersonas").attr({
                "min" : 1,
                "max" : 10
            });
        }

        if(Actividad == "Piragüismo"){
            $(".SubActividad-Senderismo").css("display", "none");
            $(".SubActividad-Caballo").css("display", "none");
            $(".SubActividad-Piragüismo").css("display", "block");
            $(".SubActividad-Paintball").css("display", "none");
            $("#NPersonas").attr({
                "min" : 1,
                "max" : 20
            });
        }

        if(Actividad == "Paintball"){
            $(".SubActividad-Senderismo").css("display", "none");
            $(".SubActividad-Caballo").css("display", "none");
            $(".SubActividad-Piragüismo").css("display", "none");
            $(".SubActividad-Paintball").css("display", "block");
            $("#NPersonas").attr({
                "min" : 8,
                "max" : 20
            });
        }
        
    })
})

function Mensaje(){
    alert("Número de personas superadas")
}