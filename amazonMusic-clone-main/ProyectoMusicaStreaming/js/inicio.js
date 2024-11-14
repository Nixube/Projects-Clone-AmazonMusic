//Javascript que nos permite volver al inico o index
//La url de podcast(una de las unicas paginas que podremos visitar desde inicio)
//es igual a la url de nuestro navegador
let urlpodcast = new URL(window.location.href);
//crearemos una variable para acceder a los parametros de la url,
//en busqueda del parametro user
let username = urlpodcast.searchParams.get("user");
//creamos otra variable para coger el id de inicio que hace referencia al boton de inicio
//que podemos ver en la nav
let homebutton = document.getElementById("inicio");
//Si le damos click a inicio
homebutton.addEventListener("click", function () {
  //nos redirige al inicio con el parametro user de nuestro usuario
  window.location.href = "index.html?" + "user=" + username;
});
