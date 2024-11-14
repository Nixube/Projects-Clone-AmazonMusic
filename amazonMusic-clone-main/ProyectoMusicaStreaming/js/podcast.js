//Javascript que nos permite ir al apartado podcast de la pagina
//Nos permite ir al apartado podcast de la pagina
let urlindex = new URL(window.location.href);
//crearemos una variable para acceder a los parametros de la url,
//en busqueda del parametro user
let username = urlindex.searchParams.get("user");
//creamos otra variable para coger el id de podcast que hace referencia
// al boton de podcast que podemos ver en la nav
let podcastbutton = document.getElementById("podcasts");
//Si le damos click a podcast
podcastbutton.addEventListener("click", function () {
  //nos redirige a podcast con el parametro user de nuestro usuario
  window.location.href = "podcast.html?" + "user=" + username;
});
