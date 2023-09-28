$(document).ready(function(){
    $("#Registrarse").click(function(){
        $(".Container-SignUp").toggle();
        $(".Container-LogIn").css("display", "none");  
    })

    $("#Atras-Inicio").click(function(){
        $(".Container-LogIn").toggle();
        $(".Container-SignUp").css("display", "none"); 
    })
})