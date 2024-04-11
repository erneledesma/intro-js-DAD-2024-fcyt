

const antenas = [
    { tipo: 'GSM900', alcance: 20, altura: 15, potencia: 30 },
    { tipo: 'GSM1900', alcance: 30, altura: 25, potencia: 50 },
    { tipo: '3G', alcance: 40, altura: 35, potencia: 60 },
    { tipo: '4G', alcance: 50, altura: 45, potencia: 80 }
]

console.log(antenas);

// Filtrar las antenas que tengan un alcance mayor a 30

const filtraAntenas = antenas.filter(antena => antena.alcance > 30);

const filtraAntenasPotencia = antenas.filter(antena => antena.potencia > 50);


console.log(filtraAntenas); 
console.log(filtraAntenasPotencia);

const tresG = antenas.find(antena => antena.tipo === '3G');

console.log(`La potencia de la antena es:  ${tresG.potencia} W`);