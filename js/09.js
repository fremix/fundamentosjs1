/** Operaciones en los Arreglos */

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.JS'];

/** Añadir elementos al Array */
//tecnologias.push('GraphQL', 'Svelte', 'MySQL') // Añade añ final del array : NO
//tecnologias.unshift('Atomix'); // Añade al inicio del array : NO

//const nuevoArreglo = [...tecnologias, 'GraphQL']
//const nuevoArreglo = ['GraphQL',...tecnologias ]

/** Eliminar elementos del Array */
// tecnologias.pop(); // elimina del final
// tecnologias.shift(); // elimina del inicio
// tecnologias.splice(2, 1) elimina de una posicion especifica

//const nuevoArray = tecnologias.filter( function(tech){
//return tech === 'React';
//})

/** Reemplazar elementos del Array */

// tecnologias[0] = 'GraphQL'; NO, ya que modifica el arreglo original

const nuevoArray = tecnologias.map( function(tech) {
    if (tech === 'HTML') {
        return 'GraphQL'
    } else {
        return tech
    }
})

console.table(tecnologias);
console.table(nuevoArray);

