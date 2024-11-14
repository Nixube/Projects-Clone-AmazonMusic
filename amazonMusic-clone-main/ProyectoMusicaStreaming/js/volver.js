//Este Javascript nos sirve para volver a la pagina de login si nuestro usuario es nulo o
//no es alguno de los que hay en la web
//cogemos la url
let urlIndex = new URL(window.location.href);
//Creamos una variable para buscar el parametro user en la url
let paramIndex = urlIndex.searchParams.get("user");
//si el parametro es alguno
if (
  paramIndex == null ||
  paramIndex == "" ||
  (paramIndex !== "user" && paramIndex !== "pepe" && paramIndex !== "ibai")
) {
  //nos redirige al login
  window.location.href = "login.html";
}
