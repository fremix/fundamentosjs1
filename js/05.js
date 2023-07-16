// TODO: Objetos - Manipulación

const producto = {
  nombre: "Tablet",
  precio: 300,
  disponible: true,
};

producto.nombre = 'Bicicleta';
producto.rodada = '28';

/** Proteger el objeto */
// TODO: freeze protege por completo el objeto, no permite modificar, eliminar y agregar
// Object.freeze(producto);

// TODO: seal, permite modificar propiedades existente, pero no permite agregar o eliminar

/** Reescribir un valor */
//producto.nombre = "Monitor Curvo";

/** Añadir una propiedad, sino existe la crea */
//producto.imagen = "foto.jpg";

/** Eliminar una propiedad del objeto */
delete producto.disponible;

console.table(producto);
