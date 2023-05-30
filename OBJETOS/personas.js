//1.- NOMBRE DE LA CLASE
    class Personas{
    //2.- PROPIEDAD
    carnet = 0
    nombre = ""
    edad = 0

    //3.- CONTRUCTOR ASIGNAR VALORES POR DEFECTO
    constructor(){
        this.carnet = 1234567
        this.nombre = "Mynombre"
        this.edad = 100
    }

    //4.-SETTERS AND GETTERS - DAR Y OBTNER UN VALOR 
    GetCarnet(){
        return this.carnet
    }

    GetNombre(){
        return this.nombre
    }

    GetEdad(){
        return this.edad
    }

    SetCarnet(valor){
        this.carnet = valor
    }

    SetNombre(valor){
        this.nombre = valor
    }

    SetEdad(valor){
        this.edad = valor
    }

    //5.- LOS METODOS DE LA CLASE, 0,,,,,,,,
    contarVocales(){
        var cadena = this.GetNombre()
        var longitudCad = cadena.length
        var i = 0
        var contar = 0
        while (longitudCad > i) {
            var caracter = cadena[i]
            i++
            if (caracter == 'a' 
            || caracter == 'e'
            || caracter == 'i' 
            || caracter == 'o' 
            || caracter == 'u' ) {
                contar = contar + 1
            }
            //alert(caracter)
        }
        //alert("La Frecuencia de 'a, e, i, o, u, A, E, I, O, U'es: " + contar)
        return contar
    }

}