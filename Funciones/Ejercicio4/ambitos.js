//Samantha Tipanguano
//Ejercicio 2: Acceso a variables con el mismo nombre en diferentes ámbitos
//En este ejercicio, se declara una variable con el mismo nombre en el ámbito global y en una
//función. Se muestra en la consola el valor de ambas variables para observar cómo se
//accede a ellas y cuál prevalece en cada contexto.

// Declarar una variable global
var variable = "Samantha";

// Definir una función que declara una variable local con el mismo nombre
function mostrarVariables() {
  // Declarar una variable local con el mismo nombre
  var variable = "Nicole";

  // Mostrar el valor de la variable local en la consola
  console.log("Valor de la variable local:", variable);
}

// Mostrar el valor de la variable global en la consola
console.log("Valor de la variable global:", variable);

// Llamar a la función para mostrar el valor de la variable local
mostrarVariables();
