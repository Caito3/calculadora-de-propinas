function hacer(x){
    
    var propina = document.getElementById(x).value
    var montoTotal = document.getElementById("montoTotal").value
    var personas = document.getElementById("personas").value
    

    var total = montoTotal * propina / 100
    
    var totalPorPersona = total / personas
    
    var totalTexto = document.getElementById("totalTexto")
    totalTexto.innerHTML= total
    var totalPorPersonas = document.getElementById("totalGeneral")
    totalPorPersonas.innerHTML= totalPorPersona


}
function otro(){
    var propina = document.getElementById("otro").value
    var montoTotal = document.getElementById("montoTotal").value
    var personas = document.getElementById("personas").value
    

    var total = montoTotal * propina / 100
    
    var totalPorPersona = total / personas
    var totalTexto = document.getElementById("totalTexto")
    totalTexto.innerHTML=total
    var totalPorPersonas = document.getElementById("totalGeneral")
    totalPorPersonas.innerHTML=totalPorPersona
}

function hac(){
    window.location.reload()
}

function validar(){
    var monto = document.getElementById("montoTotal").value
    var personas = document.getElementById("personas").value


    if(monto == 0 ){
    var montoAspecto = document.getElementById("validar")
    montoAspecto.style.display="block"
    }
    if(monto != 0){
        var montoAspecto = document.getElementById("validar")
        montoAspecto.style.display="none"
    }
}
function validarPersonas(){ 
    var monto = document.getElementById("montoTotal").value
    var personas = document.getElementById("personas").value

    if(personas == 0){
var personasAspecto = document.getElementById("validarPersonas")
personasAspecto.style.display="block"
    }
    if(personas != 0){
var personasAspecto = document.getElementById("validarPersonas")
personasAspecto.style.display="none"
    }
}