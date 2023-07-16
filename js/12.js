/** Funciones - Function Declaration 

function sumar() {
    console.log(2+3);
}

sumar()

*/

/** Funciones con parametros y argunmentos */
/*
function cliente(name, appat, apmat) {
    console.log(name, appat, apmat);
}

cliente('Freddy', 'Morales', 'Izquierdo');*/

/* lo que esta en el parentesis despues 
del nombre de la funcion
se llama parametros 

function sumar(numero = 0, numeor2 = 0){
    console.log(numero + numeor2);
}

sumar(9,11);
sumar(9,21);
sumar(1000);
sumar();

// Con un Arrays
function sumar(numero = 0, numero2 = 0) {  
    return [numero + numero2, 'Hola Mundo']
}

const [resultado, holaMundo] = sumar(20, 30);

console.log(resultado);
console.log(holaMundo);*/

/** Con un objeto */
function sumar(numero = 0, numero2 = 0) {  
    return {
        resultado: numero + numero2,
        mensaje:   'Hola Mundo'
    }
}

const {resultado, mensaje} = sumar(20, 30);

console.log(resultado);
console.log(mensaje);