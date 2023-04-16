// crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

let productos =  ["Arroz", "Harina", "Azucar"];


function array (productos) {
    console.log(productos[0]);

}



// Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos
//  uno por uno (no se vale imprimir el array completo)

function array (productos) {
    for(  let i=0;  i < productos.length; i++) {
        console.log(productos[i]);
    }
   
}

// crea una funcione que pueda recibir cualquier objeto como parametro e imprima todos sus elementos 
// uno por uno (no se vale imprimir el objeto completo)

// tenemmos que comvertir el obejto en un array 


const obj = {
    nombre : "Juana",
    apellido: "Sandoval",
    sexo: "Femenino",
    edad: 33,
    comidasFavotitas: ["Pollo frito", "Vegeales"]
}

function imprimirObejto (obj) {
    const arr = Object.values (obj);
    for(  let i=0;  i < arr.length; i++) {
        console.log(arr[i]);
    }


}