/** Fetch API - El nuevo AJAX 

const url = "https://jsonplaceholder.typicode.com/comments";

const consultarAPI = () => {
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => {
      resultado.forEach((comentario) => {
        console.table(comentario);
      });
    });
};

consultarAPI();

const url = "https://jsonplaceholder.typicode.com/photos";

const consultaAPI = () => {
    fetch(url)
    .then( fotos => fotos.json()) 
    .then( resultado => {
        resultado.forEach((comentario) => {
            console.table(comentario);
        });
    });
};

consultaAPI();
*/


const url = "https://jsonplaceholder.typicode.com/users";

const consultAPI = () => {
    fetch(url)
    .then( users => users.json()) 
    .then( resultado => {
        resultado.forEach((comentario) => {
            console.table(comentario);
        })
    })
}

consultAPI();
