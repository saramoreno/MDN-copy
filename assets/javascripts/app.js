$(function () {
  $(".drop-bar i").on("click", abreMenu);

  function abreMenu() {
    $(".dropdown-menu").slideToggle();
  }
});

//aside desplegable

$(function () {
  $(".drop-bar-aside").on("click", despliegaMenu);

  function despliegaMenu() {
    $(".drop-content").slideToggle();
  }
});

//fixed aside
