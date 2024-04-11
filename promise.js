

// TODO Asincronismo con promesas

// Las promesas se utilizan para llamadas asincronas en JS
// Por ejemplo, cuando se hace una peticion a una API
//Esxisten dos estados de las promesas, que el codigo se ejecute correctamente o que falle

const aplicarDescuento = new Promise((resolve, reject) => {
    setTimeout(() => {

    const descuento = false;

    if(descuento){
        resolve('Descuento aplicado');
    } else {
        reject('No se pudo aplicar el descuento');
    }
}, 3000)
});


// Resolve:  Ejecuta el llamado a la promesa cundo se ejecuta correctamente
// Reject:  Ejecuta cuando la promesa falla

console.log(aplicarDescuento);