$(function () {
  $("a.drop-bar").on("click", abreMenu);

  function abreMenu() {
    $(".dropdown-menu").slideToggle();
  }
});

//aside desplegable

$(function () {
  $(".drop-bar-aside a").on("click", abreMenu);

  function abreMenu() {
    $(".drop-content li").slideToggle();
  }
});
