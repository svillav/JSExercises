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