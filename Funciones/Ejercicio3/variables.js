//Samantha Tipanguano
//Ejercicio 1: Acceso a variables dentro y fuera de una función
//En este ejercicio, se declara una variable global y una variable local dentro de una función.
//Se muestra en la consola el valor de ambas variables tanto dentro como fuera de la función
//para observar el alcance de cada una.

// Declarar una variable global
var varGlobal = "Soy una variable global";

// Definir una función que declara una variable local
function mostrarVariables() {
  // Declarar una variable local
  var varLocal = "Soy una variable local";

  // Mostrar el valor de la variable local en la consola
  console.log("Valor de la variable local dentro de la función:", varLocal);
}

// Mostrar el valor de la variable global en la consola
console.log("Valor de la variable global fuera de la función:", varGlobal);

// Llamar a la función para mostrar el valor de la variable local dentro de ella
mostrarVariables();
