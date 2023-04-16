// console.log("Hello, World");

// const h1 = document.querySelector('h1');
// const p = document.querySelector('p');
// const parrafito = document.querySelector('.parrafito');
// const pid = document.getElementById('pid');
// const input = document.querySelector('input')



// console.log(input.value);

// console.log ({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input,
// });

// h1.innerHTML = 'Patito <br/> Feo';  //cambia nuestro HTML
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo')  //cambia el valor del atributo

// h1.classList.add('rojo');  //agrega un nuevo valor a la clase
// h1.classList.remove('verde'); //quita el valor 
// h1.classList.toggle('verde') //investigar
// h1.classList.contains('verde') //investigar

// const img = document.createElement('img');
// img.setAttribute('src', 'https://cdn.pixabay.com/photo/2023/03/17/16/34/train-7859021__340.jpg');
// console.log(img);

// pid.append(img);


// Eventos en JavaScript

const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular ')
const pResult = document.querySelector('#result');

btn.addEventListener('click', btnOnclick);

function btnOnclick() {
    const sumaInputs = (parseInt(input1.value)+ parseInt(input2.value));
    pResult.innerHTML = "Resultado: " +sumaInputs;
}

// //esti imprimira una concatenacion de los 2 input y no una suma ya que lo tomara como un string cada valor de los input.
// hay que hacer un paso mas para pasar los string a numeros, en esta oportunida se hizo con parseInt
