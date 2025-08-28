const productos = [
    {
        id:'01',
        name: 'Ferrari 296 GTS',
        description: 'El 296 GTS, evolución de la berlinetta deportiva spider biplaza de Ferrari con motor central trasero, se beneficia del nuevo motor V6 de 120° acoplado a un motor eléctrico enchufable (PHEV), ya visto en el 296 GTB, capaz de entregar hasta 830 cv. El automóvil redefine así la idea de diversión al volante al garantizar emociones puras no solo cuando se buscan las máximas prestaciones, sino también en su conducción diaria.',
        category: 'nuevos',
        stock: 20,
        price: 6000,
        img: '../ejemplo1.jpg'
    },
    {
        id:'02',
        name: 'Ferrari SF90 Spider',
        description: 'El SF90 Spider, el primer Spider PHEV de serie del Cavallino Rampante, se erige como referencia en términos de rendimiento e innovación tanto dentro de la gama Ferrari como dentro del sector de vehículos deportivos. El vehículo hereda la configuración extrema y el rendimiento récord del SF90 Stradale, logrando aumentar el placer de conducción y la usabilidad gracias a la última versión del techo rígido plegable RHT. El SF90 Spider es el automóvil ideal para todos aquellos que buscan al máximo nivel de tecnología sin sacrificar la versatilidad y la emoción de conducir a cielo abierto.',
        category: 'ofertas',
        stock: 2,
        price: 3000,
        img: '../ejemplo2.jpg'
    },
     {
        id:'03',
        name: 'Ferrari SF90 Stradale',
        description: 'El nombre del automóvil sintetiza el verdadero significado de todo lo que se ha logrado en términos de prestaciones. La referencia al 90 aniversario de la creación de la Scuderia Ferrari subraya el fuerte vínculo que siempre ha existido entre circuito y carretera en todos los Ferrari. Además de toda una brillante apuesta por las tecnologías más avanzadas desarrolladas en Maranello, el SF90 Stradale  es también la demostración perfecta de cómo Ferrari traslada inmediatamente a todos sus coches el conocimiento y las habilidades que adquiere en la competición.',
        category: 'serie-especial',
        stock: 2,
        price: 4000,
        img: '../ejemplo3.jpg'
    }

]

// promesa
export const getProducts = ()=>{
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            if(error){
                //existe el error,rechazamos
                reject ('Hubo un error intente mas tarde')
            }else{
                resolve(productos)
            }
        },1000)
    })
}

export const getItem = (id) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            let prod = productos.find((item)=> item.id === id)
            resolve(prod)
        },2000)
    })
}