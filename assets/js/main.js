document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");

  // Carregar header e footer dinamicamente
  loadPartials();
});

function loadPartials() {
  fetch("/partials/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-container").innerHTML = data;
    });

  fetch("/partials/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-container").innerHTML = data;
    });
}
