//Samantha Tipanguano
//Ejercicio 2: Cálculo del área de un triángulo utilizando function expression (función anónima)
//En este ejercicio, se utiliza una función expresiva o función anónima para calcular el área de
//un triángulo. La función recibe la base y la altura como parámetros, realiza el cálculo del
//área y devuelve el resultado. Se realiza la llamada a la función y se muestra el resultado en
//la consola.

// Definir la función expresiva o función anónima para calcular el área de un triángulo
var calcularAreaTriangulo = function(base, altura) {
    var area = (base * altura) / 2;
    return area;
  };
  
  // Llamar a la función con la base y la altura del triángulo y mostrar el resultado en la consola
  var resultado = calcularAreaTriangulo(5, 7);
  console.log(resultado);
  