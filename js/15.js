/** Arrow Functions & Arrow Methods */

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.JS']
/*
const nuevoArray = tecnologias.map( tech => {
    if (tech === 'HTML') {
        return 'PHP'
    } else {
        return tech
    }
})*/


const nuevoArray2 = tecnologias.filter( tech => tech !== 'React' )

console.table(nuevoArray2);