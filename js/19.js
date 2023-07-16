/** Validacion de mas de una condicion */

const saldo = 600;
const pagar = 500;
const tarjeta = true;

/*
if (saldo > pagar) {
    console.log('Puedes pagar con tu saldo');
} else if (tarjeta) {
    console.log('Puedes pagar con tu tarjeta');
}
else {
    console.log('No, no puedes pagar');
}
*/

/**
 * || - al menos una condicion debe cumplirse
 * && - todas las condiciones deben cumplirse
 */

if (saldo > pagar && tarjeta) {
    console.log('Puedes pagar');
} else {
    console.log('No, no puedes pagar');
}