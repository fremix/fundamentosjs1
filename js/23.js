/** Manipular elementos HTML con JS */

const heading = document.querySelector('.heading');
const enlace = document.querySelector('.navegacion a');

enlace.textContent = 'Nuevo enlace'
heading.textContent = 'Nuevo Heading'
console.log(heading.textContent);
console.log(enlace);

const inputNombre = document.querySelector('#nombre');
inputNombre.value = 'Un valor por default'
console.log(inputNombre);


