console.log("Desafio entregable N° 1 - Crear un algoritmo utilizando un ciclo");

// 1. Inicializamos las variables
let numeroIngresado = 0
let multiplicadorIngresado = 0
let resultado = 0
let tryAgain = ""

alert("Bienvenidos a PractiTablas!")
while (tryAgain != "no") {
    // 2. Solicito numero a multiplicar y su cantidad de veces a multiplicar
    numeroIngresado = parseInt(prompt("Ingresa el número que quieras saber su tabla de multiplicación!"))
    multiplicadorIngresado = parseInt(prompt("Ingresa el número de veces que quieras que se multiplique"))
    for (let i = 0; i <= multiplicadorIngresado; i++) {
        const resultado = numeroIngresado * i;
        // 3. Imprimimos el resultado en el html y consola
       document.write(numeroIngresado + " x " + i + " = " + resultado + " ││ ")
       console.log(numeroIngresado + " x " + i + " = " + resultado);
    }
    // 4. Pregunto si desea realizar ese mismo ciclo con otros 
    tryAgain = prompt("Deseas probar con otro número? Responder con si o no!")
}