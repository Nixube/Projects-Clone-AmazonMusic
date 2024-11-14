//establecemos una variable audio como null antes de la funcion
let audio = null;

function musica(nombre) {
  //constantes que utilizaremos en las funciones de musica
  const despausaButton = document.getElementById("despausa");
  const pausaButton = document.getElementById("pausa");
  const volumenSlider = document.getElementById("volumen");
  const duracionSlider = document.getElementById("duracion");
  const siguienteButton = document.getElementById("siguiente");
  const anteriorButton = document.getElementById("anterior");
  //Cada vez que ponemos una cancion el valor del volumen se establece en 50
  volumenSlider.value = "50";
  //y establecemos la duracion del slider en 0, aunque no es necesario
  duracionSlider.value = 0;
  //Este evento sirve para despausar la cancion, si se encuentra un audio lo reproduce
  despausaButton.addEventListener("click", function () {
    if (audio) {
      audio.play();
    }
  });
  //Este evento sirve para pausar la cancion, si se encuentra un audio lo pausa
  pausaButton.addEventListener("click", function () {
    if (audio) {
      audio.pause();
    }
  });
  //si encuentra una cancion con cierto nombre lo reproduce
  //hay 6 canciones principales, son las que empiezan por p
  //hay 11 canciones secundarias, son las que empiezan por c
  //en las canciones principales, he añadido 2 funciones, siguienteCancion y anteriorCancion
  //que sirve para pasar a la siguiente o anterior cancion
  if (nombre == "p1") {
    if (audio) {
      audio.pause();
    }
    audio = new Audio("music/Maestro_Sin_Igual.mp3");
    audio.play();

    //duracion
    sliderDuracion(audio);
    //logica pausa y despausa
    pausaDespausa(audio);
    //ajustar volumen
    ajustarVolumen(audio);
    siguienteCancion(audio, nombre);
    anteriorCancion(audio, nombre);
  }
  if (nombre == "p2") {
    if (audio) {
      audio.pause();
    }
    audio = new Audio("music/Salon_Vacio.mp3");
    audio.play();
    sliderDuracion(audio);
    pausaDespausa(audio);
    ajustarVolumen(audio);
    siguienteCancion(audio, nombre);
    anteriorCancion(audio, nombre);
  }

  if (nombre == "p3") {
    if (audio) {
      audio.pause();
    }
    audio = new Audio("music/Es_tres.mp3");
    audio.play();
    sliderDuracion(audio);
    pausaDespausa(audio);
    ajustarVolumen(audio);
    siguienteCancion(audio, nombre);
    anteriorCancion(audio, nombre);
  }
  if (nombre == "p4") {
    if (audio) {
      audio.pause();
    }
    audio = new Audio("music/El_Profesor.mp3");
    audio.play();
    sliderDuracion(audio);
    pausaDespausa(audio);
    ajustarVolumen(audio);
    siguienteCancion(audio, nombre);
    anteriorCancion(audio, nombre);
  }
  if (nombre == "p5") {
    if (audio) {
      audio.pause();
    }
    audio = new Audio("music/El_pana.mp3");
    audio.play();
    sliderDuracion(audio);
    pausaDespausa(audio);
    ajustarVolumen(audio);
    siguienteCancion(audio, nombre);
    anteriorCancion(audio, nombre);
  }
  if (nombre == "p6") {
    if (audio) {
      audio.pause();
    }
    audio = new Audio("music/BBDD.mp3");
    audio.play();
    sliderDuracion(audio);
    pausaDespausa(audio);
    ajustarVolumen(audio);
    siguienteCancion(audio, nombre);
    anteriorCancion(audio, nombre);
  }
  if (nombre == "c1") {
    if (audio) {
      audio.pause();
    }
    audio = new Audio("music/Maestro_Sin_Igual.mp3");
    audio.play();

    //duracion
    sliderDuracion(audio);
    //logica pausa y despausa
    pausaDespausa(audio);
    //ajustar volumen
    ajustarVolumen(audio);
  }
  if (nombre == "c2") {
    if (audio) {
      audio.pause();
    }
    audio = new Audio("music/Salon_Vacio.mp3");
    audio.play();
    sliderDuracion(audio);
    pausaDespausa(audio);
    ajustarVolumen(audio);
  }

  if (nombre == "c3") {
    if (audio) {
      audio.pause();
    }
    audio = new Audio("music/Es_tres.mp3");
    audio.play();
    sliderDuracion(audio);
    pausaDespausa(audio);
    ajustarVolumen(audio);
  }
  if (nombre == "c4") {
    if (audio) {
      audio.pause();
    }
    audio = new Audio("music/El_Profesor.mp3");
    audio.play();
    sliderDuracion(audio);
    pausaDespausa(audio);
    ajustarVolumen(audio);
  }
  if (nombre == "c5") {
    if (audio) {
      audio.pause();
    }
    audio = new Audio("music/El_pana.mp3");
    audio.play();
    sliderDuracion(audio);
    pausaDespausa(audio);
    ajustarVolumen(audio);
  }
  if (nombre == "c6") {
    if (audio) {
      audio.pause();
    }
    audio = new Audio("music/BBDD.mp3");
    audio.play();
    sliderDuracion(audio);
    pausaDespausa(audio);
    ajustarVolumen(audio);
  }
  if (nombre == "c7") {
    if (audio) {
      audio.pause();
    }
    audio = new Audio("music/Melodia_de_Desamor.mp3");
    audio.play();
    sliderDuracion(audio);
    pausaDespausa(audio);
    ajustarVolumen(audio);
  }
  if (nombre == "c8") {
    if (audio) {
      audio.pause();
    }
    audio = new Audio("music/Salesianos.mp3");
    audio.play();
    sliderDuracion(audio);
    pausaDespausa(audio);
    ajustarVolumen(audio);
  }
  if (nombre == "c9") {
    if (audio) {
      audio.pause();
    }
    audio = new Audio("music/visigordos.mp3");
    audio.play();
    sliderDuracion(audio);
    pausaDespausa(audio);
    ajustarVolumen(audio);
  }
  if (nombre == "c10") {
    if (audio) {
      audio.pause();
    }
    audio = new Audio("music/La_Historia_de_Espana.mp3");
    audio.play();
    sliderDuracion(audio);
    pausaDespausa(audio);
    ajustarVolumen(audio);
  }
  if (nombre == "c11") {
    if (audio) {
      audio.pause();
    }
    audio = new Audio("music/La_Victoria_en_la_Batalla_2.mp3");
    audio.play();
    sliderDuracion(audio);
    pausaDespausa(audio);
    ajustarVolumen(audio);
  }
  //la funcion sliderDuracion actualiza toda la parte de la duracion de la cancion
  function sliderDuracion(audio) {
    //cuando el audio se carga creo las variables para la duracion total del audio
    audio.addEventListener("loadedmetadata", function () {
      const duracion = audio.duration;
      duracionSlider.max = duracion;
      //actualiza el slider con la duracion del audio
      //asocio los minutos y segundos totales del audio a una varible para
      //asignarles en el caso de que lo necesiten un 0 a la izquierda
      var minutosTotal = Math.floor(duracion / 60);
      var segundosTotal = Math.floor(duracion % 60);
      if (minutosTotal < 10) {
        minutosTotal = "0" + minutosTotal;
      }
      if (segundosTotal < 10) {
        segundosTotal = "0" + segundosTotal;
      }
      //Actualizo el id duration-total con el siguiente contenido
      document.getElementById("duration-total").innerHTML =
        minutosTotal + ":" + segundosTotal;
      duracionSlider.value = duracion;
      //Muevo yo el slider y la cancion va a ese minuto y segundo
      //por cada input o movimiento en el slider de la duracion, la cancion avanza hasta ahi
      duracionSlider.addEventListener("input", function () {
        var nuevaDuracion = Math.min(duracion, duracionSlider.value);
        duracionSlider.value = nuevaDuracion;
        audio.currentTime =
          (nuevaDuracion / duracionSlider.max) * audio.duration;
      });
      //mueve el slider segun la duracion de la cancion
      //cada vez que el audio avanza en la duracion, se actualiza los valores actuales
      audio.addEventListener("timeupdate", function () {
        const currentTime = audio.currentTime;
        //asocio los minutos y segundos actuales del audio a una varible para
        //asignarles en el caso de que lo necesiten un 0 a la izquierda
        var minutosActual = Math.floor(currentTime / 60);
        var segundosActual = Math.floor(currentTime % 60);
        //Si los minutos y segundos son menores a 10 les sumo un 0
        if (minutosActual < 10) {
          minutosActual = "0" + minutosActual;
        }
        if (segundosActual < 10) {
          segundosActual = "0" + segundosActual;
        }
        //Actualizo el id duration con el siguiente contenido
        document.getElementById("duration").innerHTML =
          minutosActual + ":" + segundosActual;
        //Actualizo el slider
        const progress = currentTime / audio.duration;
        duracionSlider.value = progress * duracionSlider.max;
      });
    });
  }
  //funcion que hace que aparezca el boton de pausa cuando se inicia una cancion
  function pausaDespausa(audio) {
    despausaButton.style.display = "none";
    pausaButton.style.display = "block";
  }
  //funcion que controla el volumen del audio segun el slider
  function ajustarVolumen(audio) {
    volumenSlider.addEventListener("input", function () {
      var a = volumenSlider.value;
      var a = a / 100;
      audio.volume = a;
    });
  }
  //funcion que sirve solo para las canciones principales
  //podemos ir a la siguiente cancion pulsando el boton de siguiente
  function siguienteCancion(audio, nombre) {
    //cuando le damos click al boton de siguiente
    siguienteButton.addEventListener("click", function () {
      //declaro una variable contenedor que tendra por separado los valores del nombre de
      //la cancion, como por ejemplo [p,2]
      var contenedor = nombre.split("");
      //si la primera parte es una p
      if (contenedor[0] == "p") {
        //si la segunda parte es el 6, se vuelve a la cancion 1
        if (contenedor[1] == 6) {
          musica("p1");
          //si no lo es
        } else {
          //declaro la segunda parte del contenedor como numero y le sumo uno
          contenedor[1] = Number(contenedor[1]) + 1;
          //actualizo la variable contenedor donde juntamos estas dos partes
          var contenedor = contenedor.join("");
          //se reproduce la cancion
          musica(contenedor);
        }
      }
    });
  }
  //funcion que sirve solo para las canciones principales
  //podemos ir a la anterior cancion pulsando el boton de anterior
  function anteriorCancion(audio, nombre) {
    //cuando le damos click al boton de anterior
    anteriorButton.addEventListener("click", function () {
      //declaro una variable contenedor que tendra por separado los valores del nombre de
      //la cancion, como por ejemplo [p,2]
      var contenedor = nombre.split("");
      //si la primera parte es una p
      if (contenedor[0] == "p") {
        //si la segunda parte es el 1, se vuelve a la cancion 6
        if (contenedor[1] == 1) {
          musica("p6");
        } else {
          //declaro la segunda parte del contenedor como numero y le resto uno
          contenedor[1] = Number(contenedor[1]) - 1;
          //actualizo la variable contenedor donde juntamos estas dos partes
          var contenedor = contenedor.join("");
          //se reproduce la cancion
          musica(contenedor);
        }
      }
    });
  }
}
