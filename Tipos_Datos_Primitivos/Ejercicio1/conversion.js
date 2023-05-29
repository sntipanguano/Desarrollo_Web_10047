//Samantha Tipanguano 
//Ejercicio 1: Conversión de tipos
//En este ejercicio, se solicita al usuario que ingrese un número como cadena de texto, se
//convierte a tipo de dato numérico y se realiza una operación matemática

var numeroTexto = prompt("Ingresa un número:");

var numero = Number(numeroTexto);

var resultado = numero * 2; // Ejemplo: multiplicar el número por 2

alert("El resultado es: " + resultado);

// codigo realizado con una libreria para node.js

/*// Importa el módulo readline
const readline = require('readline');

// Crea una interfaz de lectura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pregunta al usuario por un número
rl.question('Ingresa un número: ', (numeroStr) => {
  // Convierte la cadena a número
  const numero = Number(numeroStr);

  // Verifica si la conversión fue exitosa
  if (isNaN(numero)) {
    console.log('El valor ingresado no es un número válido.');
  } else {
    // Realiza una operación matemática cualquiera
    const resultado = numero * 2; // Puedes cambiar la operación a tu gusto

    console.log('El resultado de la operación es:', resultado);
  }

  // Cierra la interfaz de lectura
  rl.close();
});*/
















