//param esta declarado en el index y hace referencia la parametro
//user de la url actual
//constantes que usaremos para cambiar los parametros dependiendo del usuario
const tituloSeccion = document.querySelectorAll(".tituloseccion");
const tituloCancionSeccion1 = document.querySelectorAll(
  ".perder .song-perder .titulo"
);
const cantantesCancionSeccion1 = document.querySelectorAll(
  ".perder .song-perder .subtitulo"
);
const imagenesCancionSeccion1 = document.querySelectorAll(
  ".perder .song-perder img"
);
const tituloCancionSeccion2 = document.querySelectorAll(
  ".masgusta .song-masgusta .titulo"
);
const cantantesCancionSeccion2 = document.querySelectorAll(
  ".masgusta .song-masgusta .subtitulo"
);
const imagenesCancionSeccion2 = document.querySelectorAll(
  ".masgusta .song-masgusta img"
);
const bodyPagina = document.body;
//Si el parametro es el del usuario pepe, haremos las siguientes modificaciones
//los [] hacen referencia al numero de la cancion dentro de cierta seccion,
//por ejemplo tituloSeccion[1] hace referencia al titulo de la segunda seccion
if (param === "pepe") {
  bodyPagina.style.backgroundImage =
    "linear-gradient(0deg, rgba(44,58,59,1) 0%, rgba(55,69,64,1) 25%, rgba(156,142,112,1) 100%)";
  tituloSeccion[1].textContent = "Según lo que más te gusta";
  tituloSeccion[2].textContent =
    "Porque has escuchado canciones como 'Es tres'";
  //Primer apartado/seccion
  tituloCancionSeccion1[0].textContent = "El profesor";
  cantantesCancionSeccion1[0].textContent = "Juan Magán, Daddy Yankee, Aitana";
  imagenesCancionSeccion1[0].src = "img-songs/El_Profesor.png";
  imagenesCancionSeccion1[0].onclick = function () {
    musica("c4");
  };
  tituloCancionSeccion1[1].textContent = "Salesianos";
  cantantesCancionSeccion1[1].textContent = "Rauw";
  imagenesCancionSeccion1[1].src = "img-songs/Salesianos.png";
  imagenesCancionSeccion1[1].onclick = function () {
    musica("c8");
  };
  tituloCancionSeccion1[2].textContent = "DesAmor";
  cantantesCancionSeccion1[2].textContent = "Auronplay";
  imagenesCancionSeccion1[2].src = "img-songs/Desamor.png";
  imagenesCancionSeccion1[2].onclick = function () {
    musica("c7");
  };
  tituloCancionSeccion1[3].textContent = "Maestro...";
  cantantesCancionSeccion1[3].textContent = "BadVicente, Ozucente";
  imagenesCancionSeccion1[3].src = "img-songs/Maestro_sin_igual.png";
  imagenesCancionSeccion1[3].onclick = function () {
    musica("c1");
  };
  //Segundo apartado/seccion
  tituloCancionSeccion2[0].textContent = "El Pana...";
  cantantesCancionSeccion2[0].textContent = "Orson, Magus";
  imagenesCancionSeccion2[0].src = "img-songs/Panamiguel.png";
  imagenesCancionSeccion2[0].onclick = function () {
    musica("c5");
  };
  tituloCancionSeccion2[1].textContent = "España";
  cantantesCancionSeccion2[1].textContent = "DFFCDE";
  imagenesCancionSeccion2[1].src = "img-songs/España.png";
  imagenesCancionSeccion2[1].onclick = function () {
    musica("c10");
  };
  tituloCancionSeccion2[2].textContent = "Visigordos";
  cantantesCancionSeccion2[2].textContent =
    "Nixube, Juanelpeor, Lixferox, Hugoelcukas";
  imagenesCancionSeccion2[2].src = "img-songs/Visigordos.png";
  imagenesCancionSeccion2[2].onclick = function () {
    musica("c9");
  };
  tituloCancionSeccion2[3].textContent = "Victoria";
  cantantesCancionSeccion2[3].textContent = "Djmario";
  imagenesCancionSeccion2[3].src = "img-songs/Victoria.png";
  imagenesCancionSeccion2[3].onclick = function () {
    musica("c11");
  };

  //para el usuario ibai:
}
if (param === "ibai") {
  bodyPagina.style.backgroundImage =
    "linear-gradient(0deg, rgba(67,52,74,1) 25%, rgba(167,128,165,1) 100%)";

  tituloSeccion[1].textContent = "Hoy lo está petando";
  tituloSeccion[2].textContent = "Más cosas que te van";
  //Primer apartado/seccion
  tituloCancionSeccion1[0].textContent = "DesAmor";
  cantantesCancionSeccion1[0].textContent = "Auronplay";
  imagenesCancionSeccion1[0].src = "img-songs/Desamor.png";
  imagenesCancionSeccion1[0].onclick = function () {
    musica("c7");
  };
  tituloCancionSeccion1[1].textContent = "Maestro...";
  cantantesCancionSeccion1[1].textContent = "BadVicente, Ozucenteg";
  imagenesCancionSeccion1[1].src = "img-songs/Maestro_sin_igual.png";
  imagenesCancionSeccion1[1].onclick = function () {
    musica("c1");
  };
  tituloCancionSeccion1[2].textContent = "Victoria";
  cantantesCancionSeccion1[2].textContent = "Djmario";
  imagenesCancionSeccion1[2].src = "img-songs/Victoria.png";
  imagenesCancionSeccion1[2].onclick = function () {
    musica("c11");
  };
  tituloCancionSeccion1[3].textContent = "España";
  cantantesCancionSeccion1[3].textContent = "DFFCDE";
  imagenesCancionSeccion1[3].src = "img-songs/España.png";
  imagenesCancionSeccion1[3].onclick = function () {
    musica("c10");
  };
  //Segundo apartado/seccion
  tituloCancionSeccion2[0].textContent = "España";
  cantantesCancionSeccion2[0].textContent = "DFFCDE";
  imagenesCancionSeccion2[0].src = "img-songs/España.png";
  imagenesCancionSeccion2[0].onclick = function () {
    musica("c10");
  };
  tituloCancionSeccion2[1].textContent = "Es tres";
  cantantesCancionSeccion2[1].textContent = "Nicki, Ibai";
  imagenesCancionSeccion2[1].src = "img-songs/Es_tres.png";
  imagenesCancionSeccion2[1].onclick = function () {
    musica("c3");
  };
  tituloCancionSeccion2[2].textContent = "El Pana...";
  cantantesCancionSeccion2[2].textContent = "Orson, Magus";
  imagenesCancionSeccion2[2].src = "img-songs/Panamiguel.png";
  imagenesCancionSeccion2[2].onclick = function () {
    musica("c5");
  };
  tituloCancionSeccion2[3].textContent = "El profesor";
  cantantesCancionSeccion2[3].textContent = "Juan Magán, Daddy Yankee, Aitana";
  imagenesCancionSeccion2[3].src = "img-songs/El_Profesor.png";
  imagenesCancionSeccion2[3].onclick = function () {
    musica("c4");
  };
}
