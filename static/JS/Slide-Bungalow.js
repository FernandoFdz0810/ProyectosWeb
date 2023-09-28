$(document).ready(function(){
    const slide1 = $("#Bungalow-Foto1");
    const slide2 = $("#Bungalow-Foto2");
    const slide3 = $("#Bungalow-Foto3");
    const slide4 = $("#Bungalow-Foto4");
    const slide5 = $("#Bungalow-Foto5");

    const fotos = [slide1,slide2,slide3,slide4,slide5];

    const interval = setInterval(function() {
        PhotoRightInfo();
      }, 5000);
    

    $(".Left-Photo-Bungalow").click(function LeftPhotoInfo(){

        clearInterval(interval)

        //Obtengo propiedad CSS de cada una de las imagenes en el momento de hacer click

        var DisplaySlide1 = $("#Bungalow-Foto1").css("display");
        var DisplaySlide2 = $("#Bungalow-Foto2").css("display");
        var DisplaySlide3 = $("#Bungalow-Foto3").css("display");
        var DisplaySlide4 = $("#Bungalow-Foto4").css("display");
        var DisplaySlide5 = $("#Bungalow-Foto5").css("display");

        var i

            
        const Display = [DisplaySlide1,DisplaySlide2,DisplaySlide3,DisplaySlide4,DisplaySlide5]

        if(Display[0] == "block"){
            i = 0
        }

        else if(Display[1] == "block"){
            i = 1
        }

        else if(Display[2] == "block"){
            i = 2
        }

        else if(Display[3] == "block"){
            i = 3
        }

        else if(Display[4] == "block"){
            i = 4
        }
            
        if(i == 0){
            fotos[i].toggle("fast")
            fotos[i+4].toggle("fast")
        }

        if(i == 2){
            fotos[i].toggle("fast")
            fotos[i-1].toggle("fast")
        }

        if(i == 1){
            fotos[i].toggle("fast")
            fotos[i-1].toggle("fast")
        }

        if(i == 3){
            fotos[i].toggle("fast")
            fotos[i-1].toggle("fast")
        }

        if(i == 4){
            fotos[i].toggle("fast")
            fotos[i-1].toggle("fast")
        }
        
    });


        $(".Right-Photo-Bungalow").click(function(){
            clearInterval(interval)
            PhotoRightInfo();
        })

        //Creo una funcion separada para poder llamarla cada x segundos

        function PhotoRightInfo(){

            //Obtengo propiedad CSS de cada una de las imagenes en el momento de hacer click

            var DisplaySlide1 = $("#Bungalow-Foto1").css("display");
            var DisplaySlide2 = $("#Bungalow-Foto2").css("display");
            var DisplaySlide3 = $("#Bungalow-Foto3").css("display");
            var DisplaySlide4 = $("#Bungalow-Foto4").css("display");
            var DisplaySlide5 = $("#Bungalow-Foto5").css("display");

            var i

            
            const Display = [DisplaySlide1,DisplaySlide2,DisplaySlide3,DisplaySlide4,DisplaySlide5]

            if(Display[0] == "block"){
                i = 0
            }

            else if(Display[1] == "block"){
                i = 1
            }

            else if(Display[2] == "block"){
                i = 2
            }

            else if(Display[3] == "block"){
                i = 3
            }
    
            else if(Display[4] == "block"){
                i = 4
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
                fotos[i+1].toggle("fast")
            }

            if(i == 3){
                fotos[i].toggle("fast")
                fotos[i+1].toggle("fast")
            }
    
            if(i == 4){
                fotos[i].toggle("fast")
                fotos[i-4].toggle("fast")
            }
        }
})