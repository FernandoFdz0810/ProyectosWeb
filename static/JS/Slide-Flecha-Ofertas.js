$(document).ready(function(){
    
    var WidthContainerOfertas = $(".Info-Containers-Oferta").css("width");
    var DisplayOfertas = $(".Info-Containers-Oferta").css("display");

    //Creo una funcion para poder hacer la animacion cada casi 4 segundos

    const interval = setInterval(function() {
      RightPhotoOfertas();
    }, 4000);

    $(".Left-Photo").click(function(){

          //Si el usuario clicka, se para la animacion automática

          clearInterval(interval)

          $(".Info-Containers-Oferta").toggle("fast")

          $(".Info-Containers-Oferta2").toggle("fast")
          $(".Info-Containers-Oferta2").css("display", "flex")

          if ($(".Info-Containers-Oferta").css("display") == "none"){
            $(".Info-Containers-Oferta2").css("display", "flex")
          }
 
    })

    $(".Right-Photo").click(function(){
      //Si el usuario clicka, se para la animacion, y se ejecuta la animacion manualmente

      clearInterval(interval)
      RightPhotoOfertas();
    })

    //Funcion para deslizar hacia la derecha

    function RightPhotoOfertas(){
      $(".Info-Containers-Oferta").toggle("fast")

      $(".Info-Containers-Oferta2").toggle("fast")
      $(".Info-Containers-Oferta2").css("display", "flex")

      if ($(".Info-Containers-Oferta").css("display") == "none"){
        $(".Info-Containers-Oferta2").css("display", "flex")
      }
    }
})