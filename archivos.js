function hacer(x){
    
    // Traemos los valores que ingreso la persona
    var propina = document.getElementById(x).value
    var montoTotal = document.getElementById("montoTotal").value
    var personas = document.getElementById("personas").value
    
    // Hacemos los calculos correspondientes para hallar la propina
    var total = montoTotal * propina / 100
    
    var totalPorPersona = total / personas
    
    // La propina obtenida la mostramos a la persona

    var totalTexto = document.getElementById("totalTexto")
    totalTexto.innerHTML= total
    var totalPorPersonas = document.getElementById("totalGeneral")
    totalPorPersonas.innerHTML= totalPorPersona


}
// Hacemos todas las operaciones pero esta vez con la opcion que permite a la persona escribir la propina que quiera
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

// Boton de reset  
function hac(){
    window.location.reload()
}

// Traemos los valores y realizamos validaciones para que no haya campos vacios al momento de realizar la operacion correspondiente

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