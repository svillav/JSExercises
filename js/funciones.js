// 6) Funciones

// a) Crear una función suma que reciba dos valores numéricos y retorne el resultado.
//  Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha
//  variable en la consola del navegador.

const sum1 = function(arg1, arg2) {
    return arg1 + arg2;
}

var result = sum1(8, 1);
console.log('Result 6a: ', result);


// b) A la función suma anterior, agregarle una validación para controlar si alguno de los
//  parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros
//  tiene error y retornar el valor NaN como resultado.

const sum2 = function(arg1, arg2) {
    if (isNaN(arg1)) {
        alert('Error: "' + arg1 + '" is not a number.');
        return NaN;
    } else if (isNaN(arg2)) {
        alert('Error: "' + arg2 + '" is not a number.');
        return NaN;
    } else {
        return arg1 + arg2;
    }
}

result = sum2('Hello', 2);
console.log('Result 6b: ', result);


// c) Crear una función validate integer que reciba un número como parámetro y devuelva verdadero
//  si es un número entero.

const validateInteger = function(num) {
    if (Number.isInteger(num)) {
        return true;
    } else {
        return num + ' is not integer.'
    }
}

result = validateInteger(5);
console.log('Result 6c: ', result);


// d) A la función suma del ejercicio 6b) agregarle una llamada que valide que los números
//  sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el
//  número convertido a entero (redondeado). 

const sum3 = function(arg1, arg2) {
    if (isNaN(arg1)) {
        alert('Error: "' + arg1 + '" is not a number.');
        return NaN;
    } else if (isNaN(arg2)) {
        alert('Error: "' + arg2 + '" is not a number.');
        return NaN;
    } else if (!Number.isInteger(arg1)) {
        alert('Error: "' + arg1 + '" is not integer.');
        return Math.round(arg1);
    } else if (!Number.isInteger(arg2)) {
        alert('Error: "' + arg2 + '" is not integer.');
        return Math.round(arg2);
    } else {
        return arg1 + arg2;
    }
}

result = sum3(4, 2.8);
console.log('Result 6d: ', result);


// e) Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la
//  función suma probando que todo siga funcionando igual.

const isNumber = function(arg1, arg2) {
    if (isNaN(arg1)) {
        alert('Error: "' + arg1 + '" is not a number.');
        return NaN;
    } else if (isNaN(arg2)) {
        alert('Error: "' + arg2 + '" is not a number.');
        return NaN;
    } else {
        return arg1 + arg2;
    }
}

const sum4 = function(arg1, arg2) {
    return isNumber(arg1, arg2);
}

result = sum4(2, 'Hello again');
console.log('Result 6e: ', result);