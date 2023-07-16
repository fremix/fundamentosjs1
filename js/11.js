/** Iteradores em JS */

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.JS'];

/** forEach - accede a cada elemento del array*/

const arrayForeach = tecnologias.forEach( function(tech) {
    return tech;
})


/** Map - en react se usa mas MAP, crea un nuevo arregle */

const arrayMap = tecnologias.map( function(tech) {
    return tech;
})


console.log(arrayForeach);
console.log(arrayMap);