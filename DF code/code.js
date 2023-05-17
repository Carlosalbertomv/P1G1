
function factorialN(){
var N = prompt ("Ingrese N", 3)
var i = 1
var resp = 1
if (N >= 0) {
 if (N == 0) {
    alert("el factorial de N es " + resp)
    } else {
while (N > i) {
    resp + resp * i
    i = i + 1
}
    alert("no factorial de un negativo")
}

}



function mayorAyB () {
  var A = parseint prompt("ingrese A", 10)
  var B = prompt("ingrese B", 7)
  if(A==B){
     alert("son iguales")
  } else {
    if (A>B) {
        alert("el mayor es A: " + A)
    } else {
        alert("el mayor es B: "+ B)
  }
}
}