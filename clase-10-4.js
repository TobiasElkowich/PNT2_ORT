
function arrays(numParaAgregar){
    let numArray = [1,2,3,4,5]
    console.log("array de numeros inicial: ", numArray)
    numArray.push(numParaAgregar)
    console.log("array de numeros con el nuevo numero: ", numArray)
    numArray.pop()
    console.log("array de numeros sin el nuevo numero: ", numArray)
}

function objetos(){
    let persona = {
        nombre: "Tobias",
        edad: 22,
        ocupacion: "Programador"
    }
    console.log("Nombre: ", persona.nombre)
}

let funciones = (num1, num2) => {
    console.log("Suma: ", num1+num2)
    console.log("Resta: ", num1-num2)
    console.log("Multiplicacion: ", num1*num2)
}

function metodos() {
    let numArray = [1,2,3,4,5]
    console.log("Array de numeros: ", numArray)
    console.log("Primer numero >3: ", numArray.find((num) => num > 3))
    console.log("Numeros >2: ", numArray.filter((num) => num > 2))
    console.log("Numeros *2: ", numArray.map((num) => num * 2))
}

arrays(6)
objetos()
funciones(25,11)
metodos()