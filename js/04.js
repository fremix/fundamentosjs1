// TODO: Objetos

const producto = {
  nombre: "Tablet",
  precio: 300,
  disponible: true,
};

console.log(producto);
console.table(producto);
/*
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);*/

// TODO: Destructuring - Destructuración: Extraer valores del objeto

const { nombre, precio, disponible } = producto;

console.log(nombre, precio, disponible);


/****/

const colonia = {
  id: 1,
  seudonimo: 'Tamulte de las Sabanas',
  ubicacion: 'Noroeste',
  poblacion: 2680,
  zonaAlta: true,
}

console.log(colonia);
console.table(colonia)

const {id, seudonimo, ubicacion, poblacion, zonaAlta } = colonia;

console.log(colonia.id);
console.log(colonia.poblacion);


// TODO: Object Literal Enhacement: coloca valores en un objeto

const autenticado = true;
const usuario = "Freddy";

const nuevoObjeto = {
  autenticado,
  usuario,
};

console.table(nuevoObjeto);
