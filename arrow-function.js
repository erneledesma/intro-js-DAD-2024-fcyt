// function expression

const router = function(nombreRouter, puertos, wifi) {
    console.log(`El router ${nombreRouter} tiene ${puertos} y ${wifi}`)
}

router('Cisco',  '4 puertos', 'wifi')

// arrow function

const router2 = (nombreRouter, puertos, wifi) => {
    console.log(`El router ${nombreRouter} tiene ${puertos} y ${wifi}`)
}

router2('Cisco 2802',  '4 puertos', 'wifi')
