// Declaracion de variables 

let firstName = 'Alexis';
let lastName = 'Bustos';
let country = 'Mexico';
let city = 'Playa del Carmen';
let age = 21;
let isMarried = false;
let year = 2024;

console.log(typeof firstName); 
console.log(typeof lastName); 
console.log(typeof country); 
console.log(typeof city); 
console.log(typeof age); 
console.log(typeof isMarried);
console.log(typeof year); 

//Comprobación  si el tipo de '10' es igual a 10

console.log(typeof '10' === typeof 10); // False

//Comprobación de parseInt('9.8') si es igual a  10

console.log(parseInt('9.8') === 10); // False

//Declaraciones que dan valores verdadero

console.log(23 === age); // true
console.log(5 < 10); // true
console.log("12" != 0); // true

// Declaraciones que dan valores falso

console.log("" === age); // false
console.log(9 > 16); // false
console.log(12 == 6); // false

//Comparación de las expresiones 

let result1 = 4 > 3;        // true
let result2 = 4 >= 3;       // true
let result3 = 4 < 3;        // false
let result4 = 4 <= 3;       // false
let result5 = 4 == 4;       // true
let result6 = 4 === 4;      // true
let result7 = 4 != 4;       // false
let result8 = 4 !== 4;      // false
let result9 = 4 != '4';     // false
let result10 = 4 == '4';    // true
let result11 = 4 === '4';   // false

//Confirmación de los resultados usando console.log()

console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != '4'); // false
console.log(4 == '4'); // true
console.log(4 === '4'); // false

//Uso del objeto Date

const now = new Date();
console.log(now.getFullYear()); // Año en curso
console.log(now.getMonth() + 1); // Mes en curso (agregar 1)
console.log(now.getDate()); // Día del mes
console.log(now.getDay()); // Día de la semana (número)
console.log(now.getHours()); // Horas actuales
console.log(now.getMinutes()); // Minutos actuales
console.log(Math.floor(Date.now() / 1000)); // Segundos desde 1970

//Área de un triángulo
let base = prompt("Ingrese la base del triángulo: ");
let height = prompt("Ingrese la altura del triángulo: ");
let area = 0.5 * base * height;
console.log(`El área del triángulo es: ${area}`);

//Perímetro de un triángulo
let sideA = prompt("Ingrese el lado a del triángulo:");
let sideB = prompt("Ingrese el lado b del triángulo:");
let sideC = prompt("Ingrese el lado c del triángulo:");
let perimeter = Number(sideA) + Number(sideB) + Number(sideC);
console.log(`El perímetro del triángulo es: ${perimeter}`);

console.log('by Alexis Bustos')