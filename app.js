$(document).on("click", "a", function (event) {
  event.preventDefault();
  const href = $(this).attr("href");
  $(".page-transition").addClass("fade-out");
  setTimeout(function () {
    window.location = href;
  }, 500); // Temps de la transition en millisecondes
});
