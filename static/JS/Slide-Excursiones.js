$(document).ready(function(){    
    const slide1 = $(".Img-Excursiones1");
    const slide2 = $(".Img-Excursiones2");
    const slide3 = $(".Img-Excursiones3");

    const fotos = [slide1,slide2,slide3];

    const interval = setInterval(function() {
        PhotoRightInfo();
      }, 5000);

        //Creo una funcion separada para poder llamarla cada x segundos

    function PhotoRightInfo(){

        //Obtengo propiedad CSS de cada una de las imagenes en el momento de hacer click

        var DisplaySlide1 = $(".Img-Excursiones1").css("display");
        var DisplaySlide2 = $(".Img-Excursiones2").css("display");
        var DisplaySlide3 = $(".Img-Excursiones3").css("display");
            

        var i = 0

            
        const Display = [DisplaySlide1,DisplaySlide2,DisplaySlide3]

        if(Display[0] == "inline"){
            i = 0
        }

        else if(Display[1] == "inline"){
            i = 1
        }

        else if(Display[2] == "inline"){
            i = 2
        }
    
        if(i == 0){
            fotos[i].toggle("fast")
            fotos[i+1].toggle("fast")
        }

        if(i == 1){
            fotos[i].toggle("fast")
            fotos[i+1].toggle("fast")
        }

        if(i == 2){
            fotos[i].toggle("fast")
            fotos[i-2].toggle("fast")
        }


    }
});