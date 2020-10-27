// 2) Strings

// a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto
//  en mayúscula (utilizar toUpperCase).

var str5 = 'javascript';
var uppercase = str5.toUpperCase();
console.log('Uppercase: ', uppercase);

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