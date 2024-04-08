

// function Declaration

function saludar( nombre ) {
    console.log(` Binvenido ${nombre}`)
}

saludar('Ernesto')

// Function Expression

const cliente = function(nombreCliente, tipoCliente, saldo) {
    console.log(`Mostrando datos del cliente... ${nombreCliente}`)
}

cliente('Ernesto Ledesma')

// Desarrolle una function Expresion que permita devolver el nombre y las 
//caractersiticas de un componente de un router
// Ejemplo: router('router', 'cisco', '4 puertos', 'wifi')

const router = function(nombreRouter, puertos, wifi) {
    console.log(`El router ${nombreRouter} tiene ${puertos} y ${wifi}`)
}

router('Cisco',  '4 puertos', 'wifi')
router('3com', '2 puertos Rj45', 'wifi')
router('Huawei', '5 puertos FDI', 'wifi')


// parametros por default en las funciones

function actividad(nombre = 'Ernesto',actividad = 'Desarrollador web') {
    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`)
}

actividad()
actividad('Juan', 'Aprendiendo JavaScript')