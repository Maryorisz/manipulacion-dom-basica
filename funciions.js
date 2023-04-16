let nombre = "Maryoris ";
let apellido = "Zamora";

function nombreCompleto(nombre, apellido) {
    return (nombre + " " + apellido);
}

nombreCompleto(nombre, apellido); // Maryoris Zamora  


// const name = "Juan David";
// const lastname = "Castro Gallego";
// const completeName = name + lastname;
// const nickname = "juandc";

// console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

//convertir esto es una funcion 



const name = "Maryoris";
const lastName = "ZAmora";
const nickName = "Maryo";

function nombreCompleto(name, lastName, nickName) {
    return (`Mi nombre es: ${name}  ${lastName} pero prefiero que me digas ${nickName} `)

}

// esta solucion me da el resultado pero lo que queremos es que los argumentos sean dinamicos, entonces la 
// solucion es la siguiente 

function nombreCompleto (name, lastName) {
    return (name + " " +lastName);
}

function saludo (name, lastName, nickName) {
    const completename = nombreCompleto(name, lastName);

    console.log( `  Mi nombre es :" ${completename} pero prefiero que me digas ${nickName} `    )
}
