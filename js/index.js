// JAVASCRIPT EXERCISES:


// 1) Variables y Operadores

// a) Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la
//  suma de ambos números en una 3er variable.

var num1 = 5;
var num2 = 2;
var sum = num1 + num2;
console.log('Sum: ', sum);

// b) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er
//  variable.

var str1 = 'John ';
var str2 = 'Doe';
var concat = str1 + str2;
console.log('Concat: ', concat);

// c) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras
//  del string) guardando el resultado de la suma en una 3er variable (utilizar length).

var str3 = 'Foo';
var str4 = 'Bar';
var strLength = str3.length + str4.length;
console.log('Str Lenght: ', strLength);


//=============================================================================================


// 2) Strings

// a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto
//  en mayúscula (utilizar toUpperCase).

var str5 = 'javascript';
var upper = str5.toUpperCase();
console.log('Upper: ', upper);

// b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
//  con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar
//  substring).

var str6 = 'Fullstack developer';
var substr1 = str6.substring(0, 5);
console.log('Substring 1: ', substr1);

// c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
//  con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar
//  substring).

var str7 = 'Web Application';
var substr2 = str7.substring(12);
console.log('Substring 2: ', substr2);

// d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
//  con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en
//  una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

var str8 = 'new Substring';
var substr3 = str8.substring(0, 1).toUpperCase() + str8.substring(1).toLowerCase();
console.log('Substring 3: ', substr3);

// e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
//  Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar
//  indexOf).

var str9 = 'Use IndexOf';
var spaceIndex = str9.indexOf(' ');
console.log('Space Index: ', spaceIndex);

// f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún
//  espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un
//  nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás
//  letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el
//  operador +).

var str10 = 'last substring';
var substr4 = str10.substring(0, 1).toUpperCase() +
    str10.substring(1, 5).toLowerCase() +
    str10.substring(5, 6).toUpperCase() +
    str10.substring(6).toLowerCase();
console.log('Last substring: ', substr4);


//=============================================================================================


// 3) Arrays

// a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
//  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por
//  consola los meses 5 y 11 (utilizar console.log).

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log('Mes 5: ', meses[4]);
console.log('Mes 11: ', meses[10]);

// b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

meses.sort();
console.log('Meses ordenados alfabeticamente: ', meses);

// c) Agregar un elemento al principio y al final del array (utilizar unshift y push).

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses.unshift('Antes');
meses.push('Despues');
console.log('Meses agregados: ', meses);

// d) Quitar un elemento del principio y del final del array (utilizar shift y pop).

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses.shift();
meses.pop();
console.log('Meses suprimidos: ', meses);

// e) Invertir el orden del array (utilizar reverse).

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses.reverse();
console.log('Meses invertidos: ', meses);

// f) Unir todos los elementos del array en un único string donde cada mes este separado
//  por un guión - (utilizar join).

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var mesesEnString = meses.join('-');
console.log('Meses en string: ', mesesEnString);

// g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre
//  (utilizar slice).

var mesesSlice = meses.slice(4, 11);
console.log('Meses slice: ', mesesSlice);


//=============================================================================================


// 4) If Else

// a) Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es
//  mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un
//  alerta con el mensaje “Lower than 0,5”

var random = Math.random();
console.log('Random number: ', random);

if (random >= 0.5) {
    alert('Greather than 0,5');
} else {
    alert('Lower than 0,5');
}

// b) Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los
//  siguientes mensajes de alerta:

var Age = Math.random() * 100;
console.log('Age: ', Age);

// i) “Bebe” si la edad es menor a 2 años
// ii) “Nino” si la edad es entre 2 y 12 años
// iii) “Adolecente” si la edad es entre 13 y 19 años
// iv) “Joven” si la edad está entre 20 y 30 años
// v) “Adulto” entre 31 y 60 años
// vi) “Adulto mayor” entre 61 y 75 años
// vii) “Anciano” si es mayor a 75 años

if (Age < 2) {
    alert('Bebe');
} else if (2 < Age && Age <= 12) {
    alert('Nino');
} else if (13 < Age && Age <= 19) {
    alert('Adolescente');
} else if (20 < Age && Age <= 30) {
    alert('Joven');
} else if (31 < Age && Age <= 60) {
    alert('Adulto');
} else if (61 < Age && Age <= 75) {
    alert('Adulto mayor');
} else if (75 < Age) {
    alert('Anciano');
}


//=============================================================================================


// 5) For

// a) Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de
//  JavaScript para mostrar una alerta utilizando cada una de las palabras.

var fiveWords = ['first', 'second', 'third', 'fourth', 'fifth'];
for (var i = 0; i < fiveWords.length; i++) {
    alert(fiveWords[i]);
}

// b) Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una
//  alerta por cada palabra modificada.

for (var i = 0; i < fiveWords.length; i++) {
    var firstLetterCapital = fiveWords[i].charAt(0).toUpperCase();
    var rest = fiveWords[i].substring(1);
    var wordWithCapitalize = firstLetterCapital + rest;
    alert(wordWithCapitalize);
}

// c) Crear una variable llamada “sentence” que tenga un string vacío, luego al array del
//  punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la
//  variable sentence. Al final mostrar una única alerta con la cadena completa.

var sentence = '';

for (var i = 0; i < fiveWords.length; i++) {
    sentence += fiveWords[i] + ' ';
}

alert(sentence);

// d) Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el
//  número de la repetición, es decir que al final de la ejecución del bucle for deberia
//  haber 10 elementos dentro del array, desde el número 0 hasta al numero 9. Mostrar
//  por la consola del navegador el array final (utilizar console.log).

var emptyArr = [];

for (var i = 0; i < 10; i++) {
    emptyArr.push(i);
}

console.log('Array con 10 elementos: ', emptyArr);


//=============================================================================================


// 6) Funciones

// a) Crear una función suma que reciba dos valores numéricos y retorne el resultado.
//  Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha
//  variable en la consola del navegador.

var suma1 = function(arg1, arg2) {
    return arg1 + arg2;
}

var result1 = suma1(8, 1);
console.log('Resultado 1: ', result1);

// b) A la función suma anterior, agregarle una validación para controlar si alguno de los
//  parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros
//  tiene error y retornar el valor NaN como resultado.

var suma2 = function(arg1, arg2) {
    if (typeof arg1 !== "number" || typeof arg2 !== "number") {
        alert('Uno de los parámetros no es un número.')
        return NaN;
    } else {
        return arg1 + arg2;
    }
}

var result2 = suma2('Hola', 1);
console.log('Resultado 2: ', result2);

// c) Crear una función validate integer que reciba un número como parámetro y devuelva verdadero
//  si es un número entero.

var validateInteger = function(num) {
    if (num === Math.floor(num)) {
        return true;
    } else {
        console.log('El numero ' + num + ' no es entero');
    }
}

var validate = validateInteger(4.5);
console.log(validate);

// d) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números
//  sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el
//  número convertido a entero (redondeado). 

var suma3 = function(arg1, arg2) {
    if (typeof arg1 !== "number" || typeof arg2 !== "number") {
        alert('Uno de los parámetros no es un número.')
        return NaN;
    } else if (arg1 !== Math.floor(arg1)) {
        alert('El primer argumento no es entero.');
        return Math.round(arg1);
    } else if (arg2 !== Math.floor(arg2)) {
        alert('El segundo argumento no es entero.');
        return Math.round(arg2);
    } else {
        return arg1 + arg2;
    }
}

var result3 = suma3(5, 1.8);
console.log('Resultado 3: ', result3);

// e) Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la
//  función suma probando que todo siga funcionando igual.

var sum4Validate = function(arg1, arg2) {
    if (typeof arg1 !== "number" || typeof arg2 !== "number") {
        alert('Uno de los parámetros no es un número.')
        return NaN;
    }
}

var suma4 = function(arg1, arg2) {
    sum4Validate(arg1, arg2);
    return arg1 + arg2;
}

var result4 = suma2('Hola de nuevo', 1);
console.log('Resultado 4: ', result4);