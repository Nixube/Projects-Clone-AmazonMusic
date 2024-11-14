//funciones que hacen referencia al login de la pagina
//la funcion mostrar ventana mostrara una ventana la cual es solo visible cuando
//el usuario y la contraseña son validos
function MostrarVentana() {
  document.getElementById("login").style.display = "block";
  document.getElementById("login").style.width = "100%";
  document.getElementById("login").style.height = "100%";
  document.getElementById("login").style.opacity = "1";
}
//funcion donde nos redirigira a inicio si el usuario y la contraseña son validos
function ContinuarLink() {
  //constantes de la funcion
  //cogemos la url de nuestro navegador
  const url = new URL(window.location.href);
  //cogemos los input y los valores del correo/user y la contraseña
  const inputCorreo = document.querySelector('input[name="correo"]');
  const valorCorreo = inputCorreo.value;
  url.searchParams.set("user", valorCorreo);
  const inputPass = document.querySelector('input[name="pass"]');
  const valorPass = inputPass.value;
  url.searchParams.set("password", valorPass);
  window.location.href = url;
  //si la contraseña y el usuario es el siguiente
  if (
    (valorPass === "user" && valorCorreo === "user") ||
    (valorPass === "user" && valorCorreo === "pepe") ||
    (valorPass === "user" && valorCorreo === "ibai")
  ) {
    //Muestra la ventana
    MostrarVentana();
    //Redireccion hacia la pagina
    var intervaloRecarga = setInterval(function () {
      location.replace("index.html" + "?user=" + valorCorreo);
      //numero muy grande
      //sin este numero grande no nos redireccionaria al index y no se mostraria la ventana
    }, 1000000000000000000000000000000000000);
  } else {
    //si no es el usuario correcto recargo la pagina
    window.location.reload();
  }
}
