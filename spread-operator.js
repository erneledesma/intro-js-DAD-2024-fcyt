
let lenguajes = ['JavaScript', 'PHP', 'Python'];
let frameworks = ['React', 'Laravel', 'Django'];

// Unir los dos arreglos en uno solo - concat

let combinacion = lenguajes.concat(frameworks);

console.log(combinacion);

// Spread Operator o Rest Operator para unir los elementos de un arreglo

let nuevaCombinacion = [...lenguajes, ...frameworks];

let [ultimo] = [...lenguajes].reverse();

console.log(ultimo);

console.log(nuevaCombinacion);