//declaro las constantes que utilizaremos
const podcasts = document.querySelectorAll(".song");
const podcastsWrapper = document.querySelector(".podcasts");
const podcastWidth = podcasts[0].offsetHeight;
let posicionActual = 0;
let posicionMax = podcasts.length - 1; // Cantidad de posiciones del carrusel o
//cantidad de veces que le podemos dar a los botones se este numero se aumenta,
//se podran hacer menos clicks a los botones
//constantes para los botones para interactuar con el carrusel
const botonIzq = document.querySelector(".izquierda");
const botonDer = document.querySelector(".derecha");
//si hacemos click en el boton izquierdo
botonIzq.addEventListener("click", () => {
  //si la posicion actual es mayor a 0
  if (posicionActual > 0) {
    //actualizo el valor de la posicion actual para quitarle 3
    //que son las posiciones que nos podemos mover cuando retrocedemos
    posicionActual = posicionActual - 3;
    //nos desplazaremos horizontalmente para poder ver mas canciones
    podcastsWrapper.style.transform = `translateX(${
      posicionActual * -podcastWidth
    }px)`;
  }
});
//si hacemos click en el boton derecho
botonDer.addEventListener("click", () => {
  //si la posicion actual es menor a la posicion maxima
  if (posicionActual < posicionMax) {
    //actualizo el valor de la posicion actual para sumarle 3
    //que son las posiciones que nos podemos mover cuando avanzamos
    posicionActual = posicionActual + 3;
    //nos desplazaremos horizontalmente para poder ver mas canciones
    podcastsWrapper.style.transform = `translateX(${
      posicionActual * -podcastWidth
    }px)`;
  }
});
