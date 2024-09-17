// Mostrar el loader cuando la página empieza a cargar
document.addEventListener("DOMContentLoaded", function () {
  const loader = document.querySelector(".loader");
  loader.style.display = "flex"; // Asegúrate de que el loader esté visible y centrado
});

// Ocultar el loader 4 segundos después de que la página haya cargado completamente
window.addEventListener("load", function () {
  setTimeout(function () {
    const loader = document.querySelector(".loader");
    loader.style.display = "none"; // Oculta el loader después de 4 segundos
  }, 2000); // 4000 milisegundos = 4 segundos
});
