
function factorialN() {
    var N = prompt("Ingrese N", 3)
    var i = 1
    var resp = 1
    if (N >= 0) {
        if (N == 0) {
            alert("El factorial de N es " + resp)
        } else {
            while (N >= i) {
                resp = resp * i
                i = i + 1
            }
            alert("Factorial de N es: " + resp)
        }
    } else {
        alert("No factorial de un negativo")
    }
}

function calcularFactorial(N) {
    //var N = prompt("Ingrese N", 3)
    var i = 1
    var resp = 1
    if (N >= 0) {
        if (N == 0) {
            //alert("El factorial de N es " + resp)
            return resp
        } else {
            while (N >= i) {
                resp = resp * i
                i = i + 1
            }
            //alert("Factorial de N es: " + resp)
            return resp
        }
    } else {
        alert("No factorial de un negativo")
    }
}

function mayorAyB() {
    var A = parseInt(prompt("Ingrese A", 10))
    var B = parseInt(prompt("Ingrese B", 7))
    if (A == B) {
        alert("son iguales")
    } else {
        if (A > B) {
            alert("el mayor es A: " + A)
        } else {
            alert("el mayor es B: " + B)
        }
    }
}

function menorAyB() {
    var A = parseInt(prompt("Ingrese A", 10))
    var B = parseInt(prompt("Ingrese B", 7))
    if (A == B) {
        alert("son iguales")
    } else {
        if (A > B) {
            alert("el menor es B: " + B)
        } else {
            alert("el menor es A: " + A)
        }
    }
}

function obtenerDiv() {
    var A = parseInt(prompt("Ingrese A", 10))
    var B = parseInt(prompt("Ingrese B", 7))
    var resultado=0
    resultado=parseInt(A/B)
    alert(resultado)
}

function obtenerMod() {
    var A = parseInt(prompt("Ingrese A", 10))
    var B = parseInt(prompt("Ingrese B", 7))
    var resultado=0
    resultado=parseInt(A%B)
    alert(resultado)
}

function obtenerMod() {
    var A = parseInt(prompt("Ingrese A", 10))
    var B = parseInt(prompt("Ingrese B", 7))
    var resultado=0
    resultado=parseInt (A%B)
    alert(resultado)
}

function mostrarDigN() {
    var N = parseInt(prompt("Ingrese N", 9478324))
    var dig = 0
    while (N != 0) {
        dig = parseInt (N % 10)
        if (dig == 3){
            alert("Existe el dig 3")
        }
        N = parseInt  ()
    }
    
}

function calcularTrapecio(){
    var h = parseInt(prompt("Ingrese h", 10))
    var b = parseInt(prompt("Ingrese h", 5))
    var B = parseInt(prompt("Ingrese h", 15))
    var a = parseInt(prompt("Ingrese h", 10))
    var c = parseInt(prompt("Ingrese h", 7))
    var area = 0 
    var perimetro = 0
    area = ((b + B)/2) * h
    perimetro = a + b + B + C
    alert("El area es :"  + area )
    alert("El perimetro es :"  + perimetro )
}

function determinarNesParImpar(){
    var N = parseInt(prompt("Ingrese N"))
    if ((N % 2) == 0){
        alert(N + " es par.")
    } else {
        alert(N + " es impar.")
    }
}

function ifNormal() {
    var N = parseInt(prompt("Ingrese N"))
    if (N > 5) {
        N = 5
    } else {
        N = 5
        alert(N)
    }
}

function ifAbreviado() {
    var N = parseInt(prompt("Ingrese N"))
       (N > 5) 
        N = 10
    } 
        N = 1
        alert (N)
    

/*
    var N = parseInt(prompt("Ingrese N", 9478324))
    var cantidad = 0
    while (N != 0) {
        N = parseInt(N/ 10)
        cantidad = cantidad + 1
    }
    alert("digitos: " + cantidad)
*/

function obtenerCantidadDigN_FOR() {
    var N = parseInt(prompt("Ingrese N", 9478324))
    var cantidad
    for (cantidad = 0; N !=  0; cantidad++) {
        N = parseInt(N / 10)
    }
    alert("digitos: " + cantidad)
}
        
    function NmultiploDeM() {
        var N = parseInt(prompt("Ingrese N: ", 10))
        var M = parseInt(prompt("Ingrese M: ", 5))

        if ((N % M) == 0) {
            alert(N + " es multiplo de " + M)
        } else {
            alert(N + " no es multiplo de " + M)
        }
    }

function sumaDigMultiplos3deN() {
    var N = parseInt(prompt("Ingrese N: ", 23462314))
    var sum = 0
    var dig = 0
    while (N != 0) {
        dig = parseInt(N % 10)
        alert(dig)
        if ((dig % 3) == 0) {
            sum = sum + dig
        } else {

        }
    }
}

function sumarNrosEntreAyB() {
    var A = parseInt(prompt("Ingrese A: ", 3))
    var B = parseInt(prompt("Ingrese B: ", 9))
    var suma = 0

    
} 

function promedioNdeNotas() {
    var N = parseInt(prompt("Ingrese N: ", 15))
    var sumaNota = 0
    var i = 0
    while(N > i){
        i = i + 1
        var nota = parseInt(prompt("Ingrese Nota: ", 80))
        sumaNota = sumaNota + nota
    }
    alert(sumaNota/N)
}

var myVariableGlobal = "Hola mundo"

function obtenerNombreCompleto(nombre, apellido) {
    var nombreCompleto = nombre + " " + apellido
    return nombreCompleto
}

function obtenerEdad() {
    edad = edad + 10
    return edad
}

function verificarMayorEdad() {
    if(edad >= 18){
        alert("Puedes pasar" + myVariableGlobal)
    } else {
        alert("Vuelve cuando tengas 18" + myVariableGlobal)
    }
}

function funcionConReturn() {
    var myNombreCompleto = obtenerNombreCompleto("carlos", "Medina")
    var myEdad = obtenerEdad(10)
    alert("Nombre: " + myNombreCompleto)
    alert("Edad: " + myEdad)
    verificarMayorEdad(myEdad)
}

/* SECCION DE CODIGO PARA LA CALCULADORA*/

//dar un nuevo valor al INPUT "resultado" en la pàgina html
function obtenerValor(dig) {
    document.getElementById("resultado").value = valor
}

// obtener el valor actual del INPUT "resultado" en la pag html
function obtenerValor() {
    var nro = document.getElementById("resultado").value
    return nro
    //alert nro
}

//adjuntar un nuevo valor a la derecha
// del INPUT "resultado" en la pag html
function adjuntarValor(numero) {
    var actualNumero = obtenerValor()
    var juntarNumeros = actualNumero + "" + numero
    darValor(juntarNumeros)
}



















function factorial(){
    var N = obtenerValor()
    var resultadoFact = calcularFactorial(N)
    darValor(resultadoFact)
    //alert("Soy Factorial")
}

function potencia(){
    alert("Soy Potencia")
}

function borrar(){
    var vacio
    //alert("Soy Borrar")
}

function dividir(){
    alert("Soy Dividir")
}

function numero(dig){
    adjuntarValor(dig)
   //alert("Soy Numero " + dig)
}

function multiplicar(){
    alert("Soy Multiplicar ")
}

function restar(){
    alert("Soy Restar")
}

function sumar(){
    alert("Soy Sumar")
}

function sumar(){
    alert("Soy Sumar")
}

function masMenos(){
    var valorResualtado = obtenerValor()
    if(valorResualtado == 0){
        //nada
    }else{
        if(valorResualtado > 0){
            //positivo
            valorResualtado = valorResualtado * -1
        }else{
            //negativo
            valorResualtado = valorResualtado * -1
        }
    }
    darValor(valorResualtado)
    //alert("Soy Mas Menos" + valorResultado)
}

