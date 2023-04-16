
const input1 =  document.querySelector('#valor1');
const input2 = document.querySelector('#valor2' );
const button = document.querySelector('#btCalcular');
const form = document.querySelector('#form');
const pResult = document.querySelector('#result');

// Escuchamos el evento del formulario 

form.addEventListener('submit', sumarInputValues);

// primero recibimos como parametro un event
function sumarInputValues(event) {
    //tenemos que llamar de ese event
    event.preventDefault();
    const sumaInputs = (parseInt(input1.value)+ parseInt(input2.value));
    pResult.innerHTML = "Resultado: " +sumaInputs;
}

