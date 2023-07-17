/** Generando codigo HTML con JS */

const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', e => {
    e.preventDefault()

    const nombre = document.querySelector('.nombre').value;
    const password = document.querySelector('.password').value;

    /** Eliminar leyenda de alerta */
    alertaPrevia =    document.querySelector('.alerta'); 
    if (alertaPrevia) {
        alertaPrevia.remove()
    } else {
        
    }

    /** Creación de HTML */
    const alerta = document.createElement('DIV');
    alerta.classList.add('alerta')
  
    /** Validacion */
    if (nombre === '' || password === '') {
        alerta.textContent = 'Todos los campos son obligatorios';
        alerta.classList.add('error');
    } else {
        alerta.textContent = 'Todo bien, enviando...';
        alerta.classList.add('exito');
    }

       /** Para agregar el HTML en el Front  */
       formulario.appendChild(alerta);
});


