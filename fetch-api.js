
const peticion = fetch('https://api.spacexdata.com/v5/launches/latest')

peticion
.then(respuesta => respuesta.json() )
.then( data => {
        //Promise en cadena
    console.log(data)
    console.log(`La cantidad de vuelos del Falcon 9: ${data.flight_number}`)
    console.log(`LA URL de la imagen del Falcon 9 es: ${data.links.patch.small}`)

    const img = document.createElement('img')
    img.src = data.links.patch.small

    document.body.append(img)
})
.catch(console.warn)