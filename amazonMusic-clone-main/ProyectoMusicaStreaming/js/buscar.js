function buscar() {
  //Creamos la constante boton que leera el id que hace referencia al boton de buscar
  //o de una forma mas sencilla le damos al boton para buscar
  const boton = document.getElementById("searchButton");
  //creamos una constante para leer el valor del input de buscar, asi podremos saber lo
  //que ha escrito el usuario
  var buscar = document.getElementById("searchInput").value;
  //si el valor del input es don bosco pone la cancion si no lo es la busca
  if (buscar.toLowerCase() === "don bosco") {
    window.location.href = "https://www.youtube.com/watch?v=ZW3MxZKnJec&t=1s";
  } else {
    //si no es don bosco, si hay espacio los une con un "+" que es el formato que
    //sigue youtube para realizar sus busquedas
    buscar = buscar.split(" ").join("+");
    window.location.href =
      "https://www.youtube.com/results?search_query=" + buscar;
  }
}
