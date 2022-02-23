
// export default () => ({ })


/* en el estado almacenamos la informacion */
 export default () => ({
     isLoading:true,
     entires: [ 
         {
             id: new Date().getTime(), //163t8784383
             date: new Date().toDateString(), // sat 23 , july
             text: 'En los últimos días de la Segunda Guerra Mundial, con el Tercer Reich desmoronándose y las Fuerzas Aliadas adentrándose en Alemania, la joven Lore, se ve obligada a emprender un peligroso viaje con sus cuatro hermanos hasta Hamburgo, al enterarse de la detención de sus padres por pertenecer a las SS.',
             picture: null
         },
         {
            id: new Date().getTime() + 1000, //163t8784383
            date: new Date().toDateString(), // sat 23 , july
            text: 'En los últimos días de la Segunda Guerra Mundial, con el Tercer Reich desmoronándose y las Fuerzas Aliadas adentrándose en Alemania, la joven Lore, se ve obligada a emprender un peligroso viaje con sus cuatro hermanos hasta Hamburgo, al enterarse de la detención de sus padres por pertenecer a las SS.',
            picture: null
        },
        {
            id: new Date().getTime() + 2000, //163t8784383
            date: new Date().toDateString(), // sat 23 , july
            text: 'En los últimos días de la Segunda Guerra Mundial, con el Tercer Reich desmoronándose y las Fuerzas Aliadas adentrándose en Alemania, la joven Lore, se ve obligada a emprender un peligroso viaje con sus cuatro hermanos hasta Hamburgo, al enterarse de la detención de sus padres por pertenecer a las SS.',
            picture: null
        }

     ]
  })