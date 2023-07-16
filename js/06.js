// TODO: Objetos - Destructuración con 2 o mas objetos

const producto = {
  nombre: "Tablet",
  precio: 300,
  disponible: true,
};

const cliente = {
  nombre: 'Freddy',
  premium: true
}

const {nombre, precio, disponible} = producto;
const {nombre: nombreCliente, premium} = cliente;

console.table(nombre, precio, disponible);
console.table(nombreCliente, premium);
console.table(cliente);
console.table(producto);