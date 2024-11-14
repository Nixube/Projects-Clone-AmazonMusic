let urlradio = new URL(window.location.href);
let username = urlradio.searchParams.get("user");
let homebutton = document.getElementById("inicio");

homebutton.addEventListener("click", function () {
  window.location.href = "index.html?" + "user=" + username;
});
