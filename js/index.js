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