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

function moveScroller() {
    var move = function() {
      var st = $(window).scrollTop();
      var ot = $("#scroller-anchor").offset().top;
      var s = $(".right-column");
      if(st > ot) {
        s.css({
          position: "fixed",
          top: "0px"
        });
      } else {
        s.css({
          position: "relative",
          top: ""
        });
      }
    };
    $(window).scroll(move);
    move();
}

$(function(){
  moveScroller();
});