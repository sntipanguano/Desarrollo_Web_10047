//Samantha Tipanguano
//Ejercicio 2: Verificación de tipo de argumento de función
//En este ejercicio, se define una función que recibe un argumento y se muestra en la consola
//el tipo de dato utilizando el operador typeof.

// Definir la función de flecha que recibe un argumento
const tipoDeArgumento = arg => {
    const tipo = typeof arg;
    // Diccionario
    const diccionario = {
        "object": "objeto",
        "boolean": "booleano",
        "function": "función",
        "number": "número",
        "string": "cadena",
        "undefined": "undefined",
    };

    return diccionario[tipo];
};


const valores = ["Luis", 12312, {}, undefined, null, []];
for (const variable of valores) {
    const tipo = tipoDeArgumento(variable);
    console.log(`El tipo de ${variable} es ${tipo}`);
}