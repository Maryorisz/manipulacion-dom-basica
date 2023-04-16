// Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

// ```
// if (tipoDeSuscripcion == 'Free') {
//     console.log("Solo puedes tomar los cursos gratis");
// } else if (tipoDeSuscripcion == 'Basic') {
//     console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
// } else if (tipoDeSuscripcion == 'Expert') {
//     console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
// } else if (tipoDeSuscripcion == 'ExpertDuo') {
//     console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
// }


function conseguirTipoDeSuscripcion (suscripcion ) {

    if (suscripcion == "Free") {
        console.log("Solo puede tomar los cursos gratis") ;
        return;
    }


    if (suscripcion == "Basic") {
        console.log("Puedes tomar casi todos los cursos de platzi durante un mes") ;
        return;
    }

    if (suscripcion == "Expert") {
        console.log("Puedes tomar casi todos los cursos de platzi durante un año") ;
        return;
    }

    if (suscripcion == "ExpertDuo") {
        console.log("tu y alguine mas pueden tomar todos los cursos de platzi durante un año") ;
        return;
    }

    console.warn("Este tipo de suscripcion no existe")

}

// Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar
//  este comportamiento con arrays o objetos y un solo condicional

