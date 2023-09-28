$(document).ready(function(){
  var Left = document.getElementById("Previous-Info")
  var Right = document.getElementById("Next-Info")
  var Container = document.getElementById("Container-Informacion-Foto")

  Left.addEventListener("click",slideLeft)
  Right.addEventListener("click", alerta)

  $(window).scroll(function(){
    if(document.body.scrollTop > 650 || document.documentElement.scrollTop > 650){
      $("Container-Informacion-Foto").toggle("slide")
      Container.style.display = "flex"
    }
    else{
      Container.style.visibility = "hidden"
    }
  })

  function alerta(){
    alert("Hola")
  }
  function slideLeft(){
    alert("Hola")
  }
})

