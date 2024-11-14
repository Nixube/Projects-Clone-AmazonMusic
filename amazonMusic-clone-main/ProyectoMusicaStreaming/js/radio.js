let urlindex = new URL(window.location.href);
let username = urlindex.searchParams.get("user");
let radiobutton = document.getElementById("podcasts");

radiobutton.addEventListener("click", function () {
  window.location.href = "podcast.html?" + "user=" + username;
});
