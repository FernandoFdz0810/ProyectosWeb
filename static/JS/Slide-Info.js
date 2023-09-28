$(document).ready(function(){
    const slide1 = $("#Informacion-Foto1");
    const slide2 = $("#Informacion-Foto2");
    const slide3 = $("#Informacion-Foto3");

    const fotos = [slide1,slide2,slide3];

    const interval = setInterval(function() {
        PhotoRightInfo();
      }, 5000);
    

    $(".Left-Photo-Info").click(function LeftPhotoInfo(){

        clearInterval(interval)

        //Obtengo propiedad CSS de cada una de las imagenes en el momento de hacer click

        var DisplaySlide1 = $("#Informacion-Foto1").css("display");
        var DisplaySlide2 = $("#Informacion-Foto2").css("display");
        var DisplaySlide3 = $("#Informacion-Foto3").css("display");

        var i

            
        const Display = [DisplaySlide1,DisplaySlide2,DisplaySlide3]

        if(Display[0] == "block"){
            i = 0
        }

        else if(Display[1] == "block"){
            i = 1
        }

        else if(Display[2] == "block"){
            i = 2
        }
            
        if(i == 0){
            fotos[i].toggle("fast")
            fotos[i+2].toggle("fast")
        }

        else if(i == 2){
            fotos[i].toggle("fast")
            fotos[i-1].toggle("fast")
        }

        else if(i == 1){
            fotos[i].toggle("fast")
            fotos[i-1].toggle("fast")
        }
        
    });


        $(".Right-Photo-Info").click(function(){
            clearInterval(interval)
            PhotoRightInfo();
        })

        //Creo una funcion separada para poder llamarla cada x segundos

        function PhotoRightInfo(){

            //Obtengo propiedad CSS de cada una de las imagenes en el momento de hacer click

            var DisplaySlide1 = $("#Informacion-Foto1").css("display");
            var DisplaySlide2 = $("#Informacion-Foto2").css("display");
            var DisplaySlide3 = $("#Informacion-Foto3").css("display");

            var i

            
            const Display = [DisplaySlide1,DisplaySlide2,DisplaySlide3]

            if(Display[0] == "block"){
                i = 0
            }

            else if(Display[1] == "block"){
                i = 1
            }

            else if(Display[2] == "block"){
                i = 2
            }

            if(i == 0){
                fotos[i].toggle("fast")
                fotos[i+1].toggle("fast")
            }
    
            else if(i == 2){
                fotos[i].toggle("fast")
                fotos[i-2].toggle("fast")
            }
    
            else if(i == 1){
                fotos[i].toggle("fast")
                fotos[i+1].toggle("fast")
            }  
        }
})