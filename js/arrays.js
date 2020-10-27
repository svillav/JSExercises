// 3) Arrays

// a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
//  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por
//  consola los meses 5 y 11 (utilizar console.log).

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

console.log('Month 5: ', months[4]);
console.log('Month 11: ', months[10]);


// b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

months.sort();
console.log('Months ordered alphabetically: ', months);


// c) Agregar un elemento al principio y al final del array (utilizar unshift y push).

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

months.unshift('Before');
months.push('After');
console.log('Months added: ', months);


// d) Quitar un elemento del principio y del final del array (utilizar shift y pop).

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

months.shift();
months.pop();
console.log('Months removed: ', months);


// e) Invertir el orden del array (utilizar reverse).

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

months.reverse();
console.log('Months reversed: ', months);


// f) Unir todos los elementos del array en un único string donde cada mes este separado
//  por un guión - (utilizar join).

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

var stringMonths = months.join('-');
console.log('Months in string: ', stringMonths);


// g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre
//  (utilizar slice).

var mesesSlice = months.slice(4, 11);
console.log('Months slice: ', mesesSlice);