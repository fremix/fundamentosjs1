/** Unir 2 objetos */

const producto = {
    nombre: 'Tablet',
    precio: 300,
    disponible: true    
}

const cliente = {
    nombre: 'Freddy',
    premium: true
}

/** usar Object.assign */

// const nuevoObjeto = Object.assign(producto, cliente); No
/** Spread operator */
const nuevoObjeto2 = {
    producto: {...producto},
    cliente: {...cliente}
    };
console.log(nuevoObjeto2);
//console.log(cliente);
//console.log(producto);