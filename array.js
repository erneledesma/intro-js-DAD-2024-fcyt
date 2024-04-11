
const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4']

// console.log(carrito);
// console.log(carrito.length);

// let producto2 = carrito.push('Producto 4');

// recorrer un array y mostrar los productos y el .map crea un nuevo array
carrito.map( producto => {
    return `El producto es ${producto}`    

} )


console.log(carrito);