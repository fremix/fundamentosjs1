/** Comparacion y operador estricto */

const numero1 = 20
const numero2 ='20';

/** Comparacion
 *  ==  ( Comparacion, pero no es estricto )
 *  === ( Comparacion estricta )
 */

console.log(typeof numero1);
console.log(typeof numero2);

/** Se puede convertir a Number con una funcion coercitiva  */
if (numero1 === Number(numero2)) {
    console.log('Si, son iguales');
} else {
    console.log('NO, no son iguales');
}

const autenticado = true;
if (autenticado) {
    console.log('Si esta autenticado');
}
