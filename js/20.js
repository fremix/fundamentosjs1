/** Condicionales - Ternario */

const autenticado = true;

autenticado ? 
    console.log('usuario autenticado') : 
    console.log('No autenticado, dirigir hacia el login');

/** Doble tarnario */

const saldo = 800;
const pagar = 700;
const tarjeta = true;

saldo > pagar ?
    console.log('puedes pagar con saldo') :
    tarjeta ?
        console.log('Puedes pagar con tarjeta') :
        console.log('No, no puedes pagar');


        const mayorEdad = 18;
        const menorEdad = 17;
        const tieneIne = true;

        mayorEdad < menorEdad ?
            console.log('Puede votar') :
            tieneIne ?
            console.log('No tiene credencial') :
            console.log('No, no puede votar');