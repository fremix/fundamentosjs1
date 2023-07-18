/** Template Strings */

const producto = 'Tablet de 12 pulgadas',
    precio = 400,
    marca = 'Orange';

function textoDeFuncion() {
    return 'Este texto proviene de la funcion'
}

console.log(`${producto} $${precio} USD, marca: ${marca}, ${textoDeFuncion()}`);