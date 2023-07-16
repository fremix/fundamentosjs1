/** Otros Arrays Methods */

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.JS'];
const numeros = [10, 20, 30]

/** Filter */
nuevoArray = tecnologias.filter( tech => tech !== 'React')

/** Comprobar si un elemento existe en el array 
const resultado = tecnologias.includes('PHP');*/ 

/**  Some - Devuleve si al menos uno cumple la condicion
const resultado = numeros.some( numero => numero > 50)*/

/** Find - Devuelve el primer elemento que cumpla la condición 
const resultado = numeros.find( numero => numero > 5 )*/

/** Every - Retorna true o false si todos cumplen la condicion 
const resultado = numeros.every( numero => numero > 9)*/

/** Reduce - Esta diseñado para cantidades - 
 * acumula en el total - inicia en el numero que se indique 
const resultado = numeros.reduce( (total, numero) => numero + total, 0)*/

/** Filter - Crea un nuevo array en base a una condicion 
const resultado = tecnologias.filter( tech => tech !== 'Node.JS');
const resultado = numeros.filter( numero => numero !== 10);*/

/** Solo para iterar 
tecnologias.forEach( (tech, index) => console.log(index));*/
    
/** Crea un nuevo array */
const arrayMap = tecnologias.map( tech => tech );

console.log(arrayMap);

/** Evita los arrays method que mutan el array original */
