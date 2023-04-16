// Replica el comportamiento de los siguientes ciclos for utilizando ciclos while: 

//  for (let i = 0; i < 5; i++) { 
// console.log("El valor de i es: " + i); }

while ( i < 5 ) {
    console.log(i);
    i++;
    }


    
    // for (let i = 10; i >= 2; i--) {
    //     console.log("El valor de i es: " + i);
    // }


    let i = 10;

    while ( i >= 2) {
        console.log(i);
        i--;
    }

    // Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`.
    //  Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

    let mensaje = (prompt ("Cuanto es la suma de 2+2?:"));


    while ( mensaje != 4) {
        
        mensaje =(prompt("Cuanto es 2+2"));
         }

         alert ( "Felicidades");


